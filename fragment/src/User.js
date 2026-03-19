//Method 1 to use Fragment
// function User() {
//     return (
//         <>
//             <h2>Ram</h2>
//             <h2>Shyam</h2>
//             <h2>Raju</h2>
//         </>
//     );
// }
// export default User;

//Method 2 to use Fragment
// import { Fragment } from "react";
// function User() {
//     return (
//         <Fragment>
//             <h2>Ram</h2>
//             <h2>Shyam</h2>
//             <h2>Raju</h2>
//         </Fragment>
//     );
// }
// export default User;

//Method 3 to use Fragment
import React from "react";
function User() {
    return (
        <React.Fragment>
            <h2>Ram</h2>
            <h2>Shyam</h2>
            <h2>Raju</h2>
        </React.Fragment>
    );
}

export default User;