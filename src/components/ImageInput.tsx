import React from 'react';
import styled from 'styled-components';
import uploadImg from '../assets/uploadImg.webp';

const UploadIcon = styled.img`
  width: 10rem;
`;

const Parent = styled.div`
  width: 25rem;
  margin: 0 auto 2rem auto;
  padding: 2rem;
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
  onChange: (e) => void;
}

const ImageInput = (props: Prop) => {
  return (
    <Parent>
      <FileUpload>
        <UploadIcon src={uploadImg} alt="uploaded image" />
        <h3>Upload Image Here</h3>
        <FileInput onChange={e => props.onChange(e)} type="file" />
      </FileUpload>
    </Parent>
  )
}

export default ImageInput;