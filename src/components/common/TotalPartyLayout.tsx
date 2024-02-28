import { TotalCard } from "./TotalCard";

export function TotalPartyLayout(params: any) {
    return <div className="flex mt-10">
        <TotalCard party="Total Agent" />
        <TotalCard party="Total Builder" />
        <TotalCard party="Total Owner" />
        <TotalCard party="Total End User" />
    </div>
}