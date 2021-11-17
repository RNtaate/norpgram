import React from 'react';
import useFirestore from './hooks/useFirestore';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {

  let { currentUser } = useAuth();
  let { docs } = useFirestore("images", currentUser);
  console.log(docs);

  return (
    <div className="img-grid-wrapper">
      {docs && docs.map( doc => {
        return (
          <motion.div
            className="img-wrapper"
            key={doc.id}
            onClick={() => setSelectedImg(doc.imageUrl)}
            layout
            whileHover={{opacity: 1}}
          >
            <motion.img
              src={doc.imageUrl} alt="Nice Image"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 2}}
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default ImageGrid;
