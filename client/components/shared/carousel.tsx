import * as React from "react";
import { FadeInRight } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { SBItem } from "../../components/SBItem";
import { View } from "react-native";

type CarouselProps = {
    data: any[],
    width: number,
    viewCount?: number
    autoPlay?: boolean,
    snapDirection?: "left" | "right",
    loop?: boolean,
    pagingEnabled?: boolean,
    snapEnabled?: boolean,
    autoPlayReverse?: boolean,
    mode?: "horizontal-stack" | "vertical-stack" | undefined
};

const CustomCarousel: React.FC<CarouselProps> = ({
    data,
    width,
    viewCount = 5,
    autoPlay = true,
    snapDirection = 'left',
    loop = true,
    pagingEnabled = false,
    snapEnabled = true,
    autoPlayReverse = false,
    mode = "horizontal-stack"
}) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onSnapToItem = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <View className="flex-1">
            <Carousel
                width={width}
                pagingEnabled={pagingEnabled}
                snapEnabled={snapEnabled}
                mode={mode}
                loop={loop}
                autoPlay={autoPlay}
                autoPlayReverse={autoPlayReverse}
                scrollAnimationDuration={3000}
                data={data}
                modeConfig={{
                    snapDirection,
                    stackInterval: mode === "vertical-stack" ? 5 : 10,
                }}
                customConfig={() => ({ type: "positive", viewCount })}
                onSnapToItem={onSnapToItem}
                renderItem={({ item, index }) => (
                    <SBItem
                        url={item.url}
                        key={index}
                        width={width}
                        height={width}
                        entering={FadeInRight.delay(
                            (viewCount - index) * 100,
                        ).duration(200)}
                    />
                )}
            />
            <View className="flex-row justify-center mt-2">
                {data.map((_, index) => (
                    <View
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full mx-1 ${index === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
                    ></View>
                ))}
            </View>
        </View>
    );
};

export default CustomCarousel;
