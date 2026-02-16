import { type JSXElement } from "solid-js"

import './PageHeader.css'

type BannerProps = {
  children?: JSXElement
}

export default function PageHeader(props: BannerProps) {
  return (
    <header class="banner">
      <div class="banner column-1">
        <h3>
          Christian Marcellino
        </h3>
      </div>
      <div class="banner column-2">
        {props.children}
      </div>
      <div class="banner column-3">
        <div class="profile-picture">
          <p>Profile Picture</p>
        </div>
      </div>
    </header>
  )
}