import React from 'react'
import { Dimensions } from 'react-native'
import { useTheme } from './ThemeContext'

export function useViewportWidth(): number {
  const [width, setWidth] = React.useState<number>(0)
  const layoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
  layoutEffect(() => {
    setWidth(Dimensions.get('window').width)

    function handleResize(): void {
      setWidth(Dimensions.get('window').width)
    }

    Dimensions.addEventListener('change', handleResize)
    return (): void => Dimensions.removeEventListener('change', handleResize)
  }, [])

  return width
}

export function useBreakpoint(): string {
  const theme = useTheme()

  if (!theme) {
    return 'xs'
  }

  const { breakpoints } = theme

  const width = useViewportWidth()

  return React.useMemo(() => {
    return (
      Object.keys(breakpoints)
        .reverse()
        .find((breakpoint) => width > breakpoints[breakpoint]) || 'xs'
    )
  }, [width])
}

export function useResponsiveProps(): (arg0: any) => string {
  const current = useBreakpoint()

  return function getProps(values) {
    if (typeof values !== 'object') {
      return values
    }

    if (values[current] === undefined) {
      return values[Object.keys(values)[Object.keys(values).length - 1]]
    }

    return values[current]
  }
}
