import React from 'react';

import Radium from 'radium';

export default class Character extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render(){
        const S = {
            bubble : {
                background : 'url(images/bubble.png)',
                width : '500px',
                height : '400px',
                backgroundSize : '100%',
                textAlign : 'center',
                justifyContent : 'center',
                flexDirection : 'column',
                display : 'flex',
                position : 'absolute',
                top : `${ Math.random() * window.innerHeight / 4 }px`,
                left : `${ 200 + Math.random() * window.innerWidth/ 3 }px`,
                transform : `rotate( ${ ( Math.random() < 0.5 ? 1 : -1 ) * Math.random()* 25 }deg )`,
                zIndex: 20,
            },
            neon : {
                textShadow: `0 0 10px #fff,
                    0 0 20px #fff,
                    0 0 30px #fff,
                    0 0 40px #ff00de,
                    0 0 70px #ff00de,
                    0 0 80px #ff00de,
                    0 0 100pqdx #ff00de,
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
                fontSize : '80px',
            },
        };
        let index = Math.floor( Math.random() * this.props.danceMessages.length );
        return (
            <div 
                style={ S.bubble }
            >
                <p
                    style={ { ...S.text, ...S.relief } }
                >
                    { this.props.danceMessages[ index ] }
                </p>
            </div>
        );
    }
}