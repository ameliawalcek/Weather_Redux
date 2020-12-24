import { NEW_CITY } from '../constants/constants'
//5
const cities = (cities = [], action) => {
    switch (action.type) {
        case NEW_CITY:
            console.log([...cities, action.payload])
            return [...cities, action.payload]
        // case CREATE: return [...posts, action.payload];

        // case UPDATE: //const index = posts.findIndex((post) => post._id === action.payload._id);
        //     //return posts.splice(index, 0, action.payload);  
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        // case DELETE: return posts.filter((post) => post._id !== action.payload);

        // case LIKE: return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default: return cities
    }

}
export default cities