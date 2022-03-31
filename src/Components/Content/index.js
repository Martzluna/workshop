import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterLeft from './FilterLeft'
import List from './List'

const api_url = "https://6243a5813da3ac772b04e2cd.mockapi.io/sessions"
function Content() {
    const [categories, setCategories] = useState({
        industry_segment: [],
        primary_topic: [],
        session_type: [],
    })
    useEffect(() => getData(), [])
    const getData = async () => {
        const { data } = await axios.get(api_url)
        const valuesIndustrySegment = data.map(item => item.industry_segment);
        const valuesPrimaryTopic = data.map(item => item.primary_topic);
        const valuesSessionType = data.map(item => item.session_type);
        setCategories({
            industry_segment: valuesIndustrySegment,
            primary_topic: valuesPrimaryTopic,
            session_type: valuesSessionType
        })
    }
    return (
        <div className='container contentRoot'>
            <FilterLeft categories={categories}/>
            <List />
        </div>
    )
}

export default Content