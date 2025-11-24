export default function SpeciesPhoto({ name }: { name: string; }) {
  return <img
    src={'/animal-images/' + name.toLowerCase() + '.webp'}
    alt={'A photo of ' + name} />
}