import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/login_screen/login_screen'
import SignUp from './sign_up/sign_up';
import User from './user/user'
import Admin from './admin/admin'
import Search from './search/search';
// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => (

     // <Link to="/">Login Screen</Link>
      //<Link to='/admin'>Create event</Link>
      //<Link to="/user">Contact</Link>
      
      <Switch>

        <Route exact path="/" component={LoginScreen}/>
        <Route exact path="/user/admin" component={Admin} />
        <Route exact path="/user/:username" component={User}/>
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/user/admin/search" component={Search} />
        
      </Switch>

);

export default App
