import React, { Component } from "react";
// import "./App.css";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
  handleDetailsClick = () => {};
  render() {
    const { title, poster_path, release_date } = this.props;
    console.log("poster_path", poster_path);
    let fullYear = new Date(release_date);
    let year = fullYear.getFullYear();

    return (
      <div className="film-row">
        <FilmPoster poster_path={poster_path} title={title} />
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
        <Fave />
      </div>
    );
  }
}

export default FilmRow;
