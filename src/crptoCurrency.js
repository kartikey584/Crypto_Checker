import React from 'react';

const CryptoCurrency = props => {
    console.log(props);
    const currency = props.coin.map(({id,name, image,symbol , current_price,market_cap,price_change_percentage_24h }) =>{
        return (
            <div key = {id} className = 'coins'>
                <img className = 'coinImage'  src={image} alt = {symbol} />
                <span className = 'coinName'>{name}</span>
                <span className = 'coinSymbol' >{symbol.toUpperCase()}</span>
                <span className = 'coinPrice' >${current_price}</span>
                <span className = {price_change_percentage_24h < 0 ? 'red' : 'green' }>{price_change_percentage_24h}%</span>
                <span className = 'coinMktcap'>Mkt Cap : {market_cap}</span>
            </div>
        );
    })
    return (
        <div>
            {currency}        
        </div>
    );
}

export default CryptoCurrency;
