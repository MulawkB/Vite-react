import { Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../assets/styles/dish.scss";
import Button from "react-bootstrap/Button";
import useCart from "../hooks/useCart.js";

function Dish({ isnew, image, name, price }) {
  const { addToCart, removeFromCart } = useCart();
  return (
    <Card>
      {isnew && (
        <Badge bg="primary" className="position-absolute end-0 mt-2 me-2">
          Nouveau
        </Badge>
      )}
      <Card.Img src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
        <Button variant="outline-primary" onClick={addToCart}>
          Ajouter au panier
        </Button>
        <Button variant="outline-danger ms-2" onClick={removeFromCart}>
          Retirer du panier
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Dish;
