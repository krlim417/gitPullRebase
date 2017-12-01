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

  handleClick(e) {
    e.preventDefault();
    // console.log('valueee', e.target.value);
    let newStateToSet = this.state;
    let genre = e.target.value;

    if (this.state.genre === genre && this.state.clicked === true) {
      newStateToSet.clicked = false;
      this.setState(newStateToSet);
      this.props.handleGenreClick(false);
      console.log('removing filter!', this.state)

    } else {
      newStateToSet.genre = genre;
      newStateToSet.clicked = true;
      this.props.searchArtistByGenre(e.target.value);
      this.setState(newStateToSet);
      this.props.handleGenreClick(true);
      console.log('setting genre', genre);

    }
  }

  render() {
    return (
      <div>
        <br/>
        <div>Genre to filter artists by:</div>
        <button className="btn btn-primary" onClick={this.handleClick} name="selectGenre" value="electro">Electronic/Dance</button>
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