
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBs-vME8jAVQI91W3JAkIPnbIpzjA9w92g",
  authDomain: "reactlinks-263d4.firebaseapp.com",
  projectId: "reactlinks-263d4",
  storageBucket: "reactlinks-263d4.appspot.com",
  messagingSenderId: "340180616642",
  appId: "1:340180616642:web:d391eaeaea42f5502c425b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);

export{auth, db};