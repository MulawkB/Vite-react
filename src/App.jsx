import { Col, Container, Row } from "react-bootstrap"
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Dish from './components/Dish'
function App() {
  return (
    <>
      <Header/>

      <main>
        <Container>
          <Row>
            <Col md={4}>
              <Dish 
              isnew= {true}
              image="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              name="Tacos à l’unité"
              price={3}
              />
            </Col>
            <Col md={4}>
              <Dish 
              image="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              name="Enchiladas"
              price={12}
              />
            </Col>
            <Col md={4}>
              <Dish 
              image="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              name="Mole poblano"
              price={15}
              />
            </Col>
          </Row>
        </Container>
      </main>
      
      <Footer/>
    </>
  )
}

export default App
