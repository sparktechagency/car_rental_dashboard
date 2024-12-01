import { Pagination, Popconfirm, Table } from "antd";
import { useState } from "react";
import MediaSettingModal from "../MediaSettingModal/MediaSettingModal";
import { AiOutlineDelete } from "react-icons/ai";
import { useDeleteDestinationMutation, useGetAllDestinationQuery } from "../../redux/Api/destinationApi";
import { imageUrl } from "../../redux/Api/baseApi";
import { toast } from "sonner";


const MediaSettingVideoTable = ({search}) => {
    const [page, setPage] = useState(1)
    const { data: getAllDestination } = useGetAllDestinationQuery({ page: page , search : search  });
    const [deleteDestination] = useDeleteDestinationMutation()

    const [openAddModal, setOpenAddModal] = useState(false)

    const handleDeleteDestination = (id) => {
        deleteDestination(id).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));
    }

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
                        onConfirm={() => handleDeleteDestination(record?.key)}
                    >
                        <a href="#delete" className=" p-1 rounded-md hover:text-red-600"  ><AiOutlineDelete size={25} /></a>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    // Columns data
    const formattedTableData = getAllDestination?.data?.destinations?.map((dest, i) => {
        return {
            key: dest?._id,
            slNo: i + 1,
            image: `${imageUrl}${dest?.destination_image}`,
            destination: dest?.name
        }
    })







    return (
        <div className="p-2 ">

            <Table columns={columns} dataSource={formattedTableData}
                pagination={false}

            />
            <div className='flex items-center justify-center mt-5'>
                <Pagination
                    total={getAllDestination?.data?.meta?.total}
                    pageSize={getAllDestination?.data?.meta?.limit}
                    onChange={(page) => setPage(page)}
                />
            </div>
            <MediaSettingModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />



        </div>
    );
};

export default MediaSettingVideoTable;