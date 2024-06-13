import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ProductBrowser from '@/components/dashboard/browse.dashboard';
import ProductCategories from '@/components/dashboard/productcategories';
import { ScrollView } from 'react-native-gesture-handler';


export default function Tab() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <ProductBrowser />
            <ProductCategories category='electronics' key={1}/>
            <ProductCategories category='jewelery' key={2}/>
            <ProductCategories category="men's clothing" key={3}/>
            <ProductCategories category="women's clothing" key={4}/>
            <StatusBar style="auto" />
        </ScrollView>
    );
}


