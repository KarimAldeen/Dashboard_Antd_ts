
import * as Yup from "yup";
import { buildFormData } from "../../api/helper/buildFormData";


export const getInitialValues = (objectToEdit: any ): any => {
  return {
    id: objectToEdit?.id ?? 0,
    name:objectToEdit?.name ?? ""   ,
    description:objectToEdit?.description??"",
    categories_id:{label:objectToEdit?.categories?.name,value:objectToEdit?.categories?.id}??"",
    price:objectToEdit?.price??null,
    is_published:objectToEdit?.is_published??false,
    image:objectToEdit?.image??"",
  }


};

export const getValidationSchema = ()=> {
  // validate input  
  return Yup.object().shape({
    name: Yup.string().required('required'),
    description: Yup.string().required('required'),
    categories_id: Yup.string().required('required'),
    price: Yup.number().required('required'),
    is_published: Yup.boolean().required("required"),
    image: Yup.string().required('required'),

  });
};

export const getDataToSend = async (values: any): Promise<FormData> => {
  const data = { ...values };

  const formData = new FormData();
  buildFormData(formData, data);

  // Check if there's an image URL in the data
  if (data.image && typeof data.image === 'string') {
      const imageUrl = data.image;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const imageFile = new File([blob], 'image.png', { type: 'image/png' });    
      formData.append('image', imageFile);
  }

  return formData;
};




