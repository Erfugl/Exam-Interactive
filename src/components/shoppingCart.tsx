import { Button, Overlay } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import type { CartContent, CartItem, CartTotal } from "./helpers";

export async function addToCart(selectedAnimal: number, selectedFrame: number, selectedMaterial: number, includeMat: boolean) {
  const cart = await (await fetch('/api/add-frame-to-cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      animalId: selectedAnimal,
      frameSpecId: selectedFrame,
      frameMaterialId: selectedMaterial,
      withMat: includeMat,
      quantity: 1
    })
  })).json();
  return cart;
}

export async function getCartContents(): Promise<CartContent[]> {
  return await (await fetch('/api/frame-cart')).json();
}

export function CartButton() {
  const [show, setShow] = useState(false);
  const [cartContents, setCartContents] = useState<CartContent[]>([]);
  const [loading, setLoading] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (show) {
      setLoading(true);
      getCartContents()
        .then(data => setCartContents(data))
        .finally(() => setLoading(false));
    }
  }, [show]);

  return (
    <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        Cart ({cartContents.filter(item => item.itemType === "ITEM").length})
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({ ...props }) => (
          <div {...props} id="cart">
            <h5>Cart Contents:</h5>
            {loading ? (
              <p>Loading...</p>
            ) : cartContents.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                <ul>
                  {cartContents
                    .filter((item): item is CartItem => item.itemType === 'ITEM')
                    .map((item) => (
                      <li key={item.orderLineId}>
                        <p><strong>{item.animalName}</strong></p>
                        <p>Frame: {item.frameSpecName}</p>
                        <p>Material: {item.materialName}</p>
                        <p>Price: {item.totalPrice} kr</p>
                      </li>
                    ))}
                </ul>
                {cartContents
                  .filter((item): item is CartTotal => item.itemType === 'TOTAL')
                  .map((total) => (
                    <div id="total" key="total">
                      <strong>Total: {total.totalPrice} USD</strong>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </Overlay>
    </div>
  );
}