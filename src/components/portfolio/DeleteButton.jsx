import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function DeleteButton(props) {
    return (
        <button 
          onClick={() => {
            props.deleteCoin(props.pos)
          }}
        >
          Delete
        </button>
    );
}

export default DeleteButton; 