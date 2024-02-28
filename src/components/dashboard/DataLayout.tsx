import { DataEnquiryCard } from "./DataEnquiryCard";
import { LaedsCard } from "./LeadsCard";
import { RevenueCard } from "./RevenueCard";

export function DataLayout(params: any) {
    return <div className="flex justify-between mt-10">
        <DataEnquiryCard />
        <LaedsCard />
        <RevenueCard />
    </div>
}