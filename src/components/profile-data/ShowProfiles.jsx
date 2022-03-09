import { db } from "../../firebase/firebase";
import { collection, onSnapshot, query} from "firebase/firestore";
import { useEffect, useState } from "react";


 const ShowProfiles = () => {

    const [datos , cambiarDatos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "dates"));
        onSnapshot(q, (snapshot) => {
          //console.log('se ejecuto snapshot')
          // console.log(snapshot.docs[0].data());
          const listaNombres = snapshot.docs.map((documento) => {
            //aplico map a todos los elementos de la coleccion
            //por cada elemento de la base de dato quiero que me devuelva
            //y guardes en el arreglo un objeto, documento.data y un id 
            return { ...documento.data(), id: documento.id }
    
          })
          cambiarDatos(listaNombres);
    
        },
          (error) => {
            console.log(error);
          }
        );
      }, []);
  
      return (
          <>
    {datos.map((list, index) => (
        <div key={index}>
        <p>{list.nombre}</p>
        </div>
    ))}
    </>
      )
}
export default ShowProfiles;