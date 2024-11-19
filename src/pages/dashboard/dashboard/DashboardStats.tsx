import { AiOutlineUserAdd } from 'react-icons/ai';
import { CiYoutube } from 'react-icons/ci';
import { HiCalendar, HiCurrencyDollar, HiMiniUserGroup } from 'react-icons/hi2';
import { IoBookOutline } from 'react-icons/io5';
import { RiUserFollowLine } from 'react-icons/ri';
import { VscNote } from 'react-icons/vsc';

const DashboardStats = () => {
    const data = [
        {
            name: 'Total User',
            count: '1250',
            icon: <HiMiniUserGroup color="#0A8FDC" size={24} />,
            bgColor: '#fff',
        },
        {
            name: 'New SignUp',
            count: '478',
            icon: <AiOutlineUserAdd color="#0A8FDC" size={24} />,

            bgColor: '#fff',
        },
        {
            name: 'Active User',
            count: '40',
            icon: <RiUserFollowLine color="#0A8FDC" size={24} />,

            bgColor: '#fff',
        },
        {
            name: 'Total Quiz',
            count: '478',
            icon: <VscNote color="#0A8FDC" size={24} />,

            bgColor: '#fff',
        },
        {
            name: 'Total Shorts',
            count: '340',
            icon: <CiYoutube color="#0A8FDC" size={24} />,

            bgColor: '#fff',
        },
        {
            name: 'Total Courses',
            count: '8978',
            icon: <IoBookOutline color="#0A8FDC" size={24} />,

            bgColor: '#fff',
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 items-center">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#ffff] rounded-2xl border flex items-center gap-3 w-[246px] h-[96px] "
                    >
                        <div
                            className={`bg-slate-100 w-[54px] h-[54px] rounded-full flex items-center justify-center ml-4`}
                        >
                            {item?.icon}
                        </div>
                        <div className="flex-1 flex flex-col items-start gap-2">
                            <p className="flex items-center justify-center text-xl text-[#545454] font-medium">
                                {item.name}
                            </p>
                            <div>
                                <p className="text-2xl font-bold">{item.count} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardStats;
