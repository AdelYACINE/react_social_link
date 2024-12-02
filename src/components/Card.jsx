import React from "react";

const Card = () => {
  return (
    <div className="container-card">
      <img src="8.jpg" alt="avatar" className="img" />

      <div>
        <h2 className="name">Ahmed Adel Yacine</h2>
        <h4 className="location">Oran, Algeria</h4>
      </div>

      <p className="text">"Front-end developer and avid reader"</p>

      <div className="btn-container">
        <button className="btn">
          <a
            href="https://github.com/AdelYACINE"
            className="link"
            target="blank"
          >
            GitHub
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.frontendmentor.io/profile/AdelYACINE"
            className="link"
            target="blank"
          >
            Frontend Mentor
          </a>
        </button>
        <button className="btn">
          <a
            href="https://www.linkedin.com/in/ahmed-adel-yacine-074a461b5/"
            className="link"
            target="blank"
          >
            LinkedIn
          </a>
        </button>
        <button className="btn">
          <a href="https://x.com/?lang=fr" className="link" target="blank">
            Twitter
          </a>
        </button>
        <button className="btn">
          <a href="https://www.instagram.com/" className="link" target="blank">
            Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
