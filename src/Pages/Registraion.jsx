import {
  TextField,
  EmailField,
  SelectField,
  PhoneNumberField,
} from "../Components/Fields";
import Navbar from "../Components/Navbar";
import BackgroundColor from "../components/BackgroundColor";

export default function Registration() {
  const countryOptions = [
    { value: "NJ", label: "NJ" },
    { value: "AK", label: "AK" },
    { value: "AL", label: "AL" },
    { value: "AR", label: "AR" },
    { value: "AZ", label: "AZ" },
    { value: "CA", label: "CA" },
    { value: "CO", label: "CO" },
    { value: "CT", label: "CT" },
    { value: "DC", label: "DC" },
    { value: "DE", label: "DE" },
    { value: "FL", label: "FL" },
    { value: "GA", label: "GA" },
    { value: "GU", label: "GU" },
    { value: "HI", label: "HI" },
    { value: "IA", label: "IA" },
    { value: "ID", label: "ID" },
    { value: "IL", label: "IL" },
    { value: "IN", label: "IN" },
    { value: "KS", label: "KS" },
    { value: "KY", label: "KY" },
    { value: "LA", label: "LA" },
    { value: "MA", label: "MA" },
    { value: "MD", label: "MD" },
    { value: "ME", label: "ME" },
    { value: "MI", label: "MI" },
    { value: "MN", label: "MN" },
    { value: "MO", label: "MO" },
    { value: "MS", label: "MS" },
    { value: "MT", label: "MT" },
    { value: "NC", label: "NC" },
    { value: "ND", label: "ND" },
    { value: "NE", label: "NE" },
    { value: "NH", label: "NH" },
    { value: "NJ", label: "NJ" },
    { value: "NM", label: "NM" },
    { value: "NV", label: "NV" },
    { value: "NY", label: "NY" },
    { value: "OH", label: "OH" },
    { value: "OK", label: "OK" },
    { value: "OR", label: "OR" },
    { value: "PA", label: "PA" },
    { value: "PR", label: "PR" },
    { value: "RI", label: "RI" },
    { value: "SC", label: "SC" },
    { value: "SD", label: "SD" },
    { value: "TN", label: "TN" },
    { value: "TX", label: "TX" },
    { value: "UT", label: "UT" },
    { value: "VA", label: "VA" },
    { value: "VI", label: "VI" },
    { value: "VT", label: "VT" },
    { value: "WA", label: "WA" },
    { value: "WI", label: "WI" },
    { value: "WV", label: "WV" },
    { value: "WY", label: "WY" },
  ];
  const contactTime = [
    { value: "09:00 am - 11:00 pm", label: "09:00 am - 11:00 pm" },
    { value: "11:00 am - 02:00 pm", label: "11:00 am - 02:00 pm" },
    { value: "02:00 Pm - 05:00 pm", label: "02:00 Pm - 05:00 pm" },
    { value: "After 05:00 pm", label: "After 05:00 pm" },
  ];

  return (
    <>
    <BackgroundColor/>
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="pt-8 sm:mx-auto sm:w-full ">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            New here? Create an account to get started!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[880px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 ">
            <form action="#" method="POST" className="space-y-6">
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField
                  id="first-name"
                  name="first-name"
                  label="First Name"
                  autoComplete="given-name"
                  placeholder="Enter your first name"
                />
                <TextField
                  id="last-name"
                  name="last-name"
                  label="Last Name"
                  autoComplete="given-name"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EmailField
                  id="email"
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email"
                />
                <TextField
                  id="city-town"
                  name="city-town"
                  label="City/Town"
                  autoComplete="given-name"
                  placeholder="Enter your City/Town"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectField
                  id="state"
                  name="state"
                  label="State"
                  options={countryOptions}
                  autoComplete="address-level1"
                />
                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  autoComplete="given-name"
                  placeholder="Enter your Country"
                />
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField
                  id="zipcode"
                  name="zipcode"
                  label="Zipcode"
                  autoComplete="given-name"
                  placeholder="Enter your Zipcode"
                />
                <PhoneNumberField
                  id="phone-number"
                  name="phone-number"
                  label="Phone Number"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <SelectField
                id="best-to-contact"
                name="best-to-contact"
                label="Best Time to Contact"
                options={contactTime}
                autoComplete="address-level1"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">
                    Sign in with Google
                  </span>
                </a>

                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 22.773 22.773"
                    aria-hidden="true"
                    className="h-5 w-5 fill-[#24292F]"
                  >
                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
                  </svg>

                  <span className="text-sm font-semibold leading-6">
                    Sign in with Apple
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}


// import { useState } from 'react';
// import axios from 'axios';

// function Registration() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:1337/api/auth/local/register', {
//         username,
//         email,
//         password,
//       });
//       alert('Registration successful');
//       console.log(response.data);
//     } catch (error) {
//       alert('Registration failed');
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Registration;
