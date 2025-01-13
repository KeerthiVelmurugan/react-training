import React, { createContext, useState } from 'react'
import ThemedComponent from './ThemedComponent';

export const ThemeContext = createContext('light');

const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((preTheme) => (preTheme==='light'?'dark':'light'));


    };



return (
<ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
</ThemeContext.Provider>
  

)
}


function ThemeChanging() {
    return(
        <ThemeProvider>
            <ThemedComponent />

        </ThemeProvider>

        
    )}

 

export default ThemeChanging
//_ means => it is like a placeholder, we can use any variable instead of this(_)