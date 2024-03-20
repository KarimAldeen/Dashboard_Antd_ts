import React from 'react'
import { Col, Row } from "reactstrap";
import KarimField from '../../../Components/Karimalden/KarimField';
import { useGetDynamic } from '../../../api/Route/Get';

const CreateForm = () => {

    const { data: categoriesOptions } = useGetDynamic("categories", "categories/all/Selecter");

    return (

        <Row>
            <Col>
                <KarimField name="name" label='name' placeholder='full_name' />
                <KarimField name="description" type='text' label='description' placeholder='full_description' />
                <KarimField name="price" label='price' type='number' placeholder='price' />
            </Col>
            <Col>
                <KarimField name="categories_id" type='Select' option={categoriesOptions?.data} label='categories' placeholder='categories' />
                <KarimField name="image" type='File' label='image' placeholder='image' />
                <KarimField name="is_published" type='Checkbox' label='is_published' />
            </Col>
        </Row>
    )
}

export default CreateForm