import * as React from 'react';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { View } from '../Themed';

const DropDown = ({ Element, onItemPress, items }: { items: any[], onItemPress: (item:any) => void, Element: React.ReactNode }) => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <Provider>
            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button onPress={openMenu}>
                            {Element}
                        </Button>
                    }>
                    {
                        items.map(
                            (item, i) => {
                                return <>
                                    <Menu.Item
                                        onPress={(item) => {
                                            onItemPress(item);
                                            closeMenu()
                                        }
                                        }
                                        title={item}
                                    />
                                    {(i !== items.length - 1) && <Divider />}
                                </>
                            }
                        )
                    }
                </Menu>
            </View>
        </Provider>
    );
};

export default DropDown;