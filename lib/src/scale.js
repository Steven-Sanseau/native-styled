import { Platform, PixelRatio, Dimensions } from 'react-native';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
// based on iPhone 8's scale
const wscale = SCREEN_WIDTH / 375;
const hscale = SCREEN_HEIGHT / 667;
export function normalize(size, based = 'width') {
    const newSize = based === 'height' ? size * hscale : size * wscale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
export function getScaleValue({ value, scale, }) {
    const scaleValue = scale?.[value];
    if (scaleValue) {
        return scaleValue;
    }
    if (typeof value === 'string' && new RegExp('rpx').test(value)) {
        return normalize(parseInt(value.replace('rpx', '')));
    }
    if (typeof value === 'string' && new RegExp('hpx').test(value)) {
        return normalize(parseInt(value.replace('hpx', '')), 'height');
    }
    return value;
}
