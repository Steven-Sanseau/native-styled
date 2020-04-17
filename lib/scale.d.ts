export declare const SCREEN_WIDTH: number, SCREEN_HEIGHT: number;
export declare function normalize(size: number, based?: 'width' | 'height'): number;
interface ScaleValueProps {
    value: string | number;
    scale: {
        [key: string]: keyof string | number;
    };
}
export declare function getScaleValue({ value, scale, }: ScaleValueProps): number | string;
export {};
