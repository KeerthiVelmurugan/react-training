import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetTheme } from './slices/themeSlice';

function ThemeChange() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.themeInfo.theme)

    console.log(theme);
    
  return (
    <div style={{backgroundColor: theme=="light"?"white":"black"}}>
      <button  onClick={() => dispatch(SetTheme())} >change</button>
    </div>
  )
}

export default ThemeChange
