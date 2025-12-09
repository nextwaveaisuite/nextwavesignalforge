export function score(text) {
  const normalized = text.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
  let score = 0;

  if (normalized.includes('automate')) score += 30;
  if (normalized.includes('money')) score += 25;
  if (normalized.includes('niche')) score += 20;

  let verdict = 'WATCH';
  if (score >= 60) verdict = 'BUILD';
  if (score < 20) verdict = 'KILL';

  return { normalized, score, verdict };
}