import React, { useState } from 'react'
import UploadForm from './uploadform/UploadForm';
import ImageGrid from './ImageGrid';

const Dashboard = () => {

  return (
    <div 
      className="w-100 dashboard-div d-flex flex-column align-items-center"
    >
      <h2 className="dashboard-heading mb-4">Current Pictures</h2>
      <p 
        className="text-secondary"
        style={{letterSpacing: "1px"}}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default Dashboard;
