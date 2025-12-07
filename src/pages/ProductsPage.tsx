import { animals, categories } from '../components/animaldatamgmt';
import '../scss/productspage.scss';
import { useState } from 'react';
import Select from '../components/select';
import { Link } from 'react-router-dom';
import { kMaxLength } from 'buffer';


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
    <div id="animalContainer">
      {animals
        .filter(x => category === 'All' || x.category.includes(category))
        .map(({ id, name, slug, description, wikiUrl, imageAspectRatio, category }) =>
          <Link key={id} to={'/animals/' + slug}>
            <div className="animalCard">
              <img
                className="animalImg"
                src={"/animal-images/" + slug + ".webp"}
                alt={"Image of a " + name + "."} />
              <h3 className="title">{name}</h3>
              <div className="details">
                <div className="aspectContainer">
                  <h6>Aspect Ratio:</h6>
                  <h6 className="aspectRatio">{imageAspectRatio}</h6>
                </div>
                <div className="categoryContainer">
                  <h6>Category:</h6>
                  <h6 className="category">{category}</h6>
                </div>
              </div>
            </div>
          </Link>)}
    </div>
  </section>
}