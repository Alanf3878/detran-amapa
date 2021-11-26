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
    flex-direction: column;
    width: 100vw;
    height: auato;
    background-color: #EBEBEB;
    padding: 3vw 0vw 3vw 1vw;
    margin-bottom: 3vw;
    border-radius: 1.667vw;
`
export const imgbox = styled.div`
    width: 39.167vw;    
    height: 25vw;
    background-image: url(${props => props.back});
    border-radius: 1.667vw;
    margin-right: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const Newstext = styled.div`
    width: 39.167vw;    
    height: 25vw;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    color: #141745;
    
`
export const Newssub = styled.h2`
    font-size: 1.5vw;
    font-weight: bold;
    margin-bottom: .3vw;
`
export const Newsp = styled.p`
    font-size: 1.7vw;
    font-weight: lighter;
`
export const divider = styled.div`
    width: 36vw;
    height: .2vw;
    background-color: #141745;
    border-radius: 1.667vw;
    margin: 1vw 0vw 1vw 0vw;
`
export const column = styled.div`
    disply: flex;
    flex-direction: column;
`
export const Imgtext = styled.div`
    width: 100%;
    height: 50%;
    background-color: #fff; 
    border-radius: 0vw 0vw 1.667vw 1.667vw;
    position: relative;
    overflow: hidden;
    color: #141745;
`
export const ImgSubtitle = styled.h1`
    font-size: 1.7vw;
    padding: 1vw;
`
export const ImgParagraph = styled.p`
    font-size: 1.3vw;
    padding: 0vw 1vw 1vw 1vw;
`
export const ImgBtn = styled.button`
    width: 100%;
    height: 4.5vw;
    position: relative;
    bottom: 55.8vw;
    color: #141745;
    background-color: #fff;
    font-size: 1.5vw;
    font-weight: bold;
`
export const Imgdivider = styled.div`
    width: 100%;
    height: 5px;
    background-color: #141745;
    z-index: 1;
    position: relative;
    bottom: 55vw;
    opacity: .8;
`
export const Btn = styled.button`
    width: 100%;
    height: 4.5vw;
    color: #141745;
    font-size: 2vw;
    font-weight: bold;
    background-color: transparent;
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
    top: -.5vw;
    left: 1.2vw;
`
export const rectanglebottom = styled.img`
    width: 7vw;
    transform: rotate(180deg);
    position: relative;
    top: .7vw;
    left: 1.2vw;
`
export const arrowtop = styled.img`
    width: 2.5vw;
    position: relative;
    bottom: 1.2vw;
    right: 3.6vw;
`
export const arrowbottom = styled.img`
    width: 2.5vw;
    transform: rotate(180deg);
    position: relative;
    top: .2vw;
    left: -3.6vw;
`

// Section dos icons e mapa
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
    opacity: .8;
    margin: 0vw 4vw 0vw 4vw;
    line-height: 1.2;
`
export const Logoleft= styled.img`
    width: 20vw;
    margin: 0vw 3vw 0vw 3vw;
`
export const Logoright= styled.img`
    width: 18vw;
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
    background-color: transparent;
`