import styled from "styled-components";

// Style geral do footer
export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
`
export const Content = styled.section`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size: 2.604vw;    
    color: #141745;
    text-align: center;
    padding: 1vw;
    font-weight: bold;
`

// Section Top
export const SectionTop = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    align-items: center;
    padding: 3vw;
`
export const BoxSAC = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2vw;
`
export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px #6E331959;
    background-color: #EC802E;
    width: 17vw;
    height: 12vw;
    border-radius: 1.667vw;
    margin: 0vw 2vw 0vw 2vw;
`
export const SACicon = styled.img`
    width: 2vw;
`
export const TextSAC1 = styled.p`
    font-size: 1.8vw;
    color: #fff;
    font-weight: bold;
    margin-top: 3vw;
`
export const TextSAC2 = styled.p`
    font-size: 1.8vw;
    color: #fff;
    font-weight: bold;
    margin-top: 3vw;
`
export const TextSAC3 = styled.p`
    font-size: 1.8vw;
    color: #fff;
    font-weight: bold;
    width: 12.5vw;
    text-align: center;
    margin-top: 1.8vw;
`
export const banner = styled.img`
    width: 70vw;
`

// Section das Notícias
export const SectionNews = styled.section`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: #EBEBEB;
    padding: 3vw;
    margin-bottom: 3vw;
`

// Display do vídeo
export const SectionChannel = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
export const video = styled.iframe`
    width: 71vw;
    height: 38vw;
    margin-bottom: 3vw;
`


// Section dos Links
export const SectionLinks = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    padding: 2vw 15vw 3vw 15vw;
`
export const line = styled.div`
    display: flex;
    aling-items: center;
`
export const icon = styled.img`
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 1vw;
`
export const Subtitle = styled.h2`
    font-size: 1.7vw;
    color: #141745;
    margin-bottom: 1vw;
`
export const ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Li = styled.li`
    list-style: none;
    font-size: 1.050vw;    
    color: #171C48;
    font-weight: bold;
    width: 70%;
    line-height: 2;
`
export const Li2 = styled.li`
    list-style: none;
    font-size: 1.050vw;    
    color: #171C48;
    font-weight: bold;
    width: 100%;
    line-height: 1.2;
    margin: .5vw;

`
export const Boxleft = styled.div`
    display: flex;
    flex-direction: column;
`
export const Boxmiddle = styled.div`
    display: flex;
    flex-direction: column;
`
export const Boxright = styled.div`
    display: flex;
    flex-direction: column;
`
export const BoxInteractive = styled.div`
    width: 20.833vw;
    height: 20.833vw;
    border: 4px solid #C2C2C2;
    border-radius: .8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
`
export const rectangletop = styled.img`
    width: 7vw;
    position: relative;
    top: .6vw;
`
export const rectanglebottom = styled.img`
    width: 7vw;
    transform: rotate(180deg);
    position: relative;
    top: .662vw;
`
export const arrowtop = styled.img`
    width: 2.5vw;
    position: relative;
    bottom: 1.5vw;
    
`
export const arrowbottom = styled.img`
    width: 2.5vw;
    transform: rotate(180deg);
    position: relative;
    top: -1vw;
`

// Sextion dos icons e mapa
export const SectionIcons = styled.section`
    display: flex;
    flex-direction: row;
`
export const WARNING = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`
export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100vw;
    justify-content: center;
     padding-top: 10vw;
`
export const iconbottom = styled.img`
    width: 9vw;

`
export const iconback = styled.img`
    width: 9vw;
    position: relative;
    right: -6vw;
`
export const iconfree = styled.img`
  width: 5vw;
  z-index: 1;
  position: relative;
  right: 1.3vw;
`
export const Map = styled.div`
    background-image: url(${props => props.back});
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 20vw;
`

// Section Bottom
export const SectionBottom = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #211C34;
    
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 2vw;
`
export const Bottom = styled.div`
    display: flex;
    justify-content: center;
    padding: 3vw;
    background-color: #211C34;
`
export const paragraph = styled.p`
    font-size: 1vw;
    color: #fff;
    width: 16vw;
    opacity: .6;
    margin: 0vw 4vw 0vw 4vw
`
export const Logoleft= styled.img`
    width: 20vw;
    margin: 0vw 3vw 0vw 3vw;
`
export const Logoright= styled.img`
    width: 20vw;
    margin: 0vw 0vw 0vw 4vw;
`
export const TopMaster = styled.div`
    display: flex;
    flex-direction: row;
    padding: vw;
    justify-content: space-around;
`
export const button = styled.button`
outline: none;
border: none;
`