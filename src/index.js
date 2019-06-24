import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { makeEnhancer as makeReducersEnhancer } from '@redux-tools/reducers';
import { Provider } from '@redux-tools/reducers-react';
import { identity } from 'ramda';

import {Counter} from './components';

// `makeReducersEnhancer()` is an enhancer just like `applyMiddleware()`, so they're composable!
const store = createStore(identity, makeReducersEnhancer());

render(
	<Provider store={store}>
		<Counter namespace="foo" />
		<Counter namespace="bar" />
		<Counter namespace="baz" />
	</Provider>,
	document.getElementById('root')
);