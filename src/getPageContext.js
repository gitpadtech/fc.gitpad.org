/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepPurple from '@material-ui/core/colors/deepPurple';

function getTheme(uiTheme) {
  const theme = createMuiTheme({
    nprogress: {
      color: uiTheme.paletteType === 'light' ? '#000' : '#fff',
    },
    palette: { ...uiTheme.paletteColors, type: uiTheme.paletteType },
  });
  
  // Expose the theme as a global variable so people can play with it.
  if (process.browser) {
    window.theme = theme;
  }
  return theme;
}
const theme = getTheme({
  paletteType: 'light',
  paletteColors: {
    primary: teal,
    secondary: deepPurple,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
