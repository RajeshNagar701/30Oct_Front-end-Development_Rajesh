import React from 'react'

// load link in index.html

function Basic_boostrap() {
    return (
        <div>
            <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src="https://www.w3schools.com/bootstrap5/img_avatar5.png" alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text.</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>

    )
}

export default Basic_boostrap