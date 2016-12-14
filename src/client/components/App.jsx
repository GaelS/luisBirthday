import React from 'react';
import { connect } from 'react-redux';
import PartyNight from './PartyNight.jsx';

class App extends React.Component {
    
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
	    		<PartyNight />
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
