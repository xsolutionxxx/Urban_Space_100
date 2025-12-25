import Spinner from "@components/spinner/Spinner";
import ErrorMessage from "@error/ErrorMessage";

const SetContent = (process, Component, data) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return data ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw Error("Unexpected process state");
  }
};

export default SetContent;