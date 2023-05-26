import React from "react";

export interface InputProps {
  input: {
    id: string;
    colSpan?: boolean;
    label: string;
    name: string;
    autoComplete: string;
  };
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const InputNew: React.FC<InputProps> = ({
  input,
  value,
  isValid,
  hasError,
  valueChangeHandler,
  inputBlurHandler,
  reset,
}) => {
  const { id, colSpan, label, name, autoComplete } = input;

  return (
    <div key={id} className={colSpan ? "sm:col-span-2" : " "}>
      <label
        htmlFor={id}
        className="block text-base font-semibold leading-6 text-white"
      >
        {label}
      </label>
      <div className="mt-1.5">
        <input
          type="text"
          name={name}
          id={id}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          value={value}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
        />
        {hasError && (
          <p className="mt-1 text-sm text-red-500">{name} must not be empty.</p>
        )}
      </div>
    </div>
  );
};

export default InputNew;
