import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

interface ChipsType {
    isIcon: boolean;
    heading: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export function Chips(props: ChipsType) {
    return <div className="w-32 p-2 rounded-lg border border-gray-600 flex justify-between shadow-lg">
        {props.isIcon && <props.icon />}
        <h2 className='text-black'>Weekly</h2></div>
}