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

export interface MaterialData {
  id: number,
  name: string,
  material: string,
  color: string,
  style: string,
  slug: string,
  priceMultiplier: number,
  cssBackground: string
}

export interface CartItem {
  itemType: "ITEM",
  orderLineId: number,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
  withMat: number,
  animalName: string,
  animalSlug: string,
  frameSpecName: string,
  materialName: string,
}
export interface CartTotal {
  itemType: "TOTAL",
  orderId: number,
  quantity: number,
  totalPrice: number,
}

export type CartContent = CartItem | CartTotal;

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

export function materialsHandler(materials: MaterialData[]) {
  const materialsOptions = [
    ...materials
      .map(x => x.name)
      .flat()
      .filter((x, i, a) => a.indexOf(x) === i)
  ];
  return materialsOptions
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

