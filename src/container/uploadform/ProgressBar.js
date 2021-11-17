import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

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
    <motion.div
      className="progress-bar-div d-flex flex-column justify-content-center"
      initial={{width: 0}}
      animate={{width: progress + "%"}}
    >
    </motion.div>
  )
}

export default ProgressBar;
