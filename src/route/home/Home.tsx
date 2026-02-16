import './Home.css'
import { createSignal, onCleanup, onMount, Show } from 'solid-js'
import Loading from '@components/loading/Loading'

export default function Home() {
  const [timeoutNumber, setTimeoutNumber] = createSignal<number>(0)
  const [hasTimedOut, setHasTimedOut] = createSignal(false)

  onMount(() => {
    const timeout = setTimeout(() => {
      setHasTimedOut(true)
    }, 5000)

    setTimeoutNumber(timeout)
  })

  onCleanup(() => clearInterval(timeoutNumber()))

  return (
    <div class="home-root">
      <div class="home-panel">
        <Show when={hasTimedOut()} fallback={<Loading/>}>
          <div class="home-title-container">
            <h1>Welcome</h1>
          </div>
          <p>
            Hi! My name is Christian.
          </p>
          <p>
            Welcome to my portfolio webpage.
          </p>
        </Show>
      </div>
    </div>
  )
} 