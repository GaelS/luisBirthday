import _ from 'lodash';
import React from 'react';

const MAX_SCORE = 10;
const CTR = 2;
export default class Whack extends React.Component {

    constructor(props) {
        super(props);
        this.img=[];
        this.state = {
            celine : Math.floor(Math.random() * 19),   
            celinePic : Math.ceil(Math.random() * 4),    
            top : 20,
            left : 20,
            height : 20,
            width : 20,
            score : 0,
            ctr : CTR,
            done : false,
        };
    }

    componentDidMount() {
        this.setCeline(); 
        setInterval(() => { 
            if(this.state.done) return;
            let ctr = this.state.ctr - 1;
            this.setState( {
                ctr : ctr < 0 ? 0 : ctr,
            } );
        }, 1000 );
    }
    onClickCeline(){
        this.setCeline();
        let score = this.state.score + 10;
        this.setState( {
            score : score,
            done : score === MAX_SCORE,
        } );
    }

    restart(){
        this.setCeline();
        this.setState( {
            ctr : CTR,
            done : false,
            score : 0,
            celine : Math.floor(Math.random() * 19),   
            celinePic : Math.ceil(Math.random() * 4),    
        } );
    }
    setCeline(){

        let { top, left } = this.img[ this.state.celine ].getBoundingClientRect();
        let width = this.img[this.state.celine].width;
        let height = this.img[this.state.celine].height;
        let axis = Math.random() < 0.5 ? 'X' : 'Y';
        this.setState( {
            top : top + height/2, 
            height : height === 0 ? 30 : height/2,
            left : left + width/2, 
            width : 60, //width === 0 ? 60 : width/2,
            //pic to hide behind
            celine : Math.floor(Math.random() * 19),   
            //celine's face'
            celinePic : Math.ceil(Math.random() * 4),
            axis, 
            translation : ( Math.random() < 0.5 ? -1 : 1 ) * ( axis === 'X' ? width/3 : height/3 ),
            ctr : CTR,
        } );
    }
    render() {
        const S = {
            main: {
                display: 'flex',
                textAlign: 'center',
            },
            celine : {
                position : 'absolute',
                top : `${this.state.top}px`,
                left : `${this.state.left}px`,
                width : `${this.state.width}px`,
                height : `${this.state.height}px`,
                transform : `translate${this.state.axis}(${this.state.translation}px) scale(${ this.state.ctr<5 ? 2 : 1 })`,
                transition: `transform 2s ease-in`,
                cursor: 'pointer',
                zIndex : 1,
            },
            result : {
                position : 'absolute',
                top : '0px',
                left : '0px',
                width : '100vw',
                height : '100vh',
                backgroundColor : 'rgba(255,0,0,0.8)',
                zIndex : 2,
                alignItems : 'center',
                display : 'flex',
                justifyContent : 'center',
                flexDirection : 'column',
            },      
            text: {
                fontFamily: 'Bangers',
                fontSize: '70px',
            },
            smText: {
                fontFamily: 'Bangers',
                fontSize: '45px',
            },
            remainingTime : {
                color : this.state.ctr < 5 ? 'red' : 'black',
            },
        };
        return (
            <div>   
                { 
                    ( this.state.done || this.state.ctr === 0 ) && 
                    <div
                        style={ S.result }
                    >
                        <div
                            style={ S.text }
                        >
                            { this.state.ctr === 0 ? 
                                'Vices : 1 // Céline : 0.':
                                'Tu as retrouvé ton aimée au milieu de tous tes vices.' 
                            }
                        </div>
                        <div
                            style={ S.text }
                        >
                            { this.state.ctr === 0 ? 
                                'L\'amour ne peux pas gagner à tous les coups.':
                                'L\'amour est sauf <3.' 
                            }
                        </div>
                        <div
                            style={ S.text }
                        >
                            { 
                                this.state.ctr === 0 && 
                                <input 
                                    type='button'
                                    onClick={ () => this.restart() }
                                    value='Retry ?'/>
                            } 
                        </div>
                    </div>
                }
                <img 
                    style={ S.celine }
                    src={ `images/whack/celine${ this.state.celinePic }.png` }
                    onClick = { () => this.onClickCeline() }
                />
                <div style={ S.smText }>
                    A wild Céline appears, find her !
                </div>
                <div style={ S.smText }>
                    { `Score : ${ this.state.score } // Temps restant : ` }
                    <span style={ S.remainingTime }>{ this.state.ctr }</span>
                </div>
                <div
                    style={{...S.main, ...{ justifyContent: 'space-around'}}}
                >
                    <img 
                        ref={ (input => { this.img[0] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/party.gif'
                    />
                    <img 
                        ref={ (input => { this.img[1] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/giphy.gif'
                    />
                    <img 
                        ref={ (input => { this.img[2] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/luigi.gif'
                    />
                    <img 
                        ref={ (input => { this.img[3] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/tutos.gif'
                    />
                    <img 
                        ref={ (input => { this.img[4] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/barney.gif'
                    />
                </div>
                <div
                    style={{ ...S.main, ...{ justifyContent : 'center' }} }
                >
                    <img 
                        ref={ (input => { this.img[5] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/spain.gif'
                    />
                    <img 
                        ref={ (input => { this.img[6] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/dead.gif'
                    />
                    <img 
                        ref={ (input => { this.img[7] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/dominos.jpg'
                    />
                    <img 
                        ref={ (input => { this.img[8] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/becks.png'
                    />
                    <img 
                        ref={ (input => { this.img[9] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/bnp.png'
                    />
                </div>
                <div
                    style={{ ...S.main, ...{ justifyContent : 'space-between' }} }
                >
                    <img 
                        ref={ (input => { this.img[10] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/turtle.gif'
                    />
                    <img 
                        ref={ (input => { this.img[11] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/queensday.png'
                    />
                    <img 
                        ref={ (input => { this.img[12] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/celebrate.gif'
                    />
                    <img 
                        ref={ (input => { this.img[13] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/git.gif'
                    />
                    <img 
                        ref={ (input => { this.img[14] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/bruce.gif'
                    />
                </div>
                                <div
                    style={{ ...S.main, ...{ justifyContent : 'space-around' }} }
                >
                    <img 
                        ref={ (input => { this.img[15] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/tron.gif'
                    />
                    <img 
                        ref={ (input => { this.img[16] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/jesus.gif'
                    />
                    <img 
                        ref={ (input => { this.img[17] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/kitsch.gif'
                    />
                    <img 
                        ref={ (input => { this.img[18] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/troll.gif'
                    />
                    <img 
                        ref={ (input => { this.img[19] = input })}
                        style={{ height : '20%' }}
                        src='images/whack/starwars.gif'
                    />
                </div>
            </div>
        );
}
}