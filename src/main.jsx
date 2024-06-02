import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools"
import { BrowserRouter } from "react-router-dom";



//we set up the dak mode using the chakra ui
const styles={
  global:(props)=>({
    //we created a style object with the global as the key
    body:{
      //for lightmode color, for dark mode color
      bg:mode("gray.100","#000")(props),
      color:mode("gray.800","whiteAlpha.900")(props)
    }
  })
}

//the below is from the chakra ui
//we passsed the styles in the theme , as it will override the color that chakra provides us
const config= {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({ config,styles })


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
