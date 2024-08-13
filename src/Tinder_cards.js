import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Mark Zuckerberg',
            url: 'https://www.biography.com/.image/t_share/MTY2MzY2NzY0NTUzNzM3NjY1/mark-zuckerberg_gettyimages-101474378.jpg'
        },
        {
            name: 'Sundar Pichai',
            url: 'https://www.biography.com/.image/t_share/MTY2MjEwOTM5ODg2MTYzMDI0/sundar-pichai_1114235570.jpg'
        },
        // Add more people as needed
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing ' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
