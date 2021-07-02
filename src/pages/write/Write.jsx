import React from 'react'
import './write.css'

export default function Write() {
    return (
        <div className='write'>
           <form className='writeBlogForm'>
               <div className="writeFormGroup">
                   {/* Label replaces ugly choose file button */}
                   <label htmlFor="fileInput">
                   <i class="far fa-file-image"></i>
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
