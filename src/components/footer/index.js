import React from 'react';
import * as S from "./style" 
import { graphql, useStaticQuery } from 'gatsby';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&display=swap");
a { 
  text-decoration: none;
  color: #2680EB;
}
body { 
  font-family: "Open Sans", sans-serif;
}
button {
  outiline: none;
  border: none;
  cursor: pointer;
}
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      detrandata {
        footerpage1s {
          toptitle
          boxtext1
          boxtext2
          boxtext3
          earicon {
            url
          }
          mailicon {
            url
          }
          telicon {
            url
          }
          banner {
            url
          }
          titlenews
          taxiimage {
            url
          }
          taxisubtitle
          taxiparagraph
          newssubtitle
          newsparagraph
          btnshowmore
          titlechannel
          orangeicon {
            url
          }
          institucional
          linksuteis
          editais
          insttext1
          insttext2
          insttext3
          insttext4
          insttext5
          insttext6
          insttext7
          insttext8
          insttext9
          link1
          link2
          link3
          link4
          link5
          link6
          link7
          link8
          editaltext
          orangerectangle {
            url
          }
          arrow {
            url
          }
          blueball {
            url
          }
          facebook {
            url
          }
          insta {
            url
          }
          twitter {
            url
          }
          youtube {
            url
          }
          mapimage {
            url
          }
          detranlogo {
            url
          }
          govlogo {
            url
          }
          adress
          copyright
          warningbanner {
            url 
          }
          arrowicon {
            url
          }
        }
      }
    }
  `);


const {toptitle, boxtext1, boxtext2, boxtext3, earicon, mailicon, telicon, banner, titlenews, taxiimage, taxisubtitle, taxiparagraph, newssubtitle, newsparagraph, btnshowmore, titlechannel, orangeicon, institucional, linksuteis, editais, insttext1, insttext2, insttext3, insttext4, insttext5, insttext6, insttext7, insttext8, insttext9, link1, link2, link3, link4, link5, link6, link7, link8, editaltext, orangerectangle, arrow, blueball, facebook, insta, twitter, youtube, mapimage, detranlogo, govlogo, adress, copyright, warningbanner, arrowicon} = data.detrandata.footerpage1s[0];

  return (
   <S.Container>
     <GlobalStyle />
      <S.Content>
        <S.SectionTop>
            <S.Title>{toptitle}</S.Title>
            <S.BoxSAC>
              <S.BoxText>
                <S.SACicon src={earicon.url} alt="icone ouvidoria"/>
                <S.TextSAC1>{boxtext1}</S.TextSAC1>
              </S.BoxText>
              <S.BoxText>
                <S.SACicon src={mailicon.url} alt="icone e-mail"/>
                <S.TextSAC2>{boxtext2}</S.TextSAC2>
              </S.BoxText>
              <S.BoxText>
                <S.SACicon src={telicon.url} alt="icone telefone"/>
                <S.TextSAC3>{boxtext3}</S.TextSAC3>
              </S.BoxText>
            </S.BoxSAC>
            <S.banner src={banner.url} />
        </S.SectionTop>

        <S.SectionNews>
          <S.Title>{titlenews}</S.Title>
          <S.Row>
            <S.imgbox back={taxiimage.url}>
              <S.Imgtext>
              <S.ImgSubtitle>{taxisubtitle}</S.ImgSubtitle>
              <S.ImgParagraph>{taxiparagraph}</S.ImgParagraph>
              <S.Imgdivider></S.Imgdivider>
              <S.ImgBtn>{btnshowmore}</S.ImgBtn>
              </S.Imgtext>
            </S.imgbox>
            <S.column>
            <S.Newstext>
              <S.Newssub>{newssubtitle}</S.Newssub>
              <S.Newsp>{newsparagraph}</S.Newsp>
              <S.divider></S.divider>
              <S.Newssub>{newssubtitle}</S.Newssub>
              <S.Newsp>{newsparagraph}</S.Newsp>
              <S.divider></S.divider>
              <S.Newssub>{newssubtitle}</S.Newssub>
              <S.Newsp>{newsparagraph}</S.Newsp>
              <S.divider></S.divider>
            </S.Newstext>
            </S.column>
          </S.Row>
          <S.Row>
          <S.imgbox back={taxiimage.url}>
              <S.Imgtext>
              <S.ImgSubtitle>{taxisubtitle}</S.ImgSubtitle>
              <S.ImgParagraph>{taxiparagraph}</S.ImgParagraph>
              <S.Imgdivider></S.Imgdivider>
              <S.ImgBtn>{btnshowmore}</S.ImgBtn>
              </S.Imgtext>
            </S.imgbox>
            <S.imgbox back={taxiimage.url}>
              <S.Imgtext>
              <S.ImgSubtitle>{taxisubtitle}</S.ImgSubtitle>
              <S.ImgParagraph>{taxiparagraph}</S.ImgParagraph>
              <S.Imgdivider></S.Imgdivider>
              <S.ImgBtn>{btnshowmore}</S.ImgBtn>
              </S.Imgtext>
            </S.imgbox>
          </S.Row>  
          <S.Btn>{btnshowmore}</S.Btn>
        </S.SectionNews>

        <S.SectionChannel>
          <S.Title>{titlechannel}</S.Title>
          <S.video src="https://www.facebook.com/plugins/video.php?height=302&href=https%3A%2F%2Fwww.facebook.com%2FDetranAmazonasOficial%2Fvideos%2F906436253253570%2F&show_text=false&width=560&t=0" scrolling="no" frameborder="1" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></S.video>
        </S.SectionChannel>

        <S.SectionLinks>
          <S.Boxleft>
            <S.line>
              <S.icon src={orangeicon.url} alt="orange icon" />
              <S.Subtitle>{institucional}</S.Subtitle>
            </S.line>
            <ul>
              <a href="#" ><S.Li>{insttext2}</S.Li></a>
              <a href="#" ><S.Li>{insttext3}</S.Li></a>
              <a href="#" ><S.Li>{insttext4}</S.Li></a>
              <a href="#" ><S.Li>{insttext5}</S.Li></a>
              <a href="#" ><S.Li>{insttext6}</S.Li></a>
              <a href="#" ><S.Li>{insttext7}</S.Li></a>
              <a href="#" ><S.Li>{insttext8}</S.Li></a>
              <a href="#" ><S.Li>{insttext9}</S.Li></a>
              <a href="#" ><S.Li>{insttext1}</S.Li></a>
            </ul>
          </S.Boxleft>
          <S.Boxmiddle>
          <S.line>
              <S.icon src={orangeicon.url} alt="orange icon" />
              <S.Subtitle>{linksuteis}</S.Subtitle>
            </S.line>
            <ul>
              <S.Li><a href="#" >{link1}</a></S.Li>
              <S.Li><a href="#" >{link2}</a></S.Li>
              <S.Li><a href="#" >{link3}</a></S.Li>
              <S.Li><a href="#" >{link4}</a></S.Li>
              <S.Li><a href="#" >{link5}</a></S.Li>
              <S.Li><a href="#" >{link6}</a></S.Li>
              <S.Li><a href="#" >{link7}</a></S.Li>
              <S.Li><a href="#" >{link8}</a></S.Li>
            </ul>
          </S.Boxmiddle>
          <S.Boxright>
          <S.line>
              <S.icon src={orangeicon.url} alt="orange icon" />
              <S.Subtitle>{editais}</S.Subtitle>
            </S.line>
            <S.BoxInteractive>
              <S.button><S.rectangletop src={orangerectangle.url} alt="orange rectangle" />
              <S.arrowtop src={arrow.url} alt="arrow" /></S.button>
              <S.ul>
                <S.line>
                    <S.icon src={arrowicon.url} alt="arrow icon" />
                    <a href="#"><S.Li2>{editaltext}</S.Li2></a>
                </S.line>
                <S.line>
                    <S.icon src={arrowicon.url} alt="arrow icon" />
                    <a href="#"><S.Li2>{editaltext}</S.Li2></a>
                </S.line>
                <S.line>
                    <S.icon src={arrowicon.url} alt="arrow icon" />
                    <a href="#"><S.Li2>{editaltext}</S.Li2></a>
                </S.line>
                <S.line>
                    <S.icon src={arrowicon.url} alt="arrow icon" />
                    <a href="#"><S.Li2>{editaltext}</S.Li2></a>
                </S.line>
              </S.ul>
              <S.button><S.rectanglebottom src={orangerectangle.url} alt="orange" />
              <S.arrowbottom src={arrow.url} alt="arrow" /> </S.button>

            </S.BoxInteractive>
          </S.Boxright>
        </S.SectionLinks>
          <S.WARNING>
            <S.banner src={warningbanner.url} alt="aviso"/>
          </S.WARNING>
        <S.SectionIcons>
          <S.SocialIcons>
            <S.iconbottom src={facebook.url} alt="icone facebook" />
            <S.iconback src={blueball.url} alt="icone background" />
            <S.iconfree src={twitter.url} alt="icone twitter" />
            <S.iconback src={blueball.url} alt="icone background" />
            <S.iconfree src={youtube.url} alt="icone youtube" />
            <S.iconback src={blueball.url} alt="icone background" />
            <S.iconfree src={insta.url} alt="icone instagram" />
          </S.SocialIcons>
        </S.SectionIcons>
            <S.Map back={mapimage.url}></S.Map>
        <S.SectionBottom>
          
            <S.Row>
              <S.Logoleft src={detranlogo.url} alt="logo DETRAN"/>
              <S.paragraph>{adress}</S.paragraph>
              <S.Logoright src={govlogo.url} alt="brasão AM"/>
            </S.Row>
            <S.Bottom><S.paragraph>{copyright}</S.paragraph></S.Bottom>
        </S.SectionBottom>
      </S.Content>
   </S.Container>
  );
};
            