import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
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
                <div className="App-intro-text">
                    <h1>History</h1>
                    <h3>
                        <b>~2333 BC.</b><br/>
                        The Gojoseon (Old Joseon) kingdom was founded in northern Korea and southern Manchuria in 2333 BC. The Korean peninsula is conquered and divided by various dynasties over the ensuing centures.
                        <br/><br/>
                        <b>676 AD</b><br/>
                        The Korean peninsula was mostly unified under the Silla dynasty, which led to a golden age of culture and the arts. The Korean peninsula develops a unique culture separate from China and Japan, and is primarily known for its pottery and cuisine.
                        <br/><br/>
                        <b>1897</b><br/>
                        Joseon is renamed the Korean Empire.
                        <br/><br/>
                        <b>1910</b><br/>
                        Japan annexes Korea with the Japan-Korea Annexation Treaty.
                        <br/><br/>
                        <b>1945</b><br/>
                        Japan unconditionally surrenders to the Allied Forces.
                        <br/><br/>
                        <b>~700 BC</b><br/>
                        <br/><br/>
                        <br/><br/>
                        <b>~1912</b><br/>
                        Japan takes over Korea as the .

                        <br/><br/>
                        Since then, North Korea (Democratic People's Republic of Korea) and South Korea (Republic of Korea) have diverged widely.
                    </h3>
                    <h2>
                        {/* Compared to South Korea's 50 million, the population of North Korea is much lower, around 25 million, with GDP per capita hovering around $1,800. 25% of North Korea's GDP is spent on the country's military, compared to 2.7% of South Korea's GDP. */}
                    </h2>
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
