import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer cbu97B8nRyDJawY3g7_yQX7wl4JgSk49epuv9RynbAavAdR8yonIsfBJ4c4J_kWBAnRlaFbBqLi7e4XnW2vPScvydivjCDRILCktxOPA1-PyoWYrXZyolD-eR86iY3Yx'
	}
}); 