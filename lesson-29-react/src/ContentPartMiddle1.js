import './main.css';

function ContentPartMiddle1() {
    return(
      <div className="border-top-red p-4 bg-white shadow d-flex justify-content-between align-items-center">
          <img src="./images/user-1.png" alt="" className="rasm-user"/>
          <div>
              <button type="button" className="btn btn-grey shadow-none opacity-07">Post a Project</button>
              <button type="button" className="btn active btn-red shadow-none ml-2">Post a Job</button>
          </div>


      </div>
    );

}

export default ContentPartMiddle1;