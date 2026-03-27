import React, { forwardRef } from 'react';

const User = forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref} type='text'></input>
        </div>
    );
})

export default User;