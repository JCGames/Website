import { createEffect, createRoot, on } from 'solid-js'
import { createStore } from 'solid-js/store'

const STORE_NAME = 'userPreferences';

enum ColorThemeMode {
  LIGHT = 'Light',
  DARK = 'Dark'
}

export type PreferencesType = {
  theme: ColorThemeMode
}

const [store, setStore] = createStore<PreferencesType>({
    theme: ColorThemeMode.LIGHT
})

createRoot(() => {
  createEffect(() => {
    const saved = localStorage.getItem(STORE_NAME);
    if (saved) {
      console.log('Loaded preferences')
      setStore(JSON.parse(saved))
    }
  })

  createEffect(() => {
    console.log('Saved preferences')
    localStorage.setItem(STORE_NAME, JSON.stringify(store))
  })
})

export default {
  ColorTheme: ColorThemeMode,
  store: store,
  setStore: setStore
}