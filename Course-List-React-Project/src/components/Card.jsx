import React, { useContext } from 'react'
import '../scss/card.scss'
import DataContext from '../context/dataContext'

const Card = () => {
  const{course,deleteCourse}=useContext(DataContext);
  return (
    <div className='card-container'>
        {
            course.map((element)=>
            !element.isDeleted&&
            <div className='card'>
            <button onClick={()=>deleteCourse(element.id)}></button>
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