import { animals, categories } from '../components/animaldatamgmt';
import '../scss/productspage.scss';
import { useState } from 'react';
import Select from '../components/select';
import { Link } from 'react-router-dom';


ProductsPage.route = {
  path: '/products',
  menuLabel: 'Products',
  index: 2
};

export default function ProductsPage() {
  const [categoryChoice, setCategoryChoice] =
    useState('All');

  const category = categoryChoice.split(' (')[0];

  return <section>
    <h1>Our Products</h1>
    <Select
      label="Category"
      value={categoryChoice}
      changeHandler={setCategoryChoice}
      options={categories}
    />
    {animals
      .filter(x => category === 'All' || x.category.includes(category))
      .map(({ id, name, slug, description, wikiUrl, imageAspectRatio, category }) =>
        <Link key={id} to={'/animals/' + slug}>
          <img
            src={"/animal-images/" + slug + ".webp"}
            alt={"Image of a " + name + "."} />
          <h3>{name}</h3>
          <p>{description}</p>
          <a href={wikiUrl}>Read More</a>
          <h6>{imageAspectRatio}</h6>
          <h6>{category}</h6>
        </Link>)}
  </section>
}