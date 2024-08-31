//? Header Component
//* arrow func. with def export
//* import = import .... from "./..."


//? rafce
const Header = () => {
    // JS
    const message = "Hello world"
    return (
        // JSX
        <header>
            {/* JSX comment section */}
            {/* className */}
            <h1 className="par">{message}</h1>
        </header>
    );
};

export default Header;


//? rafc
//* arrow func. with named export
//! import {} from "./..."

// import React from 'react'

// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }


//? rfce
//* func declaration with def export

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header