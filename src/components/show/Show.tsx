import type { JSXElement } from "solid-js"

type ShowProps = {
    shouldShow: boolean,
    children?: JSXElement
}

export default function Show(props: ShowProps) {
    if (props.shouldShow) {
        return props.children
    }

    return <div>Loading...</div>
} 