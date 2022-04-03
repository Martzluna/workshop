import moment from 'moment';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function List({ data = [], addNewFavorite }) {
    const listFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    const [groupSelected, setgroupSelected] = useState({})
    const [listData, setListData] = useState(data)
    const groups = data.reduce((groups, game) => {
        const date = game.date.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(game);
        return groups;
    }, {});
    const selectedGroup = (date) => {
        if(date) {
            setListData(groups[date])
        }else{
            setListData(data)
        }
    }
    return (
        <div className='container'>
            <div>
                <ul className="nav nav-tabs navbuttons ">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => selectedGroup()}>Todas [{data.length}]</a>
                    </li>
                    {Object.keys(groups).map((item, key) => (
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => selectedGroup(item)}>{moment(item).format("ll")} [{groups[item].length}]</a>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                {listData.map((item, key) => (
                    <div className="card mb-4" key={key}>
                        <div className="card-body">
                            <h5 className="card-title d-flex">
                                <a className='w-100' href={`/details/${item.id}`}>{item.title}</a>
                                <a style={{ color: listFavorites.indexOf(item.id) > -1 ? "yellow" : "black" }} onClick={() => addNewFavorite(item.id)}><i className="bi bi-star" /></a>
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{item.speakers.join(', ')}</h6>
                            <p className="card-text">
                                <strong>Industry Segment:</strong> {item.industry_segment}
                                <br />
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