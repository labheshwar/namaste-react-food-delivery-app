import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';

const formValidator = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: formValidator,
    onSubmit: (values) => {
      alert(`You are logged in as: ${values.email}`);
    },
  });

  return (
    <div className='login-page'>
      <div className='login-form-container'>
        <h1>Login</h1>
        <form className='login-form' onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='formik-error'>{formik.errors.email}</div>
          ) : null}
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Enter your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='formik-error'>{formik.errors.password}</div>
          ) : null}
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
