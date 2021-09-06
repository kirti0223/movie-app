import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import {connect} from "react-redux";

class App extends React.Component {
  componentDidMount(){
    //const {store} = this.props;
    //subscribing to store

    // store.subscribe(() => {
    //   console.log('UPDATED');
    //   this.forceUpdate();
    // });

    //dispatching an action
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   //fetching data and sending it to movies array
    //   movies: data
    // });
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite =(movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  }

  render(){
    //const movies = this.props.store.getState();
    const { movies, search } = this.props;
    const { list, favourites, showFavourites } = movies; // state= { list[], favourites[] }
    console.log('RENDERED', this.props);

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.dispatch}
                isFavourite = { this.isMovieFavourite(movie) }
              />
            ))}
          </div>
          {displayMovies.length ===0 ? <div className="no-movies">No movies to display</div> : null}
        </div>
      </div>
    );
  }
  
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store) => <App store={store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state){
  return{
    movies: state.movies,
    search: state.movies
  }
}
const connectAppComponent = connect(mapStateToProps)(App);
export default connectAppComponent;
