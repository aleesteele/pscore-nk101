import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import logo from './logo.svg';
import './Section.css';

class Section4 extends Component {
    render() {
        return (
            <div className="section4">
                <div className="section-text">
                    <h1 className="App-section-title">Media and Culture</h1>
                    <h3>
                        In 2012, Kim Jong Un spent $645.8 million on importants of luxury goods. Kim Jung Un imports luxury items and offers them to high government officials as
                        <br/><br/>
                        Houses are owned by the government. Only in Pyongyang are citizens able to buy an apartment, the average cost being $60,000.
                        <br/><br/>
                        Cell phone use is tightly controlled and monitored by the government. Many living near the northern border use illegal cell phones to contact family members who defected. Illegal Chinese cell phones can find reception at high altitudes, which can be used to make international calls - often to relatives in China and South Korea. To avoid discovery, people have to make 30-second calls, move at least 1 km, then call again.
                        <br/><br/>
                        Newspapers are strictly controlled. Government prohibits the rights to practice freedom of speech and freedom of the press unless it praises the country, the leader and government.
                        <br/><br/>
                        North Korea has only three TV channels, two of which are only available on the weekends. Television is entirely state-controlled and gives a very limited view of real life.
                        <br/><br/>
                        Actors and actresses are instruments of the regime. They must show loyalty and praise the state on and off the screen.
                        <br/><br/>
                        Listening to South Korean music or watching South Korean shows and films is a severe crime against the state, punishable by death.
                        <br/><br/>
                        20 South Korean DVDs costs the same as one house in North Korea. Illicit South Korean entertainment is still popular among the people because it portrays an intriguingly different culture and stimulates human emotions.
                        <br/><br/>
                        There is no Christmas in North Korea. The biggest holidays are Kim Il-Sung’s Birthday and Kim Jong-Il’s Birthday, celebrated each year with extravagant parades and firework displays.
                        <br/><br/>
                        While the DPRk’s constitution guarantees religious freedom, in reality, all religious institutions are controlled by the state and exist only for propaganda purposes.
                        <br/><br/>
                        The cult of personality devoted to Kim Il-sung and Kim Jong-il means the leaders must be revered almost as gods. The personality cult has taken on many religious aspects - for example, the supernatural deeds attributed to the Kims.
                    </h3>
                </div>
                <div className="App-intro-img">
                    <img src="kim-cartoon.svg" className="korea-vector-img"/>
                </div>
            </div>
        );
    }
}

export default Section4;
