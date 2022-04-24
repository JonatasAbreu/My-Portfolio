import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`


export const DivNave = styled.div`
    display: flex;
    background: #121212;
   
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    margin-left: 180px;
    margin-bottom: 45px;

    p {
        margin-right: 400px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #00D2DF;
    }

    li {
        display: inline-block;
        list-style: none; 
    }

    a {
        margin-left: 62px;
        cursor: pointer;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #C4C4C4;
        

        &:hover {
            color: #D082E8;
        }
    }
`
export const P = styled.p`


`
export const DivMenu = styled.div`
display: flex;
justify-content: space-between;
background: #121212;
border-top:  2px solid #151515;
;

`
export const DivDescriMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    gap: 12px;
`

export const DivImage = styled.div`
    width: 1022px;
    height: 625px;
    overflow: hidden;
`

export const Pmenu = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin-left: 150px;

`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    text-transform: uppercase;
    color: #00D2DF;
    white-space: nowrap;
    margin-left: 150px;

`
export const DivButton = styled.div`
   display: flex;
   margin-left: 150px;
   gap: 30px;
   margin-top: 70px;

`

export const Image = styled.img`

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: #121212 ;
    
    width: 160px;
    height: 45px;
    border-radius: 4px;
    border-color: rgba(210, 64, 116, 1)
rgba(101, 24, 180, 1);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
    
`

export const DivSobre = styled.div`
display: flex;
justify-content: space-around;
background: #0C0C0C;

`
export const DivImgSobre = styled.div`
    margin: 100px 180px 100px 180px;
    
    
   
img {
    width: 367px;
    height: 367px;
    border-left: 4px solid #00D2DF;
    border-radius: 4px;
    background: #121212;
}


`
export const DivPsobre = styled.div`
   
`
export const H3sobre = styled.h3`
    margin-top: 100px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    text-transform: uppercase;
`
export const Psobre = styled.p`
    margin-top: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 21px;

`

export const Pknowledge = styled.p`
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 32px;
        color: #FFFFFF;
        margin-right: 100px;

`

export const DivButtonSobre = styled.div`
    display: flex;
    gap: 50px;
    margin-top: 40px;
    
    
    
    

`
export const DivExperiencia = styled.div`
    display: flex;
    justify-content: space-around;
    background: #121212;
`

export const DivWork = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 100px;
    margin-left: 180px;

    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    p {
        width: 193px;
        height: 55px;
        background: #151515;
        text-align: center;
        align-items: center;
        padding-top: 18px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        border-left: 2px solid #00D2DF;

;
    }
    
`

export const DivDescription = styled.div`
    margin-top: 150px;
    margin-left: 80px;

`
export const DivTitle = styled.div`
display: flex;
justify-content: space-around;

p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin-bottom: 25px;
}


`
export const PfrontEnd = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: #C4C4C4;
`

export const DivIconTecnologias = styled.div`
margin-top: 25px;
display: flex;
justify-content: flex-end;
gap: 55px;
margin-right: 55px;
margin-bottom: 20px;

img {
    width: 50px;
    height: 50px;
}
`

export const DivProjects = styled.div`
display: flex;
justify-content: space-around;
background: #0C0C0C;

h3 {
    margin-top: 30px;
    
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #FFFFFF;
}

`
export const DivTitleProjec = styled.div`
background-color: #0C0C0C;
 h3 {
     margin-top: 50px;
     margin-bottom: 50px;
     margin-left: 150px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: #FFFFFF;
 }

`
export const DivColumnOne = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
margin-bottom: 30px;
`
export const DivColumntwo = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
margin-bottom: 30px;

`
export const DivProjectOne = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
   
  
`
export const DivProjectTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
   
`
export const DivProjectThree = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    

    
`
export const DivProjectFour = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
   

    
`
export const ImgProjectGif = styled.img`

        width: 530px;
        height: 200px;
        border-left: 4px solid #00D2DF;


`

export const NameProj = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
`

export const PdescTec = styled.p `
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4; 

`

export const Footer = styled.footer`
    height: 60px;
    background: #121212;
    text-align: center;

    p {
        margin-top: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C4C4C4;
    }
`
