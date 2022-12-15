import React from "react";
import { Button } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <div id="error-page" className="mt-5 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
          <Button
            variant="link"
            onClick={() => navigate("/", { replace: true })}
          >
            Back
          </Button>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
