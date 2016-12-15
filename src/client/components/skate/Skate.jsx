import _ from 'lodash';
import React from 'react';
import Character from '../party/Character.jsx';

const TIME = 10;

export default class Skate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            luis:1,
            top : 10,
            translate : 0,
            end : false,
            first : true,
        };
    }
    componentDidMount(){
        window.addEventListener('keydown', (e) => {
            if (this.state.first) {
                setTimeout(() => {
                    this.setState( { visible : true } );
                }, (TIME + 1)* 1000)
            }

            let top = e.key === 'ArrowUp' ? this.state.top - 10 : this.state.top;
            top = e.key === 'ArrowDown' ? this.state.top + 10 : top;
            this.setState( {
                top,
                luis : Math.random()<0.5 ? 1 : 2,
                translate : -6300,
                first : false,
            } );
        } );
    }

    render() {
        const S = {
            back: {
                position: 'absolute',
                bottom : '0px',
                left : '0px',
                transform : `translateX(${ this.state.translate }px)`,
                transition : `transform ${ TIME }s linear`,
                backgroundColor : 'lightblue',
            },
            body : {
                width : '400px',
                height : '400px',
                marginTop : '-120px',
            },
            face1 : {
                width : '100px',
                height : '100px',
                marginLeft : '-145px',
                marginBottom : '40px',
            }, 
            face2 : {
                width : '100px',
                height : '100px',
                marginLeft : '-120px',
                marginBottom : '40px',
            }, 
            character : {
                display : 'flex',
                flexDirection : 'column',
                alignItems: 'center',
                justifyContent : 'center',
                marginTop : '130px',
                position : 'absolute',
                top : this.state.top,
                transform : this.state.visible ? 'rotate(36000deg)' : '',
                transition : 'transform 200s linear',

            },
            gif : {
                position : 'absolute',
                top : '250px',
                left : '370px',
                display : this.state.visible ? 'block' : 'none'
            },
            gifDance : {
                position : 'absolute',
                top : '300px',
                left : '900px',
                display : this.state.visible ? 'block' : 'none'
            },
            gifCotillons : {
                position : 'absolute',
                top : '500px',
                left : '600px',
                display : this.state.visible ? 'block' : 'none'
            },
            gifCat : {
                position : 'absolute',
                top : '500px',
                left : '380px',
                height : '250px',
                display : this.state.visible ? 'block' : 'none'
            },
            gifPokemon : {
                position : 'absolute',
                top : '100px',
                left : '900px',
                height : '200px',
                display : this.state.visible ? 'block' : 'none'
            },
            gifSheeps : {
                position : 'absolute',
                top : '0px',
                left : '0px',
                height : '200px',
                display : this.state.visible ? 'block' : 'none'
            },
            text: {
                fontFamily: 'Bangers',
                fontSize: '70px',
                position : 'absolute',
                top : '1Opx',
                zIndex : '3',
                left : '30%',
            },
        };
        return (
            <div> 
                <div style={ S.text } >Ride to your 30's dear Luis !!!</div>
                <img 
                    style={ S.back }
                    src={ `images/skate/scrolling.png` }
                />
                <img 
                    style={ S.gif }
                    src={ `images/skate/firework.gif` }
                />
                <img 
                    style={ S.gifDance }
                    src={ `images/skate/dance.gif` }
                />
                <img 
                    style={ S.gifCotillons }
                    src={ `images/skate/cotillons.gif` }
                />
                <img 
                    style={ S.gifCat }
                    src={ `images/skate/cat.gif` }
                />
                <img 
                    style={ S.gifSheeps }
                    src={ `images/skate/sheeps.gif` }
                />
                <img 
                    style={ S.gifPokemon }
                    src={ `images/skate/pokemon.gif` }
                />
                 <div 
                    style= { S.character }
                >
                    <img
                        style={ S[`face${ this.state.luis }` ] } 
                        src={ `images/skate/luis${ this.state.luis }.png` } 
                    />
                    <img
                        style={ S.body } 
                        src={ `images/skate/body.png` } 
                    />
                </div>
            </div>
        );
    }
}