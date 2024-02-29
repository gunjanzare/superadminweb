import { Chips } from "./Chips";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export function LaedsCard(params: any) {
    return (<div className="h-60 bg-white border flex flex-col justify-start border-gray-300 shadow-lg p-4 rounded-md overflow-hidden">
        <h1 className="font-bold">Lead Card</h1>
        <br />
        <div className="flex justify-between">
            <Chips isIcon={false} heading={"Weekly"} icon={CalendarMonthIcon} isActive={true} />
            <Chips isIcon={false} heading={"Monthly"} icon={CalendarMonthIcon} isActive={false} />
            <Chips isIcon={false} heading={"Yearly"} icon={CalendarMonthIcon} isActive={false} />
            <Chips isIcon={true} heading={"Custom Date"} icon={CalendarMonthIcon} isActive={false} />
        </div>
    </div >)
}