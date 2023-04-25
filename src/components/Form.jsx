//Dependencies
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoinSelect from "../hooks/useCoinSelect";

//Data
import { coins } from "../data/coins";

//Components
import Error from "./Error";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: #abadff;
    }
`;

function Form({setCoins}) {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [coin, CoinSelect] = useCoinSelect("Choose Fiat", coins);
    const [crypto, CryptoSelect] = useCoinSelect("Choose Crypto", cryptos);

    useEffect(() => {
        const getCryptos = async () => {
            const url =
                "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";
            const getData = await fetch(url);
            const data = await getData.json();

            const arrayCryptos = data.Data.map((cripto) => {
                const object = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName,
                };

                return object;
            });

            setCryptos(arrayCryptos);

        };

        getCryptos();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([coin, crypto].includes("")) {
            setError(true);
            return;
        }

        setError(false)

        setCoins({
            coin,
            crypto
        })
    };

    return (
        <>
            {error && <Error>All fields are required</Error>}

            <form onSubmit={handleSubmit}>
                <CoinSelect />
                <CryptoSelect />
                <div>
                    <InputSubmit type="submit" value="Get Price" />
                </div>
            </form>
        </>
    );
}
export default Form;
