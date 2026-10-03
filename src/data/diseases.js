export const diseases = [
  {
    id: 'early-blight',
    name: 'Early Blight',
    crop: 'Tomato',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    summary: 'Dark concentric leaf spots often begin on older leaves and spread quickly in warm wet conditions.',
    symptoms: ['Brown or black leaf spots with target-like rings', 'Yellowing around infected tissue', 'Leaf drop under repeated stress'],
    causes: ['High humidity', 'Poor air circulation', 'Leaf wetness from overhead watering'],
    treatment: 'Remove infected leaves, improve spacing, and use registered crop protection products according to label guidance.',
    prevention: ['Water at the base of the plant', 'Prune lower foliage for better airflow', 'Rotate crops and maintain field sanitation'],
    managementTips: ['Use resistant varieties where available', 'Scout weekly during humid periods', 'Avoid overcrowding']
  },
  {
    id: 'late-blight',
    name: 'Late Blight',
    crop: 'Potato',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=80',
    summary: 'Rapidly spreading disease that can devastate foliage and tubers in cool wet weather.',
    symptoms: ['Water-soaked dark lesions', 'White fungal growth under humid conditions', 'Sudden wilting and collapse'],
    causes: ['Cool damp weather', 'Dense canopies', 'Infected seed or volunteer plants'],
    treatment: 'Act quickly to reduce spread and consult local extension guidance for approved management practices.',
    prevention: ['Avoid infected planting material', 'Improve drainage and airflow', 'Remove volunteer plants'],
    managementTips: ['Schedule irrigation carefully', 'Use resistant varieties', 'Inspect fields often']
  },
  {
    id: 'rice-blast',
    name: 'Rice Blast',
    crop: 'Rice',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1563553300970-b1b56e1d49d9?auto=format&fit=crop&w=900&q=80',
    summary: 'One of the most common rice diseases, severely affecting leaf and neck tissues.',
    symptoms: ['Elliptical leaf lesions with dark margins', 'Spindle-shaped lesions', 'Panicle neck breakage'],
    causes: ['High humidity', 'Nitrogen excess', 'Stress during growth'],
    treatment: 'Balance nutrient management and apply appropriate crop protection only when needed and recommended.',
    prevention: ['Use resistant cultivars', 'Avoid excessive nitrogen', 'Keep fields clean and leveled'],
    managementTips: ['Monitor seedling stages', 'Keep water managed carefully', 'Rotate varieties if needed']
  },
  {
    id: 'rust',
    name: 'Rust',
    crop: 'Wheat',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa52ac9fc4b6?auto=format&fit=crop&w=900&q=80',
    summary: 'Fungal infection causing orange or reddish pustules on leaves and stems.',
    symptoms: ['Rust-colored powder on leaves', 'Yellowing and reduced vigor', 'Lower grain fill'],
    causes: ['Moisture and cool temperatures', 'Dense stand', 'Susceptible varieties'],
    treatment: 'Use resistant varieties and follow local agronomic advice before pesticide applications.',
    prevention: ['Avoid excess nitrogen', 'Choose resistant cultivars', 'Remove volunteer wheat'],
    managementTips: ['Scout before weather events', 'Improve canopy airflow', 'Monitor spread early']
  },
  {
    id: 'anthracnose',
    name: 'Anthracnose',
    crop: 'Chilli',
    type: 'Fungal',
    plantPart: 'Fruit',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    summary: 'Fruit and leaf spotting disease common during warm wet periods.',
    symptoms: ['Sunken lesions on fruit', 'Dark bruising with ring patterns', 'Leaf drop and fruit rot'],
    causes: ['Leaf wetness', 'Warm temperatures', 'Infected crop residue'],
    treatment: 'Remove infected fruit and leaves, improve airflow, and follow local regulations for approved treatments.',
    prevention: ['Avoid overhead irrigation', 'Use clean seed', 'Remove crop debris'],
    managementTips: ['Monitor fruit clusters', 'Inspect after rain events', 'Keep field sanitation strong']
  },
  {
    id: 'verticillium-wilt',
    name: 'Verticillium Wilt',
    crop: 'Cotton',
    type: 'Fungal',
    plantPart: 'Stem',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    summary: 'Wilt disease causing yellowing and internal vascular discoloration.',
    symptoms: ['Leaf yellowing one side of the plant', 'Wilting during warm periods', 'Stunted plant growth'],
    causes: ['Soil-borne fungus', 'Stress conditions', 'Continuous cotton cropping'],
    treatment: 'Manage irrigation and field stress; avoid replanting susceptible crops in infested soil without rotation.',
    prevention: ['Use healthy seed', 'Rotate fields', 'Maintain balanced nutrition'],
    managementTips: ['Avoid water stress', 'Monitor root health', 'Remove diseased plants']
  },
  {
    id: 'soybean-rust',
    name: 'Soybean Rust',
    crop: 'Soybean',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf fungal disease that reduces photosynthesis and pod fill in warm humid fields.',
    symptoms: ['Small tan or brown lesions', 'Leaf chlorosis', 'Premature defoliation'],
    causes: ['High humidity', 'Warm conditions', 'Infected host plants'],
    treatment: 'Use good field monitoring and integrated disease management with locally approved interventions.',
    prevention: ['Improve spacing', 'Use resistant cultivars', 'Avoid unnecessary late irrigation'],
    managementTips: ['Scout before heading', 'Inspect lower foliage', 'Keep records of outbreaks']
  },
  {
    id: 'leaf-blight',
    name: 'Leaf Blight',
    crop: 'Maize',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa52ac9fc4b6?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf spotting disease that builds through rainy periods and weakens the plant canopy.',
    symptoms: ['Long, narrow lesions on leaves', 'Chlorotic margins', 'Reduced photosynthetic area'],
    causes: ['Humid conditions', 'Residue left on field', 'Susceptible hybrids'],
    treatment: 'Widely recommended management combines resistant hybrids, clean residue handling, and advisable fungicidal use only when justified.',
    prevention: ['Use tolerant hybrids', 'Rotate crops', 'Incorporate residues carefully'],
    managementTips: ['Monitor after rain', 'Avoid lodging risk', 'Balance fertility']
  },
  {
    id: 'mango-anthracnose',
    name: 'Mango Anthracnose',
    crop: 'Mango',
    type: 'Fungal',
    plantPart: 'Fruit',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80',
    summary: 'Fruit and blossom disease causing dark lesions and fruit rot in humid weather.',
    symptoms: ['Black irregular fruit spots', 'Blossom blight', 'Post-harvest decay'],
    causes: ['Humidity', 'Rain splash', 'Infected blossoms'],
    treatment: 'Prune and manage canopy moisture; use approved control measures when disease pressure is high.',
    prevention: ['Sanitize pruning tools', 'Reduce dense foliage', 'Avoid irrigation over the canopy'],
    managementTips: ['Monitor flowering flushes', 'Inspect fruit early', 'Harvest promptly']
  },
  {
    id: 'downy-mildew',
    name: 'Downy Mildew',
    crop: 'Grapes',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf and cluster disease favored by cool, wet conditions and dense canopies.',
    symptoms: ['Yellow patches on upper leaf surfaces', 'Downy growth beneath leaves', 'Berry distortion'],
    causes: ['Moisture', 'Cool nights', 'Dense vine canopy'],
    treatment: 'Improve canopy ventilation and use field-appropriate disease management based on local recommendations.',
    prevention: ['Remove infected tissue', 'Avoid overhead irrigation', 'Plant resilient varieties'],
    managementTips: ['Monitor after rain', 'Prune for airflow', 'Check cluster health']
  },
  {
    id: 'bacterial-spot',
    name: 'Bacterial Spot',
    crop: 'Tomato',
    type: 'Bacterial',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1576669801531-6d4c3b9a2d09?auto=format&fit=crop&w=900&q=80',
    summary: 'Bacterial leaf and fruit spotting often spreads through splash and contaminated tools.',
    symptoms: ['Small dark lesions', 'Fruit blemishes', 'Leaf curl or yellowing'],
    causes: ['Rain splash', 'Wounds', 'Contaminated equipment'],
    treatment: 'Keep foliage dry, sanitize tools, and use appropriate sanitation and crop protection based on local guidance.',
    prevention: ['Water at the base', 'Rotate crops', 'Avoid working plants when wet'],
    managementTips: ['Discard severely infected plants', 'Inspect weekly', 'Keep records of outbreaks']
  },
  {
    id: 'leaf-curl',
    name: 'Leaf Curl',
    crop: 'Chilli',
    type: 'Viral',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    summary: 'Virus-induced distortion causing curled and twisted leaves with reduced vigor.',
    symptoms: ['Leaf curling', 'Stunted growth', 'Reduced fruit size'],
    causes: ['Insect vectors', 'Infected planting material', 'Weed hosts'],
    treatment: 'Control insect vectors and remove infected plants to prevent spread.',
    prevention: ['Use clean seed', 'Manage weeds', 'Scout for vector activity'],
    managementTips: ['Remove volunteer hosts', 'Use resistant varieties', 'Inspect young plants carefully']
  },
  {
    id: 'sheath-blight',
    name: 'Sheath Blight',
    crop: 'Rice',
    type: 'Fungal',
    plantPart: 'Stem',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    summary: 'Disease affecting leaf sheaths and lower canopy under dense, humid conditions.',
    symptoms: ['Water-soaked lesions on sheaths', 'Upper leaves drying', 'Poor tillering'],
    causes: ['High humidity', 'Excess nitrogen', 'Dense stands'],
    treatment: 'Adjust nitrogen and maintain field structure to reduce disease pressure with locally supported interventions.',
    prevention: ['Balance nutrition', 'Improve spacing', 'Avoid prolonged flooding'],
    managementTips: ['Scout lower canopy', 'Manage water timing', 'Rotate varieties if needed']
  },
  {
    id: 'brown-spot',
    name: 'Brown Spot',
    crop: 'Rice',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf spot disease that can lower grain quality and yield if stress is high.',
    symptoms: ['Brown spots with yellow halos', 'Reduced plant vigor', 'Poor grain filling'],
    causes: ['Water stress', 'Nutrient imbalance', 'High humidity'],
    treatment: 'Manage irrigation and nutrition while monitoring disease spread in vulnerable fields.',
    prevention: ['Keep moisture steady', 'Balanced nutrient plan', 'Use resistant varieties'],
    managementTips: ['Inspect leaves regularly', 'Reduce plant stress', 'Avoid severe nitrogen spikes']
  },
  {
    id: 'leaf-spot',
    name: 'Leaf Spot',
    crop: 'Tomato',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    summary: 'Circular lesions on leaves can rapidly increase under warm, wet, crowded conditions.',
    symptoms: ['Leaf lesions with yellowing', 'Leaf senescence', 'Reduced fruiting'],
    causes: ['High humidity', 'Crowding', 'Overhead irrigation'],
    treatment: 'Improved spacing, leaf sanitation, and targeted crop protection if local recommendations support it.',
    prevention: ['Mulch and prune', 'Avoid splashing water', 'Maintain active disease scouting'],
    managementTips: ['Remove lower infected leaves', 'Check after rain', 'Keep crop balanced']
  },
  {
    id: 'scab',
    name: 'Scab',
    crop: 'Potato',
    type: 'Fungal',
    plantPart: 'Tuber',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80',
    summary: 'Tuber surface lesions impact marketability and can carry forward in seed stock.',
    symptoms: ['Patchy corky lesions on tubers', 'Cracked skin', 'Reduced tuber quality'],
    causes: ['Cool wet soil', 'Seed contamination', 'Acidic soils'],
    treatment: 'Use clean seed and avoid planting in infested soils without risk-reduction practices.',
    prevention: ['Rotate fields', 'Maintain soil pH', 'Use disease-free seed'],
    managementTips: ['Inspect seed lots', 'Avoid overwatering', 'Keep soil structure sound']
  },
  {
    id: 'septoria',
    name: 'Septoria',
    crop: 'Wheat',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    summary: 'Leaf spotting disease that becomes severe when humidity persists through the season.',
    symptoms: ['Tiny dark spots with lighter centers', 'Leaf yellowing', 'Reduced canopy efficiency'],
    causes: ['Moisture', 'Dense canopy', 'Susceptible varieties'],
    treatment: 'Select resistant varieties and maintain field conditions that limit prolonged canopy wetness.',
    prevention: ['Avoid dense planting', 'Use certified seed', 'Monitor early'],
    managementTips: ['Scout after rain', 'Manage residue', 'Balance nutrition']
  },
  {
    id: 'powdery-mildew',
    name: 'Powdery Mildew',
    crop: 'Grapes',
    type: 'Fungal',
    plantPart: 'Leaf',
    severity: 'Moderate',
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=80',
    summary: 'White fungal coating on vines reduces photosynthesis and fruit quality.',
    symptoms: ['White powdery patches on leaves', 'Curling foliage', 'Reduced fruit set'],
    causes: ['Warm dry days', 'High humidity at night', 'Dense growth'],
    treatment: 'Improve airflow, reduce leaf density, and use appropriate commercial practices based on local advice.',
    prevention: ['Prune to improve ventilation', 'Avoid excessive nitrogen', 'Monitor early'],
    managementTips: ['Inspect leaf surfaces', 'Manage humidity', 'Keep crop clean']
  },
  {
    id: 'bacterial-blight',
    name: 'Bacterial Blight',
    crop: 'Cotton',
    type: 'Bacterial',
    plantPart: 'Leaf',
    severity: 'High',
    image:
      'https://images.unsplash.com/photo-1569161092440-a2d9f5d3b28b?auto=format&fit=crop&w=900&q=80',
    summary: 'Disease leads to water-soaked lesions and can affect leaves, stem, and bolls.',
    symptoms: ['Angular lesions', 'Leaf drop', 'Boll damage'],
    causes: ['Rain and wind', 'Wounded tissue', 'Contaminated residue'],
    treatment: 'Field sanitation and crop protection should be selected based on local agronomic recommendations and product labels.',
    prevention: ['Use clean seed', 'Avoid irrigation splashing', 'Rotate fields'],
    managementTips: ['Scout often', 'Remove infected debris', 'Avoid mechanical injury']
  }
]

export const diseaseFilterOptions = ['All', 'Fungal', 'Bacterial', 'Viral', 'Pest-related', 'Nutrient-related']
