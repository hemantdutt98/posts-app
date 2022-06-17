import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/Post.css'

const Post = () => {
    const {id} = useParams();
    const [postData, setPostData] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/getpost/${id}`).then((res) => {
            setPostData(res.data);
        })

        axios.get(`http://localhost:3001/comments/${id}`).then((res) => {
            setComments(res.data);
        });
    }, []);

    const addComment = () => {
        axios
          .post("http://localhost:3001/comments", {
            comment: newComment,
            PostId: id,
          })
          .then((res) => {
            const commentToAdd = { comment: newComment };
            setComments([commentToAdd, ...comments]);
            setNewComment("");
          });
      };

  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className='post' id="individual">
            <div className='title'>{postData.title}</div>
            <div className='body'>{postData.posts}</div>
            <div className='footer'>{postData.username}</div>
            </div>
        </div>
        <div className='rightSide'>
            <div className="addCommentContainer">
                <input
                    type="text"
                    placeholder="Comment..."
                    autoComplete="off"
                    value={newComment}
                    onChange={(event) => {
                    setNewComment(event.target.value);
                    }}
                />
                <button onClick={addComment}> Add Comment</button>
            </div>
            <div className="listOfComments">
                {comments.reverse().map((com, key) => {
                    return (
                    <div key={key} className="comment">
                        {com.comment}
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}
export default Post