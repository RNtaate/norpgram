import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import * as styles from './UploadForm.module.css';

const UploadForm = () => {

  let [file, setFile] = useState(null);
  let [error, setError] = useState('');

  let handleImageChange = (e) => {
    let selected = null;
    selected = e.target.files[0];

    if (selected) {
      setError('')
      console.log("File", selected)
      setFile(selected);
    }
    else{
      setFile(null);
      console.log("You canceled the selection");
      setError('Please select an image file');
    }
  }

  return (
    <div className="w-100">
      <form className="d-flex flex-column align-items-center">
        <input type="file" accept="image/*" id="image-file" onChange={handleImageChange} className={styles.image_input}/>
        <label htmlFor="image-file" className={styles.image_label}>
          <i className="fas fa-plus-circle"></i>
        </label>
        <div>
          {error && <Alert variant="danger" size="sm">{error}</Alert>}
          {file && <p className="text-info">{file.name}</p>}
        </div>
      </form>
    </div>
  )
}

export default UploadForm;
