import React, { useState } from 'react'
import '../scss/form.scss'
const Form = ({newCourse}) => {
    const[photoUrl,setPhotoUrl]=useState("");
    const[courseName,setCourseName]=useState("");
    const[courseSummaryInfo,setCourseSummary]=useState("");
    const[courseInfoUrl,setCourseInfoUrl]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        newCourse(
            {
                photoUrl:photoUrl,
                courseName:courseName,
                courseSummaryInfo:courseSummaryInfo,
                courseInfoUrl:courseInfoUrl
            }
        )
        setPhotoUrl("");
        setCourseName("");
        setCourseSummary("");
        setCourseInfoUrl("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='photo url' value={photoUrl} onChange={(e)=>{setPhotoUrl(e.target.value)}}/>
        <input type="text" placeholder='course name' value={courseName}  onChange={(e)=>{setCourseName(e.target.value)}}/>
        <textarea name="" id="" cols="30" rows="3" value={courseSummaryInfo} placeholder='course summary info' onChange={(e)=>{setCourseSummary(e.target.value)}}></textarea>
        <input type="text" placeholder='course info url' value={courseInfoUrl} onChange={(e)=>{setCourseInfoUrl(e.target.value)}}/>
        <input type="submit" value="Add Course" />
    </form>
  )
}

export default Form