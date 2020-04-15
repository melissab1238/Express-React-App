import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { config, nodeenv } from "./Constants";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        let api_url = config.url.API_URL
        
        fetch(api_url)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                <p className="App-intro">{process.env.NODE_ENV}</p>
            </div>
        );
    }
}

export default App;
