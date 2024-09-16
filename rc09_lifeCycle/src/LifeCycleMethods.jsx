import React from "react";

/* ---------------------------------------------- */
/*              LIFECYCLE METHODS                 */
/*  https://reactjs.org/docs/react-component.html */
/* ---------------------------------------------- */

//* Lifecycle methods are special React methods used to manage components throughout their lifecycle.
//* Examples include when a component is mounted, updated, or unmounted.

//* Creating component (constructor)
//* Adding to DOM (componentDidMount)
//* Processing component (render)
//* (Optional) Updating component (componentDidUpdate)
//* Component removal (componentWillUnmount)

// const LifeCycleMethods = () => {
//   return (
//     <div>LifeCycleMethods</div>
//   )
// }

class LifeCycleMethods extends React.Component {
  //! 1
  constructor(props) {
    console.log("constructor is running");
    super(props);

    this.state = {
      count: props.count || 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  //! 3-) Called when the component is mounted (right after the first render).
  //! Used for tasks like fetching data.
  //! Called only once in the lifecycle.

  componentDidMount() {
    console.log("Component mounted");
  }

  //! 4-) Called right after the component is updated and re-rendered.
  //! Can access the updated state or props.

  componentDidUpdate() {
    console.log("Component updated");
  }

  //! 5-) Called before the component is removed from the DOM.

  componentWillUnmount() {
    console.log("Component unmounted");
  }


  //! 2
  render() {
    console.log("component rendered");
    return (
      <div className="container text-center p-3">
        <h1 className="text-danger">LifeCycleMethods</h1>
        <h3>COUNT: {this.state.count}</h3>
        <button className="btn btn-info" onClick={this.increase}>
          INC
        </button>
      </div>
    )
  }

}

export default LifeCycleMethods;