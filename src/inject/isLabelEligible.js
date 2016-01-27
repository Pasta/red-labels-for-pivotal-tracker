var isLabelEligible = function isLabelEligible(labelText) {
  if (!!labelText.match(/\b(?:high cost)\b/)) {
      return 'high_cost';
  }
  if (!!labelText.match(/\b(?:medium cost)\b/)) {
      return 'medium_cost';
  }
  if (!!labelText.match(/\b(?:low cost)\b/)) {
      return 'low_cost';
  }
  if (!!labelText.match(/\b(?:build)\b/)) {
      return 'build';
  }
  if (!!labelText.match(/\b(?:blocked|needs)\b/)) {
      return 'blocked';
  }
  return null;
};
