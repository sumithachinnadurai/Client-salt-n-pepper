import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD0S98JkM7AsRlxZUppGhQ_P0QSr0NiLRY",
  authDomain: "my-salt-n-pepper.firebaseapp.com",
  databaseURL: "https://my-salt-n-pepper-default-rtdb.firebaseio.com",
  projectId: "my-salt-n-pepper",
  storageBucket: "my-salt-n-pepper.appspot.com",
  messagingSenderId: "99382135834",
  appId: "1:99382135834:web:c237929b6850e4d29295a3",
  measurementId: "G-1QL8PP5EHL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
