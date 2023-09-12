import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <H3>
              Dribble
            </H3>
            <Navs>For Designers</Navs>
            <Navs>Hire Talents</Navs>
            <Navs>Inspiration</Navs>
            <Navs>Advertising</Navs>
            <Navs>Blog</Navs>
            <Navs>About</Navs>
            <Navs>Career</Navs>
            <Navs>Support</Navs>
          </Head>
          <Foot>
            <One>
            <h4>© 2023 Dribbble</h4>
         <h4>Terms
Privacy
Cookies</h4>
            </One>
        <Two>
          <h4>
            Jobs
          </h4>
          <h4>
            Designers
          </h4>
          <h4>
           FreeLancer
          </h4>
          <h4>
            Places
          </h4>
        </Two>
          </Foot>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Footer;
const H3=styled.div`
font-size: 23px;
font-family: 'Times New Roman', Times, serif;
`;
const Navs=styled.div`
height: 20px;
width: 100%;
/* background-color: blue; */
margin: 0px 10px;
`;
const One=styled.div`
height: 40px;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: column;
/* background-color: blue; */
`;
const Two=styled.div`
height: 40px;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
/* background-color: blue; */
`;
const Foot=styled.div`
height: 40px;
font-size: 15px;
width: 100%;
background-color:blue;
align-items: center;
justify-content: space-between;
flex-direction: row;
`;
const Head=styled.div`
height: 40px;
width: 100%;
background-color: aquamarine;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`;
const Wrapper=styled.div`
height: 270px;
width: 90%;
font-size: 15px;
display: flex;
justify-content: space-between;
flex-direction: column;
`;
const Container=styled.div`
height:300px;
width: 100%;
display: flex;
align-items: center;
margin-top: 5%;
justify-content: center;

`;