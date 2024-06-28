import * as Yup from 'yup'

export const profileSchema = Yup.object({
  firstname: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .max(10, 'First name must be 10 characters or less')
    .required('First name is required'),
  lastname: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(10, 'Last name must be 10 characters or less')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  address: Yup.string().required('Address is required'),
  contact: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Contact is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    )
    .required('Password is required'),
})

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    // .min(8, 'Password must be at least 8 characters long')
    // .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    // .matches(
    //   /[!@#$%^&*(),.?":{}|<>]/,
    //   'Password must contain at least one special character'
    // )
    .required('Password is required'),
})
export const forgetPassSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
})

export const resetPassSchema = Yup.object({
  newpassword: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    )
    .required('New password is required'),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
    .required('Confirm new password is required'),
})

export const firstStepperGeneralInformation = Yup.object({
  buildingName: Yup.string().required('Building name is required'),
  ownername: Yup.string().required('Owner name is required'),
  phone: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      'Phone number must be exactly 10 digits and contain only numbers'
    )
    .required('Phone is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  area: Yup.number()
    .positive('Area must be greater than 0')
    .required('Area is required'),

  floors: Yup.number()
    .positive('Number of floors must be greater than 0')
    .required('Number of floors is required'),

  description: Yup.string().required('Description is required'),
  year: Yup.date().required('Date is required'),
  address: Yup.string().required('Address is required'),
})
