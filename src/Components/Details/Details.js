import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const api_url = "https://6243a5813da3ac772b04e2cd.mockapi.io/sessions"

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function Details() {
    const forceUpdate = useForceUpdate();
    const { id } = useParams();
    const [data, setData] = useState({})
    const listFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    useEffect(() => getData(), [])
    const getData = async () => {
        const { data } = await axios.get(api_url)
        setData(data.find(item => item.id === id))
    }
    const addNewFavorite = (id) => {
        const listFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        const ifExists = [...listFavorites].indexOf(id) > - 1
        const newArray = ifExists ? listFavorites.filter(item => item !== id) : [...listFavorites, id]
        localStorage.setItem("favorites", JSON.stringify(listFavorites ? newArray : [id]))
        forceUpdate()
    }
    return (
        <div className='container mt-4'>
            <Link className='mb-5 btn btn-outline-primary' to="/">Back to Session Catalog</Link>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title d-flex">
                        <a className='w-100'>{data.title}</a>
                        <a style={{ color: listFavorites.indexOf(data.id) > -1 ? "yellow" : "black" }} onClick={() => addNewFavorite(data.id)}><i className="bi bi-star" /></a>
                    </h5>
                    <p className="card-text">{data.description}</p>
                    <h6 className="card-subtitle mb-2 text-muted">{data.speakers?.join(', ')}</h6>
                    <p className="card-text">
                        <strong>Industry Segment:</strong> {data.industry_segment}
                        <br />
                        <strong>Primary Topic:</strong> {data.primary_topic}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details