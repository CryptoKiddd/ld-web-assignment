import { styled } from  "@mui/system"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Header from "./Components/Header"
import Info from "./Components/Info";
import { createTheme,ThemeProvider } from "@mui/material";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});




// import { createBrowserRouter, RouterProvider } from "react-router-dom";


// const router = createBrowserRouter([
  
// ]);
// const theme = createTheme({
// status:{
//   active:"#29C293",
//   inActive:"#FD5461"

// },
// priority:{
//   high:" #FD5461",
//   urgnet:"#DB54FD",
//   medium:"#FFAB2A",
//   low:"#29C293"
// },
// fontSize:{
//   xs:12,
//   sm:14,
//   md:16,
//   lg:24

// },
// palette:{
//   secondary:{
//     main:"rgba(49, 57, 78, 0.5)",
//     light:"#D6D7DC",
//   }
// }
// })
function App() {



  return (
    <CacheProvider value={cache}>


    <div className="App">
   {/* <Header title='Dashboard' /> */}
   <Info />

    </div>

    </CacheProvider>
  );
}

export default App;
