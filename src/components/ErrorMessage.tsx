interface ErrorMessageProps {
  errorMessage: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => {
  return <p className="error-message">{errorMessage}</p>;
};

export default ErrorMessage;
