import * as CSS from './ClipboardBubble.styled'

interface Props {
  text: string
  visible: boolean
}

const ClipboardNotification = ({ text, visible }: Props) => {
  return (
    <CSS.ClipboardBubble visible={visible ? 'show' : undefined}>
      {text}
    </CSS.ClipboardBubble>
  )
}

export { ClipboardNotification }
