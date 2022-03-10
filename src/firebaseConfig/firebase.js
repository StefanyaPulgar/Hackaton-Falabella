
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc , deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA25iI-eWjyZ2t-wqldNAbEYrcMMtRtlOI",
  authDomain: "fallabella-hackaton.firebaseapp.com",
  projectId: "fallabella-hackaton",
  storageBucket: "fallabella-hackaton.appspot.com",
  messagingSenderId: "716941929734",
  appId: "1:716941929734:web:979a4248eec66d27878287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

 export const addData = async (e , setProfileData) => {
  e.preventDefault();
  console.log("funcionando addData");
  try {
      const docRef = await addDoc(collection(db, 'dates'), {
          profile: {...profileData},
          events :{...eventData}
      
          
      });
      console.log('Document written with ID: ', docRef.id);
  } catch (e) {
      console.error('Error adding document: ', e);
  }
  setProfileData({});
}

// const deleteDoc = async (id) => {
//   await deleteDoc(doc(db, 'dates' , id));
// }


