import React from 'react';
import { AddNextButton } from '../actions';
import { connect } from 'react-redux';

const NextButton = ({onClick = () => {}}) => {
  return(
    <div>
      <button onClick={onClick}>
        Next
      </button>
    </div>
  )
}

const mapToProps = () => ({})
const mapToDispatch = ( dispatch: any ) => ({
  onClick: () => dispatch(AddNextButton()),
})

export default connect(
  mapToProps,
  mapToDispatch
)(NextButton);