var isLabelEligible = function isLabelEligible(labelText) {
  if (labelText === 'high cost, ') {
    return 'high_cost';
  }
  if (labelText === 'medium cost, ') {
    return 'medium_cost';
  }
  if (labelText === 'low cost, ') {
    return 'low_cost';
  }
  if (!!labelText.match(/\b(?:blocked|needs)\b/)) {
      return 'blocked';
  }
  return null;
};
