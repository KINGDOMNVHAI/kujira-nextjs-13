import { useTranslations } from 'next-intl';
import { FaTwitter } from "react-icons/fa";

// import "jsvectormap/dist/css/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
import "@/public/tailadmin/css/satoshi.css";
import "@/public/tailadmin/css/style.css";

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';

export const metadata = {
    title: 'KDPLAYBACK | DASHBOARD',
    description: 'KDPLAYBACK',
    keywords: 'subcribe youtube ranking, hololive, vtuber, pewdiepie, nextjs',
    viewport: 'width=device-width',
    openGraph: {
        title: 'Twitter',
        description: 'Generated by create next app Twitter',
    }
}

export default function Dashboard() {

    const tAbout = useTranslations('dashboard');

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <Sidebar />

                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header/>
                </div>

            </div>
        </div>
    )
}
