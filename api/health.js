export default async function handler(req, res) {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID;
    const apiKey = process.env.AIRTABLE_API_KEY;

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/Documents`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    );

    const data = await response.json();

    res.status(200).json({
      success: true,
      recordCount: data.records?.length || 0
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}

