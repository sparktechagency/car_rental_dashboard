
import { Select } from 'antd';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGetHostUserGrowthQuery } from '../../redux/Api/DashboardHomeApi';
import { useState } from 'react';


const SubscriptionGrowth = () => {
    const data = []
    const [year, setYear] = useState('2025')
    const { data: getUserGrowth } = useGetHostUserGrowthQuery({ role: 'HOST', year: year });

    const items = getUserGrowth?.data?.total_years?.map((year) => {
        return {
            label: year,
            value: year
        }
    })
     /**user growth API */
    for (const key in getUserGrowth?.data?.monthlyRegistration) {
        data.push({name :key?.slice(0,3), uv : getUserGrowth?.data?.monthlyRegistration[key] })
        
    }
    


    const handleChange = (value) => {
        setYear(value)
    };
    return (
        <>
            <div className='between-center'>
                <p className='text-xl font-medium'>Host Growth</p>
                <Select
                    defaultValue="2025"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={items}
                />
            </div>
            <div className='w-full h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#0044B4" opacity={1} fillOpacity={1} fill="#001D4E" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default SubscriptionGrowth
