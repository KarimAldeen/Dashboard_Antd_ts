import { Form, DatePicker } from 'antd'
import React from 'react'
import useFormField from '../../../Hooks/useFormField';
import dayjs from 'dayjs';

const Date = ({ name, label,picker="date" ,isDisabled,props,onChange,placeholder ,className}: any) => {

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
              <DatePicker
              picker={picker}
            placeholder={placeholder}
                allowClear
                className={`${className} w-100`}
                // defaultValue={formik.values[name]}
                size="large" 
                onChange={onChange || onCalendarChange}
                disabled={isDisabled}
               />



      </Form.Item>
    </div>
  )
}

export default Date