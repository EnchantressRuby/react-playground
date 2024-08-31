//? Header Component
//* arrow func. with def export
//* import = import .... from "./..."

const Header = () => {
    // JS
    const message = "Hello world"
    return(
        // JSX
        <header>
            {/* JSX comment section */}
            {/* className */}
            <h1 className="par">{message}</h1>
        </header>
    );
};

export default Header