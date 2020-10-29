import React, { Component } from 'react'


export default class Tile extends Component {

  state = {
    detailsShown: false,
    hidden: false
  }

  renderDetails = () => {
    if (this.state.detailsShown === false) {
      this.setState({
        detailsShown: true
      })} else {
        this.setState({
          detailsShown: false
        })
      }
  }

  hideHog = () => {
    this.setState({
      hidden: true
    })
  }

  showHog = () => {
    this.setState({
      hidden: false
    })
  }

  render() {

    const { name, specialty, greased, weight } = this.props.attributes
    
    let pigName = this.props.attributes.name.replace(/\W+/g, " ").toLowerCase().split(' ').join('_')
    let pigImage = require(`../hog-imgs/${pigName}.jpg`)

    
    return(
      <div>
      { this.state.hidden === false ?
        (<div className="card ui" style={{margin: '30px'}}>
          <img src={pigImage} style={{height: '200px'}}/>
        <h2>{ name }</h2>
        <button onClick={() => this.renderDetails()} >Details</button>
        <button onClick={this.hideHog}>Hide Hog</button>
       
       {this.state.detailsShown === true ? 
         (<div>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased.toString()} </p>
            <p>Weight:{weight} lbs.</p>
            <p>Highest Medal Achieved: {this.props.attributes['highest medal achieved']}</p>
        </div> ) :
        <div></div>}
        </div>)
          : 
          <div className="card ui" style={{margin: '30px'}}>
          <button onClick={this.showHog}> Show {name}</button>
          </div>
          }
        </div>

         
    )
  }
}