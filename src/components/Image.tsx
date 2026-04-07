import Background from "./calm.webp"

export default function Image(){
    return(
        <div className="img-v">
            <img className="img" src={Background} alt="background" />
        </div>
    )
}