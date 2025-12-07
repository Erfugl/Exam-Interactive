import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import AnimalsJson from '../json/animals.json';
import Animals from './animals';

export interface AnimalData {
  id: number,
  name: string,
  slug: string,
  description: string,
  wikiUrl: string,
  imageAspectRatio: number,
  category: string;
}

export const animals: AnimalData[] = AnimalsJson.AnimalJson

export const categories = ['All (' + animals.length + ')',
...animals
  .map(x => x.category)
  .flat()
  .map((x, _i, a) => x + ' (' + a.filter(y => x === y).length + ')')
  .filter((x, i, a) => a.indexOf(x) === i)
  .sort()
]

export function AnimalsList() {
  return (
    <div id="animals">
      {
        animals
          .map((props, i) => <Animals key={i} {...props} />)
      }
    </div>
  );
}