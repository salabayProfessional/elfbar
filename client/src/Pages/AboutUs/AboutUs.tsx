import Card from "../../Components/Card";
import React, { useEffect, useState } from "react";
import Splitter from "../../Components/Splitter/Splitter";
import Page from "../Page";
import "./AboutUs.scss";
import { Button } from "@mui/material";
import UKRAINE_IMAGE from "./ukraine_map.png";

const Menu: React.FC = () => {
  const setActiveLink = (e: any) => {
    const nodeLinks = document.querySelectorAll(".about-us__link");
    for(let i = 0;i < nodeLinks.length;i++) {
      nodeLinks[i].className = "about-us__link";
    };
    e.target.className = "about-us__link active";
  };

  return (
    <div className="about-us__menu">
      <a href="#about-us" className="about-us__link active" onClick={setActiveLink}>ABOUT US</a>
      <a href="#tops" className="about-us__link" onClick={setActiveLink}>TOPS</a>
      <a href="#locations" className="about-us__link" onClick={setActiveLink}>LOCATIONS</a>
      <a href="#shares" className="about-us__link" onClick={setActiveLink}>SHARES</a>
      <a href="#faq" className="about-us__link" onClick={setActiveLink}>FAQ</a>
    </div>
  );
};

const Section: React.FC<{children: any, className?: string, id: string}> = ({
  children,
  className = "",
  id
}) => {
  return (
    <div className={"about-us__section " + className} id={id}>
      {
        children
      }
    </div>
  )
}

const AboutUs: React.FC = () => {

  useEffect(() => {
    console.log("loaded");
  }, []);

  // const history = useHistory()
  // const params = useParams()
  // const routeMatch = useRouteMatch()
  // const location = useLocation()

  // console.log(history + "H", params + "P", routeMatch + "R", location + "L");


  return (
    <Page> 
      <div className="about-us">
        <div className="about-us__menu-wrapper">
          <Menu />
        </div>

        <header id="about-us" className="about-us__header">
          <h3 className="title">About us</h3>
          <p className="subtitle">
            <p>Loremsum dolor sit ame coadisicing elit.</p> 
            <p>Lorem ipsumdolor sit tetur adipisicing elit, sad as</p> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> 
            <p>Lorem ipsum, dolor sit amet consect uradipi cing elit.</p> 
            <p>Lorem ipsum, dolor sit amet consectetur asf ascsa</p> 
            <p>Lorem ipsum, dolor sit amet consectetur a</p> 
          </p>
          <Button variant="contained" id="main-btn" color="secondary">TO BUYING</Button>
        </header>
          
        <Section id="tops">
          <h3 className="title">Tops selling today!</h3>

          <div className="group">
            <Card />
            <Card />
            <Card />
          </div>
        </Section>
        
        <Section id="shares">
          <h3 className="title">Shares</h3>
        </Section>

        <Section id="locations">
          <h3 className="title">Locations</h3>
          <img src={UKRAINE_IMAGE} className="location__image" />
        </Section>
          
        <Section id="faq" className="about-us__footer">
          <Splitter 
            left={
              (
              <>
                <div>
                  <h3 className="title">FAQ</h3>
                  <ul>
                    <li>  
                      <p>1.How to return an elfbar?</p>
                      <p>Depend on situation.</p>
                    </li>
                    <li>
                      <p>2. Can i return an used elfbar for some shares?</p>
                      <p>Yeah, for sure. You get 10percent action on next elf.</p>
                    </li>
                    <li>
                      <p>3. Why you must to use our service?</p>
                      <p>We sell only original goods and </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=""></h3>
                </div>
              </>
              )
            }
            right={(
              <>
                <div>
                  <h3 className="title">NETWORKS LINKS</h3>
                  <ul>
                    <li>  
                      <p className="subtitle">Telegram</p>
                    </li>
                    <li>
                      <p className="subtitle">Instagram</p>
                    </li>
                    <li>
                      <p className="subtitle">Facebook</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className=""></h3>
                </div>
              </>
            )}
          />
        </Section>
      </div>
    </Page>
  )
}

export default AboutUs
