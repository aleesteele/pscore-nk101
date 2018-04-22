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
                <div className="App-intro-text">
                    <h1>
                        <b>The Korean peninsula was split into two at the end of World War II, following Japan's defeat in 1945.</b> Since then, North Korea (Democratic People's Republic of Korea) and South Korea (Republic of Korea) have diverged widely.
                    </h1>
                    <h2>
                        Compared to South Korea's 50 million, the population of North Korea is much lower, around 25 million, with GDP per capita hovering around $1,800. 25% of North Korea's GDP is spent on the country's military, compared to 2.7% of South Korea's GDP.
                    </h2>
                    <h2>Click on each link to be taken to the section:
                    <ol>
                        <li><a href='#section1'> Education and Health</a></li>
                        <li><a href='#section2'> Labor and Punishment</a></li>
                        <li><a href='#section3'> Economy and Transportation</a></li>
                        <li><a href='#section4'> Media and Culture</a></li>
                        <li><a href='#section5'> People and Politics</a></li>
                    </ol></h2>
                </div>
                <div className="App-intro-img">
                    <img src="korea-vector.svg" className="korea-vector-img"/>
                </div>
            </div>
            {/* <div className="">
                <ScrollableAnchor id={'section1'}>
                    <div className="section1">
                        <h1 className="App-section-title">Education</h1>
                        <h2>Children are taught to idealize the Kim family from a very young age, being told that they are loved by a "merciful" dictator.

                        Anti-American indoctrination is part of the school curriculum and starts as early as kindergarten. "Little tank goes, our tank goes. While destroying Yankees, little tank goes."

                        One third of school textbooks contain content idolizing the Kim family and give distorted history accounts in which Kim Il-Sung liberated people who lived like slaves under Japan's colonial rule.</h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <div className="section2">
                        <h1 className="App-section-title">Food</h1>
                        <h2>Food has long replaced rice as the staple food of North Koreans. Many dream of eating white rice and meat soup. National food competitions are held in order to promote new dishes using alternative foods such as tree bark.

                        Food shortages frequently force starving people to rely on wild foods such as poisonous ragweed to fend off hunger.

                        Food rations are a daily part of life - organized by the North Korean authorities, who distribute mainly corn and rice. Citizens receive 3-5 days worth of food once a month.

                        In some areas, only higher ranking officials receive rations. North Koreans greet each other by saying "Did you eat?" instead of "Peace with you". Hunger is an ever-present concern for many.</h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section3'}>
                    <div className="section3">
                        <h1 className="App-section-title">Labor</h1>
                        <h2>Citizens receive very little salary for their work. One month's wage is enough to buy only 700 grams of rice. The Kim regime regularly mobilizes citizens, including children, for forced labor with no compensation. Those who refuse face being sent to a forced labor camp. North Koreans must contribute their own feces as fertilizer for farming. Their excrement is a valuable resource and home lavatories are locked to prevent theft. Currently, the North Korean government sends workers to 40 difference countries globally as foreign labor, primarily Russia and China. Roughly 65,000 workers are abroad, working anywhere from 12-20 work hours per day. They usually have a 3 year minimum contract, with $200-300 earned per month. However, workers often receive only 10% of their promised wages. Most of their income goes to the North Korean government.
                        </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section4'}>
                    <div className="section4">
                        <h1 className="App-section-title">Transportation</h1>
                        <h2>
                        </h2>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section5'}>
                    <div className="section5">
                        <h1 className="App-section-title">Transportation</h1>
                    </div>
                </ScrollableAnchor> */}
            {/* </div> */}
        </div>
    );
    }
}

export default App;
