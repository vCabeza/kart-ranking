import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Index from './Index';
import DriverProfile from './drivers/DriverProfile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container fluid='md'>
          <Route exact path='/' component={Index} />
          <Route exact path={`/driver/:driverId`} component={DriverProfile} />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
