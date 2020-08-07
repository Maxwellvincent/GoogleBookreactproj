import React, {Component} from 'react';
import './searchForm.css';

export default class SearchForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: " "
        }
    }

    
    handleInput(userInput){
        this.setState({
            userInput
        });
    
    }

    handleSubmit(e){
        e.preventDefault(); 
        console.log(this.state.userInput);
        console.log(this.state.userInput);
        this.props.searchChange(this.state.userInput);
        this.setState({
            userInput: this.state.userInput
        })
    }

    render(){
        
        return(
            <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
                <label>Search: </label>
                <input type="search" value={this.state.userInput} id="usersearch" onChange={e => this.handleInput(e.target.value)}/>
            </form>
        )
    }
}