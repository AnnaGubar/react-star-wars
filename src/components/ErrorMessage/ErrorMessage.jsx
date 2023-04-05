import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={s.text}>
        The dark side of the force has won. <br />
        We cannot display data.
      </p>
    </>
  );
};

export default ErrorMessage;
