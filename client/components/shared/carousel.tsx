import * as React from "react";
import { FadeInRight } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SBItem } from "../../components/SBItem";
;

type CarouselProps = {
    data: any[],
    width: number,
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
        mode = "horizontal-stack",
        width
    }
) => {
    return (
        <Carousel
            style={{
                alignItems: "center",
                justifyContent: "center",
            }}
            width={width}
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
            renderItem={({item,index}) => (
                <SBItem
                    url={item.url}
                    key={index}
                    width={width}
                    height={100}
                    entering={FadeInRight.delay(
                        (viewCount - index) * 100,
                    ).duration(200)}
                />
            )}
        />
    );
}

export default CustomCarousel;