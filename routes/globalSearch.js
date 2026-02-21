import { Router } from 'express'

const router = Router()

const getAddressPart = (address = '', index = 0) => {
  const parts = address.split(',').map((part) => part.trim()).filter(Boolean)
  return parts[index] || ''
}

router.get('/global-search', async (req, res) => {
  const query = (req.query.q || '').toString().trim()

  if (!query) {
    return res.json({ success: true, data: [] })
  }

  if (!process.env.GOOGLE_API_KEY) {
    return res.json({ success: true, data: [] })
  }

  try {
    const googleParams = new URLSearchParams({
      query: `${query} rehabilitation center India`,
      key: process.env.GOOGLE_API_KEY
    })

    const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?${googleParams.toString()}`)

    if (!response.ok) {
      return res.json({ success: true, data: [] })
    }

    const payload = await response.json()
    const formattedResults = (payload.results || []).map((place) => {
      const address = place.formatted_address || ''
      const city = getAddressPart(address, 0)
      const state = getAddressPart(address, 1)

      return {
        id: `google-${place.place_id}`,
        name: place.name || 'Rehabilitation Center',
        city: city || 'N/A',
        state: state || 'N/A',
        description: place.formatted_address || 'Listed by Google Places',
        image: null,
        isExternal: true,
        isVerified: true,
        isPremium: false
      }
    })

    return res.json({ success: true, data: formattedResults })
  } catch (error) {
    return res.json({ success: true, data: [] })
  }
})

export default router
