import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ImageInput from "../ImageInput";
import ErrorMessage from "../ErrorMessage";

function FormImagePicker({ name , onPress }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInput 
        onChangeImage={onPress}
        imageUris = {imageUris}
      />
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
