import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import logo from './logo.svg';
import './Section.css';

class Section3 extends Component {
    render() {
        return (
            <div className="section3">
                <div className="App-intro-img">
                    <img src="missile-upright.svg" className="korea-vector-img-missile"/>
                </div>
                <div className="section-text">
                    <h1 className="App-section-title">Economy and Transportation</h1>
                    <h3>
                        Compared to South Korea's 50 million, the population of North Korea is much lower, around 25 million, with GDP per capita hovering around $1,800. 25% of North Korea's GDP is spent on the country's military, compared to 2.7% of South Korea's GDP.
                        <br/><br/>
                        North Korea’s transportation system is stagnant since materials are limited and technology is underdeveloped.
                        <br/><br/>
                        Pyongyang is the only city with buses and subways.
                        <br/><br/>
                        Other than government vehicles, cars are virtually nonexistence outside of Pyongyang.
                        <br/><br/>
                        Bicycles are the most common mode of transportation. Average North Koreans consider them a necessity. Only certain females are given permission from the government to ride bicycles.
                        <br/><br/>
                        North Koreans must receive permission to travel within their own country. The documentation process takes 3-4 months, but bribes can shorten it to 10-15 days. Many trucks are modified to burn wood as fuel. Traveling to Pyongyang is most difficult. Traveling abroad is impossible.
                        <br/><br/>
                        Banks cannot withdraw their money from the bank so most prefer to stash money in their homes. Money is the ultimate ruler in the communist state. Bribes are used to bypass any law or system.
                        <br/><br/>
                        Price of goods is affected by the people’s market prices. They are cheaper and fluctuating, while the government-set prices in stores are fixed.
                        <br/><br/>
                        To survive, more North Koreans are engaging in private market activity to buy and sell illegally imported or handmade products.
                        <br/><br/>
                        The government implemented a currency reform program in 2009 to suppress inflation and stop the people’s market from prospering. The adjustment removed two zeroes from the existing paper currency, the won.
                        <br/><br/>
                        North Koreans welcome trash imported from France and offer bribes to managers of dumping grounds to collect valuable trash, from toys and chocolates to cooking utensils and DVDs.
                    </h3>

                </div>
            </div>
        );
    }
}

export default Section3;
