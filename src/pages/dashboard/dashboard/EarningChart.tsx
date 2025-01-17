import { Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const { Option } = Select;
const data = [
    {
        name: 'Saturday',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Sunday',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Monday',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Tuesday',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Wednesday',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Thursday',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Friday',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const EarningChart = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            }}
        >
            <div className="px-2 flex items-center justify-between">
                <h1 className="text-xl font-medium">Sales and Revenue Tracking</h1>
                <Select defaultValue="Weekly" className="w-32 h-[40px]">
                    <Option value="week1">week1</Option>
                    <Option value="week2">week2</Option>
                    <Option value="week3">week3</Option>
                    <Option value="week4">week4</Option>
                    <Option value="week5">week5</Option>
                    <Option value="week6">week6</Option>
                    <Option value="week7">week7</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#023F86" radius={[10, 10, 0, 0]} background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EarningChart;
