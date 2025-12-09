export default async function AnimalLoader({ params }: any) {
  let url = '/api/en/animals'
  if (params.slug) { url += '?slug' + params.slug; }
  return {
    animals: await (await fetch(url)).json()
  }
}
