import { categoriesHandler } from '../components/helpers';
import type { AnimalData } from '../components/helpers';
import '../scss/productspage.scss';
import { useState } from 'react';
import Select from '../components/select';
import { Link, useLoaderData } from 'react-router-dom';
import { ApiLoader } from '../components/apiLoader';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { currentLang } from '../localizesroutes';
import { useNavigate } from 'react-router-dom';



ProductsPage.route = {
  path: '/products',
  menuLabel: 'Products',
  index: 2,
  loader: ApiLoader
};

export default function ProductsPage() {

  const loaderData = useLoaderData() as { animals: AnimalData[] }

  let {
    animals,
    categories
  } = categoriesHandler(loaderData.animals);

  const [categoryChoice, setCategoryChoice] =
    useState('All');
  const navigate = useNavigate();

  const category = categoryChoice.split(' (')[0];

  const filteredAnimals = animals.filter(x => category === 'All' || x.category.includes(category));

  return <section>
    <Container>
      <h1>Our Products</h1>
      <Select
        label="Category"
        value={categoryChoice}
        changeHandler={setCategoryChoice}
        options={categories}
      />
      <Row className="g-4 gy-3" >
        {filteredAnimals.map(({ id, name, slug, description, wikiUrl, imageAspectRatio, category }) =>
          <Col
            key={id}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="d-flex"
          >
            <Link to={`/${currentLang()}/animals/${slug}`} className="w-100 text-decoration-none">
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
            </Link>
          </Col>
        )}
      </Row>
    </Container>
  </section>
}