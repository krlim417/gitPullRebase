import React from "react";

class genreFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setGenreName(genre) {
    if (genre === 'electro') {
      return 'Electronic';
    } else {
      return genre.charAt(0).toUpperCase() + genre.slice(1);
    }
  }

  handleClick(e) {
    e.preventDefault();
    let newStateToSet = this.state;
    let genre = e.target.value;

    if (this.state.genre === genre && this.state.clicked === true) {
      newStateToSet.clicked = false;
      this.setState(newStateToSet);
      this.props.handleGenreClick(false);
    } else {
      newStateToSet.genre = genre;
      newStateToSet.clicked = true;
      this.props.searchArtistByGenre(e.target.value);
      this.setState(newStateToSet);
      this.props.setGenre(this.setGenreName(genre));
      this.props.handleGenreClick(true);
    }
  }

  render() {
    return (
      <div>
        <br/>
        <div>Genre to filter artists by:</div>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="electro">Electronic</button>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="funk">Funk</button>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="hip hop">Hiphop</button>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="k-hop">K-hop</button>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="pop">Pop</button>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="r&b">R&B</button>
      </div>
    );
  }
}

export default genreFilter;