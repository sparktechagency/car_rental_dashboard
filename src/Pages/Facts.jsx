import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Facts = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, setLoading] = useState(false)
    const handleTerms = () => {
        console.log(content)
    }
    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 400,
        }
    }
    return (
        <div>
            <div className='start-center gap-2 mb-3'>
                <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1 '><IoArrowBackSharp /></Link> <p>Facts</p>
            </div>
            <div>
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
                <button disabled={isLoading} onClick={handleTerms} className='px-8 py-2 rounded-sm bg-[#3475F1]  text-[var(--color-7)]' >Save</button>
            </div>
        </div>
    );
};

export default Facts;