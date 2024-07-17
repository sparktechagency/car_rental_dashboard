import {Link} from "react-router-dom";
import {IoArrowBackSharp} from "react-icons/io5";
import {Form, Input, Select, Space} from "antd";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";
import {FaPlus} from "react-icons/fa";
// import React from "react";

const SurveyResult = () => {
    const onFinish = (value) => {
        console.log(value)
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

        return (
            <>
                <div className="flex -space-x-1 overflow-hidden">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    />
                </div>

                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                </div>

                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    />
                </div>
            </>
    )
}
export default SurveyResult

// import { Link } from "react-router-dom";
// import { IoArrowBackSharp } from "react-icons/io5";
// import { Form, Input, Select, Space } from "antd";
// import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
// import React, { useState } from "react";
// import "./style.css";
//
// const SurveyResult = () => {
//     const [form] = Form.useForm();
//
//     const [surveyData, setSurveyData] = useState([
//         {
//             id: 1,
//             question: "How satisfied are you with your current work environment?",
//             answer: [
//                 { value: "Very Satisfied", percentage: 35 },
//                 { value: "Satisfied", percentage: 25 },
//                 { value: "Good", percentage: 18 },
//                 { value: "Bad", percentage: 10 },
//                 { value: "Angry", percentage: 12 },
//             ],
//         },
//         {
//             id: 2,
//             question: "How would you rate the support you receive from your team?",
//             answer: [
//                 { value: "Very Satisfied", percentage: 32 },
//                 { value: "Satisfied", percentage: 26 },
//                 { value: "Good", percentage: 20 },
//                 { value: "Bad", percentage: 12 },
//                 { value: "Angry", percentage: 10 },
//             ],
//         },
//         {
//             id: 3,
//             question: "How do you feel about the work-life balance in your company?",
//             answer: [
//                 { value: "Very Satisfied", percentage: 41 },
//                 { value: "Satisfied", percentage: 23 },
//                 { value: "Good", percentage: 18 },
//                 { value: "Bad", percentage: 13 },
//                 { value: "Angry", percentage: 12 },
//             ],
//         },
//         {
//             id: 4,
//             question: "How satisfied are you with your current work environment?",
//             answer: [
//                 { value: "Very Satisfied", percentage: 45 },
//                 { value: "Satisfied", percentage: 24 },
//                 { value: "Good", percentage: 21 },
//                 { value: "Bad", percentage: 15 },
//                 { value: "Angry", percentage: 13 },
//             ],
//         },
//     ]);
//
//     const handleSurveyChange = (event, index) => {
//         const updatedSurveyData = [...surveyData];
//         updatedSurveyData[index].selectedValue = event.target.value;
//         setSurveyData(updatedSurveyData);
//     };
//
//     const onFinish = (values) => {
//         console.log("Success:", values);
//     };
//
//     // const handleChange = (value) => {
//     //     console.log(`selected ${value}`);
//     // };
//
//     return (
//         <div className="survey-result">
//             <div className="main">
//                 <div className="container">
//                     <h2 className="title">All Survey Results</h2>
//                     <Form
//                         form={form}
//                         onFinish={onFinish}
//                     >
//                         <div className="survey-question">
//                             {surveyData.map((item, index) => (
//                                 <div className="question-container" key={item.id}>
//                                     <div className="question-text">{item.question}</div>
//                                     <div className="answer-container">
//                                         {item.answer.map((answerItem) => (
//                                             <div className="answer-option" key={answerItem.value}>
//                                                 <input
//                                                     type="radio"
//                                                     value={answerItem.value}
//                                                     onChange={(event) => handleSurveyChange(event, index)}
//                                                 />
//                                                 <div className="answer-text">{answerItem.value}</div>
//                                                 <div className="percentage-text">
//                                                     {answerItem.percentage}%
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="button-container">
//                             <button type="submit" className="submit-button">
//                                 Submit
//                             </button>
//                         </div>
//                     </Form>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default SurveyResult;