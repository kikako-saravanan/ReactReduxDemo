import React from "react";
import { connect } from "react-redux";
import { buyJuice } from "../redux";

function JuiceContainer(props) {
  console.log("prope:", props);
  return (
    <div>
      <h2>Number of Juice - {props.numOfJuices} </h2>
      <button onClick={props.buyJuice}>Buy Juice</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    //numOfCakes: state.numOfCakes,
    numOfJuices: state.juice.numOfJuices,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    buyJuice: () => dispatch(buyJuice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JuiceContainer);
