import _ from 'lodash';
import React from 'react';

export default class Whack extends React.Component {

    constructor(props) {
        super(props);
        this.img=[];
        this.state = {
            celine : Math.floor(Math.random() * 6),   
            celinePic : Math.ceil(Math.random() * 4),    
            top : 20,
            left : 20,
            height : 20,
            width : 20,
        };
    }

    componentDidMount() {
        this.setCeline(); 
    }
    onClickCeline(){
        console.log('click');
        this.setCeline();
    }
    setCeline(){

        let { top, left } = this.img[ this.state.celine ].getBoundingClientRect();
        let width = this.img[this.state.celine].width;
        let height = this.img[this.state.celine].height;
        let axis = Math.random() < 0.5 ? 'X' : 'Y';
        this.setState( {
            top : top + height/2, 
            height : height === 0 ? 20 : height/2,
            left : left + width/2, 
            width : width === 0 ? 20 : width/2,
            celine : Math.floor(Math.random() * 6),   
            celinePic : Math.ceil(Math.random() * 4),
            axis, 
            translation : ( Math.random() < 0.5 ? 1 : -1 ) * ( axis === 'X' ? width : height ),
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
                transform : `translate${this.state.axis}(${this.state.translation}px)`,
                transition: `transform 1s ease-in`,
                zIndex : -1,
            },
        };
        console.log(this.state.celine)
        return (
            <div 
                style={ { margin: '100px' } }
            >   
                <img 
                    style={ S.celine }
                    src={ `images/whack/celine${ this.state.celinePic }.png` }
                    onClick = { () => this.onClickCeline() }
                />
                <div
                    style={{...S.main, ...{marginBottom : '50px', justifyContent: 'space-around', }}}
                >
                    <img 
                        ref={ (input => { this.img[0] = input })}
                        style={{ height : '200px' }}
                        src='images/whack/giphy.gif'
                    />
                    <img 
                        ref={ (input => { this.img[1] = input })}
                        style={{ height : '200px' }}
                        src='images/whack/luigi.gif'
                    />
                </div>
                <div
                    style={{ ...S.main, ...{ justifyContent : 'center' }} }
                >
                    <img 
                        ref={ (input => { this.img[2] = input })}
                        style={{ height : '200px' }}
                        src='images/whack/dominos.jpg'
                    />
                    <img 
                        ref={ (input => { this.img[3] = input })}
                        style={{ height : '200px' }}
                        src='images/whack/becks.png'
                    />
                </div>
                <div
                    style={{ ...S.main, ...{ justifyContent : 'space-between' }} }
                >
                    <img 
                        ref={ (input => { this.img[4] = input })}
                        style={{ height : '200px' }}
                        src='images/whack/fixie.jpg'
                    />
                    <img 
                        ref={ (input => { this.img[5] = input })}
                        style={{ height : '200px' }}
                        src='images/whack/git.gif'
                    />
                </div>
            </div>
        );
}
}