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

import "./Main.css"

const Main = () => {
    return(
        <main>
            <h2>Main Section</h2>
            <p className="par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ducimus!</p>
            <p className="par2">Lorem ipsum dolor sit amet.
            </p>
        </main>
    );
};

export default Main;