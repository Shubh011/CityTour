import React from 'react'

function Rightbar({data, bgColor, Color}) {
  return (
    <>
    <div className="right_container" style={{backgroundColor:`${bgColor}`, color: `${Color}`}}>
      <div className="postImg">
      <div className="img">
            <img id="backImg" src={data.img} alt="" />
          </div>
        <div className="insideImg">
          <div className="img">
            <img src={data.authorImg} alt="" />
          </div>
          <div className="text">
            <h3>{data.authorName} </h3>
            <p>{data.authortext} </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rightbar;