import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCoin(data))
    }, [id])
    console.log(coin)
    return (
        <div className='px-4 h-[90vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='
          h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className=''>
                    <h1 className='text-3xl'>Genaral Info:</h1>
                    <hr />
                    <h1>Coin Name: {coin.name}</h1>
                    <h1>Market Cap Rank: {coin.market_cap_rank}</h1>
                    <h1>Origin: {coin.country_origin ? coin.country_origin : 'Not Found'}</h1>
                    <h1>Contract: {coin.contract_address ? coin.contract_address : ''}</h1>
                    <h1>Hashing Algorithm: {coin.hashing_algorithm ? coin.hashing_algorithm : 'Not Available'}</h1>
                    <h1>Genesis Date: {coin.genesis_date ? coin.genesis_date : 'Not Found'}</h1>
                    <h1>Last Updated: {coin.last_updated ? coin.last_updated : 'Not Found'}</h1>

                    <h1 className='text-3xl'>Scores:</h1>
                    <hr />
                    <h1>Community Score: {coin.coingecko_score}</h1>
                    <h1>Developer Score: {coin.developer_score}</h1>
                    <h1>Liquidity Score: {coin.liquidity_score}</h1>
                    <h1>Public Interest Score: {coin.public_interest_score}</h1>

                </div>
                <div className='flex justify-center items-center'>
                    <img src={coin.image?.large} alt="coinImage" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;