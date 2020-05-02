import { Platform, PixelRatio, Dimensions } from 'react-native'

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window',
)

// based on iPhone 8's scale
const wscale: number = SCREEN_WIDTH / 375
const hscale: number = SCREEN_HEIGHT / 667

export function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
): number {
  const newSize = based === 'height' ? size * hscale : size * wscale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

interface ScaleValueProps {
  value: string | number
  scale: {
    [key: string]: keyof string | number
  }
}
export function getScaleValue({
  value,
  scale,
}: ScaleValueProps): number | string {
  const scaleValue = scale?.[value]
  if (scaleValue) {
    return scaleValue
  }

  if (typeof value === 'string' && new RegExp('rpx').test(value)) {
    return normalize(parseInt(value.replace('rpx', '')))
  }
  if (typeof value === 'string' && new RegExp('hpx').test(value)) {
    return normalize(parseInt(value.replace('hpx', '')), 'height')
  }

  return value
}
