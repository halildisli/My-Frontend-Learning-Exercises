import { createContext } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';


const DataContext=createContext();


export const DataProvider=({children})=>{

    //App.js'dekiler
    const[course,setCourse]=useState([]);
    const[category,setCategory]=useState([]);
    const[selectedCategory,setSelectedCategory]=useState(0);
    
    const getCourse = async ()=>{
      let url="http://localhost:3006/courses";
      if(selectedCategory){
        url+="?categoryId="+selectedCategory;
      }
      const response = await axios(url);
      const data=response.data;
      setCourse(data);
    }
    const getCategory = async ()=>{
      let url="http://localhost:3006/categories";
      const response= await axios(url);
      const data = response.data;
      setCategory(data);
    }
  
    const newCourse= async (newC)=>{
      let url="http://localhost:3006/courses";
      const response=await axios.post(url,newC);
      console.log(response);
      getCourse();
    }
    const deleteCourse=async (id)=>{
      let url = `http://localhost:3006/courses/${id}`;
      const sendData = {isDeleted:"true"}
      const response = await axios.patch(url,sendData)
      getCourse();
    }
  
    useEffect(()=>{
      getCourse();
      getCategory();
    },[selectedCategory])

    //Form.jsx'tekiler
    const[categoryF,setCategoryF]=useState("");
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
                courseInfoUrl:courseInfoUrl,
                categoryId:categoryF
            }
        )
        setPhotoUrl("");
        setCategoryF("");
        setCourseName("");
        setCourseSummary("");
        setCourseInfoUrl("");
    }
    return  <DataContext.Provider 
            value={
                    {
                        course,
                        deleteCourse,
                        category,setCategory,
                        categoryF,setCategoryF,
                        setSelectedCategory,
                        handleSubmit,
                        photoUrl,setPhotoUrl,
                        courseName,setCourseName,
                        courseSummaryInfo,setCourseSummary,
                        courseInfoUrl,setCourseInfoUrl
                    }
                }>
            
                {children}
            </DataContext.Provider>
}

export default DataContext;