import React, {useState, useEffect} from 'react';
import { projectFirestore } from '../../firebase/firebase.config';
import { collection, onSnapshot, query, orderBy, where } from '@firebase/firestore';

const useFirestore = (collectionName, currentUser) => {
  let [docs, setDocs] = useState([])

  let imagesCollectionRef = collection(projectFirestore, "images");
  let qr = query(imagesCollectionRef, orderBy('createdAt', 'desc'));

  useEffect(() => {
    let unsub = onSnapshot(qr, (snap) => {
      let documents = [];
      snap.forEach( doc => {
        documents.push({...doc.data(), id: doc.id});
      });

      setDocs(documents);
    })

    return unsub;
  }, [collectionName])

  return { docs };
}

export default useFirestore;
