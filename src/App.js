import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (<div className="App">
            <header className="App-header">
                <img src="PSCORE_Logo.png" className="App-logo" alt="logo"/>
                <h1 className="App-title">North Korea 101</h1>
            </header>
            <div className="App-intro">
                Korea split into North and South at the end of World War II, following Japan's defeat in 1945. This is a guide to North Korea, the most closed country in the world.
                <br/>
                <a href='#section1'> Go to section 1 </a>
                <br/>
                <a href='#section2'> Go to section 2 </a>
            </div>
            <div className="">
                <ScrollableAnchor id={'section1'}>
                    <div className="section1"> Hello World </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <div className="section2"> How are you world? </div>
                </ScrollableAnchor>

            </div>
        </div>);
    }
}

export default App;
