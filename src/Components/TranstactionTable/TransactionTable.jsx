import React from 'react';
import { Table } from 'antd';
import userImage from '../../assets/images/user22.png';

const columns = [
  {
    title: 'S no',
    dataIndex: 'key',
    key: 'key',
    rowScope: 'row',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={userImage} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} />
        {text}
      </div>
    ),
  },
  {
    title: 'Membership Type',
    dataIndex: 'Membership_Type',
    key: 'Membership_Type',
  },
  {
    title: 'Date Of Payment',
    dataIndex: 'Date_Of_Payment',
    key: 'Date_Of_Payment',
  },
  {
    title: 'Payment Type',
    dataIndex: 'Payment_Type',
    key: 'Payment_Type',
  },
  {
    title: 'Payment Status',
    dataIndex: 'Payment_Status',
    key: 'Payment_Status',
  },
  {
    title: 'Paid Amount',
    dataIndex: 'Paid_Amount',
    key: 'Paid_Amount',
  },
];

const data = [
  {
    key: '#12333',
    name: 'John Brown',
    Membership_Type : "Gold",
    Date_Of_Payment : "12/06/24",
    Payment_Type  : "Online Payment",
    Payment_Status : "paid",
    Paid_Amount :   "$19.99" 
  },
  {
    key: '#12333',
    name: 'Jim Green',
    Membership_Type : "Platinum",
    Date_Of_Payment : "12/06/24",
    Payment_Type  : "Online Payment",
    Payment_Status : "paid",
    Paid_Amount :   "$19.99" 


  },
  {
    key: '#12333',
    name: 'Joe Black',
    Membership_Type : "Gold",
    Date_Of_Payment : "12/06/24",
    Payment_Type  : "Online Payment",
    Payment_Status : "paid",
    Paid_Amount :   "$19.99" 


  },
];

const TransactionTable = () => <Table columns={columns} dataSource={data} bordered pagination={false} />;

export default TransactionTable;
