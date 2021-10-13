import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const themeColor=false;
export const theme = createTheme({
  typography:{
    fontFamily:[
      'Inter', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial, sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    ]
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '13px',
        },
      },
    },
    MuiAppBar:{
      colorPrimary:{
        color:'rgb(158, 158, 158)',
        backgroundColor:'white'
      }
    },
    MuiPaper:{
      root:{
        // background:'rgb(247, 249, 252)'
      }
    },
    MuiTableCell:{
      root:{
        padding:'0.5rem'
      }
    },
    MuiContainer:{
      root:{
        paddingRight:'0rem',
        paddingLeft:'0rem',
      }
    },
    MuiButton:{
      containedSecondary:{
        backgroundColor:"rgb(244, 67, 54)"
      },
      root:{
        margin:"0.2rem"
      }
    },
    MuiIconButton:{
      root:{
        padding:'0.1rem'
      }
    },
    MuiSvgIcon:{
      colorSecondary:{
        color:'rgb(244, 67, 54)'
      }
    },
    MuiInputLabel:{
      outlined:{
        zIndex:'0'
      }
    },
  },
  palette: {
    type:themeColor?'dark':'light',
    primary: {
      main: '#323232',
    },
    secondary: {
      main: '#376fd0',
    },
    ternary:{
      main:'#002f79'
    },
    fontSecondary:{
      main:'#eee'
    },
    lightFill:{
      main:'rgb(238, 238, 238)'
    },
    lightishFill:{
      main:'rgba(238, 238, 238,0.5)'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'rgb(238, 238, 238)',
    },
    backgroundSecondary: {
      default: 'rgb(35, 48, 68)',
    },
  },
});

export  default theme;