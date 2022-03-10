import { doc , deleteDoc } from "firebase/firestore";
import db from "../../src/firebase/firebase"

export  const deleteDoc = async (id) => {
    await deleteDoc(doc(db, 'dates' , id));
 }
