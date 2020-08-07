import React, {Component} from 'react';
import './filterForm.css';

export default class FilterForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            printType: "all", 
            bookType: "" 
        }
    }

    handlePrintChange(printType){
        this.setState({
            printType
        })
        // console.log(e.target.value);
        // console.log("this works");
    }

    handleBookChange(bookType){
        this.setState({
            bookType
        })
        // console.log(e.target.value);
        // console.log("this works");
    }

    handleSubmit(e){
        e.preventDefault()
        // pass to App.js function all data for a new url search
        this.props.bookChange(this.state.bookType);
        this.props.printChange(this.state.printType);
    }

    render(){
        return(
            <form className="filter-form" onSubmit={e => this.handleSubmit(e)}>
                <label >Print Type: </label>
                <select id="print-type" value={this.state.print} onChange={(e) => this.handlePrintChange(e.target.value)}>
                    <option value="All">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                    
                </select>

                <label >Book Type: </label>
                <select id="book-type" value={this.state.volume} onChange={(e) => this.handleBookChange(e.target.value)}>
                    <option value="No Filter">No Filter</option>
                    <option value="ebooks">ebooks</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}