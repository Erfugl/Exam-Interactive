import type { AnimalData } from './animaldatamgmt';
import SpeciesPhoto from './SpeciesPhoto';

export default function Animals({ name, description }: AnimalData) {
  return <section>
    <SpeciesPhoto name={name} />
  </section>
}