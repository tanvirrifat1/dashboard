import { TSidebarItem } from './generateSidebarItems';
import { AiOutlineFileText, AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoBarChartOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { BsPersonGear } from 'react-icons/bs';
import { TbLogout } from 'react-icons/tb';
import { LuScrollText, LuUser } from 'react-icons/lu';
import { PiListMagnifyingGlassThin } from 'react-icons/pi';
import { MdOutlineBedroomParent, MdOutlinePersonalInjury } from 'react-icons/md';
import { TfiWallet } from 'react-icons/tfi';
import { RiLockPasswordFill, RiUserStarLine } from 'react-icons/ri';
import { GoGear } from 'react-icons/go';
import { BiSupport } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import { FaRegCalendarAlt } from 'react-icons/fa';
const sidebarItems: TSidebarItem[] = [
    {
        key: '1',
        label: 'Dashboard',
        path: '',
        icon: <RxDashboard size={24} />,
    },
    {
        key: '2e',
        label: 'Analytics',
        path: 'analytics',
        icon: <FaArrowUpWideShort size={24} />,
    },
    {
        key: '22',
        label: 'Users',
        path: 'space-seeker',
        icon: <LuUser size={24} />,
    },
    {
        key: '111434',
        label: 'Subscription',
        path: 'subscription',
        icon: <FaRegCalendarAlt size={24} />,
    },
    // {
    //     key: '11',
    //     label: 'Subscribed User',
    //     path: 'subscribed-users',
    //     icon: <RiUserStarLine size={24} />,
    // },
    // {
    //     key: '111',
    //     label: 'Dealing Details',
    //     path: 'dealing-details',
    //     icon: <PiListMagnifyingGlassThin size={24} />,
    // },
    {
        key: '3',
        label: 'Settings',
        icon: <GoGear size={24} />,
        children: [
            {
                key: '33',
                label: 'Personal Information',
                path: 'personal',
                icon: <MdOutlinePersonalInjury size={24} />,
            },

            {
                key: '42',
                label: 'Terms & Conditions',
                path: 'terms',
                icon: <IoDocumentTextOutline size={24} />,
            },
            {
                key: '48',
                label: 'Return Policy',
                path: 'retrun-policy',
                icon: <IoDocumentTextOutline size={24} />,
            },
            {
                key: '45',
                label: 'Change Password',
                path: 'chnage-password',
                icon: <RiLockPasswordFill size={24} />,
            },
        ],
    },
    {
        key: '6',
        label: 'Log Out',
        path: 'login',
        icon: <TbLogout size={24} />,
    },
];

export default sidebarItems;
