import React from "react";
import { Resume } from "@/components/screens";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume"
};

const Page = () => {
    return (
        <>
            <Resume />
        </>
    );
};

export default Page;
