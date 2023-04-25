import styled from "@emotion/styled";

const QuoteStyle = styled.div`
    color: #fff;
    text-align: center;
    font-family: "Lato", sans-serif;
    margin: 20px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    max-width: 250px;
`

const PriceStyle = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;

function Quote({ quote }) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        quote;

    return (
        <QuoteStyle>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="cryptoEmblem"
            />
            <div>
                <PriceStyle>
                    Price: <span>{PRICE}</span>
                </PriceStyle>
                <Text>
                    High Price 24Hr: <span>{HIGHDAY}</span>
                </Text>
                <Text>
                    Low Price 24Hr: <span>{LOWDAY}</span>
                </Text>
                <Text>
                    Change 24Hr: <span
                    style={CHANGEPCT24HOUR.includes("-") ? {"color": "#e74444"} : {"color": "#6deb13"}}
                    >{CHANGEPCT24HOUR}%</span>
                </Text>
                <Text>
                    Last Update: <span>{LASTUPDATE}</span>
                </Text>
            </div>
        </QuoteStyle>
    );
}
export default Quote;
