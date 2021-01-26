import React, { useState } from 'react';
import { placeCollection } from "./Dataset";
import "./emojihandler.css"

const emojiPlace = Object.keys(placeCollection);

export function EmojiHandler() {
 
        const [meaning, setMeaning] = useState("");
        const [emojiIcon, setEmojiIcon] = useState("");

        const placeHandler = (event) => {
            let userInput = event.target.value;
            let meaning = placeCollection[userInput];
            setMeaning(meaning);
        }

        const meaningHandler = (emoji) => {
            let emojiIcon = emoji;
            let meaning = placeCollection[emoji];
            setMeaning(meaning);
            setEmojiIcon(emojiIcon);
        }

    return (
        <div>
            <h1>Travel Icons</h1>
            <small>Use Guide at the end</small>
            <div className="show">
                 <p>
                    {meaning} : {emojiIcon}
                </p>
            </div>

            <input placeholder="Search Emoji 😄" onChange={placeHandler} />
            <div className="emojiBlock">
                <p>OR Select Emoji from below</p>
                {emojiPlace.map((emoji) => {
                    return (
                        <p
                          className="emojiPara"
                          onClick={() => meaningHandler(emoji)}
                          key={emoji}
                        >
                            {emoji}
                        </p>
                    )
                })}
            </div>
            <div className="guide">
        <b>Guide</b>
        <p>
          “Many times travellers were confronted with a language barrier that
          was only to be overcome by drawing signs, symbols or icons on a piece
          of paper, map, or into the dirt,”
        </p>
        <p>
          It would be great to have an essential set of icons with you,
          permanently, so that you could just point on whatever you need – and
          people would understand.
        </p>
      </div>
      <footer>
        <small>
          Made with ❤️ by <a href="https://vaishnavs.netlify.app">Vaishnav</a>
        </small>
      </footer>
        </div>
    )
}


export default EmojiHandler
