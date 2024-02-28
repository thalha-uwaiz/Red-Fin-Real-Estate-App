import React from 'react'
import Styles from './ContactUs.module.scss'
import FormHelper from '../../Components/FormHelper'

const contactInfo = [
  { label: "Email", value: "redfin2002@gmail.com" },
  { label: "Phone", value: "+94 75 685 8795" },
  { label: "Address", value: "123 Hills Street, Colombo, Sri Lanka" },
]


const formConfig = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    required: true
  },
  {
    label: 'Message',
    name: 'message',
    type: 'text',
    required: true
  },

]

const ContactUs = () => {

  const renderInfo = (data, index) => {
    const { label, value } = data;

    return (
      <div key={index} >
        <span className={Styles.label}> {label} : </span>
        <span className={Styles.value}> {value}</span>
      </div>
    )
  }

  const submitConfig = {
    label: "Submit"
  }

  const formStyles = {
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const formSubmit = (data) => {
    console.log('form data', data)
  }


  return (
    <div className={Styles.container}>
      <div className={Styles.details}>
        <h2 className={Styles.heading}>Contact Us</h2>
        <p className={Styles.description}>Please fill out the form below to get in
          touch with us  </p>
      </div>
      <FormHelper
        onSubmit={formSubmit}
        config={formConfig}
        formStyles={formStyles}
        submitConfig={submitConfig} />

      <div className={Styles.info}>
        <div className={Styles.subHeading}>
          Reach out Us here : 
        </div>
        {contactInfo.map(renderInfo)}
      </div>

    </div>
  )
}

export default ContactUs