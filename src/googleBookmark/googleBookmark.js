import React, {Component} from 'react';
import SearchForm from '../searchForm/searchForm';
import FilterForm from '../filterForm/filterForm';
import BookList from '../bookList/bookList';

import './googleBookmark.css';

export default class GoogleBookmark extends Component{  

    render(){
        const isAvail = this.props.books !== null ? 
            <div>
                <header>Google Book Search</header>
                <SearchForm searchChange={this.props.searchChange}/>
                <FilterForm 
                    print={this.props.print}
                    volumes={this.props.volume}
                    printChange={this.props.printChange}
                    bookChange={this.props.bookChange}
                />
                <BookList books={this.props.books}/>
            </div> 

            : 
        
            <div>
                <header>Google Book Search</header>
                <SearchForm searchChange={this.props.searchChange}/>
                <FilterForm 
                    print={this.props.print}
                    volumes={this.props.volume}
                    printChange={this.props.printChange}
                    bookChange={this.props.bookChange}
                />
                "this is empty"
            </div>;

        // console.log(isAvail);
        return(
            <div>
                {isAvail}
            </div>
        )
    }

} 
