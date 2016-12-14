import React from 'react';

import { bodies } from '../danceMessages.js';

import Radium from 'radium';


export default class Character extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const S = {
            body : {
                width : '400px',
                height : '400px',
                marginTop : '-120px',
            },
            face : {
                width : '200px',
                height : '200px',
            }, 
            character : {
                display : 'flex',
                flexDirection : 'column',
                alignItems: 'center',
                justifyContent : 'center',
                marginTop : '130px',
            }
        };
         return (
             <div 
                style= { S.character }
            >
                <img
                    style={ S.face } 
                    src={ `images/faces/${ this.props.faces[ this.props.dancing ? 0 : 1 ] }` } 
                />
                <img
                    style={ S.body } 
                    src={ `images/bodies/${ bodies[  this.props.dancing ? 0 : 1 ] }` } 
                />
            </div>
         );
    }
}