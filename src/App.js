import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import {useStateValue} from './StateProvider';

// using BEM naming convention
function App() {

  const [{user},dispatch] = useStateValue();
  console.log(user);
  return (
    <div className="app">
      {!user ? 
      (
        <Login />
      )
      :
      (
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
         </Router>
      </div>
      )}
    </div>
  );
}

export default App;
