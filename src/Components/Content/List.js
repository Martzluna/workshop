import React from 'react'

function List({ data }) {
    console.log(data);
    return (
        <div>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">All sessions</a>
                    </li>
                </ul>
            </div>
            <div>
                {data.map((item, key) => (
                    <div className="card mb-4" key={key}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.speakers.join(', ')}</h6>
                            <p className="card-text">
                                <strong>Industry Segment:</strong> {item.industry_segment}
                                <br/>
                                <strong>Primary Topic:</strong> {item.primary_topic}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List