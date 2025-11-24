import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import type { AnimalData } from '../pages/ProductsPage';
import animals from '../pages/ProductsPage';

export default function FilterDropdown({ category }: AnimalData) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter Animals">
      <Dropdown.Item >African Wildlife</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Pets</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Ocean Life</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Farm Animals</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Tropical Birds</Dropdown.Item>
    </DropdownButton>
  );
}