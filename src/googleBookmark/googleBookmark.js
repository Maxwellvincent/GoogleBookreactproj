import React, {Component} from 'react';
import SearchForm from '../searchForm/searchForm';
import FilterForm from '../filterForm/filterForm';
import BookList from '../bookList/bookList';

import './googleBookmark.css';

export default class GoogleBookmark extends Component{  

    render(){
        return(
            <div>
                <header>Google Book Search</header>
                <SearchForm searchChange={this.props.searchChange}/>
                <FilterForm />
                <BookList books={this.props.books}/>
            </div>
        )
    }

} 
