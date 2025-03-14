
function About() {
    return (
      <>
        <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>
  
        <div className="container about">
          <div className="row">
            <div className="col-md-6 text-center">
              <img alt="about" src="./img/img1.png" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="main-title about-h2">ABOUT</h2>
              <p className="main-p">
                At SecureChain, we are passionate about energy markets and believe that they are pivotal for a successful energy transition.
                
                Here we democratised the access to wholesale markets for new and smaller players, to allow them to focus on what they do best production and distribution.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default About;