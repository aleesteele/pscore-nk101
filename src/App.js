import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import HistorySection from './History.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src="PSCORE_Logo.png" className="App-logo" alt="logo"/>
                <h1 className="App-title">North Korea 101</h1>
            </header>
            <div className="App-intro">
                <div className="App-intro-text">
                    <HistorySection/>
                    <h3>This visual report contains facts and basic information about North Korea’s customs and human right violations. Click on each link to be taken to the section:
                    <ol>
                        <li><a href='#section1'> Education and Health</a></li>
                        <li><a href='#section2'> Labor and Punishment</a></li>
                        <li><a href='#section3'> Economy and Transportation</a></li>
                        <li><a href='#section4'> Media and Culture</a></li>
                        <li><a href='#section5'> People and Politics</a></li>
                    </ol></h3>
                </div>
                <div className="App-intro-img">
                    <img src="korea-vector.svg" className="korea-vector-img"/>
                </div>
            </div>
            <div className="">
                <ScrollableAnchor id={'section1'}>
                    <Section1/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <Section2/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section3'}>
                    <Section3/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section4'}>
                    <Section4/>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section5'}>
                    <Section5/>
                </ScrollableAnchor>
            </div>
        </div>
    );
    }
}

export default App;
