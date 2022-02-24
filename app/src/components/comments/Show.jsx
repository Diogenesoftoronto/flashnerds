import React from "react";
// import { Avatar } from "../../components/Avatar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./comment.css";
import Avatar from "../Avatar";
import Likes from "../Likes";

// maybe have something a context or send that user has liked to the database???

const ShowComment = (props) => {
  const { user, comment } = props;
  console.log(user, comment);
  const { avatar, name, userId } = user;
  const { content, post_time, commentId, likes } = comment;
  const nameTag = (userName) => {
    const result = userName.split(" ");
    return "@" + result[0];
  };
  return (
    <article className="comment">
      <div className="comment-header">
        <div className="comment-header-left">
          {/* <img className='profile' src={avatar} /> */}
          <Avatar className="profile" name={name} avatar={avatar} />
          <h3>{name}</h3>
        </div>
        <div className="comment-header-right">
          <h4>{nameTag(name)}</h4>
        </div>
      </div>
      <div className="comment-body">
        <p>{content}</p>
      </div>
      <div className="comment-footer">
        <div className="comment-footer-left">
          <h4>{post_time}</h4>
        </div>
        <div className="comment-footer-right">
          <div>
            <Likes likes={likes}/>
            {/* <a className="comment-icon" href="/">
              <i className="fas fa-heart"></i>
            </a> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShowComment;
