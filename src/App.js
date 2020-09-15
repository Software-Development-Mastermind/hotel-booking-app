import React from 'react';
import './App.css';
import './BookingForm'
import BookingForm from './BookingForm';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      
        firstName: "", 
        lastName: "", 
        email: "",
        address: "", 
        rooms: 0, 
        adults: 0, 
        nights: 0
      
    }
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleConfirm(event){
    event.preventDefault();
    
    console.log(this.state)
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  render(){
    return (
      <div className="App">
        <BookingForm user={this.state} handleConfirm={this.handleConfirm} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
