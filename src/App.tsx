import { createEffect } from 'solid-js'
import './App.css'
import preferences from './components/preferences/Preferences'
import PageHeader from './components/banner/PageHeader'
import { A, Route, Router } from '@solidjs/router'
import Home from './route/home/Home'
import Settings from './route/settings/Settings'
import Button from './components/button/Button'

const DATA_THEME = 'data-theme'

function App() {
  createEffect(() => {
    if (preferences.store.theme === preferences.ColorTheme.LIGHT) {
      document.documentElement.setAttribute(DATA_THEME, preferences.ColorTheme.LIGHT)
    }
    else {
      document.documentElement.setAttribute(DATA_THEME, preferences.ColorTheme.DARK)
    }
  })

  return (
    <div class="root-container">
      
      <PageHeader>
        <Button label="Home" onClick={() => { window.location.href = '/' }} />
        <Button label="Settings" onClick={() => { window.location.href = '/settings' }} />
      </PageHeader>
      
      <div class="root-content-container">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </Router>
      </div>

    </div>
  )
}

export default App

