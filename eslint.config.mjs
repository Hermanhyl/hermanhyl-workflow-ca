import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["/*.test.js", "/tests/*/.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];