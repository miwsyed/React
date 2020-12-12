import React, { useState } from 'react';
import Course from './Course'

const Allcourse = () => {

    const [courses,setCourse] = useState([
      {title: 'Java Course',description: 'This is a demo course'},
      {title: 'Python Course',description: 'This is a demo course'},
      {title: 'C++ Course',description: 'This is a demo course for competetive course'}  
    ])

    return(

        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>
            
            {
                courses.length>0 ? courses.map((item) => <Course course ={item} />) : "No Courses" 
            
            }
            
        </div>

    );
}

export default Allcourse;