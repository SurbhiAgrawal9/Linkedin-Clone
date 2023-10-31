import React from 'react'

import '../css/Job.css'
import RightSidebar from './RightSidebar'
import LeftSideBar from './LeftSideBar'
import Header from '../Header'

const jobsInfo = [
    {
        h3: "React Js Deveoper",
        company: "FindErnest",
        locate: "Hyderabad, Telangana",
        date: "2 weeks age"

    },
    {
        h3: "Front end Deveoper",
        company: "Tata Consultancy Services",
        locate: "Pune, Maharashtra",
        date: "Actively recruiting"

    },
    {
        h3: "Java Developer",
        company: "Tesla",
        locate: "Hyderabad, Telangana",
        date: "2 weeks age"

    }
    ,
    {
        h3: "Python Deveoper",
        company: "IBM",
        locate: "Chennai, TamilNadu",
        date: "2 weeks age"

    }
]

function Job() {
    let names = localStorage.getItem('name');
    const handleClick = () => {
        alert("Applied to This Job")
    }

    return (
        <div>
            <Header />
            <div>
            </div>
            <div className='jobsMain'>
                <LeftSideBar />
                <div className='jobsMiddle'>
                    <h3 className='h3re'>Recommended For You</h3>
                    <p className='basedon'>Based on your Profile and your search</p>
                    {
                        jobsInfo.map((data) => (
                            <div className='jobInfoinDiv'>
                                <h3>{data.h3}</h3>
                                <p className='companyJobs'>{data.company}</p>
                                <p className='companyLocate'>{data.locate}</p>
                                <p className='companydata'>{data.date}</p>
                                <button onClick={handleClick}>Apply To this Job</button>
                                <hr></hr>
                            </div>
                        ))
                    }

                </div>
                <RightSidebar />
            </div>
        </div>
    )
}

export default Job