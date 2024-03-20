import { Form, DatePicker } from 'antd'

import React from 'react'
import useFormField from '../../../Hooks/useFormField';

const { RangePicker } = DatePicker;

const DataRange = ({ name, label,Format ,props ,onChange,isDisabled,placeholder,className}: any) => {

  const { errorMsg, isError, t, formik } = useFormField(name, props)
  const onCalendarChange = (value: any) => {
    
    formik.setFieldValue(name, value)

  };
  return (

    <div className='KarimField'>
      <label htmlFor={name} className="text">
        {t(`${label}`)}
      </label>
      <Form.Item
        hasFeedback
        validateStatus={isError ? "error" : ""}
        help={isError ? errorMsg : ""}
      >
            <RangePicker
            placeholder={placeholder}
            size="large" 
            allowClear
            className={`${className} w-100`}       
                 format={Format}
            onChange={onChange || onCalendarChange}
            disabled={isDisabled}
            />


      </Form.Item>
    </div>
  )
}

export default DataRange