import React from "react";
import Seo from "../components/seo";
import Layout from "../components/siteLayout";
import { Link } from "gatsby"
import { RiArrowLeftSLine } from "react-icons/ri"


const NoThanks = () => {
      return (

 <Layout className="thanks-page">
 <Seo title={`Thanks for being a Pirate!`} />

<section className="outer section section--gradient" >
      <div className="container" style={{padding: '30px 0', minHeight:'100dvh'}}>
        
      {/* <div className="mobile"><GoBack /></div> */}


    

<div style={{width:'90%', height:'100px', margin:'0 auto', textAlign:'center',}}>

{/* <p>
<strong>Hytron Manufacturing, Inc.</strong><br />
15582 Chemical Lane<br />
Huntington Beach, CA 92649<br />
</p> */}


{/* <RiCheckboxCircleLine className="" 
        style={{
          fontSize: "150px",
      //     color: "var(--primary-color)",
          margin:'0 auto',
          textAlign:'center'
        }}
      /> */}
      <h1 className="" style={{fontSize:'30px',}}>I understand</h1>

      <div className="font" style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1vw', textAlign:'center', justifyContent:'center',padding:'4px 0 0 0', margin:'3vh auto 0 auto', border:'0px solid blue', width:'70%', maxWidth:'', fontSize: '100%', position:'relative', lineHeight:'200%'}}>
      <p>I realize times are hard and money is tight.</p> 
      <p style={{fontSize:'24px'}}>Please enjoy Pirate Video Pro for free.</p>
      <p>Hopefully you can return the favor and donate later.</p> 
      </div>
      <div className="spacer33"></div> 

      <Link to="/?pro=true" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Back to Homepage
      </Link>


</div>






</div>



   


    </section>
    
    
     </Layout>
  );
};

export default NoThanks;