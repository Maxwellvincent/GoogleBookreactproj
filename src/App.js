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
      bookType: " "
    }

  }

    handleUserSearch(userSearch){
      this.setState({
          userSearch
      });
      const print = this.state.printType;
      console.log(print);

      // const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;


      const urlNoFilter = this.state.bookType === " " ? 
      `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}` : `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;
  
      console.log(encodeURI(urlNoFilter));

      const fixUrl = encodeURI(urlNoFilter);
      // const options = {
      //   method: 'GET',
      //   headers: {
    
      //   }
      // };

      console.log(fixUrl);
      fetch(fixUrl)
      .then(resp => resp.json())
      .then(data => {
        if(data.totalItems === 0){
          console.log("This is firing!!");
          this.setState({
            books: []
          });
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

    handleFilterSubmit(volume,print){
      console.log("Handle filter submit works");
      console.log("this book type is: " + volume);
      console.log("this print type is:" + print);

      // once submit is hit, need to generate a new list of books matching the filter criteria

      const urlNoFilter = this.state.bookType === " " ? 
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.userSearch}&printType=${this.state.printType}` : 
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;

      const url = encodeURI(urlNoFilter)
      console.log(url);
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if(data.totalItems === 0){
          console.log("This filter is firing!!");
          this.setState({
            books: []
          });
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
    console.log(this.state.bookType);
    const urlNoFilter = this.state.bookType === " " ? 
    `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}` : `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;

    console.log(encodeURI(urlNoFilter));

    // const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&printType=${this.state.printType}&filter=${this.state.bookType}`;

    const fixUrl = encodeURI(urlNoFilter);
    // const options = {
    //   method: 'GET',
    //   headers: {

    //   }
    // };
    
    fetch(fixUrl)
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
    
    return (
      <div className="App">
        <GoogleBookmark 
          books={this.state.books} 
          searchChange={(e) => this.handleUserSearch(e)}
          print={this.state.printType}
          volume={this.state.bookType}
          printChange={(print) => this.handlePrintFilter(print)}
          bookChange={(volume) => this.handleBookFilter(volume)}
          filterForm={(volume, print) => this.handleFilterSubmit(volume, print)}
          />
      </div>
    );
  }
 
}

