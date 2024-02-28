import { PartyTab } from "../components/common/PartyTab";
import { SideNav } from "../components/common/SideNav";
import { TabItem } from "../components/common/TabItem";
import { TabLayout } from "../components/common/TabLayout";
import { TotalCard } from "../components/common/TotalCard";
import { TotalPartyLayout } from "../components/common/TotalPartyLayout";
import { UpNav } from "../components/common/UpNav";
import { DataLayout } from "../components/dashboard/DataLayout";
import { DashboardPage } from "./common/DashboardPage";

export default function HomePagee(params: any) {
    return (<div>
        <UpNav />
        <SideNav />
        <TabLayout />
        <TotalPartyLayout />
        <DataLayout />
        <PartyTab />
        <DashboardPage /></div>)
}