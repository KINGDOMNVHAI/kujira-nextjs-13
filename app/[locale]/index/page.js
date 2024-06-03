import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import "@/public/skillgro/assets/css/bootstrap.min.css";
import "@/public/skillgro/assets/css/animate.min.css";
import "@/public/skillgro/assets/css/magnific-popup.css";
// import "@/public/skillgro/assets/css/fontawesome-all.min.css";
// import "@/public/skillgro/assets/css/flaticon-skillgro.css";
import "@/public/skillgro/assets/css/swiper-bundle.min.css";
// import "@/public/skillgro/assets/css/default-icons.css";
import "@/public/skillgro/assets/css/odometer.css";
import "@/public/skillgro/assets/css/aos.css";
import "@/public/skillgro/assets/css/spacing.css";
import "@/public/skillgro/assets/css/tg-cursor.css";
import "@/public/skillgro/assets/css/main.css";

// import SearchView from "./view/SearchView";
import Navbar from '../components/frontend/Navbar';

export default function Index() {

    const tChannel = useTranslations('channel-list');
    const tSearchView = useTranslations('search-view');
    const tCommon = useTranslations('common');

    const transVO = {
        "enter_your_keywords": tSearchView('enter-your-keywords'),
        "subcribe_filter": tSearchView('subcribe-filter'),
        "subcribe": tSearchView('subcribe'),
        "increase": tSearchView('increase'),
        "decrease": tSearchView('decrease'),
        "vtuber": tSearchView('vtuber'),
        "development": tSearchView('development'),
        "cosplay": tSearchView('cosplay'),
        "total": tCommon('total'),
    }

    // Gắn giao diện skillgro

    return (
        <div>
            <Navbar />

            <main class="main-area fix">


            </main>
        </div>
    )
}
