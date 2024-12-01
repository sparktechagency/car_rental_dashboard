import {  Form, Input, Modal,Spin,Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useCreateDestinationMutation } from "../../redux/Api/destinationApi";
import { toast } from "sonner";
// eslint-disable-next-line react/prop-types
const MediaSettingModal = ({ openAddModal, setOpenAddModal  }) => {
    const [fileList, setFileList] = useState([]);
    const [addDestination , {isLoading} ] = useCreateDestinationMutation()

    const onFinish = (value) => {
      console.log(fileList);
      const formData = new FormData();
      formData.append('name' , value?.name)
      formData.append("destination_image",fileList[0].originFileObj)
      addDestination(formData).unwrap()
      .then((payload) => {
        toast.success(payload?.message)
        setOpenAddModal(false)
      })
      .catch((error) => toast.error(error?.data?.message));
    }



    

    // handle upload image 
    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleRemove = (file) => {
        setFileList(fileList.filter((item) => item.uid !== file.uid));
    };


    return (
        <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
        >
            <div>
                <p className='text-xl text-center py-2 font-lora'>{"Add Destination"}</p>
                <Form className=''
                    layout='vertical'
                    onFinish={onFinish}
                >


                    <Form.Item name={`name`}
                        label={`Name`}
                        rules={[
                            {
                                message: 'Destination name is required',

                            }
                        ]}>
                        <Input />

                    </Form.Item>

                   
                    

                    <Form.Item
                        name="image"
                        label="Image"
                    >
                        <Upload
                            listType="picture-card"
                            onChange={handleUploadChange}
                            onRemove={handleRemove}
                            beforeUpload={() => false}
                            multiple={false}
                            maxCount={1}
                        >
                            <PlusOutlined />
                            <div  >Add Image</div>
                        </Upload>
                    </Form.Item>

                    <div className='flex justify-center items-center gap-2'>
                        <button disabled={isLoading} className='flex items-center gap-1 py-2  bg-black  text-white font-semibold rounded-sm px-8'>
                            {isLoading  ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24, color: '#ffffff' }} spin />} />  : <>save</>}
                        </button>
                    
                    </div>

                </Form>
            </div>
        </Modal>
    );
};

export default MediaSettingModal;