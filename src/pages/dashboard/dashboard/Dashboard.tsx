import BestShorts from './BestShort';
import DashboardStats from './DashboardStats';
import EarningChart from './EarningChart';
import Operation from './Operation';
import UserChart from './UserChart';
import UserEngagement from './UserEngagement';

const Dashboard = () => {
    return (
        <div className="">
            <DashboardStats />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 items-center mt-10">
                <div
                    className="col-span-1 md:col-span-1 lg:col-span-5 bg-white drop-shadow-md p-4 rounded-2xl"
                    style={{ width: '100%' }}
                >
                    {/* Total Services */}
                    <EarningChart />
                </div>
                <div
                    className="col-span-1 md:col-span-1 lg:col-span-4 bg-white drop-shadow-md p-4 rounded-2xl"
                    style={{ width: '100%' }}
                >
                    <UserChart />
                </div>
                <div
                    className="col-span-1 md:col-span-1 lg:col-span-3 bg-white drop-shadow-md p-2 rounded-2xl"
                    style={{ width: '100%' }}
                >
                    <BestShorts />
                </div>
            </div>
            {/* User Engagement */}

            <div className="grid grid-cols-12  gap-2 items-center mt-10">
                <div className="col-span-6 bg-white drop-shadow-md p-4 mx-2 rounded-2xl">
                    <Operation />
                </div>
                <div className="col-span-6 bg-white drop-shadow-md p-4 mx-2 rounded-2xl">
                    <UserEngagement />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
