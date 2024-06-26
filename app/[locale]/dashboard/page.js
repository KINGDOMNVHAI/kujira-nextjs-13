import { useTranslations } from 'next-intl';

// import "jsvectormap/dist/css/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
import "@/public/tailadmin/css/satoshi.css";
import "@/public/tailadmin/css/style.css";

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';
import CardDataStats from './view/CardDataStats';
import ChartColumn from './view/ChartColumn';
import TableOne from './view/TableOne';

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

    const tDashboard = useTranslations('dashboard');

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                <Sidebar />

                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header/>

                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <CardDataStats/>

                            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                                <div className="col-span-12 xl:col-span-8">
                                    <TableOne />
                                </div>
                                <div className="col-span-12 xl:col-span-4">
                                    <ChartColumn />
                                </div>
                            </div>



                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
