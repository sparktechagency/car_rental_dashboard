import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import MediaSettingModal from "../../Components/MediaSettingModal/MediaSettingModal";
import MediaSettingVideoTable from "../../Components/MediaSettingVideoTable/MediaSettingVideoTable";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";

const MediaSettings = () => {
    const [search, setSearch] = useState('')
    const [openAddModal, setOpenAddModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

   
    return (
        <div className='rounded-md bg-white pb-5'>
            <div className='  my-2 pt-5'>

                <div className='flex justify-between items-center'>
                    <div className='start-center gap-2 mb-3 p-5'>

                        <Link to={-1} className='flex items-center gap-2'> <GoArrowLeft />Destination</Link>
                    </div>

                    <div className="flex items-center  gap-2" >
                        <Input className="h-10 min-w-[200px]" onChange={(e)=> setSearch(e.target.value)} prefix={<CiSearch className='text-2xl' />} placeholder="Search here..."/>
                        <button onClick={() => setOpenAddModal(true)} className='bg-black px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap mr-2'>
                            <FaPlus />
                            Add Destination
                        </button>
                    </div>

                </div>
            </div>


            <MediaSettingVideoTable search={search}  />
            {/* Media setting Modal */}
            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} modalTitle={modalTitle} />
        </div>
    );
};

export default MediaSettings;