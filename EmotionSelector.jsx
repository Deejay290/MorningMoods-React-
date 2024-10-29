import React from 'react';
import { useState } from 'react';
function EmotionSelector() {
  // Corrected Map initialization
  const [storedMessage, updatedMessage ] = useState('');
  const Emotions = new Map([
    ['Happy', 'My beautiful girl, I love that you are feeling happy. You deserve the happiest of days.'],
    ['Hopeful', 'Many great things are in store for you my love, when plans don’t go your way that doesn’t mean to give up. You stay hopeful and keep on persevering and I promise great things will come your way.'],
    ['Inspired', 'Today is a great day to feel inspired. Use this newfound inspiration and lets get to work strong girl. BE GREAT!! BE HAPPY!!'],
    ['Grateful', 'Hells yea my love, I always love to hear when you’re feeling grateful. Never forget the blessing we all receive, and the joy of the littlest things. Everyday is a day of gratefulness and remembrance. Never take life for granted!'],
    ['Goofy', 'You in a silly goofy mood today sweet girl?! I love seeing my baby happy and enjoying herself. Have lots of laughs and smile a ton sweet girl, you deserve it.'],
    ['Sad', 'Rainy days create beautiful rainbows, sad days make a stronger Riley. Our struggles in life never define us, nor are they forever. Beautiful results come to those who stay persistent and work through their toughest times. Pick yourself back up my love, I believe in you.'],
    ['Mad', 'Anger is the downfall of many, never let these feelings overcome you and push you to being someone you are not. Always take time to calm yourself down and remember this feeling never lasts forever. I love you sweet girl and we will get through this together.'],
    ['Annoyed', 'Take a deep breath my love, remember what your goals and plans are for the day. It is totally okay to feel that way, but just because you are upset doesn’t mean that it is okay to take that frustration out on others. You never know what others are dealing with; just because you are upset doesn’t make it right to upset others who don’t deserve it; and just remember... Treat people how you would want to be treated. Stay positive my love, I love you.'],
    ['Nervous', 'Take a deep breath my love, reset and recollect yourself. It’s okay to feel nervous but know that you can accomplish anything. Believe in yourself and go out and make the impossible possible.'],
    ['Stressed', 'There are moments in our life that are extremely stressful, they can be very difficult and make us feel lost and miserable. That’s the thing though my love, it’s only a moment. Our actions and decisions moving forward is what determines our happiness. Always take time for yourself to destress, take deep breaths, get some fresh air, drink some water, and just remember... Relax my love. Just like you always say, "It will always work out." (Who the hell got my baby stressing?!!!)  I love you Riley, forever and ever.']
  
  ]);
  const handleEmotion = (emotion) => {
    const selectedEmotion = emotion.target.value; // This uses the object emotion to get the selected emotion from the dropdown menu
    const message = Emotions.get(selectedEmotion);//This gets the message associated with the selected emotion  
    updatedMessage(message);//This updates the message

    
  };

  return (
    <>
    <div className ="test">
      <div className ='container'>
        <div className ='moodselection'>
        <label for ="Moods">Choose your feeling:</label>
          <select className= 'Moods' name ="Moods" id ="MoodSelect" onChange = {handleEmotion}>
            <option value ="--">--</option>
            <option value ="Happy"> Happy</option>
            <option value ="Hopeful"> Hopeful</option>
            <option value ="Inspired"> Inspired</option>
            <option value ="Grateful"> Grateful</option>
            <option value ="Goofy">Goofy </option>
            <option value ="Sad"> Sad</option>
            <option value ="Mad"> Mad</option>
            <option value ="Annoyed"> Annoyed</option>
            <option value ="Nervous"> Nervous </option>
            <option value ="Stressed"> Stressed</option>
          </select><br></br><br></br>
           <h4 className ='Text'>{storedMessage}</h4>
        </div>
      </div> 
    </div>
    </>
  );


};
export default EmotionSelector;