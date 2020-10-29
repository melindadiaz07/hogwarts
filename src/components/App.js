import React, { Component } from "react";
import "../App.css";
import hogs from "../porkers_data";
import Tile from './Tile.js'



class App extends Component {

  state = {
    greased: "",
    sort: 'default'
  }

  filterGreased = (event) => {
    this.setState({
      greased: event.target.value
    })
  }

  sortBy = (event) => {
    this.setState({
      sort: event.target.value
    })
    console.log(event.target.value)
  }

  
  render() {

    let sortHogs
    if (this.state.sort == 'alpha' ){
      sortHogs = hogs.sort((a, b) => a.name.localeCompare(b.name))
    } else if (this.state.sort == 'weight') {
      sortHogs = hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1 )
    } else {
      sortHogs = [...hogs]
    }
  

    return (
      <div>
      <div className="sort-buttons" style={{margin: '30px'}}>
        
        <div className="filter-greased" onClick={(event) => this.filterGreased(event)} >
          <input type="radio" value="" name="greased"/>
          <label for="male"> All </label>
          <input type="radio" value="true" name="greased"/>
          <label for="male"> Greased </label>
        </div>

      {/* sort by ... */}
      <div className="sort-by" onClick={(event)=> this.sortBy(event)}>
        <input type="radio" value="alpha" name="sort"/>
        <label for="male"> Sort by Name </label>
        <input type="radio" value="weight" name="sort"/>
        <label for="male"> Sort by Weight </label>
      </div>

      </div>
      <div className="ui grid container">

        { sortHogs.filter(hog => {
           return hog.greased.toString().includes(this.state.greased) 
        }).map(hogData => <Tile attributes={hogData} /> )}
      </div>
      </div>


    )
  }
}

export default App;

