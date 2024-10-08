import { Table } from "antd";
import userImage from '../../assets/images/user22.png'
import { MdBlockFlipped } from "react-icons/md";
import { useGetAllUserQuery } from "../../redux/Api/dashboardApi";
import { imageUrl } from "../../redux/Api/baseApi";
const UserDetailsTable = () => {
    const {data :getAllUser, isLoading}  = useGetAllUserQuery()
    const columns = [
        {
            title: 'S. No.',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text , record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={record?.img} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
                    {text}
                </div>
            ),
        },
        {
            title: 'Member Since',
            dataIndex: 'memberSince',
            key: 'memberSince',
        },
        {
            title: 'Membership Type',
            dataIndex: 'membershipType',
            key: 'membershipType',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact Number',
            dataIndex: 'contactNumber',
            key: 'contactNumber',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <div>
                    {/* Replace the action content with what you need, for example, icons */}
                    <a href="#delete"><MdBlockFlipped /></a>
                </div>
            ),
        },
    ];

    const formattedTableData = getAllUser?.data?.map((user , i)=>{
        return  {
                key: user?._id,
                sno: i+1,
                name: user?.name,
                img : `${imageUrl}${user?.profile_image}`,
                memberSince: user?.createdAt?.split("T")[0],
                membershipType: user?.userType,
                email: user?.email,
                contactNumber: user?.phone_number,
                location: user?.address || 'Not Available',
        }
    })


    // Columns data
   



    return (
        <div className="p-2 ">

            <Table
                columns={columns}
                dataSource={formattedTableData}
                pagination={{
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

        </div>
    )
}

export default UserDetailsTable;