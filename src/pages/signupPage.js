import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '@actions/auth'
import '../../public/assets/styles/onboard.css'
import {Link} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SyncLoader from 'react-spinners/SyncLoader';
import Logo from '../../public/assets/images/banka-blue-logo.svg'



const loginSchema = Yup.object().shape({
  firstname: Yup.string()
    .required('First Name is required'),
  lastname: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .trim()
    .matches(
      /\S+@\S+\.\S+/,
      'Invalid email address'
    )
    .required('Email address is required'),
  password: Yup.string()
    .trim()
    .min(8, 'password should be a minimun of 8 characters')
    .required('Passwords is required')
});


const SignUpForm = ({
  isPending,
  error,
  onSubmit,
  history
}) => {

  return (
    <div className="container">
      <div className="blue_section"><h1>We are creating Financial Happiness for all.</h1></div>
      <div className="form-container">
        <img src={Logo} alt="logo" />
        <h3>
Welcome back to banka,
signup to get started
        </h3>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
              }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
                onSubmit({userData: values, history});
                actions.setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form id="form">
              <Field type="text" name="firstname" placeholder="First Name" data-testid="firstname" />
              {
                errors.firstname && touched.firstname && (<p className="error" data-testid="fname-error">{errors.firstname}</p>)
              }
              <Field type="text" name="lastname" placeholder="Last Name" data-testid="lastname" />
              {
                errors.lastname && touched.lastname && (<p className="error" data-testid="lname-error">{errors.lastname}</p>)
              }
              <Field
                type="email"
                id="email"
                name="email"
                data-testid="email"
                placeholder="Email Address"
              />
              {
                errors.email && touched.email && (<p className="error" data-testid="email-error">{errors.email}</p>)
              }
              <Field
                type="password"
                name="password"
                placeholder="Password"
                data-testid="password"
              />
              {
                errors.password && touched.password && (<p className="error">{errors.password}</p>)
              }
              <button type="submit" disabled={isSubmitting} data-testid="submit-form">
                {isSubmitting ? 'SUBMITTING':  'Signup'}
              </button>
              <div className="loader">
                <SyncLoader
                  sizeUnit="em"
                  size={0.6}
                  color="red"
                  loading={isPending}
                />
                <h4>
                  Already have an account?
                  <span><Link to="/login">Login</Link></span>
                </h4>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

SignUpForm.defaultProps = {
  error: null,
  isPending: false,
};

SignUpForm.propTypes = {
  isPending: PropTypes.bool,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

const mapStateToProps = (state)=>({
    isPending: state.auth.isPending,
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  onSubmit : ({userData, history}) => { dispatch(signup({userData, history}))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);