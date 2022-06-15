import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  function handleOnTweetTextChange(e) {
    props.setTweetText(e.target.value)
  }

  function handleOnSubmit() {

    var newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    }
    props.setTweets((myTweets) => [...myTweets, {...newTweet, id:myTweets.length}])
    props.setTweetText("")

  }
  let isDisabled = props.tweetText.length == 0 || props.tweetText.length > 140 ? true : false;

  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount
          value={props.tweetText}
         />
        <TweetSubmitButton isDisabled={isDisabled} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let maxChar = 140;
  let charsLeft = props.value.length === 0 ? null : maxChar-props.value.length
  let tooManyChar = charsLeft < 0 ? ' red': '';
  

  return <span className={`tweet-length` + tooManyChar} value={props.value}>{charsLeft}</span>
}

export function TweetSubmitButton(props) {
  

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={props.isDisabled} onClick={props.handleOnSubmit} >Tweet</button>
    </div>
  )
}
