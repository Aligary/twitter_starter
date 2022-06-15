import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox 
        tweets={props.tweets} 
        setTweets={props.setTweets}  
        userProfile={props.userProfile}
        tweetText={props.tweetText}
        setTweetText={props.setTweetText}
        />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {
          props.tweets.map((e) => {
            return <Tweet  
                      key={e.id}
                      tweet={e}
            
            />
          })
        }
      </div>
    </div>
  )
}
