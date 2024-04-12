
import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/siteLayout";
import Seo from "../components/seo";
import { Link } from "gatsby-plugin-modal-routing-4";
import VideoPlayer from "../components/VideoPlayer";
import ReactPlayer from 'react-player/lazy';
import { Helmet } from "react-helmet";
// import PirateLogo from "../img/logo.svg";

import { MdOutlineIosShare } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image"
const HomePage = ({ location }) => {
  const playerRef = useRef(null);
          // Function to check if the app is running in standalone mode
          function isRunningStandalone() {
            if (typeof window !== 'undefined') {
                return window.matchMedia('(display-mode: standalone)').matches;
            }
            return ;
        }

          // Get query parameter value
  const queryParams = new URLSearchParams(location.search);
  const hidePirate = queryParams.get('hidePirate') === 'true';


  const showPro = useState(() => {
    const storedShowPro = localStorage.getItem('showPro');
    return storedShowPro !== null ? JSON.parse(storedShowPro) : false;
});

// Effect to update local storage when showPro changes
useEffect(() => {
    localStorage.setItem('showPro', JSON.stringify(showPro));
}, [showPro]);
  
  return (
    <Layout>
      <Helmet>
        <body id="body" className="homepage youtube" />
      </Helmet>
      <SeoWrapper location={location} />
      <div className='player-wrapper' style={{height:'100%', aspectRatio:'16/9'}}>
        <VideoPlayer location={location} />

        {!hidePirate && !showPro && !isRunningStandalone() && (
        
<>

        <div
        className="menusnapp"
        style={{
          position: "relative",
          zIndex: "0",
          top: "",
          gap: "0",
          padding: "5vh 0",
          alignItems: "start",
          animation:'fadeIn 1s forwards',
          animationDelay:'1s',
          opacity:'0',
          // display: isMenuOpen ? "block" : "none",
          display: "flex",
          background: "var(--theme-ui-colors-headerBackground)",
          backgroundColor: "#222",
          width: "100dvw",
        }}
      >



{/* <StaticImage src="../../static/assets/free-star.webp" alt="Works With Apple AirPlay" style={{height:'50%', width:'50%', position:'absolute', zIndex:'0', bottom:'-28vh', right:'-5vw', border:'0px solid !important', objectFit:'contain', margin:'0 auto'}} /> */}


        <div id="" className="flexbutt font" style={{ display: "", gap: "", justifyContent: "center", alignItems: "center", margin: "0 0", padding: "0", position: "relative", width: "100vw" }}>
          {/* <div style={{ minWidth: "25vw", maxHeight: "15vh", textAlign: "center", color: "#fff" }}>
            <PirateLogo style={{ minWidth: "", maxHeight: "15vh", position: "", top: "", left: "" }} />
            the web revolution
            <br /><br /><br />
              <span style={{ margin: "2vh auto", fontSize: "160%" }}>Install Now Free!</span>
              <br /><br /><br />
          </div> */}
          <div className="flexcheek mob2 print" style={{ position: "relative", top: "", minWidth: "90vw", overflow: "", marginBottom: "", paddingTop: "", borderRadius: "var(--theme-ui-colors-borderRadius)" }}>



            <div className="nameblock font" style={{ margin: "0 auto 0 auto", padding: "0 0 0 0", alignContent: "center", display: "grid", textAlign: "center", justifyContent: "center", verticalAlign: "center", color: "#fff", paddingTop: "", fontSize: "clamp(1rem, 1.4vw, 3.2rem)", background: "rgba(0,0,0,0.50)", backdropFilter: "blur(8px)", border: "0px double var(--theme-ui-colors-buttonHoverBg)", borderRadius: "var(--theme-ui-colors-borderRadius)", textShadow: "0 2px 0px #000", maxWidth: "" }}>










<div style={{fontSize:'clamp(1rem, 2vw, 3.2rem)', position:'relative', padding:'2vh 0'}}>

<span style={{fontSize:'110%'}}>Watch videos on your tv without ads!</span>
              <br /><br />
              <span style={{fontSize:'80%'}}>Create your own shareable social video links with
              <br />
               custom photo, video titles, and start/stop times.</span>



              </div>


{/* https://youtu.be/xIAZ-vHl4aY */}

{/* <ReactPlayer ref={playerRef} url='/assets/PirateInstall.mp4' */}


              <ReactPlayer ref={playerRef} url='https://youtu.be/dOHZv-hpIhA'
              config={{
    youtube: {
      playerVars: { showinfo: 0, autoplay: 1, mute: 1 }
    }
  }}
  playsinline
  playing
  loop
  autoPlay
  muted
  style={{
    minWidth:'',
    minHeight:'45vh',
  }}
    width="100%"
    height="100%"
              />




{/* https://www.paypal.com/ncp/payment/5L797N6GMA93W */}

{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="99GULJ7R9T68W" />
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
</form> */}




<br />
<a className="button" href="https://www.paypal.com/donate/?hosted_button_id=8XNKZ3PTVQKPU" style={{maxWidth:'80%', margin:'0 auto'}}>Pirate is Donation-Ware <br /> Donate to unlock custom photos and titles</a>
<br /><br />
<Link state={{modal: true}}  to="/contact/" className="" style={{margin:'', textDecoration:'none'}}>Want your own white-label version of Pirate?</Link>
{/* <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="8XNKZ3PTVQKPU" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form> */}


<br />
<p style={{ margin: "2vh auto 5px auto", padding:'0 5px', fontSize: "120%", lineHeight:'200%' }}>Pirate Video is a Personal Web App (PWA) &nbsp; Install for FREE!</p>
<div className="font" style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'1vw', textAlign:'center', justifyContent:'center',padding:'4px 0 0 0', margin:'0 auto', border:'0px solid blue', width:'', maxWidth:'', fontSize: '100%', position:'relative'}}>

Just click: 
<div style={{position:'relative', display:'block', left:'',}}><MdOutlineIosShare style={{fontSize:'24px'}} /></div>

  <span style={{fontSize:'120%'}}> and </span> <span style={{display:'block'}}>"Add To Home Screen"</span>



</div>

              {/* <span style={{ margin: "2vh auto", fontSize: "160%" }}>About PIRATE</span>
              <br /> */}


              {/* <br />
              <a href="https://pirateweb.org/about" className="button print" style={{ display: "flex", justifyContent: "center", padding: "1vh .5vw", maxWidth: "250px", margin: "30px auto", border:'1px solid ' }}>About PIRATE</a> */}

<br /><br />
<StaticImage src="../../static/assets/screen-mirroring-badges.webp" alt="Works With Apple AirPlay" style={{height:'80%', width:'80%', position:'relative', zIndex:'0', bottom:'', right:'', border:'0px solid !important', objectFit:'contain', margin:'0 auto'}} />

            </div>
            

          </div>


          
          {/* <div className="flexcheek mob2 print" style={{ position: "", top: "", minWidth: "25vw", overflow: "", marginBottom: "", paddingTop: "", borderRadius: "var(--theme-ui-colors-borderRadius)" }}>
            <div className="nameblock font" style={{ margin: "0 auto 0 auto", padding: "0 0 0 0", alignContent: "center", display: "grid", textAlign: "center", justifyContent: "center", verticalAlign: "center", color: "#fff", paddingTop: "", fontSize: "clamp(1rem, 1.4vw, 3.2rem)", background: "rgba(0,0,0,0.50)", backdropFilter: "blur(8px)", border: "10px double var(--theme-ui-colors-buttonHoverBg)", borderRadius: "var(--theme-ui-colors-borderRadius)", textShadow: "0 2px 0px #000", maxWidth: "" }}>
              <br />
              <span style={{ margin: "2vh auto", fontSize: "160%" }}>Get PIRATE</span>
              
              <br />
              Web, Social &amp; Video Media
              <br />
              Combined into your own app
            <br />
              <br />
              Get the full version free!
              <a href="https://pirateweb.org/install" className="button print" style={{ display: "flex", justifyContent: "center", padding: "1vh .5vw", maxWidth: "250px", margin: "30px auto", border:'1px solid ' }}>Become a PIRATE!</a>
              <br /><br />
            </div>
          </div> */}
        </div>
        {/* <br /><br /><br /> */}

      </div>
      </>



  )}



