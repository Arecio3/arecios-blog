import React from 'react'
import Example from '../../images/natureBlogPic.jpeg'
import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg' src={Example} alt="" />
           <form className='writeBlogForm'>
               <div className="writeFormGroup">
                   {/* Label replaces ugly choose file button */}
                   <label htmlFor="fileInput">
                   <i className="addImgIcon far fa-file-image"></i>
                   </label>
                   <input type="file" id='fileInput' style={{display: 'none'}}/>
                   <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
               </div>
               <div className="writeFormGroup">
                   <textarea placeholder='Speak your mind...' type='text' className='writeInput writeText'></textarea>
               </div>
               <button className="writeSubmit">Publish</button>
           </form>
        </div>
    )
}
