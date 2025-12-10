export interface AnimalData {
  id: number,
  name: string,
  slug: string,
  description: string,
  wikiUrl: string,
  imageAspectRatio: number,
  category: string;
}

export interface FrameData {
  id: number,
  name: string,
  description: string,
  frameWidthCm: number,
  frameHeightCm: number,
  imageAreaWidthCm: number,
  imageAreaHeightCm: number,
  matOpeningWidthCm: number,
  matOpeningHeightCm: number
}

export function categoriesHandler(animals: AnimalData[]) {

  const categories = ['All (' + animals.length + ')',
  ...animals
    .map(x => x.category)
    .flat()
    .map((x, _i, a) => x + ' (' + a.filter(y => x === y).length + ')')
    .filter((x, i, a) => a.indexOf(x) === i)
    .sort()
  ];
  return { animals, categories };
}

export function getCompatibleFrames(
  imageAspectRatio: number,
  frames: FrameData[]
) {
  return frames.filter(frame => {
    const matAspectRatio = frame.matOpeningWidthCm / frame.matOpeningHeightCm;
    const frameAspectRatio = frame.imageAreaWidthCm / frame.imageAreaHeightCm;
    const tolerance = 0.1;
    return (
      Math.abs(matAspectRatio - imageAspectRatio) < tolerance ||
      Math.abs(frameAspectRatio - imageAspectRatio) < tolerance
    );
  })
}

