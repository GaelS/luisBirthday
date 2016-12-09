import React from 'react';
import Character from './Character.jsx';
import Light from './Light.jsx';

export default class PartyNight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dancing : false,
        };
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
                height : '100vh',
            },
        };
        let text = `PRESS ${ this.state.dancing ? 'D' : 'Q' }`;
        return <div>
        <p>{text}</p>
        <Light 
            color='blue'
            top={ 0 }
            left={ 0 }
        />
        <Light 
            color='green'
            top={ 0 }
            left={ -300 }
        />
        <Light 
            color='red'
            top={ 0 }
            left={ 300 }
        />
        <Light 
            color='yellow'
            top={ 0 }
            left={ 600 }
        />
        <Character 
            bodies={ ['body1.jpg','body2.jpg'] }
            faces={ ['face1.png','face2.png'] }
            dancing={ this.state.dancing }
        />
        </div>
    }
}