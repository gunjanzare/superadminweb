import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

interface ChipsType {
    isIcon: boolean;
    heading: string;
    isActive: boolean;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export function Chips(props: ChipsType) {
    return <div className={`p-1 ml-2 rounded-lg ${props.isActive ? `bg-blue-400` : ``} hover:bg-slate-50 border border-gray-600 flex justify-between items-center shadow-lg`}>
        {props.isIcon && <props.icon />}
        <h2 className={`${props.isActive ? `text-white` : `text-black`} text-xs`}>{props.heading}</h2></div>
}