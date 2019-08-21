import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getData } from '../actions';
import Launches from './Launches';

const LaunchList = props => {
    return (
        <div className='launchlist-container'>
            <h1>Welcome to SpaceX Launches!</h1>
            <button className='launch-data-btn'
                onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type='Oval'
                        color='#00BFFF'
                        height="20"
                        width='20' />
                ) : (
                        'See Launches'
                    )}
            </button>
            {props.data && props.data.map(data => <Launches key={data.name} launch={data} />)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        data: state.data
    };
}

export default connect(mapStateToProps, { getData })(LaunchList);