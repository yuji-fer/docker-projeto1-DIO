export const getNullOrJSON = (response) =>
  (response.headers.get("content-length") ?? 0) == 0 ? null : response.json();
