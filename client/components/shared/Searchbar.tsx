
import * as React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text } from "../Themed";
import { categories } from "@/constants/filters";
import { price } from "@/constants/filters";
import FilterButton from "../productpage/filter-button";

export const CustomSearchBar = () => {
    const [value, setValue] = React.useState("");
    return <View className="flex flex-col gap-3 px-3 " >
        <Searchbar value={value} style={{ borderRadius: 12, backgroundColor: 'white' }} className="text-primary px-2 caret-primary rounded-sm" onChangeText={(value) => setValue(value)} />
        <View className="flex-row gap-2 pt-2 pb-4">
            {
                categories.map(category=> <FilterButton key={category} label={category} handleSubmit={()=>{}}/>)
            }
            <FilterButton key={'price'} label={"price"} handleSubmit={() => { }} />
        </View>
    </View>
}