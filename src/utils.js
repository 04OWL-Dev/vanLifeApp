export async function requiredAuth(request) {
  console.log("entrada");
  const pathname = new URL(request.url).pathname;
  const isLogged = localStorage.getItem("loggedin");
  if (!isLogged) {
    return new Promise(() => {
      window.location.href = `/login?message=You must be logged in!&redirectTo=${pathname}`;
    });
  }
  return null;
}
