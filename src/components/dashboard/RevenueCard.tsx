import { Chips } from "./Chips";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export function RevenueCard(params: any) {
    return (<div className="w-72 h-60 bg-white border border-gray-300 shadow-lg p-4 rounded-md">
        <h1 className="font-bold">Dat Component</h1>
        <br />
        <div className="flex justify-between">
            <Chips isIcon={false} heading={"Weekly"} icon={CalendarMonthIcon} isActive={true} />
            <Chips isIcon={false} heading={"Monthly"} icon={CalendarMonthIcon} isActive={false} />
            <Chips isIcon={false} heading={"Yearly"} icon={CalendarMonthIcon} isActive={false} />
            <Chips isIcon={true} heading={"Custom Date"} icon={CalendarMonthIcon} isActive={false} />
        </div>
    </div>)
}