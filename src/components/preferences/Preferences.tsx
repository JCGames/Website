import { createEffect, createRoot, on } from 'solid-js'
import { createStore } from 'solid-js/store'

const STORE_NAME = 'userPreferences';

enum ColorTheme {
  LIGHT = 'Light',
  DARK = 'Dark'
}

export type PreferencesType = {
  colorTheme: ColorTheme
}

const [store, setStore] = createStore<PreferencesType>({
    colorTheme: ColorTheme.LIGHT
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
  ColorTheme: ColorTheme,
  store: store,
  setStore: setStore
}