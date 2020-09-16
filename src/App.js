import React from 'react';
import './App.css';
import './BookingForm'
import BookingForm from './BookingForm';
import Modal from './Modal';

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
        nights: 0, 
        isModal: false
      
    }
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleConfirm(event){
    event.preventDefault();
    this.setState({
      isModal: true
    })
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
      <div className="w-50 p-3 mx-auto justify-content-center" >
        <BookingForm info={this.state} handleConfirm={this.handleConfirm} handleChange={this.handleChange} />
        <Modal isModal={this.state.isModal} info={this.state} />
      </div>
    );
  }
}

export default App;
