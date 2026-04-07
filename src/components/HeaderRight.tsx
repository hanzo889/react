import Button from "./Button";

const ButtonContent = ["Screening", "Calm Health", " Log In"];

export default function HeaderRight() {
  return (
    <div className="header-right">
      <ul className="button-list1">
        {ButtonContent.map((title, index) => (
          <li key={index}>
            <Button className="button-same" onClick={() => "?"} type="button">
              {title}
            </Button>
          </li>
        ))}
      </ul>
      <Button className="button-try" onClick={() => "?"} type="button">
        Try Calm for Free
      </Button>
    </div>
  );
}
