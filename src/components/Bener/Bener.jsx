import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "힐스테이트 고덕엘리스트" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="힐스테이트 고덕엘리스트 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "엘리프고덕센트럴하이",
    "힐스테이트고덕엘리스트",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = [
    "입지환경",
    "입지안내",
    "프리미엄",
  ];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "59㎡평면도",
    "84㎡평면도",
    "59A㎡평면도",
    "59B㎡평면도",
    "84A㎡평면도",
    "84B㎡평면도",
    "E-모델하우스",
    "인테리어",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 고덕엘리스트가 선보이는 평택 고덕국제화계획지구의 새로운 브랜드 대단지를 만나보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          A31BL·A34BL·A35BL에 조성되는 총 2,122세대 규모의 대단지 주거 가치를 확인하실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 브랜드의 완성도와 고덕국제신도시 생활권의 미래가치를 한곳에서 확인하세요.
        </div>
      </>
    );
  } else if (businessTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 고덕엘리스트의 사업개요와 분양 정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지입니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          분양일정, 공급안내, 입주자모집공고, 계약서류 안내까지 필요한 정보를 한곳에서 확인할 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 고덕엘리스트
        </div>
      </>
    );
  } else if (
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 고덕엘리스트의 전용 59㎡·84㎡ 타입별 세대 정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          실수요 선호도가 높은 중소형 평면 구성으로 라이프스타일에 맞춘 공간 가치를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          타입안내, 평면도, 세대안내영상, E-모델하우스 정보를 통해 힐스테이트 고덕엘리스트의 공간을 미리 만나보실 수 있습니다.
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 고덕엘리스트의 입지환경과 평택 고덕국제화계획지구 생활 인프라를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕국제신도시 생활권의 교통, 교육, 생활, 자연 인프라와 미래가치를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 2,122세대 브랜드 대단지로 누리는 고덕의 프리미엄 입지를 경험해 보세요.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 2,122세대 규모로 조성되는 힐스테이트 고덕엘리스트의 대단지 설계를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          A31BL·A34BL·A35BL을 아우르는 단지배치도, 호수배치도, 커뮤니티 공간 구성을 자세히 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          일상 속 편리함과 여유를 더하는 힐스테이트 고덕엘리스트의 단지 가치를 만나보세요.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          힐스테이트 고덕엘리스트의 분양 소식과 모델하우스 방문예약을 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 공급정보, 분양가, 청약 일정 등 주요 소식을 빠르게 받아보실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택 고덕국제화계획지구 총 2,122세대 브랜드 대단지의 분양 정보를 확인해 보세요.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      힐스테이트 고덕엘리스트 홈페이지에서 평택 고덕국제화계획지구 브랜드 대단지 분양 정보를 확인하세요.
    </div>
  );
};
