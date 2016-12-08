import React from 'react';
export default class Light extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const S = {
            light : {
                position : 'absolute',
                left : '0px',
                top : '0px',
                opacity : '0.4',
                
            },
        }
        return <img
            style={ S.light } 
            src={ `images/${ this.props.color }_light.png` }
        />
}
}