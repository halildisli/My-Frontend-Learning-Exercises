import React, { useContext } from 'react'
import '../scss/form.scss'
import DataContext from '../context/dataContext'

const Form = () => {
    const{
        handleSubmit,
        photoUrl,setPhotoUrl,
        courseName,setCourseName,
        courseSummaryInfo,setCourseSummary,
        courseInfoUrl,setCourseInfoUrl,
        categoryF,setCategoryF
    }=useContext(DataContext);
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='photo url' value={photoUrl} onChange={(e)=>{setPhotoUrl(e.target.value)}}/>
        <select value={categoryF} onChange={(e)=>setCategoryF(e.target.value)}>
            <option value={1}>Frontend</option>
            <option value={2}>Backend</option>
            <option value={3}>Ms-office</option>
        </select>
        <input type="text" placeholder='course name' value={courseName}  onChange={(e)=>{setCourseName(e.target.value)}}/>
        <textarea name="" id="" cols="30" rows="3" value={courseSummaryInfo} placeholder='course summary info' onChange={(e)=>{setCourseSummary(e.target.value)}}></textarea>
        <input type="text" placeholder='course info url' value={courseInfoUrl} onChange={(e)=>{setCourseInfoUrl(e.target.value)}}/>
        <input type="submit" value="Add Course" />
    </form>
  )
}

export default Form