import { useState, useRef, useEffect } from "react";

import { Dimensions, FlatList, View } from "react-native";
import {
	Button,
	FAB,
	HelperText,
	IconButton,
	Surface,
	TextInput,
	Title,
	Colors,
} from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";

import RBSheet from "react-native-raw-bottom-sheet";
import { backgroundcolor } from "../styles";

import FlashMessage, { showMessage } from "react-native-flash-message";

import { addTodo, removeTodo } from "../store/reducers";

import * as Linking from "expo-linking";

const App = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const rbsheet = useRef();

	const { todos } = useSelector((state) => ({
		todos: state.todos,
	}));

	const dispatch = useDispatch();

	// useEffect(() => {

	// }, [todos])

	const renderItem = ({ item }) => (
		<Surface
			style={{
				padding: 10,
				borderRadius: 20,
				minHeight: Dimensions.get("window").height / 3.5,
				marginVertical: 10,
			}}
		>
			<Title>{item.title}</Title>
			<HelperText style={{ padding: 0, width: "70%" }}>
				{item.description}
			</HelperText>
			<IconButton
				onPress={() => {
					dispatch(removeTodo(todos.indexOf(item)));

					showMessage({
						message: "Todo Completed!!!",
						type: "success",
						icon: "success",
					});
				}}
				color="green"
				icon="check"
				style={{ position: "absolute", right: 5, top: 5 }}
			/>
			<IconButton
				onPress={() => {
					dispatch(removeTodo(todos.indexOf(item)));
					showMessage({
						message: "Todo deleted!",
						type: "info",
						icon: "info",
					});
				}}
				color="red"
				icon="delete"
				style={{ position: "absolute", bottom: 5, right: 5 }}
			/>
		</Surface>
	);

	return (
		<View style={{ flex: 1, margin: 10 }}>
			<FlatList
				data={todos}
				keyExtractor={(item) => todos.indexOf(item)}
				renderItem={renderItem}
				ListFooterComponent={() => <View style={{ padding: 40 }}></View>}
				ListEmptyComponent={() => (
					<HelperText style={{ textAlign: "center" }}>
						Nothing to Show!
					</HelperText>
				)}
			/>
			<FAB
				style={{
					position: "absolute",
					bottom: 20,
					right: 15,
					backgroundColor: backgroundcolor,
				}}
				color="white"
				icon="plus"
				onPress={() => rbsheet.current.open()}
			/>

			<RBSheet
				height={Dimensions.get("window").height / 1.5}
				ref={rbsheet}
				closeOnDragDown={true}
				animationType="slide"
			>
				<View style={{ marginHorizontal: 5 }}>
					<Title>Add A new Todo!</Title>
					<TextInput
						mode="outlined"
						style={{ margin: 5 }}
						placeholder="Title"
						value={title}
						onChangeText={(text) => setTitle(text)}
						left={<TextInput.Icon name="file-edit" />}
					/>
					<TextInput
						mode="outlined"
						style={{ margin: 5 }}
						placeholder="Description"
						value={description}
						onChangeText={(text) => setDescription(text)}
						multiline={true}
						numberOfLines={5}
						left={<TextInput.Icon name="book-information-variant" />}
					/>
					<Button
						style={{ alignSelf: "center" }}
						mode="contained"
						color={backgroundcolor}
						disabled={title.length > 0 && description.length > 0 ? false : true}
						icon="check"
						onPress={() => {
							dispatch(addTodo({ title, description }));
							showMessage({
								message: "New Todo added successfully!",
								type: "success",
								icon: "success",
							});
							setTitle("");
							setDescription("");
							rbsheet.current.close();
						}}
					>
						Add Todo
					</Button>
				</View>
			</RBSheet>

			<IconButton
				style={{
					position: "absolute",
					bottom: 20,
					left: 20,
					backgroundColor: Colors.blue600,
				}}
				icon="help"
				color="white"
				size={20}
				onPress={() => {
					showMessage({
						message:
							"All the icons used are Designed by Makyzz / Freepik.Click this message to know more.",
						onPress: () => {
							Linking.openURL("http://www.freepik.com");
						},
						type: "info",
						position: "center",
						duration: 5000,
						style: { height: 100 },
					});
				}}
			/>
			<FlashMessage position="center" floating={true} />
		</View>
	);
};

export default App;
