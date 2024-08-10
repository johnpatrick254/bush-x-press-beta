import { useLocalSearchParams } from 'expo-router';
import { View, Text } from '@/components/Themed';
import Container from '@/components/shared/container';
import { CustomSearchBar } from '@/components/shared/Searchbar';
import { useFetchProductsQuery } from '@/providers/api/products.slice';
import ProductCard from '@/components/dashboard/product.card';
import { FlatList } from 'react-native';

export default function ProductScreen() {
  const categoryId = useLocalSearchParams().filter as unknown as number;
  
  const { data: products, isError, isLoading } = useFetchProductsQuery({ category: categoryId, limit: 4, offset: 0 });
  return (
    <Container>
      <View className='flex-1 py-2  bg-[hsl(222.2,84%,4.9%)]' >
        <CustomSearchBar />
        <View className='flex-1 bg-background rounded-t-3xl px-1 py-2'>
          <FlatList
            data={products}
            bounces={true}
            renderItem={({ item: product }) => {
              return <ProductCard
                key={product.id}
                title={product.title
                }
                images={product.images}
                category={product.category}
                price={product.price}
                description={product.description}
                id={`${product.id}`}
              />
            }
            }
          />
        </View>
      </View>
    </Container>
  );
}