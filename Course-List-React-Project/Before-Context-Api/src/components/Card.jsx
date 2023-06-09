import React from 'react'
import '../scss/card.scss'
const Card = ({data}) => {
  return (
    <div className='card-container'>
        {
            data.map((element)=>
            <div className='card'>
            <img src={element.photoUrl} alt="course-image" />
            <h3>{element.courseName}</h3>
            <p>{element.courseSummaryInfo}</p>
            <a href={element.courseInfoUrl} target='_blank'>more info..</a>
            </div>
            )
        }
        
    </div>
  )
}

export default Card