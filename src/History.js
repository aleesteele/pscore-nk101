import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import logo from './logo.svg';
import './Section.css';

class HistorySection extends Component {
    render() {
        return (
            <div>
                <h1>History</h1>
                <h3>
                    <b>~2333 BC.</b><br/>
                    The Gojoseon (Old Joseon) kingdom was founded in northern Korea and southern Manchuria in 2333 BC. The Korean peninsula is conquered and divided by various dynasties over the ensuing centures.
                    <br/><br/>
                    <b>676 AD</b><br/>
                    The Korean peninsula was mostly unified under the Silla dynasty, which led to a golden age of culture and the arts. The Korean peninsula develops a unique culture separate from China and Japan, and is primarily known for its pottery and cuisine.
                    <br/><br/>
                    <b>1897</b><br/>
                    Joseon is renamed the Korean Empire, which implemented numerous administrative, social, and economical reforms and established royal authority in the early years of the dynasty.
                    <br/><br/>
                    <b>1910</b><br/>
                    Japan annexes Korea with the Japan-Korea Annexation Treaty.
                    <br/><br/>
                    <b>1945</b><br/>
                    Japan unconditionally surrenders to the Allied Forces, and Korea is handed back
                    <br/><br/>
                    <b>1948</b><br/>
                    The General Assembly of the United Nations recognised the Republic of Korea as the sole legal government of Korea.
                    <br/><br/>
                    <b>1950</b><br/>
                    The Korean War begins.
                    <br/><br/>
                    <b>1953</b><br/>
                    The Korean War ends with a promise to adopt a solution for a united Korea in Geneva. No plan is adopted, and since then, North Korea (Democratic People's Republic of Korea) and South Korea (Republic of Korea) have diverged widely.
                </h3>
            </div>
        );
    }
}

export default HistorySection;
