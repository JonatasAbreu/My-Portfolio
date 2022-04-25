import React from "react"
import Loop from './assets/Looper.svg'
import Linkedin from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Myphoto from './assets/myphoto.png'
import Curriculo from './assets/curriculo.svg'
import Mail from './assets/mail.svg'
import IconeLink from './assets/link.svg'
import Css from './assets/css.svg'
import Html from './assets/html.svg'
import Git from './assets/git.svg'
import Javascript from './assets/javascript.svg'
import Reactt from './assets/react.svg'
import Node from './assets/node.svg'
import ImgProjectOne from './assets/nfts1.gif'
import ImgProjecttwo from './assets/playStan.gif'
import ImgProjectthree from './assets/devContabil.gif'
import ImgProjectfour from './assets/astronalta.gif'
import ImgInsanos from './assets/insanosBurger.gif'
import CovertMoney from './assets/covertMoney.gif'
import { Container, DivNave, Nav, P, DivMenu, DivDescriMenu, Pmenu, H1, DivButton, Image, DivSobre, Button, DivImage, DivImgSobre, DivPsobre, H3sobre, Psobre, Pknowledge, DivButtonSobre, DivExperiencia, DivWork, DivDescription, DivTitle, PfrontEnd, DivTitleProjec, DivIconTecnologias, DivProjects, DivColumnOne, DivColumntwo, ImgProjectGif, NameProj, PdescTec, DivProjectOne, DivProjectTwo, DivProjectThree, DivProjectFour,Footer } from './styles'


