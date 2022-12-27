import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResult] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async (searchTerm) => {
		// console.log('Hello')
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose',
				}
			});
			setResult(response.data.businesses)
		} catch (err) {
			setErrorMessage('Something went wrong');
		}
	};

	useEffect(() => {
		searchApi('pasta')
	}, [])
	return [searchApi, results, errorMessage];
};	