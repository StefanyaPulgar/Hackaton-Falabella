import { db } from "../../firebase/firebase";
import { collection, onSnapshot, query} from "firebase/firestore";
import { useEffect, useState } from "react";


 const ShowProfiles = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "dates"));
        onSnapshot(q, (snapshot) => {
          //console.log('se ejecuto snapshot')
          // console.log(snapshot.docs[0].data());
          const listData = snapshot.docs.map((documento) => {
            //aplico map a todos los elementos de la coleccion
            //por cada elemento de la base de dato quiero que me devuelva
            //y guardes en el arreglo un objeto, documento.data y un id 
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