import { AccountCircle, Search } from "@mui/icons-material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { ReactComponent as LocationIcon } from '../../assets/images/location.svg';
import { ReactComponent as DashIcon } from '../../assets/images/dashicon.svg';
import PersonIcon from '../../assets/images/youngman.jpg';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from "@mui/material";



export function UpNav(params: any) {
    return (<div className="w-full flex mt-2">
        <div className="w-1/6" />
        <div className="w-2/3">
            <Box sx={{ marginRight: "10px", marginLeft: "20px" }}>
                <FormControl fullWidth variant="outlined">
                    <Input
                        id="input-with-icon-adornment"
                        placeholder="Search here…"
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
        </div>


        <div className="2/3">
            <div className="flex items-center justify-between w-40">
                <div className="bg-blue-500 w-32 flex justify-between p-2 rounded-lg">
                    <h2 className="text-white">Location</h2>
                    <LocationIcon />
                </div>
                <SettingsIcon fontSize="large" />
                <NotificationsPausedIcon fontSize="large" />
                <Avatar sizes="60px" src={PersonIcon} />
                <KeyboardArrowDownIcon fontSize="large" />
            </div>
        </div>


    </div>)
}