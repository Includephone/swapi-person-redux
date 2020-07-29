import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../store';
import PersonInfoPage from '../../pages/person-info';
import PersonListPage from '../../pages/person-list';
import Header from '../header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <div className="container">
          <Route path="/person/:id" component={PersonInfoPage}/>
          <Route path="/" exact component={PersonListPage}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
