import {
	ActivityIndicator,
	Provider as PaperProvider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistedStore } from "./store/store";

import { Provider } from "react-redux";

import LandingPage from "./screens/landing";
import Index from "./screens/index";
import styles, { backgroundcolor } from "./styles";
import { View } from "react-native";

const StackNavigator = createNativeStackNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate
				persistor={persistedStore}
				loading={
					<View style={styles.loader}>
						<ActivityIndicator color="teal" />
					</View>
				}
			>
				<PaperProvider>
					<NavigationContainer>
						<StackNavigator.Navigator
							screenOptions={{
								headerStyle: { backgroundColor: backgroundcolor },
							}}
						>
							<StackNavigator.Screen
								options={{ headerShown: false }}
								name="landingpage"
								component={LandingPage}
							/>
							<StackNavigator.Screen
								options={{
									headerTitle: "Todos",
									headerTintColor: "white",
									headerBackVisible: false,
								}}
								name="index"
								component={Index}
							/>
						</StackNavigator.Navigator>
					</NavigationContainer>
				</PaperProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
