export function setState(state) {
	return {
		type: 'SET_STATE',
		state
	};
}

export function vote(entry) {
	return {
		met: {remote: true},
		type: 'VOTE',
		entry
	};
}

export function next() {
	return {
		meta: {remote: true},
		type: 'NEXT'
	};
}