import { TabItem } from "./TabItem";

export function TabLayout(params: any) {
    return <div className="flex mt-8">
        <TabItem tabname="Agent" />
        <TabItem tabname="Builder" />
        <TabItem tabname="Owner" />
        <TabItem tabname="End User" />
    </div>
}