import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "2,122세대 대단지 라이프를 완성하는 특화 커뮤니티",

  description:
    "힐스테이트 고덕엘리스트는 평택 고덕국제화계획지구 A31BL·A34BL·A35BL에 조성되는 총 2,122세대 브랜드 대단지로, 쾌적한 단지 배치와 여유로운 조경, 입주민의 일상을 고려한 커뮤니티 공간을 통해 고덕의 새로운 주거 가치를 제안합니다.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "힐스테이트 고덕엘리스트 2,122세대 브랜드 대단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "A31BL·A34BL·A35BL을 아우르는 대단지 설계",

      description:
        "평택 고덕국제화계획지구 3개 블록에 조성되는 힐스테이트 고덕엘리스트는 총 2,122세대 규모에 걸맞은 단지 계획을 바탕으로 채광, 통풍, 보행 동선, 조경 공간까지 고려한 쾌적한 주거환경을 제공합니다.",

      image: layoutImage,
      alt: "힐스테이트 고덕엘리스트 A31BL A34BL A35BL 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "일상의 품격을 높이는 힐스테이트 특화 설계",

      description:
        "브랜드 대단지의 규모감을 바탕으로 입주민의 생활 편의와 주거 만족도를 높이는 공간 설계를 적용하고, 단지 내 휴식과 여유를 누릴 수 있는 조경 및 외부 공간을 계획하여 차별화된 주거 가치를 완성합니다.",

      image: designImage,
      alt: "힐스테이트 고덕엘리스트 단지 특화설계",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "입주민의 일상을 풍요롭게 하는 커뮤니티 공간",

      description:
        "힐스테이트 고덕엘리스트는 운동, 휴식, 교류, 여가를 고려한 커뮤니티 공간을 통해 입주민의 생활 만족도를 높입니다. 전용 59㎡·84㎡ 중심의 실속 있는 주거 구성과 함께 대단지에서 누릴 수 있는 편리하고 여유로운 라이프스타일을 제공합니다.",

      image: communityImage,
      alt: "힐스테이트 고덕엘리스트 커뮤니티 시설",
    },
  ],
};