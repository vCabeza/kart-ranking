import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Index from './Index';
import DriverProfile from './drivers/DriverProfile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar className='header-container' sticky='top' variant='dark'>
          <Navbar.Brand>
            <Link to={'/kart-ranking'}>Karting Championship</Link>
          </Navbar.Brand>
        </Navbar>
        <Container className='body-container'>
          <Route exact path='/kart-ranking' component={Index} />
          <Route
            path={`/kart-ranking/driver/:driverId`}
            component={DriverProfile}
          />
          <Route exact path='/'>
            <Redirect to='/kart-ranking' />
          </Route>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
