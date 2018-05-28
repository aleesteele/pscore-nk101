import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import logo from './logo.svg';
import './Section.css';

class Section2 extends Component {
    render() {
        return (
            <div className="section2">
                <div className="App-section-bg-img">
                    <h1 className="App-section-title">Labor and Punishment</h1>
                </div>
                <h3>
                    Citizens receive very little salary for their work. One month's wage is enough to buy only 700 grams of rice.
                    <br/><br/>
                    The Kim regime regularly mobilizes citizens, including children, for forced labor with no compensation. Those who refuse face being sent to a forced labor camp.
                    <br/><br/>
                    North Koreans must contribute their own feces as fertilizer for farming. Their excrement is a valuable resource and home lavatories are locked to prevent theft.
                    <br/><br/>
                    Currently, the North Korean government sends workers to 40 difference countries globally as foreign labor, primarily Russia and China. Roughly 65,000 workers are abroad, working anywhere from 12-20 work hours per day. They usually have a 3 year minimum contract, with $200-300 earned per month. However, workers often receive only 10% of their promised wages. Most of their income goes to the North Korean government.
                </h3>
            </div>
        );
    }
}

export default Section2;
