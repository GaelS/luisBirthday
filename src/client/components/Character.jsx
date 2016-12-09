import React from 'react';

import { bodies } from '../danceMessages.js';

import Radium from 'radium';

@Radium
export default class Character extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const S = {
            body : {
                width : '100px',
                height : '100px',
            },
            face : {
                width : '50px',
                height : '50px',
            }, 
            character : {
                display : 'flex',
                flexDirection : 'column',
                position : 'absolute',
                top : '50%',
                left : '50%',
            }
        };
         return (
             <div 
                style= { S.character }
            >
                <img
                    style={ S.face } 
                    src={ `images/dance${ this.props.faces[ this.props.dancing ? 0 : 1 ] }` } 
                />
                <img
                    style={ S.body } 
                    src={ `images/${ bodies[ Math.floor( Math.random() * bodies.length ) ] }` } 
                />
            </div>
         );
    }
}