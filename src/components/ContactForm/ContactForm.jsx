import React from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { Label, LabelName, Button, ErrorText } from './ContactForm.styled';
import PropTypes from 'prop-types';
import styled from "styled-components";
import * as yup from 'yup';

const FormContact = styled(Form)`
      display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Input = styled(Field)`
     padding: 10px;
  margin-bottom: 10px;
   border: 2px solid #ccc;
  border-radius: 4px;
`
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    ).required(),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const ContactForm = ({addContact}) => {
    const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };
   
        return (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
           
            <FormContact >
                <Label>
                    <LabelName>Name</LabelName>
                    <Input
                        type='text'
                        name='name'
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                <FormError name="name" />
              </Label>

                <Label>
                    <LabelName>Number</LabelName>
                    <Input
                        type='tel'
                        name='number'
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                       
                        />
  <FormError name="number" />
                </Label>
                <Button type='submit'>Add contact</Button>
                </FormContact>
                </Formik>
        );
    }


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};
export default ContactForm;
