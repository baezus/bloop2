import axios from 'axios';
const rpc = axios.create({
  baseURL: 'localhost:2737',
  proxy: false
})

const userAPI = async () => {
  
    try {
      let res = await rpc.get(`http://localhost:2737/api/user`);
      return res.data || [];
    } catch (e) {
      console.log('error getting things: ', e);
    }
}

export default userAPI;