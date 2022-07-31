import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header className='header'>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className='fs-1'> amazona</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
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
