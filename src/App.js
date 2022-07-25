import React from 'react';
import './Components/BookingForm'
import BookingForm from './Components/BookingForm';
import Modal from './Components/Modal';
import Header from './Components/Header';

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
    this.closeModal = this.closeModal.bind(this);
  }

  handleConfirm(event){
    event.preventDefault();
    this.setState({
      isModal: false,    
    })
    
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name] : value
    })
  }

  closeModal(){
    this.setState({
      isModal:false,
      firstName: "", 
      lastName: "", 
      email: "",
      address: "", 
      rooms: 0, 
      adults: 0, 
      nights: 0
      
    })
  }

  render(){
    return (
      <div className="w-50 p-3 mx-auto justify-content-center" >
        <Header/>
        <BookingForm info={this.state} handleConfirm={this.handleConfirm} handleChange={this.handleChange} />
        <Modal closeModal={this.closeModal} isModal={this.state.isModal} info={this.state} />
      </div>
    );
  }
}

export default App;
