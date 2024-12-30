import React from 'react';
import PropTypes from 'prop-types';
import optionShape from './optionTypes';
import ToggleButton from '../toggle-button/ToggleButton';
import './SingleSelectItem.css';

function SingleSelectitem({
  option,
  selectedOption,
  clickHandler,
  toggleExpandCollapseHandler,
  expandedOptions,
  level,
}) {
  const renderSubElements = (subOptions) => {
    if (!subOptions || subOptions.length === 0) {
      return null;
    }
    return subOptions.map((subOption) => (
      <SingleSelectitem
        key={subOption.index}
        option={subOption}
        selectedOption={selectedOption}
        clickHandler={clickHandler}
        toggleExpandCollapseHandler={toggleExpandCollapseHandler}
        expandedOptions={expandedOptions}
        level={level + 1}
      />
    ));
  };

  const isCurrentNodeExpanded = () =>
    expandedOptions.some((opt) => opt.index === option.index);

  const onclick = (event) => {
    event.stopPropagation();
    if (clickHandler) {
      clickHandler(option);
    }
  };

  const onToggleExpandCollapse = () => (event) => {
    event.stopPropagation();
    toggleExpandCollapseHandler(option);
  };

  const hierarchyIndent = `${level * 20 + 10}px`;
  const isSelected = option?.index === selectedOption?.index;

  return (
    <>
      <div
        className={[
          'single-select-item',
          isSelected ? 'item-selected' : '',
        ].join(' ')}
      >
        <div style={{ marginLeft: hierarchyIndent }} />
        <div
          role="button"
          tabIndex={0}
          onClick={onclick}
          onKeyDown={() => {}}
          onFocus={() => {}}
        >
          <p>
            {option?.subOptions?.length > 0 && (
              <ToggleButton
                isExpanded={isCurrentNodeExpanded()}
                onClick={onToggleExpandCollapse()}
              />
            )}
            {option?.label}
          </p>
        </div>
      </div>
      {option?.subOptions?.length > 0 &&
        isCurrentNodeExpanded() &&
        renderSubElements(option?.subOptions)}
    </>
  );
}

SingleSelectitem.propTypes = {
  option: PropTypes.shape(optionShape),
  selectedOption: PropTypes.shape(optionShape),
  clickHandler: PropTypes.func.isRequired,
  toggleExpandCollapseHandler: PropTypes.func.isRequired,
  expandedOptions: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  level: PropTypes.number,
};

export default SingleSelectitem;
