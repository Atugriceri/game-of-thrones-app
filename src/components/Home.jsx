import React from "react";

function Home (props) {
  const { marginBottomIce, marginTopIce, marginBottomFire, marginTopFire } = props.theme;
  

    return (
         <div className="row mt-5 g-0">
           <div className="col-md-6">
             <img className={`rounded img-fluid ${marginBottomFire} ${marginTopFire}`} src="https://i.ibb.co/yRxxQ8y/ice.jpg" alt="ice"/>
           </div>
           <div className="col-md-6">
             <img className={`rounded img-fluid ${marginBottomIce} ${marginTopIce}`} src="https://i.ibb.co/4PzfZ0r/fire.jpg" alt="..." />
           </div>
         </div>
    )
}

export default Home