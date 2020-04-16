import React from "react";

const CvCard = ({cvs}) => {
  return (
    <>
      <div id="CvCard" className="ui segment">
        <div class="content">
          <div>{cvs.time}</div>
          <a class="image"  href={cvs.link}>
            <img class="right floated tiny ui image" src={cvs.image}></img>
          </a>
          <h2 class="ui header">{cvs.title} </h2>
          <h2 class="ui header">{cvs.name} </h2> 
          <p class="description">{cvs.description}</p>
          
        </div>
      </div>
    </>
  );
};
export default CvCard;


