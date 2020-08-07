import React from 'react';
import GoogleBookmark from './googleBookmark/googleBookmark';
import ErrorMessage from '../src/errorMessage/errorMessage';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books: [
        {
          title: "",
          author: "",
          link: ""
        },

      ],
      userSearch: "narnia",
      printType: "all",
      bookType: "ebooks"
    }

  }

    handleUserSearch(userSearch){
      this.setState({
          userSearch
      });
      const print = this.state.printType;
      console.log(print);

      const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;
      // const options = {
      //   method: 'GET',
      //   headers: {
    
      //   }
      // };
      console.log(url);
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        
        if(data.totalItems === 0){
          console.log("This is firing!!");
          this.setState({
            books: []
          })
          return <ErrorMessage />
        } else {
          console.log(data)
          const arrOfBooks = data.items.map(item => {
          const {authors, imageLinks, title} = item.volumeInfo;
            return [authors, imageLinks, title];
          });
          this.setState({
          books: arrOfBooks
          });
        }
      })
      .catch(err => console.log(err))

  }

  handlePrintFilter(print){
    console.log("This is the name of the print: " + print);
    this.setState({
      printType: print
    })
  }

  handleBookFilter(volume){
    console.log("This is the name of the book: " + volume);
    this.setState({
      bookType: volume
    })
  }

  componentDidMount(){
    const userSearch = this.state.userSearch;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;
    // const options = {
    //   method: 'GET',
    //   headers: {

    //   }
    // };
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      
      const arrOfBooks = data.items.map(item => {
      const {authors, imageLinks, title} = item.volumeInfo;
        return [authors, imageLinks, title];
      });
    this.setState({
      books: arrOfBooks
    });
    })
    .catch(err => console.log(err.message))
  }

  render(){
    // console.log(this.state.books);
    return (
      <div className="App">
        <GoogleBookmark 
          books={this.state.books} 
          searchChange={(e) => this.handleUserSearch(e)}
          print={this.state.printType}
          volume={this.state.bookType}
          printChange={(print) => this.handlePrintFilter(print)}
          bookChange={(volume) => this.handleBookFilter(volume)}
          />
      </div>
    );
  }
 
}

