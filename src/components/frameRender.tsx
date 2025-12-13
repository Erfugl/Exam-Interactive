import type { FrameData, MaterialData, AnimalData } from './helpers'
import '../scss/product.scss'

interface FramePreview {
  animal:
  {
    name: string,
    slug: string,
    imageAspectRatio: number;
  },
  frame: FrameData;
  material: MaterialData;
  withMat: boolean;
}

export default function FramePreview({
  animal,
  frame,
  material,
  withMat
}: FramePreview) {
  return (
    <div className="framePreview">
      <div className="outerFrame"
        style={{
          width: `${frame.frameWidthCm}cm`,
          height: `${frame.frameHeightCm}cm`,
          background: material.cssBackground,
          borderStyle: 'solid',
          borderColor: material.color,
        }}>
      </div>
      <div className="innerFrame">
        {withMat ? (
          <div className="mat"
            style={{
              width: `${frame.matOpeningWidthCm}cm`,
              height: `${frame.matOpeningHeightCm}cm`,
              background: '#ffffff',
              border: '2px solid #f0f0f0',
            }}>
            <img className="animalImage"
              src={`/animal-images/${animal.slug}.webp`}
              alt={animal.name}
              style={{
                width: `${frame.imageAreaWidthCm}cm`,
                height: `${frame.imageAreaHeightCm}cm`,
                objectFit: 'cover',
              }} />
          </div>
        ) : <img
          className="animalImage"
          src={`/animal-images/${animal.slug}.webp`}
          alt={animal.name}
          style={{
            width: `${frame.imageAreaWidthCm}cm`,
            height: `${frame.imageAreaHeightCm}cm`,
            objectFit: 'cover',
          }} />}
      </div>
    </div>
  )
}