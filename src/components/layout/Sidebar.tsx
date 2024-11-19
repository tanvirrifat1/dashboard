import { ConfigProvider, Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/generateSidebarItems';
import sidebarItems from '../../utils/sidebarItems';
import { Link } from 'react-router-dom';
import logo from '../../assets/hello.svg';

const { Sider } = Layout;
const Sidebar = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: '#FFFFFF', // Global text color set to white
                    colorPrimary: '#0A8FDC',
                },
                components: {
                    Menu: {
                        itemBg: '#023F86', // Menu background color
                        itemColor: '#FFFFFF', // Menu item text color
                        itemHoverColor: '#FFFFFF', // Text color on hover
                        itemSelectedBg: '#0A8FDC', // Background color for selected item
                        itemSelectedColor: '#FFFFFF', // Selected item text color
                        itemBorderRadius: '30px 0px 0px 30px' as any,
                    },
                },
            }}
        >
            <Sider
                width={250}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"
                style={{ backgroundColor: '#023F86' }} // Sidebar background color
            >
                <Link to="/">
                    <div
                        style={{
                            margin: '0 20px',
                            padding: '20px 0',
                        }}
                    >
                        <img src={logo} alt="" />
                    </div>
                </Link>

                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={sidebarItemsGenerator(sidebarItems)}
                    style={{
                        backgroundColor: '#023F86', // Menu background color
                        color: '#FFFFFF', // Ensures white text color
                    }}
                />
            </Sider>
        </ConfigProvider>
    );
};

export default Sidebar;
