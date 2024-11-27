

import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useGetPrivacyPolicyQuery, useUpdatePrivacyPolicyMutation } from '../redux/Api/dashboardApi';
import { toast } from 'sonner';
const PrivacyPolicy = () => {
    const {data : getPrivacyPolicy} = useGetPrivacyPolicyQuery()
    const [updatePrivacyPolicy] = useUpdatePrivacyPolicyMutation()
    const editor = useRef(null);
    const [content, setContent] = useState('');
 
    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 400,
        }
    }

    const handleTerms = () => {
        // console.log(content)
        const data = {
            description: content
        }
        updatePrivacyPolicy(data).unwrap()
            .then((payload) => toast.success("Update Privacy Policy successfully!"))
            .catch((error) => toast.error(error?.data?.message));
    }
    useEffect(()=>{
        setContent(getPrivacyPolicy?.data?.description)
    },[getPrivacyPolicy])
    return (
        <>
            <>
                <div className='start-center gap-2 mb-3 relative'>
                    <div className='absolute top-6 left-2 flex items-center'>
                        <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1  '><IoArrowBackSharp /></Link> <p>Privacy Policy</p>
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
                <div className='text-center mt-3'>
                    <button onClick={handleTerms} className='px-8 py-2 rounded-sm  bg-black text-white' >Save </button>
                </div>
            </>
        </>
    )
}

export default PrivacyPolicy
