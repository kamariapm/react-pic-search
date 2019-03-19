import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  //initialize state, have it return an array--data is an array of objects
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    //troubleshooting this.setState not a function error
    //console.log(this);

    //update state
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Found {this.state.images.length} images */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
