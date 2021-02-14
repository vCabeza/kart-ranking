import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Index from './Index';
import DriverProfile from './drivers/DriverProfile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar className='header-container' sticky='top' variant='dark'>
          <Navbar.Brand>
            <Link to={'/'}>Karting Championship</Link>
          </Navbar.Brand>
        </Navbar>
        <Container className='body-container'>
          <Route exact path='/' component={Index} />
          <Route exact path={`/driver/:driverId`} component={DriverProfile} />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
