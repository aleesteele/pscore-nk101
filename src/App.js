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
                Click on each section to be taken to the description.
                <ol text-al>
                    <li><a href='#section1'> Demography</a></li>
                    <li><a href='#section2'> Education</a></li>
                    <li><a href='#section3'> Food</a></li>
                </ol>
            </div>
            <div className="">
                <ScrollableAnchor id={'section1'}>
                    <div className="section1">
                        <h1>Facts</h1>
                        <b>Population</b>: 25 million (South Korea has 50 million)<br/>
                        <b>GDP per capita</b>: $1,800 (South Korea is $33,200)<br/>
                        <b>GDP Spent on Military</b>: 25% (2.7% in South Korea)
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <div className="section2">
                        <h1>Education</h1>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section3'}>
                    <div className="section3">
                        <h1>Food</h1>
                    </div>
                </ScrollableAnchor>

            </div>
        </div>);
    }
}

export default App;
