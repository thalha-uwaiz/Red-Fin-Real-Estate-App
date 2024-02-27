import React, { useState } from 'react'
import Styles from './FormHelper.module.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FormHelper = ({
    config = [],
    onSubmit = () => { },
    submitConfig = {},
    formStyles = {}
}) => {

    const [formData, setFormData] = useState({})
    const [formError, setFormError] = useState({})

    const { label = 'Search RedFin', btnStyles = {} } = submitConfig;

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData(prevData => ({ ...prevData, [name]: value }))
        setFormError(prevData => ({ ...prevData, [name]: value }))
    }

    const renderFields = (data, index) => {

        const { label, name, type, options } = data

        const renderSelect = () => {

            return (
                <select value={formData[name] || ''} name={name} id={name} onChange={handleChange}>
                    <option  key={index} value='' disabled hidden>
                        Select {label}
                    </option>

                    {options.map((option, index) =>
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>

                    )}
                </select>
            )

        }

        const renderInput = () => {
            return (
                <input type='text'
                    name={name}
                    id={name}
                    onChange={handleChange}
                    value={formData[name] || ''}

                >
                </input>
            )
        }

        const renderFieldType = () => {
            switch (type) {
                case 'select': return renderSelect();
                case 'text': return renderInput();
                default: return null
            }
        }

        return (
            <div className={Styles.field} key={index}>
                <label htmlFor={name}>{label}</label>
                {renderFieldType()}
                <div className={Styles.error}>{formError[name] ? formError[name] : ""}</div>
            </div>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = {}
        for (const field of config) {
            const { label, name, required } = field
            if (required && !formData[name]) {
                errors[name] = `${label} is required`
            }
        }

        if (Object.keys(errors).length > 0) {
            setFormError(errors)
        }
        else {
            onSubmit(formData)
            setFormData(config)
        }


    }



    return (
        <div className={Styles.container}>

            <form action="" className={Styles.form} onSubmit={handleSubmit}>
                <div className={Styles.fieldsContainer} style={formStyles}>
                    {config.map(renderFields)}
                </div>
                <button className={Styles.submitbtn} style={btnStyles}>
                    {label} <ArrowForwardIcon />
                </button>
            </form>


        </div>
    )
}

export default FormHelper