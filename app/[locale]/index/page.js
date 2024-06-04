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

import SwiperTopCategoryComponent from "./components/SwiperTopCategoryComponent";
import Navbar from '../components/frontend/Navbar';

import bannerBg from '@/public/skillgro/assets/img/banner/banner_bg.png';

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuPenTool } from "react-icons/lu";
import { RiCodeSSlashLine } from "react-icons/ri";

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

            <main className="main-area fix">
                <section className="banner-area banner-bg tg-motion-effects" style={{ backgroundImage: `url(${bannerBg})` }}>
                    <div className="container">
                        <div className="row justify-content-between align-items-start">
                            <div className="col-xl-5 col-lg-6">
                                <div className="banner__content">
                                    <h3 className="title tg-svg" data-aos="fade-right" data-aos-delay="400">
                                        Never Stop
                                        <span className="position-relative">
                                            <span className="svg-icon" id="banner-svg" data-svg-icon="/skillgro/assets/img/objects/title_shape.svg"></span>
                                            <svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor" />
                                            </svg>
                                            Learning
                                        </span>
                                        <br />Life <b>Never Stop</b> Teaching
                                    </h3>
                                    <p data-aos="fade-right" data-aos-delay="600">Every teaching and learning journey is unique Following We'll help guide your way.</p>
                                    <div className="banner__btn-wrap" data-aos="fade-right" data-aos-delay="800">
                                        <a href="contact.html" className="btn arrow-btn">Start Free Trial
                                            <GoArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner__images">
                                    <Image
                                        src={"/skillgro/assets/img/banner/banner_img.png"}
                                        className="main-img"
                                        width={419}
                                        height={460}
                                        alt="Logo"
                                    />

                                    <div className="shape big-shape" data-aos="fade-up-right" data-aos-delay="600">
                                        <Image
                                            src={"/skillgro/assets/img/banner/banner_shape01.png"}
                                            className="tg-motion-effects1"
                                            width={150}
                                            height={150}
                                            alt="shape"
                                        />
                                    </div>
                                    <Image
                                        src={"/skillgro/assets/img/banner/bg_dots.svg"}
                                        className="shape bg-dots rotateme"
                                        width={494}
                                        height={494}
                                        alt="shape"
                                    />
                                    <Image
                                        src={"/skillgro/assets/img/banner/banner_shape02.png"}
                                        className="shape small-shape tg-motion-effects3"
                                        width={136}
                                        height={139}
                                        alt="shape"
                                    />
                                    <div className="banner__author">
                                        <div className="banner__author-item">
                                            <div className="image">
                                                <Image
                                                    src={"/skillgro/assets/img/banner/banner_author01.png"}
                                                    width={30}
                                                    height={30}
                                                    alt="img"
                                                />
                                            </div>
                                            <h6 className="name">Robert Fox</h6>
                                        </div>
                                        <div className="banner__author-item">
                                            <div className="image">
                                                <Image
                                                    src={"/skillgro/assets/img/banner/banner_author02.png"}
                                                    width={30}
                                                    height={30}
                                                    alt="img"
                                                />
                                            </div>
                                            <h6 className="name">Michel Jones</h6>
                                        </div>
                                        <Image
                                            src={"/skillgro/assets/img/banner/banner_shape02.svg"}
                                            className="arrow-shape tg-motion-effects3"
                                            width={92}
                                            height={65}
                                            alt="shape"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={"/skillgro/assets/img/banner/banner_shape01.svg"}
                        className="line-shape"
                        width={618}
                        height={432}
                        alt="shape"
                    />
                </section>

                <section className="categories-area section-py-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-7">
                                <div className="section__title text-center mb-40">
                                    <span className="sub-title">Trending Categories</span>
                                    <h2 className="title">Top Category We Have</h2>
                                    <p className="desc">when known printer took a galley of type scrambl edmake</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="categories__wrap">
                                    <div className="swiper categories-active">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <LuPenTool />
                                                        </div>
                                                        <span className="name">Graphic Design</span>
                                                        <span className="courses">(22)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-investment"></i>
                                                        </div>
                                                        <span className="name">Finance</span>
                                                        <span className="courses">(41)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <RiCodeSSlashLine />
                                                        </div>
                                                        <span className="name">Development</span>
                                                        <span className="courses">(29)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-email"></i>
                                                        </div>
                                                        <span className="name">Marketing</span>
                                                        <span className="courses">(31)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-fashion"></i>
                                                        </div>
                                                        <span className="name">Life Style</span>
                                                        <span className="courses">(23)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-interaction"></i>
                                                        </div>
                                                        <span className="name">Management</span>
                                                        <span className="courses">(19)</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="categories__item">
                                                    <a href="courses.html">
                                                        <div className="icon">
                                                            <i className="flaticon-web-design"></i>
                                                        </div>
                                                        <span className="name">App Design</span>
                                                        <span className="courses">(18)</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="categories__nav">
                                        <button className="categories-button-prev" style={{ padding: '12px' }}>
                                            <GoArrowLeft size={24} />
                                        </button>
                                        <button className="categories-button-next" style={{ padding: '12px' }}>
                                            <GoArrowRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
