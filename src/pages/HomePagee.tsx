import { PartyTab } from "../components/common/PartyTab";
import { SideNav } from "../components/common/SideNav";
import { UpNav } from "../components/common/UpNav";
import { DashboardPage } from "./common/DashboardPage";

export default function HomePagee(params: any) {
    return (<div>
        <UpNav />
        <SideNav />
        <PartyTab />
        <DashboardPage /></div>)
}