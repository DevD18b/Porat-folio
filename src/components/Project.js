
import React from 'react';
// import './Project.css'; // Import CSS file for styling

function Project() {
  return (
    <>
      <div  className='my-4 project-container' style={{ background: 'black',  }}>
        <div className="row">
          <div className="col-md-4" style={{background:"linear-gradient(89deg, #be2122, #ebd25e)"}}>
            <div className="card mx-3 my-3" style={{ border: '2px solid black', zIndex: '1', color: 'blue'  }}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/808/4f964a172392071.Y3JvcCw5NDQsNzM4LDAsMTQy.png"
                className="card-img-top"
                alt="..."
              />
              <div style={{}} className="card-body">
                <h5 style={{textAlign:"center",
                
               
                
                
                
                }}className="card-title">Project-1</h5>
                <p className="card-text">A Classic Delivery Menu design.</p>
                <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
                  Reach Out
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{background:"linear-gradient(45deg, #00F260, #0575E6)"}}>
            <div className="card mx-3 my-3" style={{ border: '2px solid black', color: 'blue' }}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/808/708c9c172355093.Y3JvcCwxNTQ2LDEyMTAsOTEsMA.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title"
                style={{textAlign:"center"}}>Project-2</h5>
                <p className="card-text">Designed an online transaction interface.</p>
                <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
                  Reach Out
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{background: " linear-gradient(to bottom, #800000, #ffffff)"
}}>
            <div className="card mx-3 my-3" style={{ border: '2px solid black', color: 'blue',  }}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/808/723a55171978135.Y3JvcCwxMTY4Nyw5MTQyLDIyODUsMA.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{textAlign:"center"}} className="card-title">Project-3</h5>
                <p className="card-text">Designs of Nike...</p>
                <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
                  Reach Out
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4"
             
             style={{background: "linear-gradient(45deg, rgb(48 109 193), rgb(236 12 221))"
}}
          
          >
            <div className="card mx-3 my-3" style={{ border: '2px solid black', zIndex: '1', color: 'blue' }}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/808/1b7896172356279.Y3JvcCwxMzU1LDEwNjAsNzcsMA.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{textAlign:"center"}} className="card-title">Project-4</h5>
                <p className="card-text">Phone App Mokusmo</p>
                <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
                  Reach Out
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{background:"linear-gradient(45deg, #ebd2b3, #35d0dcab)"}}>
            <div className="card mx-3 my-3" style={{ border: '2px solid black', zIndex: '1', color: 'blue' }}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8408b173587551.6492cf87c5077.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{textAlign:"center"
                   

                
                
                }} className="card-title">Project-5</h5>
                <p className="card-text">Designed a  Gaming Prototype for a firm.</p>
                <a href="https://www.behance.net/gallery/173587551/Consol-mobile-mockup" className="btn btn-primary">
                  Reach Out
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4" style={{background:"linear-gradient(45deg, #ebd2b3, #35d0dcab)"}}>
            <div className="card mx-3 my-3" style={{ border: '2px solid black', zIndex: '1', color: 'blue' }}>
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/808/816cd5172356889.Y3JvcCwxMjcyLDk5NSw3NSww.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 style={{textAlign:"center"
                   

                
                
                }} className="card-title">Project-6</h5>
                <p className="card-text">Designs of an app.</p>
                <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
                  Reach Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
