import React from 'react';
import { connect } from 'react-redux';
import PartyNight from './party/PartyNight.jsx';
import Wreck from './wreck/Wreck.jsx';
import Whack from './whack/Whack.jsx';
import Skate from './skate/Skate.jsx';
export class App extends React.Component {
    
    constructor(props){
	    super(props);
        this.state = {
            app : 0,
        }
    }
    componentDidMount(){
        window.addEventListener('keydown', (e) => {
            if(e.keyCode == 27){
                let app = this.state.app + 1;
                this.setState({
                   app : app > 3 ? 0 : app,
                })
            }
        } )
    }

    render(){
        const S = {
            canvas : {
                width : '100%',
                height : '100%',
                touchAction : 'none',
            },
        };
    	return (
    		<div>
                { this.state.app === 0 && <PartyNight /> }
                { this.state.app === 1 && <Wreck /> }
                { this.state.app === 2 && <Whack /> }
                { this.state.app === 3 && <Skate /> }
    		</div>
    	);
    }
};

const mapStateToProps = ( state ) => {
    return {};
};

const mapDispatchToProps = ( dispatch ) => {
    return {
    };
};

export default connect(
     mapStateToProps,
    mapDispatchToProps,
)(App);
