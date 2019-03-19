import React from "react";
import "./Footer.css";

/** const Footer = () => {
  return (
    <div className="footer">
      <i className="fa fa-comment-o icons" />
      <i className="fa fa-refresh icons" />
      <i className="fa fa-heart-o icons" />
      <i className="fa fa-envelope-o icons" />
    </div>
  );
}; */

class Footer extends React.Component {
  /** constructor(props) {
    super(props);
    this.state = { clicks: null };
  } */
  state = {
    comments: null,
    retweets: null,
    likes: null,
    emails: null
  };

  onClick = e => {
    e.preventDefault();
  };

  comments = () => {
    this.setState(({ comments }) => ({
      comments: comments + 1
    }));
  };
  reTweets = () => {
    this.setState(({ retweets }) => ({
      retweets: retweets + 1
    }));
  };
  likes = () => {
    this.setState(({ likes }) => ({
      likes: likes + 1
    }));
  };
  eMails = () => {
    this.setState(({ emails }) => ({
      emails: emails + 1
    }));
  };

  render() {
    return (
      <div className="footer">
        <i className="fa fa-comment-o icons" onClick={this.comments.bind(this)}>
          <div className="on-click">{this.state.comments}</div>
        </i>
        <i className="fa fa-retweet icons" onClick={this.reTweets.bind(this)}>
          <div className="on-click">{this.state.retweets}</div>
        </i>
        <i className="fa fa-heart-o icons" onClick={this.likes.bind(this)}>
          <div className="on-click">{this.state.likes}</div>
        </i>
        <i className="fa fa-envelope-o icons" onClick={this.eMails.bind(this)}>
          <div className="on-click">{this.state.emails}</div>
        </i>
      </div>
    );
  }
}

export default Footer;
