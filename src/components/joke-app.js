import React from 'react'; // import react from react
class JokeApp extends React.Component { // creat a class called joke app that inherits joke app component
    constructor(props) { // called as instance when joke app class created
        super(props); // pass the props into consturtor and super
        this.state = {
            joke: '',
            isLoading: true
        };
    }
    render() {
        return (
            <div>
                {/* <h4>{this.state.isLoading ? "Loading..." : this.state.joke}</h4> */}
                {this.state.isLoading && 'loading joke...'}
                {this.state.isLoading === false && this.state.joke}
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
    _fetchJoke = () => {  // convetion is with underscore to know we made the method
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url) // make a get request with fetch
            .then(response => response.json()) // we need time to get data back from the promise
            .then(jokeJson => {  // we need to parse out the json and it takes time for first promise
                this.setState({joke: jokeJson.value, isLoading: false})
        });
    }
}
export default JokeApp;