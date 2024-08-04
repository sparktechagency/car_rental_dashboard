import { FileImageOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Modal, Select, Upload } from "antd";
import { RxCross2 } from "react-icons/rx";
import { TbCopyCheck } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const MediaSettingModal = ({ openAddModal, setOpenAddModal }) => {
    const uploadProps = {
        beforeUpload: () => {
            // Handle file upload
            return false; // Prevent automatic upload
        },
    };

    const onFinish = (value) => {
        console.log(value);
    }



    //   Checkbox value
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const handleSelectItemChange = (value) =>{
        console.log(value);
    }

    return (
        <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
        >
            <div>
                <p className='text-xl text-center py-2 font-semibold'>Add New Video</p>
                <Form className=''
                    layout='vertical'
                    onFinish={onFinish}
                >


                    <Form.Item name={`View Order`}
                        label={`View Order`}
                        rules={[
                            {
                                message: 'view Order is required',

                            }
                        ]}>

                        <Select
                            defaultValue="lucy"
                            // style={{
                            //     width: 
                            // }}
                            onChange={handleSelectItemChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                            ]}
                        />

                    </Form.Item>
                    <Checkbox className="my-2" onChange={onChange} checked >Active</Checkbox>

                    <Form.Item
                        name={`Url`}
                        label={`url`}
                        rules={[
                            {
                                message: 'Url is required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='' />
                    </Form.Item>
                    <Checkbox onChange={onChange}>Private</Checkbox>
                    <p  className="pb-5">By making a video private, it will be visible only the selected members. </p>

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
        </Modal>
    );
};

export default MediaSettingModal;