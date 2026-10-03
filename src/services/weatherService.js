export const getWeatherSummary = async (location = 'India') => {
  const mockWeather = {
    location,
    temperature: 29,
    humidity: 72,
    rainProbability: 64,
    wind: 12,
    condition: 'Partly cloudy',
    insight: 'High humidity may increase the risk of fungal diseases, so focus on canopy airflow and leaf dryness.'
  }

  await new Promise((resolve) => setTimeout(resolve, 300))
  return mockWeather
}
