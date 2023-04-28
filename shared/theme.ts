import { createTheme, hexToRgb } from '@mui/material/styles';

declare module '@mui/material/styles' {
  // Color names generated from https://chir.ag/projects/name-that-color
  interface Palette {
    amber: Palette['primary'];
    ebonyClay: Palette['primary'];
    pattensBlue: Palette['primary'];
    watusi: Palette['primary'];
    cream: Palette['primary'];
    mischka: Palette['primary'];
    mischka50: Palette['primary'];
    athensGray: Palette['primary'];
    aquamarineBlue: Palette['primary'];
    riptide: Palette['primary'];
    wildSand: Palette['primary'];
    white: Palette['primary'];
    porcelain: Palette['primary'];
    albaster: Palette['primary'];
    shuttleGray: Palette['primary'];
    gullGray: Palette['primary'];
    dodgerBlue: Palette['primary'];
  }
  interface PaletteOptions {
    amber: PaletteOptions['primary'];
    ebonyClay: PaletteOptions['primary'];
    pattensBlue: PaletteOptions['primary'];
    watusi: PaletteOptions['primary'];
    cream: PaletteOptions['primary'];
    mischka: PaletteOptions['primary'];
    mischka50: PaletteOptions['primary'];
    athensGray: PaletteOptions['primary'];
    aquamarineBlue: PaletteOptions['primary'];
    riptide: PaletteOptions['primary'];
    wildSand: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    porcelain: PaletteOptions['primary'];
    albaster: PaletteOptions['primary'];
    shuttleGray: PaletteOptions['primary'];
    gullGray: PaletteOptions['primary'];
    dodgerBlue: PaletteOptions['primary'];
  }
}

type FontWeightKeys = keyof typeof fontFamilyVariantsMapping.weights;
type FontWeightValues = typeof fontWeightValues[number];
type FontSizeKeys = keyof typeof fontFamilyVariantsMapping.sizes;
type FontSizeValues = typeof fontSizeValues[number];

type FontFamilyVariantsKeys = `fv-${FontWeightKeys}-${FontSizeKeys}`;
type FontFamilyVariantsExtension<T> = {
  [key in FontFamilyVariantsKeys]: T;
};
type FontFamilyVariants = {
  [key in FontFamilyVariantsKeys]: {
    fontFamily: string;
    fontWeight: FontWeightValues;
    fontSize: FontSizeValues;
    lineHeight: 'normal';
    letterSpacing: 'normal';
  };
};

declare module '@mui/material/styles' {
  interface TypographyVariants
    extends FontFamilyVariantsExtension<React.CSSProperties> {}

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions
    extends Partial<FontFamilyVariantsExtension<React.CSSProperties>> {}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends FontFamilyVariantsExtension<true> {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    overline: false;
  }
}

export const fontFamilyVariantsMapping = {
  family: {
    url: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap',
    value: ['"Source Sans Pro"', 'sans-serif'].join(','),
  },
  weights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  } as const,
  sizes: {
    10: '1rem',
    11: '1.1rem',
    12: '1.2rem',
    13: '1.3rem',
    14: '1.4rem',
    15: '1.5rem',
    16: '1.6rem',
    17: '1.7rem',
    18: '1.8rem',
    19: '1.9rem',
    20: '2rem',
    21: '2.1rem',
    22: '2.2rem',
    23: '2.3rem',
    24: '2.4rem',
    25: '2.5rem',
    26: '2.6rem',
    27: '2.7rem',
    28: '2.8rem',
    29: '2.9rem',
    30: '3rem',
  } as const,
};

const fontWeightKeys = Object.keys(fontFamilyVariantsMapping.weights);
const fontWeightValues = Object.values(fontFamilyVariantsMapping.weights);
const fontSizeKeys = Object.keys(fontFamilyVariantsMapping.sizes);
const fontSizeValues = Object.values(fontFamilyVariantsMapping.sizes);

const fontFamilyVariants = fontWeightValues
  .flatMap((weight, weightIndex) =>
    fontSizeValues.map((size, sizeIndex) => ({
      [`fv-${fontWeightKeys[weightIndex]}-${fontSizeKeys[sizeIndex]}`]: {
        fontFamily: fontFamilyVariantsMapping.family.value,
        fontWeight: weight,
        fontSize: size,
        lineHeight: 'normal',
        letterSpacing: 'normal',
      },
    }))
  )
  .reduce((accum, value) => ({ ...accum, ...value }), {}) as FontFamilyVariants;

export const globalStyles = {
  html: {
    fontSize: '62.5%' /* 62.5% of 16px = 10px */,
  },
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 428,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    amber: {
      main: '#ffc200',
    },
    ebonyClay: {
      main: '#222835',
    },
    pattensBlue: {
      main: '#d4ebff',
    },
    watusi: {
      main: '#ffe0d4',
    },
    cream: {
      main: '#fffcd4',
    },
    mischka: {
      main: '#dde0e6',
    },
    mischka50: {
      main: hexToRgb('#dde0e680'),
    },
    athensGray: {
      main: '#eef0f3',
    },
    aquamarineBlue: {
      main: '#64ded6',
    },
    riptide: {
      main: '#7fedb9',
    },
    wildSand: {
      main: '#f6f6f6',
    },
    white: {
      main: '#fefefe',
    },
    porcelain: {
      main: '#f2f3f4',
    },
    albaster: {
      main: '#f8f8f8',
    },
    shuttleGray: {
      main: '#626b7a',
    },
    gullGray: {
      main: '#93a5b6',
    },
    dodgerBlue: {
      main: '#1987ff',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: fontFamilyVariantsMapping.family.value,

    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: undefined,
    body2: undefined,
    button: fontFamilyVariants['fv-semiBold-12'],
    caption: undefined,
    overline: undefined,

    ...fontFamilyVariants,
  },
  spacing: (...factors: Array<string | number>) =>
    factors
      .map((factor) =>
        typeof factor === 'number'
          ? `${factor /* factor in px */ / 10}rem`
          : factor
      )
      .join(' '),
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: Number(theme.shape.borderRadius) * 1.25,
          padding: theme.spacing(7, 22),
          height: 30,
        }),
        containedSecondary: ({ theme }) => ({
          boxShadow: theme.shadows[3],
          '&:hover': {
            backgroundColor: theme.palette.white.main,
          },
        }),
        containedPrimary: ({ theme }) => ({
          boxShadow: theme.shadows[3],
          backgroundColor: theme.palette.amber.main,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.amber.main,
          },
        }),
      },
    },
  },
});

export default theme;