function App() {
  return (
    <Container>

      <DivNave>
        <Nav>
          <P>Portfólio</P>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#sobre-min">Sobre mim</a></li>
            <li><a href="#experincia">Experiência</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </Nav>
      </DivNave>
      <DivMenu>
        <DivDescriMenu>
          <Pmenu>Olá, eu sou</Pmenu>
          <H1>Jônatas Abreu</H1>
          <Pmenu>Desenvolvedor Front-end</Pmenu>
          <DivButton>
            <Button><img alt="icone" src={Linkedin} /> <a href="https://www.linkedin.com/in/jonatas-abreu-6a1988134/" target="_blank">LinkedIn</a></Button>
            <Button><img alt="iconegit" src={Github} /> <a href="https://github.com/JonatasAbreu" target="_blank">GitHub</a></Button>
          </DivButton>
        </DivDescriMenu>
        <DivImage>
          <Image alt="lop" src={Loop} />
        </DivImage>
      </DivMenu>

      <DivSobre id="sobre-min">

        <DivImgSobre>
          <img alt="" src={Myphoto} />
        </DivImgSobre>

        <DivPsobre>
          <H3sobre>Sobre mim</H3sobre>
          <Psobre>Indaiatuba, Brasil</Psobre>
          <Pknowledge>Conhecimentos em HTML5, CSS3, JavaScript, React.js, Node.js, BootStrap, Sass, Java, Versionamentos de código com Git e Github, métodos ágeis com Scrum.<br />
            Tenho objetivo em me tornar desenvolvedor Full-Stack.
            Cursando Faculdade de Analise e Desenvolvimento de Sistemas.
            Atualmente estou estudando as seguintes tecnologias: Docker e SQL.
          </Pknowledge>

          <DivButtonSobre>
            <Button><img alt="icone" src={Curriculo} /> <a href="https://drive.google.com/u/0/uc?id=1toTUbCK6cRpMvZi9lw9dQKLxgdga3oNo&export=download" download="Jônatas Abreu">Currículo</a></Button>
            <Button><img alt="icone" src={Mail} /><a href="mailto:jonatasabreu1234@gmail.com"> E-mail</a></Button>
          </DivButtonSobre>

        </DivPsobre>
      </DivSobre>
      <DivExperiencia id="experincia">
        <DivWork>
          <h3>EXPERIÊNCIA</h3>
          <p>Freelancer</p>
        </DivWork>

        <DivDescription>
          <DivTitle>
            <p>Desenvolvedor Front - end</p>
            <p>Out 2021 - Atual</p>
          </DivTitle>
          <div>
            <PfrontEnd>• Desenvolvo aplicações para clientes, como: lead Page e formulários.<br />
              • Falo com os clientes e vou alinhado a aplicação de acordo com o desejado.<br />
              • Faço clones de sites e crio alguns projetos próprios.<br />
              • Tecnologias:
              | React Js
              | JavaScript
              | Node Js
              | Html
              | Css
              | Styled-Components
              | Git/Github
            </PfrontEnd>
            <DivIconTecnologias>
              <img alt="icone" src={Reactt} />
              <img alt="icone" src={Javascript} />
              <img alt="icone" src={Node} />
              <img alt="icone" src={Html} />
              <img alt="icone" src={Css} />
              <img alt="icone" src={Git} />
            </DivIconTecnologias>
          </div>
        </DivDescription>
      </DivExperiencia>
      
      <DivTitleProjec id="projetos">
      <h3>projetos</h3>
      </DivTitleProjec>
      
      <DivProjects >

        <DivColumnOne>

          <DivProjectOne>
            <ImgProjectGif alt="Icone-pojet" src={ImgProjectOne} />
            <NameProj>Colectt NFTs</NameProj>
            <PdescTec>Aplicação desenvolvida utilizando animação com CSS.</PdescTec>
            <PdescTec>Tecnologias utilazadas: HTML, CSS e JavaScript.</PdescTec>
            <Button><img alt="icone" src={IconeLink} /><a href="https://jonatasabreu.github.io/Collect-NFTs/">Visualizar</a></Button>
          </DivProjectOne>

          <DivProjectTwo>
            <ImgProjectGif alt="Icone-pojet" src={ImgProjecttwo} />
            <NameProj>Play Station Store</NameProj>
            <PdescTec>Store de vendas de controle de Play Station.
            </PdescTec>
            <PdescTec>Tecnologias utilazadas: HTML, CSS e JavaScript.</PdescTec>
            <Button><img alt="icone" src={IconeLink} /> <a href="https://jonatasabreu.github.io/PlayStation-Store/">Visualizar</a> </Button>
          </DivProjectTwo>

          <DivProjectTwo>
            <ImgProjectGif alt="Icone-pojet" src={ImgInsanos} />
            <NameProj>Insanos Burger</NameProj>
            <PdescTec>Aplicção realizada para solicitar pedidos em uma hamburgueria.</PdescTec>
            <PdescTec>Tecnologias utilazadas: React.js, Styled-componets, JavaScript e Node.js.</PdescTec>
            <Button><img alt="icone" src={IconeLink} /><a href="https://github.com/JonatasAbreu/Insanos-Hamburgueria">Visualizar</a> </Button>
          </DivProjectTwo>
        </DivColumnOne>

        <DivColumntwo>
          <DivProjectThree>
            <ImgProjectGif alt="Icone-pojet" src={ImgProjectthree} />
            <NameProj>Dev
              Contábil
            </NameProj>
            <PdescTec>Lead Page desenvolvida para captura de clientes em um escritorio de Contabilidade.</PdescTec>
            <PdescTec>Tecnologias utilazadas: HTML, CSS e JavaScript.</PdescTec>
            <Button><img alt="icone" src={IconeLink} /><a href="https://jonatasabreu.github.io/dev-contabil/">Visualizar</a></Button>
          </DivProjectThree>

          <DivProjectFour>
            <ImgProjectGif alt="Icone-pojet" src={ImgProjectfour} />
            <NameProj>Explore the fascinating world</NameProj>
            <PdescTec>Desenvolvi essa aplicação replicando um design do Figma.</PdescTec>
            <PdescTec>Tecnologias utilazadas: HTML, CSS e JavaScript.</PdescTec>
            <Button><img alt="icone" src={IconeLink} /><a href="https://jonatasabreu.github.io/My-project-astronauta/">Visualizar</a></Button>
          </DivProjectFour>

          <DivProjectFour>
            <ImgProjectGif alt="Icone-pojet" src={CovertMoney} />
            <NameProj>Covet Money</NameProj>
            <PdescTec>Conversor de moedas consumindo API que trás a conversão em tempo real.</PdescTec>
            <PdescTec>Tecnologias utilazadas: HTML, CSS e JavaScript.</PdescTec>
            <Button><img alt="icone" src={IconeLink} /><a href="https://jonatasabreu.github.io/Convert-Monye-API/">Visualizar</a></Button>
          </DivProjectFour>
        </DivColumntwo>
      </DivProjects>
<Footer>
  <p>Desenvolvido por - Jônatas Abreu </p>
</Footer>

    </Container>
  )
}

export default App
