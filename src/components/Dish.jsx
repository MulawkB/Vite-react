import { Card } from "react-bootstrap"
import '../assets/styles/dish.scss'

function Dish({image,name,price}) {
    return (  
      <Card>
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