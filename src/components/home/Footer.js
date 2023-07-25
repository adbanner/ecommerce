import Navigation from "./Navigation"

export default function Footer() {
    
    return (
        <footer>
        <div className="wrapper">
          <div className="line"></div>
          <div className="navigation">
            <div data-logo className="logo"></div>
  
           <Navigation/>
          </div>
          <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility
            - we’re open 7 days a week.</p>
  
  
          <div className="ligal-and-social grid gap-500">
            <span>Copyright 2021. All Rights Reserved</span>
  
            <div className="socials">
              <img src="./assets/shared/desktop/icon-facebook.svg" alt="facebook"></img>
              <img src="./assets/shared/desktop/icon-twitter.svg" alt="twitter"></img>
              <img src="./assets/shared/desktop/icon-instagram.svg" alt="instagram"></img>
            </div>
          </div>
        </div>
      </footer>
    )
}