/*

What is JSX?

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

*/


import React from 'react'

import './mycss.css'; // import css

function Jsx() {

    var myelement1 = <h1>Hi i am  html </h1>;

    const myelement2 = <h1>React is {5 + 5} times better with JSX</h1>;


    const myelement3 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );

    const mystyle = { color: "pink", backgroundColor: "red" }


    return (
        <div>
            <h1> Jsx </h1>
            {myelement1}
            <hr />
            {myelement2}
            <hr />
            {myelement3}

            <hr />

            <h1 style={{ color: "red" }}>Hi i am css 1</h1>
            <hr />

            <h1 style={mystyle}>Hi i am css 2</h1>
            <hr />

            <h1 className='mybox'>Hi i am external css</h1>

            <h1 class='mybox'>Hi i am external css</h1>


            <hr />

            <div>
                <h1 className="mybox2">Hi i am external css 2</h1>
                <h2 style={{ textTransform: 'uppercase' }}>Hi i am inline 2</h2>
            </div>

            <hr />

            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt="Card image" style={{ width: '100%' }} />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Jsx