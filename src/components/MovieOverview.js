import React, {Component} from 'react';
import {connect} from 'react-redux';
import {favoriteAdded, favoriteRemoved} from "../actions";

class MovieOverview extends Component {

  favoriteActivated = () => {
    this.props.favoriteAdded();
  };

  favoriteDesactivated = () => {
    this.props.favoriteRemoved();
  };

  render() {
    let fa;

    if (this.props.favorite) {
      fa = <i className="fas fa-heart mb-auto text-2xl text-red-400 cursor-pointer" onClick={this.favoriteDesactivated}/>;
    } else {
      fa = <i className="far fa-heart mb-auto ml-8 text-2xl cursor-pointer" onClick={this.favoriteActivated} />
    }

    return (
      <div className="my-10 p-6 border rounded-lg flex justify-between">
        <div className="flex">
          <img src={this.props.img} alt="" className="w-32"/>
          <div className="ml-8 flex flex-col">
            <h2 className="font-bold">{this.props.title}</h2>
            <p className="pt-3">{this.props.year}</p>
            <p className="pt-1">{this.props.crew}</p>
          </div>
        </div>
        {fa}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    favorite: state.moovies.favorite,
  }
};

export default connect(
  mapStateToProps,
  {favoriteAdded, favoriteRemoved}
)(MovieOverview);
