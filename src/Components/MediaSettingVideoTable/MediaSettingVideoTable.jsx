import { Popconfirm, Table } from "antd";
import { useState } from "react";
import MediaSettingModal from "../MediaSettingModal/MediaSettingModal";
import { AiOutlineDelete } from "react-icons/ai";
import { useGetAllDestinationQuery } from "../../redux/Api/destinationApi";
import { imageUrl } from "../../redux/Api/baseApi";


const MediaSettingVideoTable = () => {
    const { data: getAllDestination } = useGetAllDestinationQuery()

    const [openAddModal, setOpenAddModal] = useState(false)


    

    const columns = [
        {
            title: 'Sl No',
            dataIndex: 'slNo',
            key: 'slNo',
        },

        {
            title: 'Destination Image',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (
                <img src={record?.image} className="w-20" alt="" />
            )
        },
        {
            title: 'Destination',
            dataIndex: 'destination',
            key: 'destination',

        },


        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            // eslint-disable-next-line no-unused-vars
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    <Popconfirm
                        title="Are you sure to delete this Destination?"
                    >

                        <a href="#delete" className=" p-1 rounded-md hover:text-red-600"><AiOutlineDelete size={25} /></a>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    // Columns data
    const formattedTableData = getAllDestination?.data?.destinations?.map((dest, i) => {
        return {
            key: dest?.id || i,
            slNo: i+1,
            image: `${imageUrl}${dest?.destination_image}`,
            destination: dest?.name
        }
    })
   







    return (
        <div className="p-2 ">

            <Table columns={columns} dataSource={formattedTableData}
                pagination={false}

            />
            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />



        </div>
    );
};

export default MediaSettingVideoTable;