import PropTypes from 'prop-types';

const optionShape = {
    index: PropTypes.string,
    label: PropTypes.string
};
// Recursivity for PropTypes have to be declard afterwards:
optionShape.subOptions = PropTypes.arrayOf(PropTypes.shape(optionShape));

export default optionShape;