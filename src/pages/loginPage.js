import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '@actions/auth'
import '../../public/assets/styles/onboard.css'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import SyncLoader from 'react-spinners/SyncLoader';



const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .matches(
      /\S+@\S+\.\S+/,
      'Invalid email address'
    )
    .required('Email address is required'),
  password: Yup.string()
    .min(8, 'password should be a minimun of 8 characters')
    .required('Passwords is required')
});


const LoginForm = ({
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
        <h3>Welcome back, Login</h3>
        <Formik
          initialValues={{
                email: '',
                password: ''
              }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
                onSubmit({userData: values, history});
                actions.setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
              />
              {
                errors.email && touched.email && (<p className="error">{errors.email}</p>)
              }
              <Field
                type="password"
                id="password"
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
                    color="red"
                    loading={isPending}
                  />
                ): (              
                  <button className="signup" type="submit" disabled={isSubmitting}>
                Login
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

LoginForm.defaultProps = {
  error: null,
  isPending: false,
};

LoginForm.propTypes = {
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
  onSubmit : ({userData, history}) => { dispatch(login({userData, history}))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);