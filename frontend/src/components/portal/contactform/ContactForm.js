import React from "react";
import Layout from "../layout/index";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './ContactForm.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import 'semantic-ui-css/semantic.min.css';


const SERVICE_ID = "service_nrpwoaw";
const TEMPLATE_ID = "template_8dznm2q";
const USER_ID = "h5kS4w6Q-1umECbJI";

const ContactFormComponent = (props) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.user_email.value;
  const userName = e.target.user_name.value;
  const userPhone = e.target.user_phone.value;
  const userMessage = e.target.user_message.value;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

return (
    <div className="ContactFormComponent">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-phone'
          control={Input}
          label='Phone'
          name='user_phone'
          placeholder='Phone number'
          required
          icon='phone circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
}

const ContactForm = (props) => {
  return <Layout children={<ContactFormComponent />} />;
};

export default ContactForm;