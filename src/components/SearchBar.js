import React, {Component} from 'react';

class SearchBar extends Component {
  state = {
    searchBar: ''
  };

  handleChange = (event) => {
    this.setState({searchBar: event.target.value});
  };

  render() {
    return (
      <div className="G02SearchBar py-20 flex justify-center">
        <form className="min-w-full sm:min-w-0 w-1/3">
            <input className="border-solid border border-gray-700 rounded-lg px-3 py-1 outline-none w-full" type="text" name="name" value={this.state.searchBar} onChange={this.handleChange} placeholder="Search..."/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
