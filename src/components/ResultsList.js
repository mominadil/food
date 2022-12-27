import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultDetails from './ResultDetails';

const ResultsList = ({title, results}) => {

	if (!results.length) {
		return null;
	}

	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({item})=>{
					return (
						<TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen', {itemId:item.id})} >
							<ResultDetails result={item} />
						</TouchableOpacity>
					)
				}}
			 />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		marginLeft: 15,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	container:{
		marginBottom: 10,
	}

});

export default ResultsList;