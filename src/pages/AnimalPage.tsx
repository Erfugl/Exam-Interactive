import type { AnimalData } from '../components/animaldatamgmt'
import { useParams, Link } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'
import { animals } from '../components/animaldatamgmt'

AnimalPage.route = {
  path: '/animals/:slug',
  parent: '/'
}

export default function AnimalPage() {
  const { slug } = useParams();

  const animal = (animals as AnimalData[])
    .find(x => x.slug === slug) as AnimalData;
  if (!animal) {
    return <NotFoundPage />
  }

  const { id, name, description, wikiUrl, imageAspectRatio, category } = animal;
  return <article>
    <h2>{name}</h2>
    <img
      src={'/animal-images/' + slug + '.webp'}
      alt={'An image of a ' + name + '.'}
    />
    <p>{description}</p>
    <a href={wikiUrl} target="_blank">Read More</a>
    <div className="aspectContainer">
      <h6>Aspect Ratio:</h6>
      <h6 className="aspectRatio">{imageAspectRatio}</h6>
    </div>
    <div className="categoryContainer">
      <h6>Category:</h6>
      <h6 className="category">{category}</h6>
    </div>
  </article>
}