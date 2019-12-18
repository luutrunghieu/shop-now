import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBRUgNOBR6aqvFLtH_G-seElZuwzAKYzuk',
  authDomain: 'shop-now-2fb74.firebaseapp.com',
  databaseURL: 'https://shop-now-2fb74.firebaseio.com',
  projectId: 'shop-now-2fb74',
  storageBucket: 'shop-now-2fb74.appspot.com',
  messagingSenderId: '889904088843',
  appId: '1:889904088843:web:691b565242a8e2e1b2840e',
  measurementId: 'G-CJE11NV854',
};
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

export const firestore = firebase.firestore();
export default firebase;
