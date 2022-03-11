import styled from 'styled-components'

export const Title = styled.div`
    width: 23vw;
    font-family: 'Roboto', sans-serif;
    h1{
        font-size: 19px;
    }
    p{
        color: #0E7184;
        margin:10px 0px;
        margin-bottom: 15px;
    }
`

export const Section1 = styled.div`
    border-top: 0.2px solid #565959;
    border-bottom: 0.2px solid #565959;
    font-size: 14px;
    padding: 10px 0;
    padding-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    button{
        color: #0E7184;
    }
    p{
        color: #AF2913;
        font-size:19px;
    }
`

export const Section2 = styled.div`
    width: 33vw;
    font-size: 14px;
    padding: 10px 0;
    font-family: 'Roboto', sans-serif;
`

export const Card = styled.div`
    border: 0.2px solid #565959;
    border-radius:4px;
    padding: 30px 10px;
    font-family: 'Roboto', sans-serif;
    h1{
        color:#AF2913;
    }
    button{
        color: #0E7184;
    }   

`

export const Buy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    margin: 10px 0;
    button{
        padding: 10px 16px 10px 8px;
        margin: 8px 0;
        color: black;
        display: flex;
        flex-direction: row;
        align-items:center;
        width: 200px;
        box-sizing: border-box;
        border-radius: 4px;
    }
`