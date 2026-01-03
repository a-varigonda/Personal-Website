interface Props {
  onClick: () => void;
}

function Alert({ onClick }: Props) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show m-0"
        role="alert"
      >
        This website is currently under construction!
        <button
          onClick={onClick}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
