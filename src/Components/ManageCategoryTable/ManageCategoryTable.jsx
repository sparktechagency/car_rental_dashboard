import { Popconfirm, Table } from "antd";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import CategoryModal from "../CategoryModal/CategoryModal";
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from "../../redux/Api/dashboardApi";
import { imageUrl } from "../../redux/Api/baseApi";
import { toast } from "sonner";

const ManageCategoryTable = () => {
    const [openAddModal, setOpenAddModal] = useState(false);
    const { data: getAllCategory } = useGetAllCategoryQuery()
    const [deleteCategory, { isLoading }] = useDeleteCategoryMutation()
    const columns = [
        {
            title: 'SL No.',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',

        },
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'image',
            render: (text, record) => <img className="object-contain" src={record.imageUrl} alt={record.name} style={{ width: 60, height: 60 }} />,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    <a href="#edit" onClick={() => setOpenAddModal(true)} className="bg-[#3475F1] text-white p-1 rounded-md"><CiEdit size={20} /></a>
                    <Popconfirm
                        title="Delete the category!"
                        description="Are you sure to delete this category?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleDeleteCategory(record?.key)}
                    >
                        <a href="#delete" className="bg-[#D9000A] text-white p-1 rounded-md"><RiDeleteBin6Line size={20} /></a>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    /** Delete category */
    const handleDeleteCategory = (values) => {
        console.log(values);
        deleteCategory(values).unwrap()
            .then((payload) => toast.success(payload?.message))
            .catch((error) => toast.error(error?.data?.message));

    }

    /** Category data */
    const dataTable = getAllCategory?.data?.map((category, i) => (
        {
            key: category?._id,
            sno: i + 1,
            category: category?.name,
            imageUrl: `${imageUrl}${category?.image}`,

        }
    ))



    return (
        <div className="p-2 ">

            <Table columns={columns} dataSource={dataTable} pagination={{
                pageSize: 10,
                showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                locale: {
                    items_per_page: '',
                    prev_page: 'Previous',
                    next_page: 'Next',
                },
            }}
                className="custom-pagination"

            />
            <CategoryModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />

            {/* <Modal
                open={openAddModal}
                centered
                footer={false}
                onCancel={() => setOpenAddModal(false)}
            >
                <div>
                    <p className='text-xl text-center py-2 font-semibold'>Edit</p>
                    <Form className=''
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`Category Name`}
                            label={`Category Name`}
                            rules={[
                                {
                                    message: 'Category Name is required',

                                }
                            ]}
                        >
                            <Input className=' border outline-none' placeholder='' />
                        </Form.Item>
                        <Form.Item
                            name="image"
                            label="Image"
                        >
                            <Upload.Dragger {...uploadProps}>
                               
                                <p className="ant-upload-text">Drop image file here to upload (or click)</p>
                                <p className="ant-upload-hint">Suggested dimension [344x184]</p>
                                <p className="ant-upload-drag-icon">
                                    <FileImageOutlined />
                                </p>
                            </Upload.Dragger>
                        </Form.Item>


                        <div className='flex justify-center items-center gap-2'>
                            <button className='flex items-center gap-1 py-2 px-4 bg-[#3475F1]  text-white font-semibold rounded-sm'>
                                <TbCopyCheck /> save
                            </button>
                            <button className='py-2 px-4 flex items-center gap-1 bg-red-600 text-white font-semibold rounded-sm'>
                                <RxCross2 /> Cancel
                            </button>
                        </div>

                    </Form>
                </div>
            </Modal> */}

        </div>
    );
};

export default ManageCategoryTable;