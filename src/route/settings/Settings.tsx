import Button from '../../components/button/Button'
import preferences from '../../components/preferences/Preferences'

import './Settings.css'

export default function Settings() {
  const handleChangeTheme = () => {
    if (preferences.store.theme === preferences.ColorTheme.DARK) {
        preferences.setStore({ theme: preferences.ColorTheme.LIGHT })
    }
    else {
        preferences.setStore({ theme: preferences.ColorTheme.DARK })
    }
  }

  return (
    <h1>
      Settings
      <Button 
        label={`Enable ${(preferences.store.theme === preferences.ColorTheme.LIGHT ? 'Dark' : 'Light')} Mode`}
        onClick={handleChangeTheme}/>
    </h1>
  )
}