import React from 'react';

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
         <ul>
          {jokes.map(joke => (
            <li key={joke.id}>
              {joke.title}
            </li>
           ))}
         </ul>
       );
     }
  }
}

export default Jokes;
