import React from "react";
import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  currency: string;
  final_price: number;
};

export function StoreItem({
  id,
  image,
  name,
  price,
  currency,
  final_price,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removefromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card
      className="text-center g-1 h-90"
      style={{ width: "16rem", margin: "25px" }}>
      <Card.Body className="d-flex flex-column align-item-baseline">
        <Card.Img
          variant="top"
          height="250px"
          style={{ objectFit: "cover" }}
          src={image}
          className="mb-3"></Card.Img>

        <Card.Title className="ms-2">{name}</Card.Title>
        <Card.Text
          className="text-success fs-2"
          style={{ marginTop: "auto" }}>{`${currency} ${price}`}</Card.Text>
        <Card.Text
          style={{
            textDecoration: "line-through",
          }}>{`${currency} ${final_price}`}</Card.Text>
      </Card.Body>

      <div className="mt-auto">
        {quantity === 0 ? (
          <Card.Footer>
            <Button
              className="btn btn-muted"
              variant="success"
              onClick={() => increaseCartQuantity(id)}
              style={{ borderRadius: "25px" }}>
              Add To Cart
            </Button>
          </Card.Footer>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ height: "100px", gap: ".5rem" }}>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> In Cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              onClick={() => removefromCart(id)}
              className="mt-1"
              variant="danger"
              size="sm">
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}
