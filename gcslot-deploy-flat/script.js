async function searchGCSlot() {
  const kw = document.getElementById("keyword").value.trim();
  if (!kw) return alert("Masukkan keyword!");
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(kw)}`);
    const data = await res.json();
    const body = document.getElementById("resultBody");
    body.innerHTML = "";
    const list = data.organic_results || [];
    if (list.length === 0) {
      body.innerHTML = "<tr><td colspan=7>Tidak ada hasil</td></tr>";
      return;
    }
    list.forEach(item => {
      const title = item.title||"-",
            link = item.link||"#",
            domain = (link.match(/https?:\/\/([^\/]+)/)||[])[1] || "-",
            laporan = `Situs phishing mirip GCSlot: ${link}`,
            reportUrl = `https://safebrowsing.google.com/safebrowsing/report_phish/?url=${encodeURIComponent(link)}`;
      body.insertAdjacentHTML("beforeend", `
        <tr>
          <td>${title}</td>
          <td><a href="${link}" target="_blank">${link}</a></td>
          <td><a href="${reportUrl}" target="_blank">Laporkan</a></td>
          <td>${domain}</td>
          <td>${laporan}</td>
          <td><input type="checkbox"></td>
          <td>${new Date().toLocaleDateString("id-ID")}</td>
        </tr>`);
    });
  } catch (e) {
    console.error(e);
    alert("Gagal fetch lewat server Vercel.");
  }
}