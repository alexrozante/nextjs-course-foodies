'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInputRef = useRef();

  function handleClick() {
    imageInputRef.current.click();
  }

  function hancleChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && <Image src={pickedImage} alt='Picked image' fill/>}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/png, image.jpeg'
          ref={imageInputRef}
          onChange={hancleChange}
          required
        />
        <button className={classes.button} type='button' onClick={handleClick}>Pick an Image</button>
      </div>
    </div>
  );
}
