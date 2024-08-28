export const colorStyles = {
  colors: {
    red: "#FF3B30",
    red_dark: "#FF453A",
    blue: "#007AFF",
    blue_dark: "#0A84FF",
  },
  labels: {
    primary: "#000000",
    primary_dark: "#FFFFFF",
    secondary: "#3C3C4399",
    secondary_dark: "#EBEBF599",
    tertiary: "#3C3C434D",
    tertiary_dark: "#EBEBF54D",
    quaternary: "#3C3C432E",
    quaternary_dark: "#EBEBF52E",
  },
  fills: {
    primary: "#78788033",
    primary_dark: "#7878805C",
    secondary: "#78788029",
    secondary_dark: "#78788052",
    tertiary: "#7676801F",
    tertiary_dark: "#7676803D",
    quaternary: "#74748014",
    quaternary_dark: "7474802E",
  },
  bg: {
    primary: "#FFFFFF",
    primary_dark_elevated: "#1C1C1E",
    primary_dark_base: "#000000",
    secondary: "#F2F2F7",
    secondary_dark_elevated: "#2C2C2E",
    secondary_dark_base: "#1C1C1E",
    tertiary: "#FFFFFF",
    tertiary_dark_elevated: "#3A3A3C",
    tertiary_dark_base: "#2C2C2E",
  },
  grays: {
    black: "#000000",
    black_dark: "#000000",
    white: "#FFFFFF",
    white_dark: "#000000",
  },
};

export const lightTheme = {
  colors: {
    red: colorStyles.colors.red,
    blue: colorStyles.colors.blue,
  },
  labels: {
    primary: colorStyles.labels.primary,
    secondary: colorStyles.labels.secondary,
    tertiary: colorStyles.labels.tertiary,
    quaternary: colorStyles.labels.quaternary,
  },
  fills: {
    primary: colorStyles.fills.primary,
    secondary: colorStyles.fills.secondary,
    tertiary: colorStyles.fills.tertiary,
    quaternary: colorStyles.fills.quaternary,
  },
  bg: {
    primary: colorStyles.bg.primary,
    secondary: colorStyles.bg.secondary,
    tertiary: colorStyles.bg.tertiary,
  },
  grays: {
    black: colorStyles.grays.black,
    white: colorStyles.grays.white,
  },
};

export const darkTheme = {
  colors: {
    red: colorStyles.colors.red_dark,
    blue: colorStyles.colors.blue_dark,
  },
  labels: {
    primary: colorStyles.labels.primary_dark,
    secondary: colorStyles.labels.secondary_dark,
    tertiary: colorStyles.labels.tertiary_dark,
    quaternary: colorStyles.labels.quaternary_dark,
  },
  fills: {
    primary: colorStyles.fills.primary_dark,
    secondary: colorStyles.fills.secondary_dark,
    tertiary: colorStyles.fills.tertiary_dark,
    quaternary: colorStyles.fills.quaternary_dark,
  },
  bg: {
    primary: colorStyles.bg.primary_dark_base,
    secondary: colorStyles.bg.primary_dark_elevated,
    tertiary: colorStyles.bg.tertiary_dark_base,
  },
  grays: {
    black: colorStyles.grays.black_dark,
    white: colorStyles.grays.white_dark,
  },
};

export type ColorTypes = typeof darkTheme;
