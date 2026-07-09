// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>힐스테이트 고덕엘리스트</span>
        </li>
  
        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 고덕국제화계획지구 A31BL · A34BL · A35BL</span>
        </li>
  
        <li>
          <strong>규모</strong>
          <span>전용 59㎡ · 84㎡ / 총 2,122세대</span>
        </li>
  
        <li>
          <strong>시행</strong>
          <span>한국토지주택공사(LH)</span>
        </li>
  
        <li>
          <strong>시공</strong>
          <span>현대건설</span>
        </li>
      </ul>
    ),
  },

{
  key: "location",
  label: "입지환경",
  content: (
    <div className={styles.mapGrid}>
      <img
        src={mobileMap}
        className={styles.mapImage}
        alt="힐스테이트 고덕엘리스트 입지환경"
      />
      <img
        src={mobileMap2}
        className={styles.mapImage}
        alt="힐스테이트 고덕엘리스트 생활권"
      />
    </div>
  ),
},
{
  key: "premium",
  label: "프리미엄",
  content: (
    <>
      {/* 프리미엄 섹션 상단 문단 */}
      <div className={styles.premiumIntro}>
        <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
        <p className={styles.premiumSubtitle}>
          평택 고덕국제화계획지구를 대표할<br />
          힐스테이트 고덕엘리스트 프리미엄 라이프
        </p>
      </div>

      {/* 슬라이더 */}
      <PremiumSlider />
    </>
  ),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "평택 고덕국제화계획지구 중심 입지",
      desc:
        "평택 고덕국제화계획지구 A31BL·A34BL·A35BL<br/>고덕국제신도시의 미래가치를 품은 브랜드 대단지<br/>우수한 정주여건과 프리미엄 입지",
    },
    {
      img: slide2,
      title: "전용 59㎡ · 84㎡ 프리미엄 설계",
      desc:
        "실수요자가 선호하는 전용 59㎡·84㎡ 구성<br/>공간 활용도를 높인 혁신적인 평면 설계<br/>다양한 라이프스타일을 고려한 주거공간",
    },
    {
      img: slide3,
      title: "총 2,122세대 브랜드 대단지",
      desc:
        "총 2,122세대 규모의 랜드마크 단지<br/>대단지에서 누리는 다양한 커뮤니티와 조경<br/>품격 있는 힐스테이트 브랜드 라이프",
    },
    {
      img: slide4,
      title: "교통 · 교육 · 생활을 모두 누리는 입지",
      desc:
        "고덕국제신도시의 풍부한 생활 인프라<br/>편리한 광역교통과 다양한 생활편의시설<br/>미래가치를 기대할 수 있는 프리미엄 입지",
    },
    {
      img: slide5,
      title: "힐스테이트만의 특화설계",
      desc:
        "브랜드 노하우를 담은 차별화된 단지 설계<br/>입주민 중심의 다양한 커뮤니티 공간<br/>쾌적한 조경과 편리한 생활동선을 제공합니다.",
    },
    {
      img: slide6,
      title: "고덕의 미래를 완성할 선택",
      desc:
        "평택 고덕국제화계획지구의 새로운 랜드마크<br/>브랜드 가치와 미래가치를 모두 갖춘 대단지<br/>힐스테이트 고덕엘리스트",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>힐스테이트 고덕엘리스트</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="힐스테이트 고덕엘리스트 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
