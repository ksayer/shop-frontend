export async function getCMSContent(path: string) {
  const res = await fetch(path, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
