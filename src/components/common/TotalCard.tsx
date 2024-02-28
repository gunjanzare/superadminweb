import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export function TotalCard(props: any) {
    return <div className='w-60 flex flex-col justify-between m-2 bg-white border border-gray-300 shadow-lg p-4 rounded-md'>
        <div className='flex justify-between'>
            <h2 className='font-bold'>{props.party}</h2>
            <MoreVertIcon />
        </div>

        <div>
            <h1 className='font-bold text-red-500'>1986</h1>
        </div>

        <div></div>

        <div className='flex justify-between'>
            <h4>This week</h4>
            <div className='flex'>
                <TrendingDownIcon sx={{ color: "red" }} />
                <h5>6.1%</h5>
            </div>
        </div>
    </div>
}