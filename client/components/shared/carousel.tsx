import * as React from "react";
import { View } from "react-native";
import { FadeInRight } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { SBItem } from "../../components/SBItem";
import SButton from "../Sbutton";
;

type CarouselProps = {
    data: any[],
    viewCount?: number,
    autoPlay?: boolean,
    snapDirection?: "left" | "right",
    loop?: boolean,
    pagingEnabled?: boolean,
    snapEnabled?: boolean,
    autoPlayReverse?: boolean,
    mode?: "horizontal-stack" | "vertical-stack" | undefined
};

const CustomCarousel: React.FC<CarouselProps> = (
    { 
        data,
        viewCount = 5,
        autoPlay = false,
        snapDirection = 'left',
        loop = true,
        pagingEnabled = false,
        snapEnabled = true,
        autoPlayReverse = true,
        mode = "horizontal-stack"
    }
) => {
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                style={{
                    width: "100%",
                    height: 240,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                width={280}
                height={210}
                pagingEnabled={pagingEnabled}
                snapEnabled={snapEnabled}
                mode={mode}
                loop={loop}
                autoPlay={autoPlay}
                autoPlayReverse={autoPlayReverse}
                data={data}
                modeConfig={{
                    snapDirection,
                    stackInterval: mode === "vertical-stack" ? 8 : 18,
                }}
                customConfig={() => ({ type: "positive", viewCount })}
                renderItem={({ index }) => (
                    <SBItem
                        index={index}
                        key={index}
                        entering={FadeInRight.delay(
                            (viewCount - index) * 100,
                        ).duration(200)}
                    />
                )}
            />
        </View>
    );
}

export default CustomCarousel;