import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  if (error.message === "redirect") {
    return null;
  }

  return (
    <>
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.message}</p>
        <pre>
          {error.statusText}-{error.status}
        </pre>
      </main>
    </>
  );
}
