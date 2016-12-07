import React from 'react';

export default class PartyNight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dancing : false,
        }
    }
    componentDidMount(){
        window.addEventListener('keydown', e => {
            switch(e.key){
                case 'q' :
                case 'Q': return this.setState( { dancing : true } );
                case 'd' :
                case 'D': return this.setState( { dancing : false } );
                default : return;
            }
        } );
    }
    render(){
        const S = {
            background : {
                background : "url('images/shop.png')",
                width : '100vw',
                height : '100vh' 
            },
            head : {

            }, body : {
                background : `url('images/${ this.state.dancing ? 'body1.jpg' : 'body2.jpg' }`,
                left : '50px',
                right : '50px', 
            }
        };
        let text = `PRESS ${ this.state.dancing ? 'D' : 'Q' }`;
        return <div
            style={ S.background }
        >
        <p>{text}</p>
        <div>
            <div style={ S.head }></div>
            <div style={ S.body }></div>
        </div>
        </div>
    }
}