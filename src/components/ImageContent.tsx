import Button from "./Button";

export default function ContentImage(){
    return(
        <div className="container-imagec">
            <div className="imagec">
                <h1>Calm your mind. Change your life.</h1>
                <p>The #1 app for sleep, meditation and relaxation</p>
                <div className="imagec-button">
                    <Button className="button-image-l" onClick={() => "?"} type="button">
                        Try Calm for Free
                    </Button>
                     <Button className="button-image-r" onClick={() => "?"} type="button">
                        Already have an account
                    </Button>

                </div>
            </div>
        </div>
    )
}