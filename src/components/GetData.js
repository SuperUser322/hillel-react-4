import axios from "axios";

const getData = () => {
  return axios.get("https://60bb880442e1d00017620c95.mockapi.io/Posts/")
    .then((response) => response)
    .catch((error) => error)
  
}

export default getData();
