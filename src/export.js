function exportCSV(metrics) {
  const generatedAt =
    new Date().toISOString();

  const rows = [
    `generated_at,${generatedAt}`,
    "page,visits",
    ...metrics.map(
      row => `${row.page},${row.visits}`
    )
  ];

  return "";
}

module.exports = exportCSV;
