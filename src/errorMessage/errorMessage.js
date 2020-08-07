import React from "react";
import SearchForm from '../searchForm/searchForm';
import FilterForm from '../filterForm/filterForm';

export default function ErrorMessage(props){
    return(
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
        </div>
    )
}