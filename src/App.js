import React , {useState,useEffect} from 'react';
import axios from 'axios';
import CryptoCurrency from './crptoCurrency'
const App = () => {
  const [response , setResponse] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h')
    .then(res =>{
        setResponse(res.data)

      })
    },[])

  return (
    <div className="container">
      <span className = "heading">Welcome to cryptoChecker</span>
      <CryptoCurrency coin = {response} />
    </div>
  );
}

export default App;
