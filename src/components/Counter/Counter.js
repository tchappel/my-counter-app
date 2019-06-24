import React from 'react'
import { o } from 'ramda'
import { withReducers, namespacedConnect } from '@redux-tools/reducers-react'

import countReducer, { increment, decrement, clear } from '../../redux/counter/duck'

const Counter = ({count, increment}) => (
	<React.Fragment>
		<div>{ count }</div>
		<button onClick={ increment }>Increment</button>
		<button onClick={ decrement }>Decrement</button>
		<button onClick={ clear }>Clear</button>
	</React.Fragment>
)

const mapStateToProps = namespacedState => ({count: namespacedState.count})

const mapDispatchToProps = {increment, decrement, clear}

const enhance = o(
	withReducers({count: countReducer}), // This handles the asynchronous reducer injection.
	namespacedConnect(mapStateToProps, mapDispatchToProps) // This is just like `connect` from react-redux
)

export default enhance(Counter)