{!isRunningStandalone() ? (


  <section className="scroll-area panel" id="profile" name="profile" style={{ display:'NONE', height:'', minHeight:'', position:'relative', overflow:'scroll', margin:'0 auto 0 auto', padding:'0 0 60px 0', background:'var(--theme-ui-colors-background)', color:'var(--theme-ui-colors-text)', width:'100vw', borderRadius:'var(--theme-ui-colors-borderRadius)', }}>
  <article style={{ margin:'0 0 0 0'}}>


<div id="profiletop" className="flexbutt" style={{display:'', gap:'10px', justifyContent:'center', alignItems:"center", margin:'0 0',
  padding:'0 2% 0 2%', position:'relative', color: ''}}>




  <div className="nameblock flexcheek" style={{position:'', top:'0', marginTop: '', padding: '1rem 2rem 0 2rem', maxHeight: '', fontSize: 'clamp(1rem, 1.4vw, 3.2rem)',  borderRadius: 'var(--theme-ui-colors-borderRadius)' }}>


  <div className=" mob print" style={{ position:'sticky', top:'0', fontSize: 'clamp(1rem, 1.5vw, 3.2rem)' }}>
      <h1 className="title1" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>Hoist Your Flag!</h1>
      <h2 className="tagline1" style={{ fontSize: 'clamp(1.2rem, 1.8vw, 3.2rem)' }}>
      YOU... ARE THE CAPTAIN NOW!
      </h2>
      <div style={{ fontSize: 'clamp(1rem, 1.8vw, 3.2rem)' }} className="description" >
      <p>Pirate is your <strong>Personal Web App (PWA)</strong> and it works on any device - NO App Store needed.</p>
<p>A new social media, Pirate is a decentralized network of other Pirate users &amp; you control the algorithm!</p>
<p>Watch ad-free video, edit your page, profile, and publish content with FULL ownership and copyright.</p>
<p>Pirate is Open-Source and it operates forever, with no contracts, commitments or costs of any kind.</p>

      </div>

    </div>


  
  </div>




      <div className="flexcheek mob2 print" style={{position:'', top:'0', minWidth:'', overflow:'', marginBottom:'8vh', paddingTop:'2vh', borderRadius:'var(--theme-ui-colors-borderRadius)', display:'flex', flexDirection:'column', justifyContent:'center'
      }}>


            <StaticImage className="avatar-frame" src="../../static/assets/default-user.webp" alt="Works With Apple AirPlay" style={{ maxWidth:'280px', margin:'0 auto', height:'', maxHeight:'280px', position:'relative', top:'', objectFit:'contain', backgroundSize:'contain', marginBottom:'0', border:'0'}} />
        
<div className="nameblock font" style={{margin:'0 auto 0 auto', padding:'0 0 0 0',alignContent:'center', display:'grid', textAlign:'center', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  paddingTop:'', 
  fontSize:'clamp(1rem, 1.4vw, 3.2rem)',
  background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'var(--theme-ui-colors-borderRadius)',
  textShadow:'0 2px 0px #000',
  maxWidth:'70%',
  width:'100%'
}}>
  <br />

    <span style={{margin:'2vh auto', fontSize:'clamp(1.5rem, 2vw, 2.8rem)', lineHeight:''}}>BECOME A PIRATE!</span>


  {/* <span style={{margin:'10px auto', fontSize:'160%'}}>{companyname}</span> */}
    <span style={{margin:'10px auto', fontSize:'120%'}}>The fleet is launching now</span>

    <span style={{margin:'10px auto', fontSize:'120%'}}>It's Completely FREE!</span>
  


  <a href="https://pirateweb.org/install" className="button print" style={{ display: "flex", justifyContent: "center", padding: "1vh 1vw", maxWidth: "250px", margin: "30px auto", border:'1px solid ' }}>Get Your Ship Now!</a>
  <br />







  




  


</div>


</div>
</div> 
</article>
</section>
  ) : (
    ""
)}





      </div>

    </Layout>
  );
};

const SeoWrapper = ({ location }) => {
  const queryParams = new URLSearchParams(location.search);
  const videoUrlParam = queryParams.get('video');
  const seoTitleParam = queryParams.get('seoTitle') || "☠ Pirate Video | Play ▶ ";
  const customImageParam = queryParams.get('customImage'); 

  // Function to extract video ID from YouTube URL
  const extractVideoId = (url) => {
    if (!url) {
      return null;
    }
    /* eslint-disable no-useless-escape */
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    const videoId = match ? match[1] : null;
    return videoId;
    /* eslint-disable no-useless-escape */
  };

  // Extract video ID
  const videoId = extractVideoId(videoUrlParam);

  return (
    <Seo
      title={seoTitleParam}
      description="Pirate: revolutionizing the web"
      image={customImageParam || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : 'https://pirateyoutube.com/assets/default-og-image.webp')}
    />
  );
};

export default HomePage;
