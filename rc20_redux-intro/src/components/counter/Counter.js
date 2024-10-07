import React from 'react'
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from '../../redux/actions/counterActions';


const Counter = () => {

const { text, counter } = useSelector((state) => state.counterReducer);

const dispatchhh=useDispatch()



  return (
    <div className="app">
      <h2 className="counter-header"> Counter With Redux</h2>

      <h1>{counter} </h1>
      {/* counter */}

      <h2>{text} </h2>
      {/* text */}

      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatchhh(increase())}
        >
          increase
        </button>

        {/* increase func */}

        <button
          className="counter-button "
          onClick={() => dispatchhh(reset())}
        >
          RESET
        </button>

        {/* reset func */}
        <button
          className="counter-button negative"
          onClick={() => dispatchhh(decrease())}
        >
          decrease
        </button>

        {/* decrease func */}
      </div>
    </div>
  );
}

export default Counter