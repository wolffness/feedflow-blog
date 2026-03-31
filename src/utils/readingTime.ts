export function getReadingTime(body: string): string {
  const words = body.split(/\s+/).filter(w => w.length > 0).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}
