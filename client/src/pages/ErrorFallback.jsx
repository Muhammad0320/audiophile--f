import Error from "../ui/Error";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Error
      message={error.message}
      onClick={resetErrorBoundary}
      type="boundary"
    />
  );
}

export default ErrorFallback;
