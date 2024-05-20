"use client";

import { ReactNode, useState } from "react";

// interface SidebarLinkGroupProps {
//   children: (handleClick: () => void, open: boolean) => ReactNode;
//   activeCondition: boolean;
// }

export default function SidebarLinkGroup({children, activeCondition,}) {

    // const SidebarLinkGroup = (: SidebarLinkGroupProps) => {

    const [open, setOpen] = useState(activeCondition);

    const handleClick = () => {
      setOpen(!open);
    };

    return <li>{children(handleClick, open)}</li>;
};
