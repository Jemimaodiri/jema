import React from 'react'
import styled from 'styled-components';
import img1 from '../assets/one.jpeg'
import {FiSearch} from 'react-icons/fi'
const Hero = () => {
  return (
    <div>
         <Container>
                  <Wrapper>
               <Image src={img1}/>
               <Head>
              <Nav1>Discover</Nav1> 
             <Button>Animation</Button>  
             <Button>Branding</Button>  
             <Button>Illustration</Button>  
             <Button>Print</Button>  
             <Button>Product Design</Button>  
             <Button>Typograpgy</Button>  
             <Button>Web Design</Button>  
         </Head>
         <Text>
       
                  <h2>
Explore the world’s leading design portfolios</h2>
                 
            <Small>
Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals
<InputBox>
<FiSearch/>
<Input  type='search'  placeholder='Search...'/>  
</InputBox>
<Last>
<p>Trending Searches</p>
<Buts>Landingpage</Buts>
<Buts>Ios</Buts>
<Buts>food</Buts>
<Buts>Landingpage</Buts>
<Buts>ux design</Buts>
<Buts>app designs</Buts>
</Last>

</Small>
         </Text>
                  </Wrapper>
         </Container>
    </div>
  )
}

export default Hero;
// const Last=styled.div``
// const Last=styled.div``
// const Last=styled.div``
const Buts=styled.div`
height: 40%;
width: 10%;
/* background-color: blue; */
border-radius: 20px;
padding: 5px;
font-size: 12px;
border-color: white;
border:1px solid white;
`
const Last=styled.div`
height: 40px;
margin-top: 10px;
/* background-color: #fff; */
width: 670px;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
color: white;
font-size: 14px;
`
const InputBox=styled.div`
width: 92%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 25px;
background-color: white;
color: grey;
border-radius: 40px;
font-size: 25px;
`;
const Input=styled.input`
width: 95%;
height: 40px;
background-color: transparent;
border: none;


`;
const Small=styled.div`
width: 50%;
font-size: 14px;
margin-left: 2%;
`;
const Text=styled.div`
position: absolute;
height: 60%;
text-align: center;
width:100%;
color: whitesmoke;
top:30%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color:#121318a4;
`;
const Button=styled.div`
margin:0px 5px;
border-radius:25px;
display: flex;
justify-content: center;
align-items: center;
height: 35px;
width: 15%;
background-color: #7d777768;
padding: 5px;
`;
const Head=styled.div`
height: 100%;
width: 85%;
position: absolute;
color: #fff;
font-size: 15px;
font-weight: 400;
/* background-color: rgba(67, 59, 59, 0.26); */
top: 20%;
right: 30px;
left: 10%;
display: flex;
/* align-items: center; */
justify-content: space-between;
`;
const Nav1=styled.div`
padding: 5px;
height: 35px;
width: 15%;
border-radius: 25px;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
color: black;
/* border-radius:20px; */

`;
const Image=styled.img`
height: 100%;
width:90%;
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Wrapper=styled.div`
height: 600px;
width:100%;
border-radius: 5px;
background-color: #131419;
display: flex;
align-items: center;
justify-content: center;
/* background-color: blue; */

`;
const Container=styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;