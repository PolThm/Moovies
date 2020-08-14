import React, {Component} from 'react';
import {connect} from "react-redux";
import {moviesSearched} from "../actions";

class SearchBar extends Component {
  // state = {
  //   searchBar: ''
  // };

  handleChange = (event) => {
    this.props.moviesSearched(event.target.value);
  };

  render() {
    return (
      <div className="G02SearchBar py-20  flex justify-center">
        <form className="min-w-full sm:min-w-0 w-1/3">
            <input className="border-solid border border-gray-700 rounded-lg px-3 py-1 outline-none w-full" type="text" name="name" value={this.props.searchBar} onChange={this.handleChange} placeholder="Search..."/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchBar: state.moovies.searchBar
  }
};

export default connect(
  mapStateToProps,
  {moviesSearched}
)(SearchBar);
