import { Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCreateFaqMutation, useDeleteFaqMutation, useGetFaqsQuery } from "../redux/Api/dashboardApi";
import { toast } from "sonner";

const Facts = () => {
    const [openModal, setOpenModal] = useState(false)
    const {data : getFaqs} = useGetFaqsQuery()
    const [deleteFaq] = useDeleteFaqMutation()
    const [createFaq] = useCreateFaqMutation()

    const data = getFaqs?.data?.map(faq => {
        return { 
            id : faq?._id,
            question : faq?.question,
            answer : faq?.answer
        }
    })

     // Delete FAQ question and answer
     const handleDeleteFaq = (id)=>{
        deleteFaq(id).unwrap()
        .then(payload =>{
            toast.success(payload?.message);
        })
        .catch(error=>{
            toast.error(error?.data?.message);
        })
    }

    // Add new  Faqs question and answer
    const onFinish =(values)=>{
        createFaq(values).unwrap()
        .then(payload=>{
            toast.success(payload?.message);
        })
        .catch(error=>{
            toast.error(error?.data?.message);
        })
    } 

    return (
        <div className="bg-white p-5 rounded-md">
            <div className=' flex items-center justify-between'>
                <div className="flex items-center">
                    <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1 '><IoArrowBackSharp /></Link> <p>FAQ</p>
                </div>
                <button onClick={() => setOpenModal(true)} className="bg-black  text-white  px-8 py-2 rounded-md flex items-center gap-2"> <IoMdAdd /> Add FAQ</button>
            </div>


            <div>
                {
                    data?.map(faq => (
                        <div key={faq?.id} className="mt-8">
                            <div className="flex  items-center gap-5 w-full">
                                <p className="bg-black text-white py-3 rounded-md px-5 min-w-[95%]">{faq?.question}</p>
                                <ImCancelCircle onClick={()=> handleDeleteFaq(faq?.id)} size={25} className="cursor-pointer hover:text-red-600" />
                            </div>
                            <p className="bg-[#BCBABA26] p-4 rounded-md mt-5">{faq?.answer}</p>
                        </div>
                    ))
                }
            </div>
            <Modal open={openModal} onCancel={() => setOpenModal(false)} centered footer={false} >
                <p className='text-xl text-center py-2 font-semibold'>Add FAQ</p>
                <Form className=''
                    layout='vertical'
                onFinish={onFinish}
                // form={form}
                >
                    <Form.Item name={`question`}
                        label={`Question`}
                        rules={[
                            {
                                message: 'view Order is required',

                            }
                        ]}>
                        <Input />

                    </Form.Item>
                    <Form.Item name={`answer`}
                        label={`Answer`}
                        rules={[
                            {
                                message: 'view Order is required',

                            }
                        ]}>
                        <TextArea />

                    </Form.Item>
                    <Form.Item className="flex items-center justify-center">
                        <button className="bg-black text-white px-8 py-4 rounded-md  " onClick={()=> setOpenModal(false)}>Publish</button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Facts;