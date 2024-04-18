import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Switch, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import store from './store/configureStore';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/user" component={UserDashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
