import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    //subscribing to store
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });
    //dispatching an action
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   //fetching data and sending it to movies array
    //   movies: data
    // });
    store.dispatch(addMovies(data));
  }
  render(){
    //const movies = this.props.store.getState();
    const {list} = this.props.store.getState(); // state= { list[], favourites[] }
    console.log('RENDERED');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
