import React, { useState } from "react";
import type { StyleProp, ViewStyle, ViewProps, ImageSourcePropType } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { SBTextItem } from "./SBTextItem";
import CarouselCard from "./shared/CarouselCard";

interface Props extends AnimatedProps<ViewProps> {
    style?: StyleProp<ViewStyle>
    url: string
    pretty?: boolean
    showIndex?: boolean
    height: number
    width: number
    img?: ImageSourcePropType
}

export const SBItem: React.FC<Props> = (props) => {
    const { style, showIndex = true, height, url, width, pretty, testID, ...animatedViewProps } = props;
    return (
        <LongPressGestureHandler
            onActivated={() => {
            }}
        >
            <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>

                <CarouselCard
                    height={height}
                    width={width}
                    url={url}
                />

            </Animated.View>
        </LongPressGestureHandler>
    );
};