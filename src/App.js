import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (<div className="App">
            <header className="App-header">
                <img src="PSCORE_Logo.png" className="App-logo" alt="logo"/>
                <h1 className="App-title">North Korea 101: A Crash Course</h1>
            </header>
            <div className="App-intro">
                <div className="App-intro-text">
                    <h1>History</h1>
                    <h3>
                        <b>~700 BC</b><br/>

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
                    <div className="section1">
                        <div className="App-section-bg-img">
                            <h1 className="App-section-title">Education and Health</h1>
                        </div>
                        <h3>
                            Children are taught to idealize the Kim family from a very young age, being told that they are loved by a "merciful" dictator.
                            <br/><br/>
                            Anti-American indoctrination is part of the school curriculum and starts as early as kindergarten. "Little tank goes, our tank goes. While destroying Yankees, little tank goes."
                            <br/><br/>
                            One third of school textbooks contain content idolizing the Kim family and give distorted history accounts in which Kim Il-Sung liberated people who lived like slaves under Japan's colonial rule.
                            <br/><br/>
                            Textbooks are made out of poor quality paper made from corn leaves, not trees.
                            <br/><br/>
                            Food has long replaced rice as the staple food of North Koreans. Many dream of eating white rice and meat soup. National food competitions are held in order to promote new dishes using alternative foods such as tree bark.
                            <br/><br/>
                            Food shortages frequently force starving people to rely on wild foods such as poisonous ragweed to fend off hunger.
                            <br/><br/>
                            Food rations are a daily part of life - organized by the North Korean authorities, who distribute mainly corn and rice. Citizens receive 3-5 days worth of food once a month.
                            <br/><br/>
                            In some areas, only higher ranking officials receive rations. North Koreans greet each other by saying "Did you eat?" instead of "Peace with you". Hunger is an ever-present concern for many.
                        </h3>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <div className="section2">
                        <div className="App-section-bg-img">
                            <h1 className="App-section-title">Labor and Punishment</h1>
                        </div>
                        <h2>
                        </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section3'}>
                    <div className="section3">
                        <h1 className="App-section-title">Economy and Transportation</h1>
                        <h2>

                        </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section4'}>
                    <div className="section4">
                        <h1 className="App-section-title">Media and Culture</h1>
                        <h2>

                        </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section5'}>
                    <div className="section5">
                        <h1 className="App-section-title">People and Politics</h1>
                        <h2>

                        </h2>
                    </div>
                </ScrollableAnchor>
            </div>
        </div>
    );
    }
}

export default App;
