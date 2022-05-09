import "react-native-gesture-handler"

import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter"

import AppLoading from 'expo-app-loading';

import Widget from './src/components/Widget';



export default function App() {

	const [fontLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium
	})


	if (!fontLoaded) {
		return <AppLoading />
	}

	
	return (
		<View style={{
			flex: 1,
			backgroundColor: theme.colors.background
		}}>

			<StatusBar
				style="light"
				backgroundColor="transparent"
				translucent
			/>

			<Widget />
		</View>
	);
}