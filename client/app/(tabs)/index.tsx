import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ProductBrowser from '@/components/dashboard/browse.dashboard';
import ProductCategories from '@/components/dashboard/productcategories';
import { ScrollView } from 'react-native-gesture-handler';


export default function Tab() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <ProductBrowser />
            <ProductCategories key={1}/>
            <ProductCategories key={2}/>
            <ProductCategories key={3}/>
            <StatusBar style="auto" />
        </ScrollView>
    );
}


