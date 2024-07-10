import PropTypes from 'prop-types';

const Button = ({ text, textColor, bgColor, border, onClick }) => {

  return (
    <button 
        onClick={onClick}
        style={{
            color: textColor,
            background: bgColor,
            border: border, 
            cursor: 'pointer',
            padding: '12px 24px',
            flex: '1',
            borderRadius: '8px',
            fontSize: '14px',
        }}>
        {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
