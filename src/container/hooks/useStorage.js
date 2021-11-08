import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../../firebase/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const useStorage = (file, currentUser) => {
  let [progress, setProgress] = useState(0);
  let [error, setError] = useState(null);
  let [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    let storageRef = ref(projectStorage, file.name);
    let uploadTask = uploadBytesResumable(storageRef, file)

    let imagesCollectionRef = collection(projectFirestore, "images");

    let unsub = uploadTask.on('state_changed', (snap) => {
     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100 
     setProgress(percentage);
    }, (error) => {
      setError(error);
    }, async () => {
      let url = await getDownloadURL(uploadTask.snapshot.ref);
      await addDoc(imagesCollectionRef, {imageUrl: url, createdAt: timeStamp, user_id: currentUser.uid })
      setImageUrl(url);
    })

    return unsub;

  }, [file]);

  return {progress, imageUrl, error};
}

export default useStorage;