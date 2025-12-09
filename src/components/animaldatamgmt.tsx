import AnimalsJson from '../json/animals.json';
import Animals from './animals';
import { useLoaderData } from 'react-router-dom';

export interface AnimalData {
  id: number,
  name: string,
  slug: string,
  description: string,
  wikiUrl: string,
  imageAspectRatio: number,
  category: string;
}

const response = await fetch('/api/en/animals')

export function categoriesHandler() {
  const animals = animalsJson as AnimalData[]

  const categories = ['All (' + animals.length + ')',
  ...animals
    .map(x => x.category)
    .flat()
    .map((x, _i, a) => x + ' (' + a.filter(y => x === y).length + ')')
    .filter((x, i, a) => a.indexOf(x) === i)
    .sort()
  ]
}

export 