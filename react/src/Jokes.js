import React from 'react';
import CategoryList from './CategoryList';

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      jokes: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/jokes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            jokes: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, jokes } = this.state;
    if (error) {
      return <div>Error: { error.message }</div>;
    } else if (!isLoaded) {
      return <div>Loading... </div>
     } else {
       return (
         <div className="jokeList">
          {jokes.map(joke => (
            <div key={joke.id} className="joke">
              <div>{joke.title}: {joke.full_text}</div>
              <CategoryList categories={joke.categories} />
            </div>
           ))}
         </div>
       );
     }
  }
}

export default Jokes;
