import { FileImageOutlined } from "@ant-design/icons";
import { Form, Input, Modal, Upload } from "antd";
import { RxCross2 } from "react-icons/rx";
import { TbCopyCheck } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const CategoryModal = ({openAddModal, setOpenAddModal}) => {

    const uploadProps = {
        beforeUpload: file => {
          // Handle file upload
          return false; // Prevent automatic upload
        },
      };

      const onFinish = (value) => {

      }
    return (
        <Modal
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
        </Modal>
    );
};

export default CategoryModal;