import React from 'react';
import Radium from 'radium';

@Radium
export default class Light extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle : 0, isMounted : false };
    }

    componentDidMount(){
        this.setState({ isMounted : true } );
        setInterval( () => {
            let factor = Math.random();
            let angle =  (factor < 0.5 ? 1 : -1) * factor * 90;
            this.state.isMounted && this.setState( {
                angle,
            } );
        }, this.props.speed * 1000 );
    }
    componentWillUnMount(){
        this.setState( {
            isMounted : false,
         } );
    }
    render() {
        const S = {
            light : {
                position : 'absolute',
                left : `${ this.props.left }px`,
                top : '-10px',
                opacity : '0.8',
                transformOrigin : '50% top',
                transform : `rotate( ${ this.state.angle }deg )`,
                height: '150%',
                transition : `transform ${ this.props.speed }s ease-out`,
                zIndex: 10,
            },
        }
        return <img
            style={ S.light } 
            src={ `images/${ this.props.color }_light.png` }
        />
    }
}