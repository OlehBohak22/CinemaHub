import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const loginId = useId();
  const passwordId = useId();

  const handleSumbit = () => {};

  return (
    <Formik onSubmit={handleSumbit}>
      <Form className="w-1/4 h-60 mx-auto mt-40">
        <h1 className="text-lg text-gray-400">Авторизація</h1>
        <label htmlFor={loginId} className="text-xs text-gray-400">
          Username
        </label>
        <Field
          name="login"
          type="text"
          id={loginId}
          placeholder="Your name"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        ></Field>

        <label htmlFor={passwordId} className="text-xs text-gray-400">
          Password
        </label>
        <Field
          name="password"
          type="password"
          id={passwordId}
          placeholder="Your password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        ></Field>

        <div className="flex gap-8 justify-center  mt-4">
          <button
            type="submit"
            className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
          >
            Увійти
          </button>

          <Link
            to="/register"
            className="flex justify-center items-center text-xs text-white"
          >
            Ще немає акаунту?
          </Link>
        </div>
      </Form>
    </Formik>
  );
};
