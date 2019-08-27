import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '@actions/auth'
import '../../public/assets/styles/onboard.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SyncLoader from 'react-spinners/SyncLoader';



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
        <img src="../../../public/assets/images/banka-blue-logo.svg" alt="logo" />
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
            <Form>
              <Field type="text" name="firstname" placeholder="First Name" />
              {
                errors.firstname && touched.firstname && (<p className="error">{errors.firstname}</p>)
              }
              <Field type="text" name="lastname" placeholder="Last Name" />
              {
                errors.lastname && touched.lastname && (<p className="error">{errors.lastname}</p>)
              }
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
              {
                errors.email && touched.email && (<p className="error">{errors.email}</p>)
              }
              <Field
                type="password"
                name="password"
                placeholder="Password"
              />
              {
                errors.password && touched.password && (<p className="error">{errors.password}</p>)
              }
              {
                error && (<p className="error">{error}</p>)
              }
              {
                isPending ? (
                  <SyncLoader
                    sizeUnit="em"
                    size={0.6}
                    color="blue"
                    loading={isPending}
                  />
                ): (              
                  <button className="signup" type="submit" disabled={isSubmitting}>
                Sign Up
                  </button>
                )
              }
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
  onSubmit: PropTypes.func.isRequired
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