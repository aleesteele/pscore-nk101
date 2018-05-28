import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import logo from './logo.svg';
import './Section.css';

class Section1 extends Component {
    render() {
        return (
            <div className="section1">
                <div className="App-intro-img">
                    <img src="mansudae-grand-monument.svg" className="korea-vector-img"/>
                </div>
                {/* <div className="App-section-bg-img"> */}
                    <div className="section-text">
                        <h1 className="App-section-title">Education and Health</h1>
                {/* </div> */}
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
            </div>
        );
    }
}

export default Section1;
