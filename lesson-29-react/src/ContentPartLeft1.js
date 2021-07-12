import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function ContentPartLeft1() {
    return(
      <div className="bg-white text-center pt-4 pb-3 border">
          <img src="./images/logo-shadow.png" className="rasm-60" alt=""/>
          <h5 className="my-2">Track Time on Workwise</h5>
          <p className="color-grey size-14 pb-4 border-bottom">Pay only for the Hours worked</p>
          <h5 className="mt-3 mb-1 pointer">SIGN UP</h5>
          <a href="#" className="color-red size-12 text-decoration-none">Learn More</a>
      </div>  
    );

}

export default ContentPartLeft1;