

export async function AnimalLoader({ params }: any) {
  let url = `/api/${params.lang}/animals`
  if (params.slug) { url += '?slug=' + params.slug; }
  return {
    animals: await (await fetch(url)).json()
  }
}

export async function FrameLoader({ params }: any) {
  let url = `/api/${params.lang}/frameSpecifications`
  return {
    frames: await (await fetch(url)).json()
  }
}

export async function MaterialLoader({ params }: any) {
  let url = `/api/${params.lang}/frameMaterials`
  return {
    materials: await (await fetch(url)).json()
  }
}

export async function ApiLoader({ params }: any) {
  const [animals, frames, materials] = await Promise.all([
    AnimalLoader({ params }),
    FrameLoader({ params }),
    MaterialLoader({ params })
  ]);
  return { animals: animals.animals, frames: frames.frames, materials: materials.materials };
}