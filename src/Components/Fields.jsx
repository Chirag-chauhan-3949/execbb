export const TextField = ({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  placeholder,
}) => {
  return (
    <div >
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 text-left"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export const EmailField = ({
  id,
  name,
  label = "Email",
  placeholder = "Enter your email",
}) => {
  return (
    <div >
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 text-left"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export  const SelectField = ({ id, name, label, options, autoComplete }) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 text-left">
          {label}
        </label>
        <div className="mt-2">
          <select
            id={id}
            name={name}
            autoComplete={autoComplete}
            className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };


export const PhoneNumberField = ({ id, name, label, autoComplete, placeholder }) => {
return (
    <div >
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 text-left">
        {label}
    </label>
    <div className="mt-2">
        <input
        id={id}
        name={name}
        type="tel" // Type set to "tel" for phone number
        autoComplete={autoComplete}
        placeholder={placeholder}
         className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
    </div>
    </div>
);
};