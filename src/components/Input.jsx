import PropTypes from "prop-types";

const Input = ({ type, placeholder }) => {
  return (
    <input
      style={{
        border: "2px solid rgba(17, 17, 17, 0.2)",
        fontSize: "16px",
        color: "rgba(17, 17, 17, 0.4)",
        padding: "12px 24px",
        borderRadius: "8px",
      }}
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
