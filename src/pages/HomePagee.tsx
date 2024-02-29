import { PartyTab } from "../components/common/PartyTab";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { SideNav } from "../components/common/SideNav";
import { TabItem } from "../components/common/TabItem";
import { TabLayout } from "../components/common/TabLayout";
import { TotalCard } from "../components/common/TotalCard";
import { TotalPartyLayout } from "../components/common/TotalPartyLayout";
import { UpNav } from "../components/common/UpNav";
import { Chips } from "../components/dashboard/Chips";
import { DataLayout } from "../components/dashboard/DataLayout";
import { DashboardPage } from "./common/DashboardPage";

export default function HomePagee(params: any) {
    return (<div>
        <UpNav />
        <SideNav />
        <TabLayout />
        <TotalPartyLayout />
        <Chips isIcon={true} heading={"Monthly"} icon={CalendarMonthIcon} />
        <Chips isIcon={false} heading={"Weekly"} icon={CalendarMonthIcon} />
        {/* <DataLayout /> */}
        <PartyTab />
    </div>)
}