
import { Select } from 'antd';
import React, {useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetHostUserGrowthQuery } from '../../redux/Api/DashboardHomeApi';

const Overview = () => {
    const chartData = []
    const [year, setYear] = useState('2024')
    const {data : getUserGrowth} =  useGetHostUserGrowthQuery({ role : 'USER' ,year : year});
    
    /**user growth API */
    for (const key in getUserGrowth?.data?.monthlyRegistration) {
        chartData.push({name :key?.slice(0,3), uv : getUserGrowth?.data?.monthlyRegistration[key] })
        
    }
    




    const handleChange = (value) => {
        setYear(value);
    };


    const items = getUserGrowth?.data?.total_years?.map((year)=>{
        return {
            label : year,
            value : year
        }
    })

    
    return (
        <>
            <div className='between-center'>
                <p className='text-xl font-medium'>User Growth</p>
                <Select
                    defaultValue="2024"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={items}
                />
            </div>
            <div className='w-full h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={400}
                        height={500}
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="pv" stackId="a" fill="#8884d8" /> */}
                        <Bar dataKey="uv" stackId="a" fill="#1E3F66"  radius={[25, 25, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default Overview
