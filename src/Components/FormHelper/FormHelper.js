import React from 'react'
import Styles from './FormHelper.module.scss'

const FormHelper = ({ config }) => {

    const renderFields = (data, index) => {

        const { label, name, type, options, required } = data

        const renderSelect = () => {

            return (
                <select name={name} id={name}>
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
                    id={name}>
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
            <div className="field">
                <label htmlFor={name}>{label}</label>
                {renderFieldType()}
            </div>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }



    return (
        <div className={Styles.container}>
            <form action="" className={Styles.form} onSubmit={handleSubmit}>
                <div className="fieldsContainer">
                    {config.map(renderFields)}
                </div>

            </form>

            <button className="submitbtn">
                submit
            </button>

        </div>
    )
}

export default FormHelper