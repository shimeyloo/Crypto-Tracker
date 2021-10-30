import React from 'react';

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