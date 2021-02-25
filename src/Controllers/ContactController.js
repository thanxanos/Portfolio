import React, { Component } from 'react';
import '../scss/Contact.scss';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      linkedin: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        linkedin: '',
        message: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, linkedin, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        linkedin: linkedin,
        message: message,
      };

      emailjs.send('service_lcifpz7', 'template_j778nse', templateParams, 'user_nx9OxTUTWaKUrTuYLyr1y');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        LinkedIn: ${linkedin}
        Message: ${message}
      `);
      
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      linkedin: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      case 'linkedin': 
        formErrors.linkedin = value.length < 1 ? 'Please enter a linkedin url' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div id="contact">
        <div className="contactwrapper">
        <h1>Contact</h1>
        <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
          <div className='row'>
            <div className='namefield'>
            
              <input
                type='text'
                name='name'
                value={this.state.name}
                className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                // placeholder='Name'
                required
                id="fielddesign"
              ></input>
              <label>Name:</label>
              {formErrors.name.length > 0 && (
                <p className='errorMessage'>{formErrors.name}</p>
              )}
            </div>
            <div className='emailfield'>
              <input
                type='text'
                name='email'
                value={this.state.email}
                className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                required
                id="fielddesign"
              ></input>
              <label>Email:</label>
              {formErrors.email.length > 0 && (
                <p className='errorMessage'>{formErrors.email}</p>
              )}
            </div>
            <div className="linkedinfield">
              <input
                  type='text'
                  name='linkedin'
                  value={this.state.linkedin}
                  className={`form-control formInput ${formErrors.linkedin.length > 0 ? 'error' : null}`}
                  onChange={this.handleChange}
                  // placeholder='LinkedIn URL'
                  required
                  id="fielddesign"
                ></input>
                <label>LinkedIn URL:</label>
                {formErrors.linkedin.length > 0 && (
                  <p className='errorMessage'>{formErrors.linkedin}</p>
                )}
              </div>
            </div>
          <div className='row'>
            <div className='msgfield'>
              <textarea
                rows='5'
                name='message'
                value={this.state.message}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder=' Message'
                noValidate
                id="fielddesign"
              ></textarea>
              {formErrors.message.length > 0 && (
                <p className='errorMessage' id='msgError'>{formErrors.message}</p>
              )}
            </div>
          </div>
          <button className='submit-btn' type='submit'>
            SEND
          </button>
        </form>

        <ToastContainer />
        </div>
      </div>
    );
  }
}

export default ContactForm;