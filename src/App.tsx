import { createEffect } from 'solid-js'
import './App.css'
import preferences from './components/preferences/Preferences'
import Banner from './components/banner/Banner'
import { Route, Router } from '@solidjs/router'
import Home from './route/home/Home'
import Settings from './route/settings/Settings'

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
    <>
      <Banner navigationButtons={[
        { 
          label: 'Home',
          onClick: () => {
            window.location.href = '/'
          }
        },
        { 
          label: 'Settings',
          onClick: () => {
            window.location.href = '/settings'
          }
        }
      ]}/>
      <div class="root-container">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </Router>
      </div>
    </>
  )
}

export default App

