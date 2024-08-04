
import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
const Terms = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, seLoading] = useState(false)
    const handleTerms = () => {
        console.log(content)
    }
    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 400,
        },
        buttons: [
            'image', 'fontsize', 'bold', 'italic', 'underline', '|',
            'font', 'brush',
            'align'
        ]
    }
    return (
        <>
            <div className='start-center gap-2 mb-3 relative'>
                <div className='absolute top-6 left-2 flex items-center'>
                    <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1  '><IoArrowBackSharp /></Link> <p>About Us</p>
                </div>
            </div>

            <div className="custom-jodit-editor">
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}
                    onChange={newContent => { }}
                />
            </div>
            {/* <div className='text-center mt-3'>
                <button disabled={isLoading} onClick={handleTerms} className='px-8 py-2 rounded-2xl  bg-[#3475F1] text-[var(--color-7)]' >Update</button>
            </div> */}
        </>
    )
}

export default Terms
