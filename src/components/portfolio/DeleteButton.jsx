import React from 'react';

function DeleteButton(props) {
    return (
        <button 
          onClick={() => {
            if (window.confirm('Are you sure you wish to delete this item?')) props.deleteCoin(props.pos)
          }}
        >
          Delete
        </button>
    );
}

export default DeleteButton; 