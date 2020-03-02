import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3CH3pc2wMTWMwcphdPscKa4RMCU37mvA",
    authDomain: "ws-shop-db.firebaseapp.com",
    databaseURL: "https://ws-shop-db.firebaseio.com",
    projectId: "ws-shop-db",
    storageBucket: "ws-shop-db.appspot.com",
    messagingSenderId: "864486010786",
    appId: "1:864486010786:web:312164d2910879b6bb8cfb",
    measurementId: "G-6Q41YM32Z1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const{displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            })
        }catch(error){
            console.log('error creating user', error.message);
        }

    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;