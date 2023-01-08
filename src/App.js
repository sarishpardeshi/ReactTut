import "./styles.css";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "Green";
} else {
  greeting = "Good Night";
  customStyle.color = "Blue";
}

export default function App() {
  return (
    <div className="App">
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}
