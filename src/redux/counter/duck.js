import { makeActionTypes, makeConstantActionCreator, makeReducer } from '@redux-tools/actions'

export const ActionTypes = makeActionTypes('counter', ['INCREMENT', 'DECREMENT', 'CLEAR'])

export const increment = makeConstantActionCreator(ActionTypes.INCREMENT)
export const decrement = makeConstantActionCreator(ActionTypes.DECREMENT)
export const clear = makeConstantActionCreator(ActionTypes.CLEAR)

export default makeReducer([
		[ActionTypes.INCREMENT, count => count + 1],
		[ActionTypes.DECREMENT, count => count - 1],
		[ActionTypes.CLEAR, count => 0]
	],
	0)