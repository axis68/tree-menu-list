# Quick help

## About the TreeMenuList component

The `TreeMenuList` component provides a hierarchical list of options for selection. Each option may include a nested list of sub-options, allowing for flexible, multi-level structures.

See the TreeMenuList running live [here](https://axis68.github.io/tree-menu-list/).

### Definition of options

Each option is characterized by:
* `key`: A unique identifier
* `label`: The text to be displayed
* `subOptions` (optional): A list of nested options

#### Example:
```javascript
const options = [
  { index: "1", label: "Option 1"},
  { index: "2", label: "Option 2", subOptions: [ 
    { index: "2.1", label: "Suboption 2.1"},
    { index: "2.2", label: "Suboption 2.2"},
  ]},
  { index: "3", label: "Option 3", subOptions: [ 
    { index: "3.1", label: "Suboption 3.1"},
    { index: "3.2", label: "Suboption 3.2"},
  ]},
];
```

### Behavior

* **Expand/Collapse Sub-Options**: Sub-options can be expanded or collapsed using a `ToggleButton`. The button displays an arrow pointing to the right when collapsed or downward when expanded.
* **Default State**: By default, only the sub-options required to display the selected option are expanded. All other options are collapsed.

## Expected Props

The `TreeMenuList` expects the following props:

- **`options`**: The list of available options.
- **`selectedOption`**: The currently selected option (identified by its `index`).
- **`onChange`**: A callback invoked when a new option is selected. The selected option is passed as an argument.

### Remarks

- **Centralized State Management**:  
  The `expandedOptions` are managed centrally in the component’s state. This ensures that any levels expanded or collapsed by the user remain in memory.

- **Limitations**:  
  - Keyboard support is not yet implemented.  
  - Mouse and touch interactions could be improved.  
  - The component could be extended to support custom render functions or additional features.
  - Tests are not developped yet.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Opening
Thank you for visiting this page! I hope you found the information helpful.


