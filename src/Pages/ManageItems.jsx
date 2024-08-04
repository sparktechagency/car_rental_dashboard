import { Col, Form, Input, Modal, Row, } from 'antd';
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { Select } from 'antd'
import { TbCopyCheck } from 'react-icons/tb';
import { RxCross2 } from 'react-icons/rx';
import ManageItemTable from '../Components/ManageItemTable.jsx/ManageItemTable';
import ManageCategoryTable from '../Components/ManageCategoryTable/ManageCategoryTable';
import CategoryModal from '../Components/CategoryModal/CategoryModal';
const { Option } = Select;
const ManageItems = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const [category, setCategory] = useState(false)
    const [openCategoryModal, setOpenCategoryModal] = useState(false)

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
        <div className='shadow-md rounded-md px-2'>
            <div className='  my-2 pt-5'>
                <div className='start-center gap-2 mb-3 '>

                    <p className='flex items-center gap-2'> <GoArrowLeft />Manage Items</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                        <button onClick={() => setCategory(true)} className={` ${category ? 'bg-[#3475F1] text-white' : 'border border-[#3475F1] text-[#3475F1]'} px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Category
                        </button>
                        <button onClick={() => setCategory(false)} className={` ${category ? 'border border-[#3475F1] text-[#3475F1]' : 'bg-[#3475F1] text-white'}  px-4 rounded-sm start-center gap-1 py-2  flex justify-center items-center whitespace-nowrap`}>

                            Items
                        </button>
                    </div>

                    {
                        category ? <button onClick={() => setOpenCategoryModal(true)} className='bg-[#3475F1] px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                            <FaPlus />
                            Add category
                        </button> : <button onClick={() => setOpenAddModal(true)} className='bg-[#3475F1] px-4 rounded-sm start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                            <FaPlus />
                            Add Item
                        </button>
                    }
                </div>
            </div>


            {/* Category section */}

            {
                !category && <Form layout="horizontal">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Category" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                                <Select defaultValue="All">
                                    <Option value="all">All</Option>
                                    <Option value="category1">Category 1</Option>
                                    <Option value="category2">Category 2</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Sub Category" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} className='pb-0' >
                                <Select defaultValue="All">
                                    <Option value="all">All</Option>
                                    <Option value="subcategory1">Sub Category 1</Option>
                                    <Option value="subcategory2">Sub Category 2</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Eligible Swap Member" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} >
                                <Select defaultValue="All">
                                    <Option value="all">All</Option>
                                    <Option value="member1">Member 1</Option>
                                    <Option value="member2">Member 2</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            }



            {
                category ? <ManageCategoryTable /> : <ManageItemTable />
            }

            <CategoryModal setOpenAddModal={setOpenCategoryModal} openAddModal={openCategoryModal} />

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

export default ManageItems;
