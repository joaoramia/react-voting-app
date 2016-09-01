import {setEntries, next, vote, INITIAL_STATE} from './core';

//this is for the Redux actions:
export default function reducer(state = INITIAL_STATE, action){
	switch (action.type){
		case 'SET_ENTRIES':
			return setEntries(state, action.entries);
		case 'NEXT':
			return next(state);
		case 'VOTE':
			return state.update('vote',
            voteState => vote(voteState, action.entry));
	}

	//if the reducer doesn't recognize the action, it just returns the current state
	return state;
}