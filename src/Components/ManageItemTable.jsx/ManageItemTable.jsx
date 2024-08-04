import { Form, Input, Modal, Select, Table } from "antd";
import userImage from '../../assets/images/user22.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { TbCopyCheck } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
const ManageItemTable = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
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
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={userImage} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
                    {text}
                </div>
            ),
        },
        {
            title: 'Sub Category',
            dataIndex: 'SubCategory',
            key: 'SubCategory',
        },
        {
            title: 'Eligible Swap Member',
            dataIndex: 'eligibleSwapMember',
            key: 'eligibleSwapMember',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    {/* Replace the action content with what you need, for example, icons */}
                    <a href="#delete" onClick={() => setOpenAddModal(true)} className="bg-[#3475F1] text-white p-1 rounded-md"><CiEdit size={20} /></a>
                    <a href="#delete" className="bg-[#D9000A] text-white p-1 rounded-md"><RiDeleteBin6Line size={20} /></a>
                </div>
            ),
        },
    ];


    // Columns data
    const data = [
        {
            key: '1',
            sno: '1',
            category: 'dindinrya',
            SubCategory: '24/08/22',
            eligibleSwapMember: 'Gold',
        },
        {
            key: '2',
            sno: '2',
            category: 'dindinrya',
            SubCategory: '24/08/22',
            eligibleSwapMember: 'Gold',
        },
        {
            key: '3',
            sno: '3',
            category: 'dindinrya',
            SubCategory: '24/08/22',
            eligibleSwapMember: 'Gold',
        },

    ];


    const onFinish = (value) => {
        console.log(value);
    }

    const handleCategoryChange = (value) => {
        console.log(value);
    };
    const handleEligibleSwapChange = (value) => {
        console.log(value);
    };


    return (
        <div className="">

            <Table columns={columns} dataSource={data} pagination={{
                pageSize: 5,
                showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                locale: {
                    items_per_page: '',
                    prev_page: 'Previous',
                    next_page: 'Next',
                },
            }} 
            className="custom-pagination" 
            />


            <Modal
                open={openAddModal}
                centered
                footer={false}
                onCancel={() => setOpenAddModal(false)}
            >
                <div>
                    <p className='text-xl text-center py-2 font-semibold'>Add Item</p>
                    <Form className=''
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`Item Name`}
                            label={`Item Name`}
                            rules={[
                                {
                                    message: 'Item Name is required',

                                }
                            ]}
                        >
                            <Input className=' border outline-none' placeholder='' />
                        </Form.Item>
                        <Form.Item
                            name={`Category`}
                            label={`Category`}
                            rules={[
                                {
                                    message: 'Category is required',

                                }
                            ]}
                        >
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                }}
                                style={{
                                    // width: ,
                                }}
                                onChange={handleCategoryChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack (100)',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy (101)',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            name={`Eligible Swap Level`}
                            label={`Eligible swap level`}
                            rules={[
                                {
                                    message: 'Eligible swap level is required',

                                }
                            ]}
                        >
                            <Select
                                labelInValue
                                defaultValue={{
                                    value: 'lucy',
                                    label: 'Lucy (101)',
                                }}
                                style={{
                                    // width: ,
                                }}
                                onChange={handleEligibleSwapChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack (100)',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy (101)',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <div className='flex items-center gap-2'>
                            <button className='flex items-center gap-1 py-2 px-4 bg-[#3475F1]  text-white font-semibold rounded-sm'>
                                <TbCopyCheck /> save
                            </button>
                            <button className='py-2 px-4 flex items-center gap-1 bg-red-600 text-white font-semibold rounded-sm'>
                                <RxCross2 /> Cancel
                            </button>
                        </div>

                    </Form>
                </div>
            </Modal>

        </div>
    )
}

export default ManageItemTable;