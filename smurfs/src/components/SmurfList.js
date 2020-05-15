import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/smurfAction';

// ({
//     isFetching,
//     smurfs,
//     name,
//     age,
//     height,
//     id}) => {
//         useEffect(() => {
//             fetchSmurfs();
//         }, [fetchSmurfs])

const SmurfList = ({
    isFetching,
    fetchSmurfs,
    name,
    age,
    height,
}) => {
    useEffect(() => {
        fetchSmurfs();
    }, [fetchSmurfs]);

    
    return (
        <main>
        {isFetching && <h2>Fetching Smurfs...</h2>}
        {!isFetching && (
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Height: {height}</p>
            </div>
        )}
        </main>
    )
 }

const mapStateToProps = state => {
    console.log({ state });
    return {
        isFetching: state.isFetching,
        name: state.name,
        age: state.age,
        height: state.height
    };
};


export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList)