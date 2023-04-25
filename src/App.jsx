//Dependencies
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

//Components
import Form from "./components/Form";
import Quote from "./components/Quote";
import Spinner from "./components/Spinner";

//Assets
import cryptoImg from "./img/imagen-criptos.png";

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto 60px;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
`;

const Heading = styled.h1`
    font-family: "Lato", sans-serif;
    color: #fff;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
      content:'';
      width: 100%;
      height: 5px;
      background-color: #52bbeb;
      display: block;
      margin: 15px auto 0 auto;
    }
`;

function App() {
    const [coins, setCoins] = useState({})
    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(Object.keys(coins).length > 0) {
            const {coin, crypto} = coins

            const quoteCrypto = async () => {
                setLoading(true)
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`

                const answer = await fetch(url)

                const data = await answer.json()

                setQuote(data.DISPLAY[crypto][coin])
                setLoading(false)
            }

            

            quoteCrypto()
        }
    }, [coins])


    return (
        <Container>
            <Image src={cryptoImg} alt="crypto-image" />
            <div>
                <Heading>Get Crypto prices instantly</Heading>
                <Form
                setCoins={setCoins}
                />
            </div>

            {loading && <Spinner/>}
            {quote.PRICE && !loading && <Quote quote={quote}/>}
        </Container>
    );
}

export default App;
