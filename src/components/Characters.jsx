import React from "react";

function Characters (props) {
  const { name, house, imgUrl, quote } = props.item;
  const ITEM = props.item;

  console.log("Characters", props)
  const { currentTheme, bgColor, bgColorSecondary, textColor, btnColor } = props.theme;
  
    return (
      <div className={`card h-100 ${bgColorSecondary} ${textColor} shadow-lg`}>
      {imgUrl ? <img src={imgUrl} className="card-img-top img-fluid" alt="..." /> : null}

      <div className="card-body">
        {ITEM.name ? <h5 className="card-title mt-2 fw-bold">{ITEM.name}</h5> : null}
        <p className="card-text mb-2">{ITEM.house}</p>
        <p className="small card-text mb-2 fst-italic">{ITEM.quote}</p>
      </div>
    </div>
    )
}

export default Characters