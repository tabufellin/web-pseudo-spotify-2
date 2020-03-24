import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/login_screen/login_screen'
import SignUp from './sign_up/sign_up';
import User from './user/user'
import Admin from './admin/admin'
import Search from '../components/search/search'
import AddArtist from '../components/add_artist/add_artist'
import AddAlbum from './add_album/AddAlbum'
import AddSong from './add_song/add_song'
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

      
        <Route exact path="/user/admin/search/song">
          <Search searching='song'></Search>
        </Route>
        <Route exact path="/user/admin/search/album">
          <Search searching='album'></Search>
        </Route>
        <Route exact path="/user/admin/search/artist">
          <Search searching='artist'></Search>
        </Route>

        <Route exact path='/user/admin/add/song' component={AddSong}/>
        <Route exact path='/user/admin/add/album' component={AddAlbum}/>
        <Route exact path='/user/admin/add/artist' component={AddArtist}/>
        
        
      </Switch>

);

export default App
