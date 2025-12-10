import type { AnimalData, FrameData } from '../components/helpers'
import { useParams, Link, useLoaderData } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'
import { ApiLoader } from '../components/apiLoader'
import { getCompatibleFrames } from '../components/helpers'

AnimalPage.route = {
  path: '/animals/:slug',
  parent: '/',
  loader: ApiLoader
}

export default function AnimalPage() {

  const { slug } = useParams();

  const loaderData = useLoaderData() as { animals: AnimalData[], frames: FrameData[] };

  const animal = loaderData.animals
    .find(x => x.slug === slug);

  if (!animal) {
    return <NotFoundPage />
  }

  const frames = loaderData.frames
  const fFrames = getCompatibleFrames(animal.imageAspectRatio, frames)

  return <article>
    <h2>{animal.name}</h2>
    <img
      src={'/animal-images/' + slug + '.webp'}
      alt={'An image of a ' + animal.name + '.'}
    />
    <div>
      <h3>Frame Options:</h3>
      {fFrames.map(frame => (
        <h4>{frame.name}</h4>
      ))}
    </div>
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