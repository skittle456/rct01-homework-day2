import React, { Component } from "react";

class FilmPoster extends Component {
  render() {
    const posterUrlPrefix = "https://image.tmdb.org/t/p/w780/";

    return <img src={posterUrlPrefix + this.props.poster_path} alt="" />;
  }
}

export default FilmPoster;
