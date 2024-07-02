import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ProductBrowser from '@/components/dashboard/browse.dashboard';
import ProductCategories from '@/components/dashboard/productcategories';
import { ScrollView } from 'react-native-gesture-handler';
import { useFetchCategoriesQuery } from '@/providers/api/category.slice';
import { ActivityIndicator } from 'react-native';


export default function Tab() {
    const { data: categories, isLoading, isError } = useFetchCategoriesQuery(undefined)
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                (!isError && !isLoading && categories)
                    ?
                    <>
                        <ProductBrowser categories={categories} />
                        {categories.map((category, i) => <ProductCategories category={category} key={i} />)}
                    </>
                    :
                    <ActivityIndicator />
            }
            <StatusBar style="auto" />
        </ScrollView>
    );
}


