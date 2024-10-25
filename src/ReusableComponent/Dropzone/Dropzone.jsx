import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone({ onFileDrop }) {

  const onDrop = useCallback(acceptedFiles => {
    // Pass the dropped files to the parent component
    onFileDrop(acceptedFiles);
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: 'image/*', 
    multiple: false // Restrict to single file if needed 
  });

  return (
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <div className="h-[180px] w-full flex justify-center items-center">
          <p>Drop the image here ...</p>
        </div>
        :
        <div className="h-[180px] w-full flex justify-center items-center">
          <p>Drag 'n' drop restaurant image here, or click to select</p>
        </div>
      }
    </div>
  );
}

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    height: '180px',
    width: '80%',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease',
  }
};

export default MyDropzone;
