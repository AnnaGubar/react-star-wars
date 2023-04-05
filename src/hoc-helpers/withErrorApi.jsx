import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
          // <h1>fff</h1>
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
