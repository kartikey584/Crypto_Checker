import React from 'react';

const CryptoCurrency = props => {
    console.log(props);
    const currency = props.coin.map(({id,name, image,symbol , current_price,market_cap }) =>{
        return (
            <div className = 'coins'>
                <img className = 'coinImage' key = {id} src={image} alt = {symbol} />
                
                <span className = 'coinName'>{name}</span>
                <span className = 'coinSymbol' >{symbol}</span>
                <span className = 'coinPrice' >{current_price}</span>
                <span className = 'coinMktcap'>{market_cap}</span>

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