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
    smurfs
}) => {
    useEffect(() => {
        fetchSmurfs();
    }, [fetchSmurfs]);

    
    return (
        <main>
        {isFetching && <h2>Fetching Smurfs...</h2>}
        {!isFetching && (
            <div>
                {smurfs.map(smurf => (
                    <div key={Math.random()}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
            ))}
            </div>
        )}
        </main>
    )
 }

const mapStateToProps = state => {
    console.log({ state });
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs
    };
};


export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList)