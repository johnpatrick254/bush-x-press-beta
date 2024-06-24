/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from 'nativewind';


type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(

) {
  const {colorScheme:theme} = useColorScheme() ;
  return Colors[theme ?? 'light'];  
}

export function Text({className,...props}: TextProps) {
  const theme = useThemeColor();
  return <DefaultText style={theme} className={`text-primary ${className}`} {...props} />;
}

export function View(props: ViewProps) {
  const theme = useThemeColor();
  return <DefaultView style={theme} {...props} />;
}
