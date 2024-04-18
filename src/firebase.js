import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
  
const firebaseConfig = {
  apiKey: "AIzaSyBMbnLec3Q3UhDZ_OwD9k6fg6LHKJksvqw",
  authDomain: "netflix-replica-27a5a.firebaseapp.com",
  projectId: "netflix-replica-27a5a",
  storageBucket: "netflix-replica-27a5a.appspot.com",
  messagingSenderId: "305374821509",
  appId: "1:305374821509:web:0366f30ca4f32bc41fbdec"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
  
export { db, auth };
  