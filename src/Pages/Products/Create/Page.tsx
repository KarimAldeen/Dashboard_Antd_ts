import React from 'react';

import { usePostDynamic } from '../../../api/Route/Post';
import { getInitialValues, getValidationSchema } from '../formUtil';
import FormPage from '../../../Layout/Dashboard/FormPage';
import CreateForm from './CreateForm';

const CreateProduct = () => {

    const { mutate } = usePostDynamic("products", "products", true);
  
    const handleSubmit = (values: any) => { mutate({  ...values}) };

    return (
        <div>
                <FormPage
                    handleSubmit={handleSubmit}
                    initialValues={getInitialValues([])}
                    validationSchema={getValidationSchema}
                    title={"Add New Products"}
                >
                    <CreateForm/>
                   
                </FormPage>
        </div>
    );
};

export default CreateProduct;
