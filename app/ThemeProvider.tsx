"use client"
import React, { useState } from "react";

interface ThemeContextType{
    displayMode: boolean;
    changeMode: ()=>void;
}
export const ThemeContext = React.createContext<ThemeContextType | null>(null);
 

export const ThemeProvider= ({children}:{children: React.ReactNode}) =>{
    const [displayMode,setMode] = useState(true);
    const changeMode = ()=>setMode(!displayMode);
    return(
        <ThemeContext.Provider value={{displayMode, changeMode}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = ()=>{
    const context = React.useContext(ThemeContext);
    if(!context){
        throw new Error('useThemeContext must be used inside the ThemeProvider');
    }

    return context;
}