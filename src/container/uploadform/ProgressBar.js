import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import { useAuth } from '../../context/AuthContext';

const ProgressBar = ({file, setFile}) => {

    let { currentUser } = useAuth();
    let {progress, imageUrl} = useStorage(file, currentUser);

    console.log({progress, imageUrl});

    useEffect(() => {
      if(imageUrl) {
        setFile(null);
      }
    }, [imageUrl])

  return (
    <div
      className="progress-bar-div d-flex flex-column justify-content-center"
      style={{width: progress + "%"}}
    >
    </div>
  )
}

export default ProgressBar;
