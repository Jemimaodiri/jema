import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
         <Container>
                  <Wrapper>
         <Logo>
          <H3>Dribble</H3>
         <Navs>Find Talent</Navs>
         <Navs>For Designers</Navs>
         <Navs>Inspiration</Navs>
         <Navs>Find Talent</Navs>
         </Logo>
         <ButtonBox>
                 Log In 
                 <Button>Sign Up</Button>
         </ButtonBox>
                  </Wrapper>
         </Container>
    </div>
  )
}

export default Header;
const Button=styled.div`
height: 77%;
width: 56%;
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
background-color: #1a1919 ;
color: white;
border-radius:20px;
`;
const ButtonBox=styled.div`
height: 100%;
width: 15%;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: rgba(45, 167, 255, 0.234); */


`;
const Navs=styled.div``;
const H3=styled.div`
font-size: 25px;
font-family: 'Times New Roman', Times, serif;
`;
const Logo=styled.div`
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: blueviolet; */
`;
const Wrapper=styled.div`
width: 90%;
height: 55px;
font-size: 15px;
font-weight: 400;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
`;

const Container=styled.div`
width: 100%;
height: 70px;
/* background-color: blue; */
display: flex;
align-items: center;
justify-content: center;
`;