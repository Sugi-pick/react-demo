import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBy5Tl4UeJ9XPXWTdoiLTHGfbd1TUGWz2s',
	authDomain: 'crwn-db1-ce875.firebaseapp.com',
	databaseURL: 'https://crwn-db1-ce875.firebaseio.com',
	projectId: 'crwn-db1-ce875',
	storageBucket: 'crwn-db1-ce875.appspot.com',
	messagingSenderId: '879451512544',
	appId: '1:879451512544:web:a1e38eb9d42646aef1ba85',
	measurementId: 'G-W86GT5P3P9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account'
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			});
		} catch (error) {
			console.log('error', error);
		}
	}
	return userRef;
};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
