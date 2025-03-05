import { Card } from "react-bootstrap"
import Badge from 'react-bootstrap/Badge';
import '../assets/styles/dish.scss'

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
        </Card.Body>
      </Card>
    );
  }
export default Dish;