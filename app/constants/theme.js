export const COLORS = {
  primary: "#2d3b52",
  secondarydark: "#232935",
  tertiaryGray: "#a2a7b4",
  lightQ: "#e4e7e9",
  white: "#e4e7e9",
  error: "#f44336",
  success: "#4caf50",
  warning: "#ff9800",
  info: "#2196f3",
  border: "#CFCFCF",
  pureWhite: "#fff",
  placeholder: "#a2a7b4",
  grayText: "#A0A7B1",
};

export const SIZES = {
  base: 10,
  small: 12,
  graySmall: 11,
  font: 14,
  h4: 16,
  h3: 18,
  h2: 24,
  h1: 34,
};

export const FONTS = {
  bold: "EncodeSansBold",
  boldItalic: "EncodeSansBoldItalic",
  semiBold: "EncodeSansSemiBold",
  semiBoldItalic: "EncodeSansSemiBoldItalic",
  medium: "EncodeSansMedium",
  mediumItalic: "EncodeSansMediumItalic",
  regular: "EncodeSansRegular",
  regularItalic: "EncodeSansRegularItalic",
  light: "EncodeSansLight",
  lightItalic: "EncodeSansLightItalic",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
