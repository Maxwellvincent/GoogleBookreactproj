import React from 'react';
import GoogleBookmark from './googleBookmark/googleBookmark';

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
      userSearch: 'narnia'
    }

  }

  handleUserSearch(userSearch){
    this.setState({
        userSearch
    });

    const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`;
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
    .catch(err => console.log(err))

}

componentDidMount(){
  const userSearch = this.state.userSearch;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`;
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
  .catch(err => console.log(err))
}

  render(){
    // console.log(this.state.books);
    return (
      <div className="App">
        <GoogleBookmark books={this.state.books} searchChange={(e) => this.handleUserSearch(e)}/>
      </div>
    );
  }
 
}

