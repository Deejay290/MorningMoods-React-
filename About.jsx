
import './about.css';
function About(){
  return(
  <>
  <section className ="about-container">
    <section className = 'photo-container'>
      <a href = 'public/Flowerfield.jpg' target ="_blank"><img className = 'Riley' src="public/IMG_1235.jpg" alt="My beautiful girl."/></a>
    </section>
    <section className = 'text-container'>
      <div className = "p1">
        <p>  When thinking of a project I could do to learn more about front end development, I 
     thought "why not do something for my beautiful girl." So I gave her a call and asked, 
    "what is something I could make for you?" Now, here we are. 
        </p>  
      <br></br>
        <p>  The point of this project is to help my girlfriend Riley feel better when she is feeling down and keep track of her morning mood. 
        She is studying abroad, so I wanted to give her something that would make her feel connected with me and to cheer herself up whenever she needs a little boost to keep going.
        </p>
      </div>
    </section>
  </section>
     </>
  );
}

export default About;