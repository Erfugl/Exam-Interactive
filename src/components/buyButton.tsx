import Button from 'react-bootstrap/Button';
import { addToCart } from './shoppingCart';

export interface BuyButtonProps {
  animal: number,
  frame: number,
  material: number,
  withMat: boolean;
}

export default function BuyButton({ animal, frame, material, withMat }: BuyButtonProps) {
  return <Button onClick={e => {
    e.stopPropagation()
    addToCart(animal, frame, material, withMat);
  }
  }>Buy</Button>
};
