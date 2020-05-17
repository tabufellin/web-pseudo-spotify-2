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
import Stadistics from './stadistics';
import Query1 from './query1/query1';
// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.

let list = []

/*fetch('http://localhost:3001/stadistics/1')
.then(function(response) {
    return (response.json());
})
.then(function(data) {
    
    list = data
    console.log(list);
    

});*/


const App = () => (

      <Switch>

        <Route exact path="/" component={LoginScreen}/>
        <Route exact path="/user/admin" component={LoginScreen} />
        <Route exact path="/user/:username" component={LoginScreen} />
        <Route exact path="/login" component={LoginScreen} />
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

        <Route exact path="/user/:username/search/song">
          <Search searching='song'></Search>
        </Route>
        <Route exact path="/user/:username/search/album">
          <Search searching='album'></Search>
        </Route>
        <Route exact path="/user/:username/search/artist">
          <Search searching='artist'></Search>
        </Route>

        <Route exact path='/user/admin/add/song' component={AddSong}/>
        <Route exact path='/user/admin/add/album' component={AddAlbum}/>
        <Route exact path='/user/admin/add/artist' component={AddArtist}/>
        
        <Route exact path='/user/:username/add/song' component={AddSong}/>
        <Route exact path='/user/:username/add/album' component={AddAlbum}/>
        <Route exact path='/user/:username/add/artist' component={AddArtist}/>  

        <Route exact path='/user/:username/stadistics'>
          <Stadistics list={list}></Stadistics>
        </Route> 

        <Route exact path='/1' component={Query1} /> 
        
      </Switch>

);

/*fetch('http://localhost:3001/stadistics/1')
.then(function(response) {
    return (response.json());
})
.then(function(data) {
    
    list = data
    console.log(list);

    

})*/

export default App