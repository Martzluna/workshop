import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterLeft from './FilterLeft'
import List from './List'

const api_url = "https://6243a5813da3ac772b04e2cd.mockapi.io/sessions"

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function Content() {
    const forceUpdate = useForceUpdate();
    const [categories, setCategories] = useState({
        industry_segment: {
            label: "",
            values: [],
            checked: false
        },
        primary_topic: {
            label: "",
            values: [],
            checked: false
        },
        session_type: {
            label: "",
            values: [],
            checked: false
        },
        audience_type: {
            label: "",
            values: [],
            checked: false
        },
        lenguage: {
            label: "",
            values: [],
            checked: false
        },
        audience_level: {
            label: "",
            values: [],
            checked: false
        },
    })
    const [dataList, setDataList] = useState([])
    useEffect(() => getData(), [])
    const getData = async (filtered = false) => {
        const { data } = await axios.get(api_url)
        const valuesIndustrySegment = [...new Set(data.map(item => item.industry_segment))];
        const valuesPrimaryTopic = [...new Set(data.map(item => item.primary_topic))];
        const valuesSessionType = [...new Set(data.map(item => item.session_type))];
        const valuesAudienceType = [...new Set(data.map(item => item.audience_type))];
        const valuesLenguage = [...new Set(data.map(item => item.lenguage))];
        const valuesAudienceLevel = [...new Set(data.map(item => item.audience_type))];

        if (!filtered) {
            setCategories({
                industry_segment: {
                    values: valuesIndustrySegment,
                    label: "Industry Segment"
                },
                primary_topic: {
                    values: valuesPrimaryTopic,
                    label: "Primary Topic"
                },
                session_type: {
                    values: valuesSessionType,
                    label: "Session Type"
                },
                audience_type: {
                    values: valuesAudienceType,
                    label: "Audience Type"
                },
                lenguage: {
                    values: valuesLenguage,
                    label: "Language"
                },
                audience_level: {
                    values: valuesAudienceLevel,
                    label: "Audience Level"
                },
            })
            setDataList(data)
        } else {
            setDataList(data.filter(item => item[filtered.type] === filtered.value))
        }

    }
    const selectFilter = (filter) => {
        setCategories(prev => ({ ...prev, [filter.type]: { ...prev[filter.type], checked: filter.value } }))
        getData(filter)
    }
    const addNewFavorite = (id) => {
        const listFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        const ifExists = [...listFavorites].indexOf(id) > - 1
        const newArray = ifExists ? listFavorites.filter(item => item !== id) : [...listFavorites, id]
        localStorage.setItem("favorites", JSON.stringify(listFavorites ? newArray : [id]))
        forceUpdate()
    }

    const filterSearch = async (e) => {
        const search = e.target.value
        await getData()
        if(search.length) {
            setDataList(dataList.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
        } 
            
    }

    return (
        <div className='container contentRoot'>
            <FilterLeft categories={categories} selectFilter={selectFilter} filterSearch={filterSearch} />
            <List data={dataList} addNewFavorite={addNewFavorite} />
        </div>
    )
}

export default Content