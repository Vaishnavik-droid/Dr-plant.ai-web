function ensureSupabaseConfigured() {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    throw new Error('Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.')
  }
}

async function getSupabase() {
  ensureSupabaseConfigured()
  const { supabase } = await import('./supabaseClient')
  return supabase
}

function profileFromUser(user) {
  return {
    ...user.user_metadata,
    id: user.id,
    email: user.email,
    role: user.user_metadata?.role || 'shop_owner'
  }
}

function saveProfile(profile) {
  localStorage.setItem('drPlantProfile', JSON.stringify(profile))
  localStorage.removeItem('drPlantAuthDemo')
  localStorage.removeItem('drPlantRegisterDemo')
  localStorage.removeItem('drPlantSellerProfile')
}

export function getCurrentProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem('drPlantProfile') || 'null')
    localStorage.removeItem('drPlantAuthDemo')
    localStorage.removeItem('drPlantRegisterDemo')
    localStorage.removeItem('drPlantSellerProfile')

    if (profile && (Object.hasOwn(profile, 'password') || Object.hasOwn(profile, 'confirmPassword'))) {
      delete profile.password
      delete profile.confirmPassword
      localStorage.setItem('drPlantProfile', JSON.stringify(profile))
    }

    return profile
  } catch {
    return null
  }
}

export async function signIn(email, password) {
  const supabase = await getSupabase()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  if (!data.user) throw new Error('Supabase did not return a user for this login.')

  const profile = profileFromUser(data.user)
  saveProfile(profile)
  return profile
}

export async function signUp(email, password, profileData) {
  const supabase = await getSupabase()
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: profileData }
  })
  if (error) throw error

  const profile = data.user ? profileFromUser(data.user) : null
  if (data.session && profile) saveProfile(profile)

  return { profile, hasSession: Boolean(data.session) }
}

export async function sendPasswordReset(email) {
  const supabase = await getSupabase()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/forgot-password`
  })
  if (error) throw error
}

export async function updatePassword(password) {
  const supabase = await getSupabase()
  const { error } = await supabase.auth.updateUser({ password })
  if (error) throw error
}

export async function signOut() {
  try {
    const supabase = await getSupabase()
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } finally {
    localStorage.removeItem('drPlantProfile')
    localStorage.removeItem('drPlantAuthDemo')
    localStorage.removeItem('drPlantRegisterDemo')
    localStorage.removeItem('drPlantSellerProfile')
  }
}
