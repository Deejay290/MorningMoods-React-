import './index.css';
import {Link} from 'react-router-dom';

function NavigationBar (){
    return (
    <div>
      <nav>
        <ul className ="navbar">
          <li><Link to ='/'> Home</Link></li>
          <li><Link to ='/About'> About </Link></li>
          
        </ul>
      </nav>
    </div>
    );
}

export default NavigationBar; 