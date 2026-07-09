const SITE_URL = "https://www.hillstate-godeok-elist.co.kr";

export const siteSeo = {
  siteName: "힐스테이트 고덕엘리스트",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "힐스테이트 고덕엘리스트 공식 홈페이지입니다. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지로, 전용 59㎡·84㎡ 타입, 사업안내, 입지환경, 공급정보, 청약정보, 모델하우스 방문예약 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "고덕국제화계획지구 A31BL·A34BL·A35BL",
    brands: ["힐스테이트 고덕엘리스트", "힐스테이트", "현대건설"],
    navigationSchemaName: "힐스테이트 고덕엘리스트 주요 메뉴",
  },

  keywords: [
    "힐스테이트 고덕엘리스트",
    "평택 고덕 힐스테이트 엘리스트",
    "평택 고덕국제화계획지구",
    "고덕국제화계획지구 A31BL",
    "고덕국제화계획지구 A34BL",
    "고덕국제화계획지구 A35BL",
    "평택 고덕 아파트",
    "평택 고덕 분양",
    "고덕국제신도시 아파트",
    "고덕국제신도시 분양",
    "힐스테이트 고덕엘리스트 모델하우스",
    "힐스테이트 고덕엘리스트 견본주택",
    "힐스테이트 고덕엘리스트 방문예약",
    "힐스테이트 고덕엘리스트 관심고객등록",
    "힐스테이트 고덕엘리스트 분양가",
    "힐스테이트 고덕엘리스트 청약",
    "힐스테이트 고덕엘리스트 공급정보",
    "힐스테이트 고덕엘리스트 입주자모집공고",
    "힐스테이트 고덕엘리스트 59㎡",
    "힐스테이트 고덕엘리스트 84㎡",
    "힐스테이트 고덕엘리스트 2,122세대",
    "2,122세대 브랜드 대단지",
    "현대건설 힐스테이트",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "59A", path: "/FloorPlan/59A" },
      { name: "59B", path: "/FloorPlan/59B" },
      { name: "84A", path: "/FloorPlan/84A" },
      { name: "84B", path: "/FloorPlan/84B" },
      { name: "84C", path: "/FloorPlan/84C" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "힐스테이트 고덕엘리스트",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 브랜드소개 페이지입니다. 현대건설 힐스테이트 브랜드가 선보이는 평택 고덕국제화계획지구 2,122세대 브랜드 대단지의 주거 가치와 단지 콘셉트를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 홍보영상 페이지입니다. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 단지의 입지, 상품성, 브랜드 가치와 미래 주거 가치를 영상으로 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 사업안내 페이지입니다. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL, 총 2,122세대 규모의 브랜드 대단지 정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 분양일정 안내입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수와 정당계약 등 주요 청약 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 공급안내 페이지입니다. 총 2,122세대 공급 규모, 전용 59㎡·84㎡ 타입 구성, 청약 전 확인해야 할 주요 분양 정보와 상담 전 준비사항을 안내합니다.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 입주자 모집공고 안내 페이지입니다. 청약 일정, 공급 조건, 분양가, 계약 조건 등 분양 전 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 계약서류안내 페이지입니다. 청약, 계약, 자격 확인, 제출서류와 상담 전 준비해야 할 주요 내용을 확인하세요.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 입지환경 안내입니다. 평택 고덕국제화계획지구 A31BL·A34BL·A35BL의 입지 가치, 교통망, 생활 인프라와 고덕 생활권의 미래가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 프리미엄 안내입니다. 총 2,122세대 브랜드 대단지, 전용 59㎡·84㎡ 타입, 힐스테이트 브랜드 설계와 주거 프리미엄을 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 단지배치도 안내입니다. 총 2,122세대 브랜드 대단지의 동선, 조망, 생활 편의와 쾌적성을 고려한 단지 구성을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 호수배치도 안내입니다. 동·호수 구성과 단지 내 위치 정보를 통해 세대별 배치 흐름을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 커뮤니티 안내입니다. 2,122세대 브랜드 대단지에서 누리는 입주민 중심의 커뮤니티 시설과 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title: "59A 타입 평면도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 59A 타입 평면도 안내입니다. 실속형 주거 수요에 적합한 전용 59㎡ 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title: "59B 타입 평면도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 59B 타입 평면도 안내입니다. 전용 59㎡ 타입의 공간 활용, 수납, 주거 동선과 세대 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/84A",
    title: "84A 타입 평면도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 84A 타입 평면도 안내입니다. 선호도 높은 전용 84㎡ 타입의 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "84B 타입 평면도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 84B 타입 평면도 안내입니다. 전용 84㎡ 타입의 세대 구성, 공간 활용과 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84C: page({
    path: "/FloorPlan/84C",
    title: "84C 타입 평면도 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 84C 타입 평면도 안내입니다. 전용 84㎡ 타입의 공간 구성, 수납, 생활 동선과 세대 구성을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 E-모델하우스입니다. 전용 59㎡·84㎡ 타입별 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 힐스테이트 고덕엘리스트",
    description:
      "힐스테이트 고덕엘리스트 관심고객등록 페이지입니다. 분양 일정, 모델하우스 방문예약, 청약 정보, 공급안내와 주요 분양 소식을 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 힐스테이트 고덕엘리스트",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 힐스테이트 고덕엘리스트 홈페이지의 사업안내, 입지환경, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};