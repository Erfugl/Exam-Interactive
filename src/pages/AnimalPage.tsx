import type { AnimalData, FrameData, MaterialData } from '../components/helpers'
import { useParams, useLoaderData } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'
import { ApiLoader } from '../components/apiLoader'
import { getCompatibleFrames, materialsHandler } from '../components/helpers'
import { useState } from 'react'
import Select from '../components/select'
import BuyButton from '../components/buyButton'
import '../scss/product.scss'

AnimalPage.route = {
  path: '/animals/:slug',
  parent: '/',
  loader: ApiLoader
}

export default function AnimalPage() {

  const { slug } = useParams();

  const loaderData = useLoaderData() as { animals: AnimalData[], frames: FrameData[], materials: MaterialData[] };

  const animal = loaderData.animals
    .find(x => x.slug === slug);

  if (!animal) {
    return <NotFoundPage />
  }

  const frames = loaderData.frames
  const fFrames = getCompatibleFrames(animal.imageAspectRatio, frames)
  const materials = materialsHandler(loaderData.materials);

  const [material, setMaterial] =
    useState(materials[0] || 'All');

  const selectedMaterial = loaderData.materials.find(m => m.name === material);

  // Add a fallback to ensure selectedMaterial is never undefined
  const materialId = selectedMaterial?.id ?? loaderData.materials[0]?.id;

  return <article>
    <h2>{animal.name}</h2>
    <img
      src={'/animal-images/' + slug + '.webp'}
      alt={'An image of a ' + animal.name + '.'}
    />
    <section className="products">
      <Select
        label="Material: "
        value={material}
        changeHandler={setMaterial}
        options={materials}
      />
      <h3>Frame Options:</h3>
      <div className="frameOptions">
        {fFrames.map(frame => (
          <div className="frame" key={frame.id}>
            <h4>{frame.name}</h4>
            <p>{frame.description}</p>
            <p>Frame Size {frame.frameWidthCm}cm x {frame.frameHeightCm}cm</p>
            <p>Mat Opening: {frame.matOpeningWidthCm}cm x {frame.matOpeningHeightCm}cm</p>
            <BuyButton
              animal={animal.id}
              frame={frame.id}
              material={materialId}
              withMat={false}
            />
          </div>
        ))}
      </div>
    </section>
    <p>{animal.description}</p>
    <a href={animal.wikiUrl} target="_blank">Read More</a>
    <div className="aspectContainer">
      <h6>Aspect Ratio:</h6>
      <h6 className="aspectRatio">{animal.imageAspectRatio}</h6>
    </div>
    <div className="categoryContainer">
      <h6>Category:</h6>
      <h6 className="category">{animal.category}</h6>
    </div>

  </article>
}