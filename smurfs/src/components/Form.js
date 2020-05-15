import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf} from "../actions/smurfAction";


const Form = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: 0,
    height: '',
  });

  const changeHandler = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value});
  };

  const submitForm = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add a Smurf:</h2>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input
            onChange={changeHandler}
            value={newSmurf.name}
            name="name"
            id=""
            type="text"
          />
        </label>
        <label>
          Age:
          <input
            onChange={changeHandler}
            value={newSmurf.age}
            name="age"
            id=""
            type="number"
          />
        </label>
        <label>
          Height:
          <input
            onChange={changeHandler}
            value={newSmurf.height}
            name="height"
            id=""
            type="text"
          />
        </label>
        <button type="submit" onClick={() => props.postSmurf(newSmurf)}>
          Add
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(Form);