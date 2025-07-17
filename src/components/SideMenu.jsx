import {
    FaClock, FaShoppingCart, FaPhone, FaFolder, FaSuitcase, FaDollarSign,
    FaComments, FaEnvelope, FaCalendarAlt, FaColumns, FaChartBar, FaShareAlt
} from "react-icons/fa";

const MenuItem = ({ Icon, label, badge }) => (
    <li className="flex items-center gap-3 px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
        <Icon className="text-gray-600" />
        <span className="text-sm">{label}</span>
        {badge && (
            <span className="ml-auto text-[10px] font-semibold bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
                {badge}
            </span>
        )}
    </li>
);

export default function SideMenu() {
    return (
        <aside className="w-64 shrink-0   bg-white p-4 flex flex-col">
            <h1 className="text-xl font-extrabold text-orange-500 mb-6">Admin</h1>

            <p className="text-xs font-bold text-gray-500 uppercase mb-2">Apps</p>

            <ul className="space-y-1 text-gray-700 flex-grow">
                <MenuItem Icon={FaClock} label="Home" />
                <MenuItem Icon={FaShoppingCart} label="E commerce" />
                <MenuItem Icon={FaPhone} label="CRM" />
                <MenuItem Icon={FaFolder} label="Project management" />
                <MenuItem Icon={FaSuitcase} label="Travel agency" />
                <MenuItem Icon={FaDollarSign} label="Stock" badge="NEW" />
                <MenuItem Icon={FaComments} label="Chat" />
                <MenuItem Icon={FaEnvelope} label="Email" />
                <MenuItem Icon={FaCalendarAlt} label="Events" />
                <MenuItem Icon={FaColumns} label="Kanban" />
                <MenuItem Icon={FaChartBar} label="Gantt chart" badge="NEW" />
                <MenuItem Icon={FaShareAlt} label="Social" />
            </ul>

            <button className="text-xs text-gray-500 hover:text-gray-800">
                ⬅︎ Collapsed view
            </button>
        </aside>
    );
}
