import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import uploadImg from '../assets/uploadImg.webp';
import { Typography } from '@mui/material';

const UploadIcon = styled.img`
  width: 10rem;
`;

const Parent = styled.div`
  margin: 0 auto 2rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 7px 20px 20px rgb(215, 224, 234);
`;

const FileUpload = styled.div`
  text-align: center;
  border: 3px dashed rgb(210, 227, 244);
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
`;

const FileInput = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
`;

interface Prop {
  onBlur: () => void;
  selectedFile: File | undefined;
  setSelectedFile: (f: File) => void;
  uploaded: Boolean;
  setUploaded: Dispatch<SetStateAction<boolean>>
}

const ImageInput = (props: Prop) => {

  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      props.setSelectedFile(file)
      props.setUploaded(true)
      setSelectedName(file.name)
    }
  }

  return (
    <Parent>
      <FileUpload>
        <UploadIcon src={(props.uploaded && props.selectedFile !== undefined) ? URL.createObjectURL(props.selectedFile) : uploadImg} alt="uploaded image" />
        <Typography style={{ wordWrap: 'break-word' }}>{selectedName || "Upload Image Here"}</Typography>
        <FileInput onChange={handleFileChange} type="file" />
      </FileUpload>
    </Parent >
  )
}

export default ImageInput;