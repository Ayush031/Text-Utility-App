import React from 'react'

export default function Alert(pass) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        {pass.alert && <div className={`alert alert-${pass.alert.type} alert-dismissible fade show`} role="alert">
            {capitalize(pass.alert.type)}, {pass.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            {/* the above cross button removed because closing delay added to alert */}
        </div>}
        </div>
    )
}
