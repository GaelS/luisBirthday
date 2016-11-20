import React from 'react';
import { createGuy, launchGuyCreation, startBuildingCreation } from '../flux/actions.js';
import * as characterTypes from '../types/characters.js';
import * as buildingTypes from '../types/buildings.js';
import { connect } from 'react-redux';
import R from 'ramda';

const Menu = ( { guys, startBuildingCreation, launchGuyCreation, buildingButtons, characterButtons } ) => {
	const S = {
		menu : {
			position : 'absolute',
			bottom : '0px',
		},
	};
	return (
		<div
			style={ S.menu }
		>
			{ characterButtons.length !== 0 && 
				characterButtons.map(type => 
					<input
						key={ type }
						type='button'
						value={ `create a ${ type.toLowerCase() }` }
						onClick={ () => launchGuyCreation( type ) }
					/>
				)	
			}
			{ buildingButtons.length !== 0 && 
				buildingButtons.map( type => 
					<input
						key={ type }
						type='button'
						value={ `create a ${ type.toLowerCase() }` }
						onClick={ () => startBuildingCreation( type ) }
					/>
				)	
			}
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		launchGuyCreation : (type) => dispatch( launchGuyCreation( type ) ),
		startBuildingCreation : (type) => dispatch( startBuildingCreation(type) ),
	}
};

const mapStateToProps = (state) => {
	return {
		selectedMeshes : state.selectedMeshes.map(m => state.scene.getMeshByID(m)),
	};
};
const mergeProps = (stateProps, dispatchProps, ownProps) => {
	let getButtonsFromMeshes = (arrayOfTypes, type) => {
		return _.chain(stateProps.selectedMeshes)
				.map(m => !!arrayOfTypes[m.type]?arrayOfTypes[m.type][type]:null )
				.flatten()
				.uniq()
				.compact()
				.value();
	};
	return {
		buildingButtons : getButtonsFromMeshes(characterTypes, 'buildings'),
		characterButtons : getButtonsFromMeshes(buildingTypes, 'characters'),
		startBuildingCreation : dispatchProps.startBuildingCreation,
		launchGuyCreation : dispatchProps.launchGuyCreation,		
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Menu);
