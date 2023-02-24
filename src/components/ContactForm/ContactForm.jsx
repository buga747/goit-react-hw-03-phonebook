import React from 'react';
import { Formik, ErrorMessage  } from 'formik';
import { Label, LabelName, Button, ErrorText, Form, Input } from './ContactForm.styled';
import PropTypes from 'prop-types';
import * as yup from 'yup';



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
  name: yup.string().required(),
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
           
            <Form >
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
                </Form>
                </Formik>
        );
    }


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};
export default ContactForm;
