import React from "react"

function BookingForm(props){
    return(
        <form onSubmit={props.handleConfirm}>
            <label>First Name: 
                <input type="text" name="firstName" value={props.user.firstName} onChange={props.handleChange}></input>
            </label>
            <label>Last Name: 
                <input type="text" name="lastName" value={props.user.lastName} onChange={props.handleChange}></input>
            </label>
            <label>Email: 
                <input type="email" name="email" value ={props.user.email} onChange={props.handleChange}></input>
            </label>
            <label>Address: 
                <input type="text" name="address" value={props.user.address} onChange={props.handleChange}></input>
            </label>
            <label>Rooms: 
                <select name="rooms" value={props.user.rooms} onChange={props.handleChange}>
                    <option value="">Select Number of Rooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </label>
            <label>Adults: 
                <select name="adults" value={props.user.adults} onChange={props.handleChange}>
                    <option value="">Select Number of Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
            <label>Nights: 
                <select name="nights" value={props.user.nights} onChange={props.handleChange}>
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
            <button type="submit">Confirm Reservation</button>
        </form>
    )
}

export default BookingForm;