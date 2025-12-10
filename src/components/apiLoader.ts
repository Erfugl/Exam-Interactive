export async function AnimalLoader({ params }: any) {
  let url = '/api/en/animals'
  if (params.slug) { url += '?slug=' + params.slug; }
  return {
    animals: await (await fetch(url)).json()
  }
}

export async function FrameLoader() {
  let url = '/api/en/frameSpecifications'
  return {
    frames: await (await fetch(url)).json()
  }
}

export async function ApiLoader({ params }: any) {
  const [animals, frames] = await Promise.all([
    AnimalLoader({ params }),
    FrameLoader()
  ]);
  return { animals: animals.animals, frames: frames.frames };
}