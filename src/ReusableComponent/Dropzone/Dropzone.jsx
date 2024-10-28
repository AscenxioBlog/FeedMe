import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone({ onFileDrop }) {
  const onDrop = useCallback(acceptedFiles => {
    console.log('Accepted files:', acceptedFiles); // Log accepted files
    onFileDrop(acceptedFiles); // Pass the dropped files to the parent component
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'], // Add more formats if needed
    },
    multiple: false // Restrict to single file if needed 
  });

  return (
    <div {...getRootProps()} style={styles.dropzone(isDragActive)}>
      <input {...getInputProps()} name='restaurantImage'/>
      <div className="h-[180px] w-full flex justify-center items-center">
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Drag 'n' drop restaurant image here, or click to select</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  dropzone: (isDragActive) => ({
    border: '2px dashed #cccccc',
    height: '180px',
    width: '80%',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease',
    backgroundColor: isDragActive ? '#e0f7fa' : 'transparent', // Change background on drag
  })
};

export default MyDropzone;
