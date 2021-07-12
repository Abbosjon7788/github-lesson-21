import '../main.css';
import NavbarPart from "./NavbarPart";
import IconsPart from "./IconsPart";
import ContentPart from "./ContentPart";
import Ad from "./Ad";



function App() {
    return (
        <div className="max-w-100">
            <div className="row">
                <div className="col-1">
                    <NavbarPart/>
                </div>
                <div className="col-11 pt-5">
                    <div className="row mx-0 px-0">
                        <div className="col-10 offset-2">
                            <IconsPart/>
                        </div>
                        <div className="col-8 offset-2 mt-4">
                            <ContentPart/>
                        </div>

                    </div>
                    <div className="row mx-0 p-0">
                        <div className="col-12 mt-5 mb-4">
                            <Ad/>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default App;
