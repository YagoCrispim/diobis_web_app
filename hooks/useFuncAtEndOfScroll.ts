import { useEffect } from 'react'

export default function useFuncAtEndOfScroll(action: () => void) {
  useEffect(() => {
    window.onscroll = function () {
      const howMuchToTheEnd =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY + 200

      if (scrolled >= howMuchToTheEnd) return action()
    }
  }, [action])
}
