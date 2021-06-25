import React, { Component } from 'react';
import '../App.css';

class ClassScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gender: 'male',
            itemschecked: [],
            val: '1',
        }
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleVechileChange = (event) => {
        const index = this.state.itemschecked.indexOf(event.target.value);
        let arr = this.state.itemschecked;
        if (index > -1) {
            arr.splice(index, 1);
        }
        else
            arr = [...arr, event.target.value];

        this.setState({
            itemschecked: arr,
        })
    }

    handleValueChange = (event) => {
        console.log("inside fun");
        this.setState({
            val: event.target.value,
        })
    }

    render() {
        return (
            <>
                <form>
                    {/* TODO -- Drop-down, radio, checkbox */}
                    <div className="container">
                        <label>Select Your Gender:</label><br />
                        <input type="radio" id="gender" name="gender" value="male" onChange={this.handleGenderChange}></input>
                        <label>Male</label>
                        <input type="radio" id="gender" name="gender" value="female" onChange={this.handleGenderChange}></input>
                        <label>Female</label>
                        <input type="radio" id="gender" name="gender" value="others" onChange={this.handleGenderChange}></input>
                        <label>Others</label>
                    </div>
                    <br />
                    <div className="container">
                        <label>Select which Vechiles you have: </label><br />
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={this.handleVechileChange}></input>
                        <label for="vehicle1"> I have a bike</label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={this.handleVechileChange}></input>
                        <label for="vehicle2"> I have a car</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={this.handleVechileChange}></input>
                        <label for="vehicle3"> I have a boat</label><br />
                    </div>
                    <br />
                    <div className="container">
                        <label>Choose a no b/w 1 and 5</label>
                        <select name="no" onChange={this.handleValueChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    {console.log(this.state.val)}
                    {console.log(this.state.gender)}
                    {console.log(this.state.itemschecked)}
                </form>
            </>
        )
    }
}

export default ClassScreen