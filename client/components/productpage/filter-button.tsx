import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '../Themed'
type btnProps = {
    label: string
    handleSubmit: () => void
}

const FilterButton = ({ label, handleSubmit }: btnProps) => {
    return (
        <TouchableOpacity
            onPress={handleSubmit}
        >
            <Text className='bg-white p-1.5 text-nowrap rounded-md text-center font-bold !text-[hsl(222.2,84%,4.9%)] shadow-sm'>{label}</Text>
        </TouchableOpacity>
    )
}

export default FilterButton