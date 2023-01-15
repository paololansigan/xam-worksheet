import { createTheme } from "@mui/material/styles";

import textFieldTheme from "./textfield";

export const baseTheme = {};

/**
 * For every MUI component that needs customization
 */
export const CustomTheme = createTheme({
  ...baseTheme,
  components: {
    ...textFieldTheme(baseTheme),
  },
});
