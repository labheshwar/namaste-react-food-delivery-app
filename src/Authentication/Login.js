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
    <div className='flex justify-center h-80vh items-center'>
      <div className='w-4/5 shadow-lg shadow-teal-800 rounded-lg p-5 md:w-3/5 lg:2/5'>
        <h1 className='text-center font-bold text-xl text-teal-800'>Login</h1>
        <form className='flex flex-col' onSubmit={formik.handleSubmit}>
          <label className='text-base mt-3 mb-2' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            className='p-3 rounded-md shadow-sm shadow-teal-800 text-teal-800 hover:shadow-md placeholder:text-teal-800'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-teal-700 text-sm my-1  ml-auto'>
              {formik.errors.email}
            </div>
          ) : null}
          <label className='text-base mt-3 mb-2' htmlFor='password'>
            Password
          </label>
          <input
            id='password'
            name='password'
            type='password'
            className='p-3 rounded-md shadow-sm shadow-teal-800 text-teal-800 hover:shadow-md placeholder:text-teal-800'
            placeholder='Enter your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='text-teal-700 text-sm my-1  ml-auto'>
              {formik.errors.password}
            </div>
          ) : null}
          <button
            className='mt-4 p-3 rounded-md bg-teal-800 text-white text-base cursor-pointer'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
