//Dependencies
import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
`


function useCoinSelect(label, options) {

    const [state, setState] = useState('')


    const CoinSelect = () => (
        <>
        <Label>{label}</Label>
        <Select
        value={state}
        onChange={ e => setState(e.target.value)}
        >
            <option value="">--- Select ---</option>

            {options.map(select => (
                <option
                key={select.id}
                value={select.id}
                >
                    {select.name}
                </option>
            ))}
        </Select>
        </>
    )

    return [state, CoinSelect];
}
export default useCoinSelect;
