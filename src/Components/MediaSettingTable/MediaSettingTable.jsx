import {  Table } from "antd";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import img from '../../assets/images/ads.png'
import { MdCheck, MdDragHandle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import MediaSettingModal from "../MediaSettingModal/MediaSettingModal";
import { imageUrl } from "../../redux/Api/baseApi";
const MediaSettingTable = ({getAllAds}) => {
    
    const [openAddModal, setOpenAddModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

    const handleEditAds =()=>{
        setOpenAddModal(true)
        setModalTitle('Edit')
    }


    const columns = [
        {
            title: 'Change Order',
            dataIndex: 'changeOrder',
            key: 'changeOrder',
        },
        {
            title: 'Ads',
            dataIndex: 'imageUrl',
            key: 'ads',
            render: (text, record) => <img src={record.imageUrl} alt={record.name} style={{ width: 50, height: 50 }} />,
        },
        {
            title: 'View Order',
            dataIndex: 'viewOrder',
            key: 'viewOrder',

        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',

        },
        {
            title: 'Private',
            dataIndex: 'private',
            key: 'private',

        },
        {
            title: 'URL',
            dataIndex: 'url',
            key: 'url',

        },
        
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            // eslint-disable-next-line no-unused-vars
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    {/* Replace the action content with what you need, for example, icons */}
                    <a href="#delete" onClick={() => handleEditAds()} className="bg-[#3475F1] text-white p-1 rounded-md"><CiEdit size={20} /></a>
                    <a href="#delete" className="bg-[#D9000A] text-white p-1 rounded-md"><RiDeleteBin6Line size={20} /></a>
                </div>
            ),
        },
    ];

    
    const formattedData = getAllAds?.data?.map((add , i)=>{
        return   {
            key: i+1,
            changeOrder: <MdDragHandle size={20} />,
            imageUrl: `${imageUrl}${add?.image}`,
            viewOrder: add?.order,
            active : add?.isActive ? <MdCheck className="text-green-500" /> :  <IoMdClose className="text-red-600" />,
            private : add?.isPrivate ? <MdCheck className="text-green-500" /> :  <IoMdClose className="text-red-600" />,
            url : add?.url
        }
    })
  


    




    return (
        <div className="p-2 ">

            <Table columns={columns} dataSource={formattedData} 
            pagination={false}
            // pagination={{
            //     pageSize: 5,
            //     showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
            //     locale: {
            //         items_per_page: '',
            //         prev_page: 'Previous',
            //         next_page: 'Next',
            //     },
            // }} 
            />
            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} modalTitle={modalTitle} />

            

        </div>
    );
};

export default MediaSettingTable;