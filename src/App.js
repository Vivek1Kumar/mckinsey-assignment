import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
// import Demographics from "./components/demographics/index";
import Demo from "./components/demo/index";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    {/* <Route exact path="/demographics" component={Demographics} /> */}
                    <Route exact path="/demographics" component={Demo} />

                </BrowserRouter>
            </div>
        );
    }
}

export default App;