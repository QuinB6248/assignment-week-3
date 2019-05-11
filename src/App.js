import React, { Component } from 'react'
import './App.css';
import ShowDetailsContainer from './components/ShowDetailsContainer'
import { connect }from 'react-redux'


const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}


class App extends Component {
  state = {
    value: 'something'
  }
  addModel = ( model) => {
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload:  model
    })
  }
  handleSubmit =(event) => {
    
    event.preventDefault();  
    const valueName = this.state.value
    return this.addModel(data[valueName]) 
    

  }
  updateSelection = (event) => {
    this.setState({value: event.target.value
    });
  }

  getModelName = (name) => {
    const namesModels = Object.keys(data)
    const nameModel = name
    return namesModels.find(model => model === nameModel)
  }
 
  render() {
   console.log(Object.keys(data))
    return (
      
        <div className="App">
        <h1>Computer Models</h1>
        <ShowDetailsContainer/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your model: 
              <select  onChange={this.updateSelection}>
                  <option value="">-- pick a model --</option>
                  <option value={this.getModelName("Ivel Z3")}>Ivel Z3 ({data["Ivel Z3"].year})</option>
                  <option value={this.getModelName("Bally Astrocade")}>Bally Astrocade ({data["Bally Astrocade"].year})</option>
                  <option value={this.getModelName("Sord M200 Smart Home Computer")}>Sord M200 Smart Home Computer  ({data["Sord M200 Smart Home Computer"].year})</option>
                  <option value={this.getModelName("Commodore 64")}>Commodore 64 ({data["Commodore 64"].year})</option>
              </select>
          </label>
          <input type="submit" value="Add" />
        </form>
        
        
        </div>
     
    );
  }
}


export default connect()(App);

