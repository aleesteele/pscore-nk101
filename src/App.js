import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
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
                </ScrollableAnchor>
                <ScrollableAnchor id={'section3'}>
                    <div className="section3">
                        <h1 className="App-section-title">Economy and Transportation</h1>
                        <h3>
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
                </ScrollableAnchor>
                <ScrollableAnchor id={'section4'}>
                    <div className="section4">
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
                </ScrollableAnchor>
                <ScrollableAnchor id={'section5'}>
                    <div className="section5">
                        <h1 className="App-section-title">People and Politics</h1>
                        <h3>
                            Kim Jung Un and First Lady Ri Sol Ju are the leading fashion icons in North Korea. Fashion trends are closely related to the state’s ideology.
                            <br/><br/>
                            The spread of South Korean pop culture among the people cannot be stopped. Many young North Koreans prefer to adopt South Korean hairstyles they see in the dramas or movies.
                            <br/><br/>
                            Children wear crimson neckties once they become members of the chosun young pioneer corps.
                            <br/><br/>
                            Citizens are required to wear badges displaying at least one of the North Korean leaders over their hearts whenever they leave home.
                            <br/><br/>
                            The law requires every home to hang portraits of the Great Leaders Kim Il-Sung and the Dear Leader Kim Jong-Il. Inspectors pay visits to make sure the portraits are kept in good condition. If a fire breaks out in a home, saving the portraits is the first priority.
                            <br/><br/>
                            The parents and teachers of a 14 year old girl, who died while trying to save the portraits from floodwater, were given awards. If the girl did not protect the portraits, she would have been arrested and sent to prison.
                            <br/><br/>
                            Citizens are obligated to join different social organizations that run primarily for political propaganda. People are separated based on their gender, age group, job position, etc.
                            <br/><br/>
                            Adults are required to participate in regular criticism sessions where they must admit to committing some improper acts and then are criticized by other members.
                            <br/><br/>
                            The North Korean People worship the Kim family and regime out of fear, no sincerity. One popular song among North Koreans about three bears mocks the three “fat” leader.
                            <br/><br/>
                            KKotjebi is the North Korean term coined after the Korean War to describe the thousands of war orphans who roamed the streets in search of food and shelter.
                            <br/><br/>
                            Defectors are automatically given South Korean citizenship. To avoid stereotypes and discrimination, South Koreans refer to North Korean defectors as “new people”.
                            <br/><br/>
                            70% of defectors are women. Women are able to escape more easily than men because of the high demand for North Korean women in China. Many become victims of sex trafficking or are bought and sold as wives. Some women ask brokers to sell them, believing life in China under any condition would be better than life in North Korea.
                            <br/><br/>
                            The price of a cow in North Korea is about the same as one North Korean woman, depending on her age and appearance.
                            <br/><br/>
                            Brokers lie women, telling them their families sold them to China, to make them feel hopeless and keep them from going back to North Korea.
                            <br/><br/>
                            From 2002-2014, the North and South Korean governments have help family reunions to reunite family members separated by the Korean War.
                            <br/><br/>
                            Citizens must vote in national elections are they will be accused of being a reactionary. North Koreans living illegally in China risk going back to vote so their families don’t get punished. Ballots have only one option ad votes swing 100% for the leader. There is a “yes” box and  a “no” box for placing the ballots, sometimes only a “yes” box.
                            <br/><br/>
                            Patients can’t receive treatment unless they pay for their own medicine and surgical equipment, from anesthetics to pain relievers.
                            <br/><br/>
                            Hospitals use washed glass bottles in lieu of ringer lactate bottles and many people take one opium drug as a cure-all.
                            <br/><br/>
                            The military holds a dominant position in the government structure and strengthens the regime’s ability to rule firmly. The typical draft age is 17 years. Mandatory military service for all men is 10 years. Mine work given for those in bad health is 5 years.
                            <br/><br/>
                            Youth take part in milary reservist training in case of wartime mobilization. Boys and girls between the ages of 14 and 17 are trained in firing machine guns and throwing grenades. Adult males must partake in annual military drills after completing military service.
                            <br/><br/>
                            In 2012, an estimated 6,000 cyber terrorists were reported working in North Korea as a part of their National Defense Committee.
                            <br/><br/>
                            The regime publicly executes citizens for a variety of crimes like attempting to defect, watching a South Korean movie, criticizing the government and stealing food.
                            <br/><br/>
                            Most public executions are carried out by firing squad or hanging. Many prisoners are so heavily tortured they appear to be already dead before their executions. Oftentimes, whole communities, including children, are brought out to watch public executions, which are designed to instill fear among the people.
                            <br/><br/>
                            Between 80,000 and 120,000 people are currently detained in four large political prison camps. They are imprisoned without trial for political offenses. Many were not guilty of any crime but were related to someone who was.
                            <br/><br/>
                            Torture, infanticide, starvation, execution and rape are widespread. The only way out is to escape or die.

                            Sentences in labor camps are shorter than political camps but living conditions are equally bad. Prisoners work 15 hours per day and are required to attend re-education classes after work hours. If they do not meet their daily quota, they are beaten.
                        </h3>
                    </div>
                </ScrollableAnchor>
            </div>
        </div>
    );
    }
}

export default App;
