import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "../ui/Modal";
import ButtonGlow from "../ui/ButtonGlow";
import useInput from "@/hooks/useInput";

export interface InputProps {
  id: string;
  colSpan?: boolean;
  label: string;
  name: string;
  autoComplete: string;
}

const inputs: InputProps[] = [
  {
    label: "First name",
    name: "first-name",
    id: "first-name",
    autoComplete: "given-name",
    colSpan: false,
  },
  {
    label: "Last name",
    name: "last-name",
    id: "last-name",
    autoComplete: "family-name",
    colSpan: false,
  },
  {
    label: "Email",
    name: "email",
    id: "email",
    autoComplete: "email",
    colSpan: false,
  },
];

const isEmailValid = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isNotEmpty = (value: string) => value.trim() !== "";

interface ContactFormProps {
  input: InputProps;
}

const ContactForm: React.FC = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => isEmailValid(value));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const [isSent, setIsSent] = useState(false);

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        message: enteredMessage,
      }),
    });

    if (!formIsValid) {
      firstNameBlurHandler();
      lastNameBlurHandler();
      emailBlurHandler();
      messageBlurHandler();
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetMessageInput();
    setIsSent(true);
  };

  return (
    <div className="relative bg-black/20 rounded-lg shadow-lg lg:mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 py-16 sm:pt-20 lg:static lg:px-8 lg:py-12">
          <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2"></div>
            <h2 className=" font-bold tracking-tight text-tertiary">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel: +420 777 857 120">
                    +420 777 857 120
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:nela.letochova.wxc@gmail.com"
                  >
                    nela.letochova.wxc@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          action="#"
          method="POST"
          className="px-6 py-16 sm:pb-16 lg:px-8 lg:py-12 border-t border-gray-700"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-base font-semibold leading-6 text-gray-300"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    //required
                    value={enteredFirstName}
                    onChange={firstNameChangedHandler}
                    onBlur={firstNameBlurHandler}
                  />
                  {firstNameInputHasError && (
                    <p className="mt-2 text-sm text-red-300 tracking-wider">
                      First name must not be empty.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-base font-semibold leading-6 text-gray-300"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    //required
                    value={enteredLastName}
                    onChange={lastNameChangedHandler}
                    onBlur={lastNameBlurHandler}
                  />
                  {lastNameInputHasError && (
                    <p className="mt-2 text-sm text-red-300 tracking-wider">
                      Last name must not be empty.
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-base font-semibold leading-6 text-gray-300"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    //required
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                  />
                  {emailInputHasError && (
                    <p className="mt-2 text-sm text-red-300 tracking-wider">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-base font-semibold leading-6 text-gray-300"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    //required
                    //defaultValue={""}
                    value={enteredMessage}
                    // @ts-ignore
                    onChange={messageChangedHandler}
                    onBlur={messageBlurHandler}
                  />
                  {messageInputHasError && (
                    <p className="mt-2 text-sm text-red-300 tracking-wider">
                      Please write me at least a few words ❤️
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <ButtonGlow type="submit">Contact me!</ButtonGlow>
            </div>
          </div>
        </form>
        {isSent && <Modal />}
      </div>
    </div>
  );
};

export default ContactForm;
