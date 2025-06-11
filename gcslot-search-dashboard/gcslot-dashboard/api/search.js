export default async function handler(req, res) {
  const { q } = req.query;
  const apiKey = "a5bc5872c80183c79fcae19f583a7598eb9b3f7dfe0e300c4401e5436d6dff84";
  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(q)}&hl=id&gl=id&api_key=${apiKey}`;
  try {
    const fetchRes = await fetch(url);
    const data = await fetchRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal fetch dari SerpAPI" });
  }
}