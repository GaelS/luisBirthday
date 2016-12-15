import React from 'react';
import { connect } from 'react-redux';
import PartyNight from './party/PartyNight.jsx';
import Wreck from './wreck/Wreck.jsx';
import Whack from './whack/Whack.jsx';
import Skate from './skate/Skate.jsx';
export class App extends React.Component {
    
    constructor(props){
	    super(props);
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
	    		<Skate />
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
