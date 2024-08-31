//* JSX styling
//* index.css, app.css, etc.
//* inline styling (style = {{backgroundColor: "red"}})
//* local, global variables

//! notes:
//* for styling, property-value (object), can be used
//* for property names = camelCase
//* for class names = className
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design, etc. (libraries can be used)

//! External CSS
//! CSS files can be import directly. No export needed.
//? CSS files can be added as import "path"
import "./Main.css";

import landscape from "./images/landscape.webp"





const headerStyle = {
    color: "teal",
    backgroundColor: "lightgray",
    fontWeight: "bold"
};

const Main = () => {
    return (
        <main>
            {/* JSX */}
            {/* Inline CSS, (key-value), camelCase */}
            <h2 style={{ color: "brown", backgroundColor: "lightcoral" }}>Main Section</h2>
            <h3 style={headerStyle}>Other Header</h3>
            <p className="par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ducimus!</p>
            <p className="par2">Lorem ipsum dolor sit amet.
            </p>
            <div>
                <img className="img" src="https://cdn.pixabay.com/photo/2024/02/23/18/59/desert-8592629_1280.jpg" alt="view" />

                {/* local */}
                <img className="img" src={landscape} alt="landscape" />

                {/* public folder */}
                <img className="img" src="./landscape2.webp" alt="landscape2" />
            </div>
        </main>
    );
};

export default Main;