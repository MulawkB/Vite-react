import { Card } from "react-bootstrap"
import Badge from 'react-bootstrap/Badge';
import '../assets/styles/dish.scss'
import Button from 'react-bootstrap/Button';

function Dish({isnew,image,name,price}) {
    return (  
      <Card>
        {isnew && <Badge bg = "primary" className ="position-absolute end-0 mt-2 me-2">Nouveau</Badge>}
        <Card.Img
        src={image}
        alt={name}
        />
        <Card.Body>
          <Card.Title>
          {name}
          </Card.Title>
          <Card.Text>
          {price}€
          </Card.Text>
          <Button variant="outline-primary" onClick={() => {
          alert('Le plat '+ name +' est maintenant dans votre panier');}}>
          Ajouter au panier</Button>
        </Card.Body>
      </Card>
    );
  }
export default Dish;