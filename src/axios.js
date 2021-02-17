import axios from "axios";
const instance= axios.create({
    baseUrl:'http://localhost:5001/challenge-31446/us-central1/api'   //The api url
});
export default instance;

