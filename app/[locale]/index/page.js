import Link from 'next-intl/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// import "@/public/asset/youtube-ranking/css/style.css";
// import "@/public/asset/youtube-ranking/css/bootstrap.min.css";

// import SearchView from "./view/SearchView";
// import Navbar from '../components/frontend/Navbar';

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

}
