import { useLocalSearchParams } from 'expo-router';
import { View, Text } from '@/components/Themed';
import Container from '@/components/shared/container';

export default function ProductScreen() {
  const { filter } = useLocalSearchParams();

  return (
    <Container>
      <View className='flex-1' >
        <Text>Details of user {filter} </Text>
      </View>
    </Container>
  );
}
