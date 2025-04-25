import { useState } from "react";
import {
  useLoaderData,
  useNavigate,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { redirect } from "react-router-dom";
import { loginUser } from "../../api";
import "./login.css";

export function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");
  return message ? message : null;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo");
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const data = await loginUser({ email, password });
    await new Promise((resolve) => setTimeout(resolve, 500));
    localStorage.setItem("loggedin", true);
    return (window.location.href = `${pathname}` || "/host");
  } catch (error) {
    return error;
  }
}

export default function Login() {
  const error = useActionData();
  const message = useLoaderData();
  const { state } = useNavigation();

  return (
    <>
      <main className="loginMain">
        {message && <p>{message}</p>}
        <h1>Sign in to your account</h1>
        {error?.message && <p className="error">{error.message}</p>}
        <Form method="post" className="loginForm" replace>
          <input
            name="email"
            type="email"
            placeholder="Email address: b@b.com"
          />
          <input name="password" type="password" placeholder="Password: p123" />
          <button disabled={state === "submitting"}>
            {state === "submitting" ? "Signing in..." : "Log in"}
          </button>
        </Form>
      </main>
    </>
  );
}
