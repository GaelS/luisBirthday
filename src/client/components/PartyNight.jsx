import React from 'react';

import { danceMessages } from '../danceMessages.js';

import Character from './Character.jsx';
import Light from './Light.jsx';

export default class PartyNight extends React.Component {
    constructor(props){
        super(props);
        let width = window.width;
        console.log(width)
        this.state = {
            dancing : false,
        };

    }
    componentDidMount(){
        window.addEventListener('keydown', e => {
            switch(e.key){
                case 'q' :
                case 'Q': return this.setState( { dancing : true } );
                case 'd' :
                case 'D': return this.setState( { dancing : false } );
                default : return;
            }
        } );
    }
    render(){
        const S = {
            background : {
                position : 'absolute',
                top : '0px',
                left : '0px',
                width : '100vw',
                height : '100vh',
                zIndex : -1,
                filter : 'blur(3px)',
            },
            neon : {
                textShadow: `0 0 10px #fff,
                    0 0 20px #fff,
                    0 0 30px #fff,
                    0 0 40px #ff00de,
                    0 0 70px #ff00de,
                    0 0 80px #ff00de,
                    0 0 100px #ff00de,
                    0 0 150px #ff00de`,
            },
            relief : {
                textShadow: `0 1px 0 #bbb,
                    0 2px 0 #bbb,
                    0 3px 0 #aaa,
                    0 4px 0 #aaa,
                    0 5px 0 #999,
                    0 6px 1px #000,
                    0 0px 3px #000,
                    0 1px 3px #000,
                    0 3px 5px #000,
                    0 5px 10px #000,
                    0 5px 20px #000`,
            },
            text : {
                fontFamily : 'Bangers',
                position : 'relative',
                fontSize : '40px',
            },
            bubble : {
                background : 'url(images/bubble.png)',
                width : '350px',
                height : '250px',
                backgroundSize : '100%',
                textAlign : 'center',
                justifyContent : 'center',
                flexDirection : 'column',
                display : 'flex',
                position : 'absolute',
                top : `${ Math.random() * window.innerHeight / 3 }px`,
                left : `${ 200 + Math.random() * window.innerWidth/ 1.5 }px`,
                transform : `rotate( ${ ( Math.random() < 0.5 ? 1 : -1 ) * Math.random()* 25 }deg )`,
                zIndex: 20,
            },

        };
        let text = `PRESS ${ this.state.dancing ? 'D' : 'Q' }`;
        let index = Math.floor( Math.random() * danceMessages.length );
        return (
            <div>
                <img 
                    style={ S.background } 
                    src='images/club.jpg'
                />
                <div 
                    style={ S.bubble }
                >
                    <p
                        style={ { ...S.text, ...S.relief } }
                    >
                        { danceMessages[ index ] }
                    </p>
                </div>
                <Light 
                    color='blue'
                    left={ 0 }
                    speed={ 1 }
                />
                <Light 
                    color='green'
                    left={ -300 }
                    speed={ 0.5 }
                />
                <Light 
                    color='red'
                    left={ 300 }
                    speed={ 2 }
                />
                <Light 
                    color='yellow'
                    left={ 600 }
                    speed={ 0.3 }
                />  
                <Light 
                    color='green'
                    left={ 500 }
                    speed={ 0.5 }
                />
                <Character 
                    faces={ ['face1.png','face2.png'] }
                    dancing={ this.state.dancing }
                />
            </div>
        )
    }
}