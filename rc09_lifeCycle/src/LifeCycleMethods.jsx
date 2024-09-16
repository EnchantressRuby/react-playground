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