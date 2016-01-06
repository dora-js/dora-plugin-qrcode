export function getHref(query, localIP) {
  const href = query.href || `http://${localIP}`;

  return href;
}
