import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import MediaSettingModal from "../../Components/MediaSettingModal/MediaSettingModal";

const MediaSettings = () => {
    const [ads, setAds] = useState(true)
    const [openAddModal, setOpenAddModal] = useState(false)
    // const [openCategoryModal, setOpenCategoryModal] = useState(false)


    return (
        <div className='rounded-md'>
            <div className='  my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>

                    <p className='flex items-center gap-2'> <GoArrowLeft />Media Settings</p>
                </div>
                <div className='flex justify-between items-center'>
                    {/* <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" /> */}
                    <div className='flex items-center gap-5'>
                        <button onClick={() => setAds(true)} className={` ${ads? 'bg-[#3475F1] text-white' : 'border border-[#3475F1] text-[#3475F1]'} px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Ads
                        </button>
                        <button onClick={() => setAds(false)} className={` ${ads? 'border border-[#3475F1] text-[#3475F1]' : 'bg-[#3475F1] text-white'}  px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Video
                        </button>
                    </div>

                    {
                        ads ? <button onClick={() => setOpenAddModal(true)} className='bg-[#3475F1] px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                            <FaPlus />
                            New Video
                        </button> : <button onClick={() => setOpenAddModal(true)} className='bg-[#3475F1] px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                            <FaPlus />
                            New Ads
                        </button>
                    }
                </div>
            </div>

            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />
        </div>
    );
};

export default MediaSettings;