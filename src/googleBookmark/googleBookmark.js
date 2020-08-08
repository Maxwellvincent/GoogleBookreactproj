import React, {Component} from 'react';
import SearchForm from '../searchForm/searchForm';
import FilterForm from '../filterForm/filterForm';
import BookList from '../bookList/bookList';
import ErrorMessage from '../errorMessage/errorMessage';

import './googleBookmark.css';

export default class GoogleBookmark extends Component{  

    render(){
        console.log(this.props.books.length)
        const isAvail = this.props.books.length !== 0 ? 
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
                <div>No Results Enter a new Search</div>
            </div> 

            : 
        
            <div>
                <ErrorMessage/>
                {/* <header>Google Book Search</header>
                <SearchForm searchChange={this.props.searchChange}/>
                <FilterForm 
                    print={this.props.print}
                    volumes={this.props.volume}
                    printChange={this.props.printChange}
                    bookChange={this.props.bookChange}
                />
                <div><h1>No Results found, create a new search!</h1></div> */}
            </div>;

        return(
            <div>
                {isAvail}
            </div>
        )
    }

} 
