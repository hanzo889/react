import Logo from "./Logo"
import Button from "./Button"
const NavigationL = ["Sleep", "Stress & Anxiety", "Mindfulness"];

export default function HeaderLeft(){
    return(
         <div className="header-left">
        <Logo />
        <ul className="Button-list">
          {NavigationL.map((title, index) => (
            <li key={index}>
              <Button className="button-same" onClick={() => "?"} type="button">
                {title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )
}