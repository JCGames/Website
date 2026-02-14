import type { JSXElement } from "solid-js"

import './Banner.css'
import Button from "../button/Button"

type BannerButton = {
  label: string,
  onClick?: () => void
}

type BannerProps = {
  navigationButtons: BannerButton[]
}

export default function Banner(props: BannerProps) {
  return (
    <div class="banner">
        {props.navigationButtons.map(x => {
          return (
            <Button label={x.label} onClick={x.onClick}/>
          )
        })}
    </div>
  )
}