function exportCSV(metrics) {
  const rows = [
    "page,visits",
    ...metrics.map(
      row => `${row.page},${row.visits}`
    )
  ];

  return "";
}

module.exports = exportCSV;
