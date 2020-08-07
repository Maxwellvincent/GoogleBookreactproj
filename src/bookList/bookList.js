import React, {Component} from 'react';
import BookItem from '../bookItem/bookItem';

export default class BookList extends Component {
    
    render(){
        // const x = this.props.books.items;
        // const y = x === undefined ? console.log(" error "): console.log("this works");
        
        // const {books} = this.props;
        // const x = (books.items);
        
        const style = {
            listStyle: "none",
        }

        // console.log(this.props.books.map((item,index) => console.log(item)));

        const books = this.props.books.map((item, i) => <BookItem {...item} key={i}/>);
        return (
            <div style={style} >
                {books}
            </div>
        )
    }
}

BookList.defaultProps = {
    books: []
}