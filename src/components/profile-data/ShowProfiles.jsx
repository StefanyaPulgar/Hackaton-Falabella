import { db } from "../../firebase/firebase";
import { collection, onSnapshot, query} from "firebase/firestore";
import { useEffect, useState } from "react";


 const ShowProfiles = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "dates"));
        onSnapshot(q, (snapshot) => {
          const listData = snapshot.docs.map((documento) => {
            return { ...documento.data(), id: documento.id }
    
          })
          setData(listData);
    
        },
          (error) => {
            console.log(error);
          }
        );
      }, []);
    
      
console.log(data)
  // console.log(data.profile.nombre);
      return (
          <>
    {data.map((documento, index) => (
        <div key={index}>
        <p>
        {documento.profile.nombre}
        </p>
        {documento.events.evento}
        </div>
    ))} 
    </>
      )
}
export default ShowProfiles;