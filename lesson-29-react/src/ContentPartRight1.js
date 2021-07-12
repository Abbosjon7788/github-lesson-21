import './main.css';

function ContentPartRight1() {
    return (
        <div className="card">
            <div className="card-title bg-red py-5"/>
            <div className="card-body px-0 pb-0 position-relative text-center">
                <img src="./images/user-1.png" alt=""
                     className="rasm-100 rasm-location circle-white position-absolute"/>
                <h4 className="mt-4 mb-0">John Doe</h4>
                <p className="text-secondary size-14 border-bottom pb-3 mb-1">Graphic Designer at Self Employed</p>
                <p className="size-20 mb-1 color-grey">Following</p>
                <p className="mb-0 pb-3 border-bottom size-18">34</p>
                <p className="size-20 mb-1 color-grey">Followers</p>
                <p className="mb-0 pb-3 border-bottom size-18">155</p>
                <a href="#" className="color-red weight-600 text-decoration-none d-block san-serif py-2 size-14">View
                    Profile</a>
            </div>
        </div>


    );
}

export default ContentPartRight1;