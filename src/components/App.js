import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LoginScreen from '../components/login_screen/login_screen'
import SignUp from './sign_up/sign_up';
import User from './user/user'
import Search from '../components/search/search'
import AddArtist from '../components/add_artist/add_artist'
import AddAlbum from './add_album/AddAlbum'
import AddSong from './add_song/add_song'
import Stadistics from './stadistics';
import Query1 from './query1/query1';
import Cart from './cart/index';
import MySongs from './my_songs';
import Bitacora from './bitacora/index'
import SimulateSales from './simulate_sales/index'
import GenerarReporte from './reportes_ventas_dia/index'
import { createBrowserHistory } from 'history'
import GenerarRecomendaciones from './generar_recomendaciones';
export const history = createBrowserHistory()

let list = []

const App = () => (
  <Router history={history}>

      <Switch>

        <Route exact path="/" component={LoginScreen}/>
        <Route exact path="/user/admin" component={LoginScreen} />
        <Route exact path="/user/:username" component={User} />
        <Route exact path="/user/:username/1">
          <LoginScreen loggedIn={true} />
        </Route>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/sign-up" component={SignUp} />

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
        <Route exact path='/user/:username/bitacora' component={Bitacora} />
        <Route exact path='/user/:username/cart' component={Cart} />
        <Route exact path='/user/:username/mysongs' component={MySongs} />
        <Route exact path='/user/:username/simulate_sales' component={SimulateSales} />
        <Route exact path='/user/:username/generar-reportes' component={GenerarReporte} />
        <Route exact path='/user/:username/generar-recomendaciones' component={GenerarRecomendaciones} />

        <Route exact path='/1' component={Query1} /> 
        
      </Switch>
  </Router>

);


export default App