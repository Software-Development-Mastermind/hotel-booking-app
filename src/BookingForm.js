import React from "react"

function BookingForm(props){
    return(
        <form onSubmit={props.handleConfirm} className="d-flex justify-content-around flex-wrap">
            <div className="form-group">
                <label>First Name: 
                    <input type="text" name="firstName" className="form-control form-control-sm" value={props.info.firstName} onChange={props.handleChange} required></input>
                </label>
            </div>
            <div className="form-group">
                <label>Last Name: 
                    <input type="text" name="lastName" className="form-control form-control-sm" value={props.info.lastName} onChange={props.handleChange} required></input>
                </label>
            </div>
            <div className="form-group">
                <label>Email: 
                    <input type="email" name="email" className="form-control form-control-sm" value ={props.info.email} onChange={props.handleChange} required></input>
                </label>
            </div>
            <div className="form-group">
                <label>Address: 
                    <input type="text" name="address" className="form-control form-control-sm" value={props.info.address} onChange={props.handleChange} required></input>
                </label>
            </div>
            <div className="form-group">
                <label>Rooms: 
                    <select name="rooms" className="form-control form-control-sm" value={props.info.rooms} onChange={props.handleChange} required>
                        <option value="">Select Number of Rooms</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </label>
            </div>
            <div className="form-group">
                <label>Adults: 
                    <select name="adults" className="form-control form-control-sm" value={props.info.adults} onChange={props.handleChange} required>
                        <option value="">Select Number of Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
            </div>
            <div className="form-group">
                <label>Nights: 
                    <select name="nights" className="form-control form-control-sm" value={props.info.nights} onChange={props.handleChange} required>
                        <option value="">Select Number of Nights</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </label>
            </div>
            <div className="break"></div>
            <button type="submit" className="btn btn-sm confirm-btn">Confirm Reservation</button>
        </form>
    )
}

export default BookingForm;