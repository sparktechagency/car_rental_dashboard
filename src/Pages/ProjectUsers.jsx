import { Table } from "antd";
import { act } from "react";
import { MdDelete } from "react-icons/md";

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        img: 'https://i.ibb.co/KzkgfVN/istockphoto-1327592506-612x612.jpg',
        email: 'bertou@yandex.ru ',
        company: 'Biffco Enterprises Ltd. ',
        phone: '(907) 555-0101'
    },
    {
        key: '2 ',
        name: 'Mike',
        img: 'https://i.ibb.co/KzkgfVN/istockphoto-1327592506-612x612.jpg',
        email: 'bertou@yandex.ru ',
        company: 'Biffco Enterprises Ltd. ',
        phone: '(907) 555-0101'
    },
    {
        key: '3',
        name: 'Mike',
        img: 'https://i.ibb.co/KzkgfVN/istockphoto-1327592506-612x612.jpg',
        email: 'bertou@yandex.ru ',
        company: 'Biffco Enterprises Ltd. ',
        phone: '(907) 555-0101'
    },
];

const ProjectUsers = () => {
    const columns = [
        {
            title: 'Serial No',
            dataIndex: 'key',
            key: 'key ',
        },
        {
            title: 'User',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => {
                return (
                    <div className="flex justify-start items-center gap-2  ">
                        <img className="w-10 h-10 rounded-md" src={record?.img} alt="" />
                        <p>{record?.name }</p>
                    </div>
                )
            }
        },
        {
            title: 'Company Name',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone ',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email ',
        },
        {
            title:'Actions',
            dataIndex:'key',
            key:'key',
            render: (_, record) => {
                return (
                    <div className="flex justify-start items-center">
                        <button className="text-2xl">
                            <MdDelete/>
                        </button>
                    </div>
                )
            }
        }
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default ProjectUsers
