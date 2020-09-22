import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer smDWz8dC2I9d2gXZlK_HLtZEcr2FoJwQByH-XuINHzXe1K1a9-Sy3Eo-ZG-GYlK0kGJO2aXWBEuMHckjxIanJ6uTC80XhRd8mHt6ksNi7dXrPyfq1Vt57R-_buRcX3Yx'
    }
});
