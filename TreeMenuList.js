import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import optionShape from './internal/optionTypes';
import TheSingleSelectitem from './TheSingleSelectItem';

optionShape.subOptions = PropTypes.arrayOf(PropTypes.shape(optionShape));

function findOptionsContaining(options, particularOption) {
  return options.reduce((acc, option) => {
    if (option?.index === particularOption?.index) {
      return [option]; // Stop searching the children
    }
    if (option.subOptions) {
      const result = findOptionsContaining(option.subOptions, particularOption);
      if (result.length > 0) {
        return [option, ...result];
      }
    }
    return acc;
  }, []);
}

function TreeMenuList({ options, selectedOption, onChange }) {
  const [expandedOptions, setExpandedOptions] = useState([]);

  const clickHandler = (clickedOption) => {
    onChange(clickedOption);
  };

  const toggleExpandCollapseHandler = (toggleCollapseExpandOption) => {
    if (expandedOptions.find((opt) => opt.index === toggleCollapseExpandOption.index)) {
      const newExpandedOptions = expandedOptions.filter((opt) => opt.index !== toggleCollapseExpandOption.index);
      setExpandedOptions(newExpandedOptions);
    } else {
      const newExpandedOptions = [...expandedOptions, toggleCollapseExpandOption];
      setExpandedOptions(newExpandedOptions);
    }
  };

  useEffect(() => {
    const calculatedExpOptions = findOptionsContaining(options, selectedOption);
    setExpandedOptions(calculatedExpOptions);
  }, []);

  return (
    <div className="tree-menu-list">
      {options.map((option) => (
        <TheSingleSelectitem
          key={option.index}
          option={option}
          selectedOption={selectedOption}
          expandedOptions={expandedOptions}
          clickHandler={clickHandler}
          toggleExpandCollapseHandler={toggleExpandCollapseHandler}
          level={0}
        />
      ))}
    </div>
  );
}

TreeMenuList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  selectedOption: PropTypes.shape(optionShape),
  onChange: PropTypes.func,
};

export default TreeMenuList;
