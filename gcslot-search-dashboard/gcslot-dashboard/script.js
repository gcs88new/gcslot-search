// script.js versi data dummy untuk GCSlot Search

const dummyData = [
  {
    title: "GCSlot Resmi",
    link: "https://gcslot.id",
    reportLink: "https://safebrowsing.google.com/safebrowsing/report_badware/",
    domain: "gcslot.id",
    status: "Aktif"
  },
  {
    title: "GCSlot Palsu",
    link: "http://fakegcslot.com",
    reportLink: "https://safebrowsing.google.com/safebrowsing/report_badware/",
    domain: "fakegcslot.com",
    status: "Blokir"
  }
];

document.querySelector("button").addEventListener("click", () => {
  const keyword = document.querySelector("input").value.toLowerCase();
  const results = dummyData.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.link.toLowerCase().includes(keyword) ||
    item.domain.toLowerCase().includes(keyword)
  );

  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = "";

  if (results.length > 0) {
    results.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.title}</td>
        <td><a href="${item.link}" target="_blank">${item.link}</a></td>
        <td><a href="${item.reportLink}" target="_blank">Laporkan</a></td>
        <td>${item.domain}</td>
        <td>${item.status}</td>
        <td><input type="checkbox" ${item.status === "Aktif" ? "checked" : ""} disabled /></td>
        <td><button>🗑️</button></td>
      `;
      tbody.appendChild(row);
    });
  } else {
    tbody.innerHTML = `<tr><td colspan="7">Tidak ada hasil</td></tr>`;
  }
});
