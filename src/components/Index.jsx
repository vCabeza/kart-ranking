import React, { Component } from 'react';

import ClasificacionGlobal from './rankings/GlobalRanking';

class Index extends Component {
  render() {
    return (
      <>
        <header className='App-header'>
          <h1>Karts Championship</h1>
        </header>
        <ClasificacionGlobal isIndex={true} />
      </>
    );
  }
}

export default Index;
