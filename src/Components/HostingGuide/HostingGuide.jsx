import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useCreateHostingGuideMutation, useGetHostingGuideQuery } from '../../redux/Api/dashboardApi';
import { toast } from 'sonner';

const HostingGuide = () => {
    const { data: hostingGuide } = useGetHostingGuideQuery()
    const [createHostingGuide] = useCreateHostingGuideMutation()
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, seLoading] = useState(false)
    const handleTerms = () => {
        console.log(content)
        const data = {
            description: content
        }
        createHostingGuide(data).unwrap()
            .then((payload) => toast.success('Hosting Guide update successfully!'))
            .catch((error) => toast.error(error?.data?.message));
    }
    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 600,
        }
    }
    useEffect(() => {
        setContent(hostingGuide?.data?.description)
    }, [hostingGuide?.data])
    return (
        <>
            <div className='start-center gap-2 mb-3 relative'>
                <div className='absolute top-6 left-2 flex items-center'>
                    <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1  '><IoArrowBackSharp /></Link> <p>Hosting Guide</p>
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
                <button onClick={handleTerms} className='px-8 py-2 rounded-sm  bg-black text-white' >Save  </button>
            </div>
        </>
    )
}

export default HostingGuide