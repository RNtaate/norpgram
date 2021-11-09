import React from 'react';
import useFirestore from './hooks/useFirestore';
import { useAuth } from '../context/AuthContext';

const ImageGrid = ({ setSelectedImg }) => {

  let { currentUser } = useAuth();
  let { docs } = useFirestore("images", currentUser);
  console.log(docs);

  return (
    <div className="img-grid-wrapper">
      {docs && docs.map( doc => {
        return (
          <div className="img-wrapper" key={doc.id} onClick={() => setSelectedImg(doc.imageUrl)}>
            <img src={doc.imageUrl} alt="Nice Image"/>
          </div>
        )
      })}
    </div>
  )
}

export default ImageGrid;
