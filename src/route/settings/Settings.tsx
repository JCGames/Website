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
    <div class="settings-root">
      <div class="settings-panel">
        <div class="settings-title-container">
          <h1>Settings</h1>
        </div>
        <Button 
          label={`Enable ${(preferences.store.theme === preferences.ColorTheme.LIGHT ? 'Dark' : 'Light')} Mode`}
          onClick={handleChangeTheme}/>
      </div>
    </div>
  )
}