import React from "React"
import { Avatar } from "../../components/Avatar"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'comment.css'
// maybe have something a context or send that user has liked to the database???

const ShowComment = (props) => {
const {
user,
comment,
} = props
const {avatar, name, userId} = user;
const {content, post_time, commentId} = comment;

const nameTag = (userName) => {
    const result = userName.split(' ')
    return "@" + result[0]
}
    return (
        <article class="comment">
          
          <div class='comment-header'>
            
            <div class='comment-header-left'>
              <img class='profile' src="/images/profile-hex.png" />
              <h3>{name}</h3>
            </div>
            <div class='comment-header-right'>
              <h4>{nameTag(name)}</h4>
            </div>
          </div>
          <div class='comment-body'>
                <p>{content}</p>
              </div>
              <div class='comment-footer'>
                <div class='comment-footer-left'>
                  <h4>{post_time}</h4>
                </div>
                <div class='comment-footer-right'>
                  <div>
                    <a class='comment-icon' href='/'><i class="fas fa-flag"></i></a>
                    <a class='comment-icon' href='/'><i class="fas fa-recomment"></i></a>
                    <a class='comment-icon' href='/'><i class="fas fa-heart"></i></a>
                  </div>
                </div>
              </div>
            </article>
    )
}

export default ShowComment;