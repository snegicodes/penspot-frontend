import React, { useContext, useEffect, useState } from "react";
import editImg from "../assets/images/edit.png";
import deleteImg from "../assets/images/delete.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext.jsx";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="single">
      <div className="content" style={{ paddingLeft: "20px" }}>
        <img
          src={`../upload/${post?.img}`}
          alt="img"
          style={{ border: "3px solid orange" }}
        />
        <div className="user">
          {post.userImg && (
            <img
              src={post.userImg}
              alt="user"
              style={{ border: "2px solid orange" }}
            />
          )}
          <div className="info">
            <span>{post.username}</span>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser && currentUser.username === post.username && (
            <div className="edit">
              <Link to="/write?edit=2" state={post}>
                <img src={editImg} alt="" />
              </Link>
              <img onClick={handleDelete} src={deleteImg} alt="" />
            </div>
          )}
        </div>
        <h1>{getText(post.title)}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <div className="menu">
        <Menu cat={post.cat} />
      </div>
    </div>
  );
};

export default Single;
