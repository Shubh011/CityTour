import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
function Post({data, bgColor, color}) {
  return (
    <>
 <div className="post_section_container" style={{backgroundColor:`${bgColor}`, color: `${color}`}}>
      <div className="user">
        <div className="userinfo">
          <div className="image">
            <img src={data.userImg} alt="" />
          </div>
          <div className="text">
            <h3>{data.userName}</h3>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="dot_bar"><BsThreeDotsVertical/></div>
      </div>
      <p className="description">{ data.description} </p>
      <div className="post_img">
      <img src={data.postImg} alt="" />
      </div>
      <div className="reaction">
        <div className="likes"><FaHeart className='items'/>{data.likes}k</div>
        <div className="comments"><FaComment className='items'/>{data.comments}k</div>
        <div className="share"><FaShare className='items'/>{data.share}k</div>
      </div>
    </div>
    </>
  )
}

export default Post; 