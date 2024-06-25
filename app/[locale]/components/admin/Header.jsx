import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
// import SelectTranslation from './SelectTranslation';
import { getUpperCaseFirstChar, getUpperCase } from '@/app/utility/StringUtil';

import { usePathname } from "next/navigation";
// import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";

import { MdOutlineSearch } from "react-icons/md";

import DropdownNotification from './DropdownNotification';
import DropdownMessage from './DropdownMessage';
import DropdownUser from './DropdownUser';

export default function Header({ sidebarOpen, setSidebarOpen }) {

    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <Link className="block flex-shrink-0 lg:hidden" href="/">
                        <Image
                            width={32}
                            height={32}
                            src={"/tailadmin/images/logo/logo-icon.svg"}
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="hidden sm:block"></div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">

                        {/* <!-- Notification Menu Area --> */}
                        <DropdownNotification />
                        {/* <!-- Notification Menu Area --> */}

                        {/* <!-- Chat Notification Area --> */}
                        <DropdownMessage />
                        {/* <!-- Chat Notification Area --> */}
                    </ul>

                    {/* <!-- User Area --> */}
                    <DropdownUser />
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );
}
