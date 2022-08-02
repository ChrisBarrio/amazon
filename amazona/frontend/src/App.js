import React from 'react';
import { useContext} from 'react';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { Store } from './Store';

function App() {
  const {state} = useContext(Store);
  const {cart} = state;
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header className='header'>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className='fs-1'> amazona</Navbar.Brand>
              </LinkContainer>
              <Nav>
                <Link to="/cart" className='nav-link fs-5'>
                  <i class="fa-solid fa-cart-shopping">
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger" className='mx-1'>
                      {cart.cartItems.length}
                    </Badge>
                  )}
                  </i>
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-5'>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center my-2'>All Right reserved <a href='https://chb-web-developer.netlify.app' target="_blanck">@ChrisBarrio</a></div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
