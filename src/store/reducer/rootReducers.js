import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer
})

export default rootReducers