import React from "react";
import "./modal.css"

class Modal extends React.Component{
    render(){
        if (!this.props.isModal){
            return null;
        }
        return (
            <div className="confirmation-modal">
                <div className="modal-content">
                    <button className="close" onClick={this.props.closeModal}> {/* Eventually add an onClick attribute here to close the modal */ }
                        &times;
                    </button>
                    <div className="text-center">
                        <h1>Reservation Confirmed</h1>
                        <p>Reservation set for {this.props.info.firstName} {this.props.info.lastName} of {this.props.info.address}</p>
                        <p>{this.props.info.rooms} Rooms for {this.props.info.nights} Nights</p>
                        <p>Number of Guests: {this.props.info.adults}</p>
                        <p>A confirmation e-mail has been sent to {this.props.info.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal