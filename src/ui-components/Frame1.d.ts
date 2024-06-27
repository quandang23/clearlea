/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 8"?: PrimitiveOverrideProps<IconProps>;
    "Residential Help LLC 711 Robert Street South, Saint Paul, MN, 55107 651-239-4594"?: PrimitiveOverrideProps<TextProps>;
    "plow 5"?: PrimitiveOverrideProps<ImageProps>;
    "plow 6"?: PrimitiveOverrideProps<ImageProps>;
    "$40.95"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "Snow Removal LLC 711 Robert Street South, Saint Paul, MN, 55107 651-239-4594"?: PrimitiveOverrideProps<TextProps>;
    "plow 1"?: PrimitiveOverrideProps<ImageProps>;
    "plow 2"?: PrimitiveOverrideProps<ImageProps>;
    "$50.95"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<IconProps>;
    "Care Removal LLC 711 Robert Street South, Saint Paul, MN, 55107 651-239-4594"?: PrimitiveOverrideProps<TextProps>;
    "plow 4"?: PrimitiveOverrideProps<ImageProps>;
    "$30.95"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Notify All"?: PrimitiveOverrideProps<TextProps>;
    "Service Provider"?: PrimitiveOverrideProps<TextProps>;
    "Screenshot 2024-04-19 at 10.45 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
