import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { Colors, Text, Button } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

import { backgroundcolor } from "../styles";

import * as Animatable from "react-native-animatable";

import styles from "../styles";

const App = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<Animatable.View
				useNativeDriver={true}
				animation="slideInDown"
				duration={600}
				style={styles.front}
			>
				<LinearGradient
					colors={[backgroundcolor, Colors.pink200]}
					style={{ flex: 1, borderBottomRightRadius: 1000 }}
				>
					<Text style={styles.tag}>Todo App!</Text>
					<Animatable.Image
						animation="pulse"
						useNativeDriver={true}
						resizeMode="center"
						source={require("../../assets/front.png")}
						style={{
							width: Dimensions.get("window").width,
							height: Dimensions.get("window").width,
						}}
					/>
				</LinearGradient>
			</Animatable.View>

			<Animatable.View
				useNativeDriver={true}
				animation="bounceIn"
				style={{ position: "absolute", bottom: 40, right: 20 }}
			>
				<LinearGradient
					colors={[Colors.pink200, Colors.pink800]}
					style={styles.start}
				>
					<TouchableOpacity
						onPress={() => {
							props.navigation.navigate("index");
						}}
					>
						<Button
							contentStyle={{ flexDirection: "row-reverse" }}
							color="white"
							uppercase={false}
							icon="arrow-right"
						>
							Enter
						</Button>
					</TouchableOpacity>
				</LinearGradient>
			</Animatable.View>
		</View>
	);
};

export default App;
