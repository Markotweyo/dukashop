import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
    

`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    border: none ;
    background-color: white;
    color: gray;
    cursor: pointer;
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem