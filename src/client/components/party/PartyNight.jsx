import React from 'react';

import { danceMessages } from '../../danceMessages.js';

import Character from './Character.jsx';
import Light from './Light.jsx';
import Bubble from './Bubble.jsx';

import Radium from 'radium';

export default class PartyNight extends React.Component {
    constructor(props){
        super(props);
        let width = window.width;
        this.state = {
            dancing : false,
            score : 0,
        };

    }
    componentDidMount(){
        window.addEventListener('keydown', e => {
            let score = this.state.score + 100;
            switch(e.key){
                case 'q' :
                case 'Q': return this.setState( { 
                    dancing : true,
                    score,
                } );
                case 'd' :
                case 'D': return this.setState( { 
                    dancing : false,
                    score, 
                } );
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
            score : {
                fontFamily : 'Bangers',
                position : 'relative',
                fontSize : '100px',
                color : 'white',
            },
            luis : {
                display : 'flex',
                flexDirection : 'row'
            }
        };
        let text = `PRESS ${ this.state.dancing ? 'D' : 'Q' }`;
        return (
            <div>
                <div 
                    style= { S.score }
                >
                   { `Score : ${ this.state.score }` }
                </div>
                <img 
                    style={ S.background } 
                    src='images/club.jpg'
                />
                <Bubble
                    danceMessages={ danceMessages } 
                />
                <div 
                    style={S.luis}
                >
                    <Character 
                        faces={ ['luis1.png','luis2.png'] }
                        dancing={ this.state.dancing }
                        root = 'images'
                    />
                    <Character 
                        faces={ ['luis2.png','luis1.png'] }
                        dancing={ this.state.dancing }
                        root = 'images'
                    />
                    <Character 
                        faces={ ['luis1.png','luis2.png'] }
                        dancing={ this.state.dancing }
                        root = 'images'
                    />
                    <Character 
                        faces={ ['luis2.png','luis1.png'] }
                        dancing={ this.state.dancing }
                        root = 'images'
                    />
                    <Character 
                        faces={ ['luis1.png','luis2.png'] }
                        dancing={ this.state.dancing }
                        root = 'images'
                    />
                </div>
                <Light 
                    color='yellow'
                    left={ -600 }
                    speed={ 1 }
                />
                <Light 
                    color='green'
                    left={ -300 }
                    speed={ 2 }
                />
                <Light 
                    color='blue'
                    left={ 0 }
                    speed={ 3 }
                />
                <Light 
                    color='red'
                    left={ 300 }
                    speed={ 2 }
                />
                <Light 
                    color='yellow'
                    left={ 600 }
                    speed={ 1 }
                />  
                <Light 
                    color='green'
                    left={ 500 }
                    speed={ 2 }
                />
            </div>
        )
    }
}

/*

*/