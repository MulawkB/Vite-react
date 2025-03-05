import { Col, Container, Row } from "react-bootstrap"
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Dish from './components/Dish'
function App() {
  const dishes = [
    {
      isnew: true,
      image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      name: "Tacos à l’unité",
      price: 3,
      stock: 12
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      name: "Enchiladas",
      price: 12,
      stock: 0
    },
    {
      image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      name: "Mole poblano",
      price: 15,
      stock: 5
    },
  ];
  const filteredDishes = dishes.filter( dish => dish.stock > 0 );
  return (
    <>
      <Header/>

      <main>
        <Container>
          <Row>
            {filteredDishes.map((dish, index) => {
              return (
                <Col md={4} key={index}>
                  <Dish 
                  isnew={dish.isnew}
                  image={dish.image}
                  name={dish.name}
                  price={dish.price}
                  stock={dish.stock}
                  />
                </Col>
            );
          })}
          </Row>
        </Container>
      </main>
      
      <Footer/>
    </>
  )
}

export default App
