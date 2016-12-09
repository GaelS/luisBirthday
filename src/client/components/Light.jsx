import React from 'react';
export default class Light extends React.Component {
    constructor(props) {
        super(props);
        this.state = { angle : 0 };
    }

    componentDidMount(){
        setInterval( () => {
            let factor = Math.random() * 4;
            let angle =  this.state.angle + factor;
            this.setState( {
                angle,
            } );
        }, 50 );
    }
    render() {
        const S = {
            light : {
                position : 'absolute',
                left : `${ this.props.left }px`,
                top : `${ this.props.top }px`,
                opacity : '0.8',
                transformOrigin : '50% top',
                transform : `rotate( ${ this.state.angle }deg )`,
                height: '100%',
            },
        }
        return <img
            style={ S.light } 
            src={ `images/${ this.props.color }_light.png` }
        />
}
}