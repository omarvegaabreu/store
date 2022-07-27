import "./Form.Input.Component.sass";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && ( //if label exist's render label
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}:
        </label>
      )}
    </div>
  );
};

export default FormInput;
