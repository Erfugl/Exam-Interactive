import AnimalsJson from '../json/animals.json';
import Animals from '../components/animals';
import '../scss/productspage.scss';
import FilterDropdown from '../components/filterdropdown';

ProductsPage.route = {
  path: '/products',
  menuLabel: 'Products',
  index: 2
};

export interface AnimalData {
  id: number,
  name: string,
  slug: string,
  description: string,
  wikiUrl: string,
  imageAspectRatio: number,
  category: string;
}

export default function ProductsPage() {

  const animals: AnimalData[] = AnimalsJson.AnimalJson

  return <section>
    <h1>Our Products</h1>
    <FilterDropdown />
    <div id="animals">
      {animals
        .map((props, i) => <Animals key={i} {...props} />)
      }

    </div>
  </section>
}