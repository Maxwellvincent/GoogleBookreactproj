import React, {Component} from 'react';
import './filterForm.css';

export default class FilterForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            printType: "All",
            bookType: "No Filter"
        }
    }

    handleChange(){
        console.log("this works");
    }

    render(){

        return(
            <form className="filter-form">
                <label >Print Type: </label>
                <select id="print-type" value={this.state.printType} onChange={this.handleChange}>
                    <option value="All">All</option>
                </select>

                <label >Book Type: </label>
                <select id="book-type" value={this.state.bookType} onChange={this.handleChange}>
                    <option value="No Filter">No Filter</option>
                </select>
            </form>
        )
    }
}