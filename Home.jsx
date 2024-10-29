import EmotionSelector from "./EmotionSelector";
import UpdateDay from "./UpdateDay";
function Home (){
  return(
  <>  
    <main>
    <UpdateDay/>
    <h1 className ='Header'> How are you feeling today sweet girl? </h1>
    <EmotionSelector/>
    </main>
  </>
  
  );
}

export default Home;