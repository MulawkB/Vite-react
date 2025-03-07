import { Col, Container, Row, Button } from "react-bootstrap";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dish from "./components/Dish";
import { useState, useRef, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext.jsx";

function App() {
  const dishes = [
    {
      isnew: true,
      image:
        "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      name: "Tacos à l’unité",
      price: 3,
      stock: 12,
    },
    {
      isnew: false,
      image:
        "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      name: "Enchiladas",
      price: 12,
      stock: 0,
    },
    {
      isnew: false,
      image:
        "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      name: "Mole poblano",
      price: 15,
      stock: 5,
    },
  ];

  function handleShowNewOnly() {
    setShowNewOnly((showNewOnly) => !showNewOnly);
  }

  const [showNewOnly, setShowNewOnly] = useState(false);

  const { cartCount } = useContext(CartContext);
  const prevCartCountRef = useRef(cartCount);


  useEffect(() => {
    prevCartCountRef.current = cartCount;
  }, [cartCount]);

  const filteredDishes = dishes.filter(
    (dish) => dish.stock > 0 && (!showNewOnly || dish.isnew == true)
  );
  return (
    <>
      <Header />

      <main>
        <Container>
          <p>
            Le panier est passé de {prevCartCountRef.current} à {cartCount}{" "}
            articles.
          </p>
          <Button variant="outline-primary mb-2" onClick={handleShowNewOnly}>
            {" "}
            {!showNewOnly ? "Nouveautés uniquement" : "Voir tous les plats"}
          </Button>
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

      <Footer />
    </>
  );
}

export default App;
