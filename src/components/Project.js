
import React from 'react';
import './Project.css'; // Import CSS file for styling

function Project() {
  return (
    <>
      <div className='my-3 d-flex flex-wrap project-container' style={{background:"black"}}>
        <div className="card" style={{border:"2px solid black", zIndex:"1",  color : "white", background:"black"}}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/808/4f964a172392071.Y3JvcCw5NDQsNzM4LDAsMTQy.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project-1</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
              Reach Out
            </a>
          </div>
        </div>

        <div className="card" style={{border:"2px solid black",  color : "white", background:"black"}}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/808/708c9c172355093.Y3JvcCwxNTQ2LDEyMTAsOTEsMA.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project-2</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
              Reach Out
            </a>
          </div>
        </div>

        <div className="card" style={{border:"2px solid black",  color : "white", background:"black"}}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/808/723a55171978135.Y3JvcCwxMTY4Nyw5MTQyLDIyODUsMA.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project-3</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
              Reach Out
            </a>
          </div>
        </div>
        <div className="card" style={{border:"2px solid black", zIndex:"1",  color : "white", background:"black"}}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/808/1b7896172356279.Y3JvcCwxMzU1LDEwNjAsNzcsMA.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project-4</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
              Reach Out
            </a>
          </div>
        </div>
        <div className="card" style={{border:"2px solid black", zIndex:"1",  color : "white", background:"black"}}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/808/fcb8e3172356767.Y3JvcCwxNTkyLDEyNDUsMCwxNTY0.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project-5</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
              Reach Out
            </a>
          </div>
        </div>
        <div className="card" style={{border:"2px solid black", zIndex:"1",  color : "white", background:"black"}}>
          <img
            src = "https://mir-s3-cdn-cf.behance.net/projects/808/816cd5172356889.Y3JvcCwxMjcyLDk5NSw3NSww.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Project-5</h5>
            <p className="card-text">lorem ipsum</p>
            <a href="https://www.behance.net/gallery/172392071/mobile-mockups" className="btn btn-primary">
              Reach Out
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

