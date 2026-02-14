import { createSignal, createEffect, on } from 'solid-js'
import './App.css'
import Button from './components/Button/Button'
import preferences from './components/Preferences/Preferences'

function App() {
  createEffect(() => {
    if (preferences.store.theme === preferences.ColorTheme.DARK) {
      document.documentElement.setAttribute('data-theme', preferences.ColorTheme.LIGHT)
    }
    else {
      document.documentElement.setAttribute('data-theme', preferences.ColorTheme.DARK)
    }
  })

  const handleChangeTheme = () => {
    if (preferences.store.theme === preferences.ColorTheme.DARK) {
      preferences.setStore({ theme: preferences.ColorTheme.LIGHT })
    }
    else {
      preferences.setStore({ theme: preferences.ColorTheme.DARK })
    }
  }

  return (
    <>
      <Button 
        label={`Enable ${preferences.store.theme} Mode`}
        onClick={handleChangeTheme}/>
    </>
  )
}

export default App

