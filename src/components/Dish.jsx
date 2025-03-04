import { Card } from "react-bootstrap"
import '../assets/styles/dish.scss'

function Dish({image,name,price}) {
    return (  
      <Card>
        <img 
        src={image}
        alt={name}
        />
        <h3>{name}</h3>
        <p>{price}€</p>
      </Card>
    );
  }

export default Dish;