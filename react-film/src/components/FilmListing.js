import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  state = {
    filter: "all",
    faves: [
      {
        // Mock Up
        id: 346364,
        title: "It",
        poster_path: "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        backdrop_path: "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
        overview:
          "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
        release_date: "2017-09-05"
      }
    ]
  };
  handleFilterClick = (message, e) => {
    console.log("Setting filter to", message);
    console.log("filter state", this.state.filter);
    this.setState({ filter: message });
    e.stopPropagation();
  };

  render() {
    console.log("filter", this.state.filter);
    const allFilms = (this.state.filter === "all"
      ? this.props.films
      : this.state.faves
    ).map((film, index) => (
      <FilmRow
        key={index}
        title={film.title}
        poster_path={film.poster_path}
        release_date={film.release_date}
      />
    ));

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={e => this.handleFilterClick("all", e)}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
            onClick={e => this.handleFilterClick("faves", e)}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
