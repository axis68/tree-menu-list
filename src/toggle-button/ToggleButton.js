import PropTypes from 'prop-types';
import './ToggleButton.css';

function ToggleButton({ isExpanded, onClick }) {
    return (
      <span
        className="toggle-button"
        tabIndex={-1}
        role="button"
        onClick={onClick}
        onKeyDown={() => {}}
        onFocus={() => {}}
      >
        {isExpanded ? (
          'v'
        ) : (
          '>'
        )}
      </span>
    );
  }

  ToggleButton.propTypes = {
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
  };

  export default ToggleButton;