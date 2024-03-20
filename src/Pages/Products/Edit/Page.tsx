import React from 'react';

import FormPage from '../../../Layout/Dashboard/FormPage';
import EditForm from './EditForm';
import { getInitialValues, getValidationSchema } from '../formUtil';
import { usePostDynamic } from '../../../api/Route/Post';
import { useParams } from 'react-router-dom';
import { useGetDynamic } from '../../../api/Route/Get';
import KarimSpinner from '../../../Components/Karimalden/Ui/KarimSpinner';

const CreateProduct = () => {

    const { id } = useParams()
    const { mutate } = usePostDynamic("products", `products/update/${id}`, true)
    const { data,isLoading } = useGetDynamic(`products${id}`, `products/${id}`)

    const handleSubmit = (values: any) => {
        const newdata = {} as any;

        for (const key in data) {
            if (values[key] !== data[key]) {
                newdata[key] = values[key];
            }
        }

        return mutate(newdata);
    };

    return (
        <KarimSpinner loading={isLoading}>
            <FormPage
                handleSubmit={(values: any) => handleSubmit(values)}
                initialValues={getInitialValues(data)}
                validationSchema={getValidationSchema}
            >
                <EditForm />

            </FormPage>
        </KarimSpinner>
    );
};

export default CreateProduct;
