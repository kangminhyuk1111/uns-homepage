<template>
  <ProductPageTemplate
      title="Baro Paper"
      description="다양한 비즈니스 환경에 최적화된 저전력, 장시간 사용 가능한 디스플레이 솔루션"
      category="디지털 사이니지"
      color="blue"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
      :hardwareSpecs="hardwareSpecs"
  >
    <!-- 커스텀 아이콘 슬롯 -->
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </template>

    <!-- 기능 아이콘 -->
    <template #feature-icon-0>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </template>

    <template #feature-icon-1>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </template>

    <template #feature-icon-2>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../templates/ProductPageTemplate.vue';

export default {
  name: 'ESL',
  components: {
    ProductPageTemplate
  },
  data() {
    return {
      features: [
        {
          title: "저전력 소비",
          description: "Baro Paper 기술을 활용한 전자잉크 디스플레이는 일반 LCD 대비 전력 소비가 최대 97% 낮아 장기간 배터리 사용이 가능합니다.",
          showDetails: false,
          additionalInfo: "최소 1년에서 최대 5년까지 배터리 지속 가능"
        },
        {
          title: "다양한 색상 표현",
          description: "최대 6색상(블랙/화이트/레드/옐로우/블루/그린)을 지원하여 다양한 정보를 시각적으로 표현할 수 있습니다.",
          showDetails: false,
          additionalInfo: "기존 흑백 디스플레이 대비 더 다양한 정보 전달 가능"
        },
        {
          title: "눈 편안함",
          description: "Baro Paper 디스플레이는 백라이트가 없어 눈의 피로를 줄이고, 자연광 아래에서도 선명한 가독성을 제공합니다.",
          showDetails: false,
          additionalInfo: "블루라이트 방출이 적어 장시간 사용에도 눈 건강을 보호합니다."
        }
      ],
      caseStudies: [
        {
          title: "대형 병원 안내 시스템",
          description: "3000병상 규모의 대학병원에서 환자 안내 및 정보 제공을 위해 13.3인치 RS133 모델 도입",
          location: "서울 종합병원",
          date: "2023년"
        },
        {
          title: "제약회사 회의실 솔루션",
          description: "글로벌 제약회사의 회의실 100곳에 양면 디스플레이 RS075V 모델 설치",
          location: "다국적 제약기업",
          date: "2022년"
        },
        {
          title: "리테일 가격표 시스템",
          description: "대형 마트 체인에 7.3인치 RS075 모델 5000대 도입으로 종이 가격표 대체",
          location: "전국 유통체인",
          date: "2023년"
        }
      ],
      faqs: [
        {
          question: "Baro Paper 디스플레이의 수명은 얼마인가요?",
          answer: "Baro Paper 디스플레이의 평균 수명은 일반적인 사용 환경에서 약 5-7년입니다. 업데이트 빈도와 사용 환경에 따라 다를 수 있습니다."
        },
        {
          question: "배터리 교체는 어떻게 하나요?",
          answer: "대부분의 Baro Paper 디스플레이 제품은 충전식 배터리가 내장되어 있어 별도의 배터리 교체가 필요하지 않습니다. 배터리 수명이 다한 경우 당사의 기술 지원 센터에 문의해 주세요."
        },
        {
          question: "컨텐츠 업데이트는 어떻게 이루어지나요?",
          answer: "Wi-Fi, 블루투스 또는 전용 네트워크를 통해 원격으로 컨텐츠를 업데이트할 수 있습니다. 전용 관리 소프트웨어를 통해 중앙 집중식으로 모든 디스플레이를 관리할 수 있습니다."
        },
        {
          question: "실외에서도 사용 가능한가요?",
          answer: "일부 모델은 IP54 등급의 방수/방진 기능을 갖추고 있어 제한된 실외 환경에서 사용 가능합니다. 그러나 직사광선이나 극단적인 온도에 장시간 노출은 피하는 것이 좋습니다."
        }
      ],
      hardwareSpecs: {
        title: "다양한 환경에 최적화된 Baro Paper 디스플레이 제품군의 상세 사양",
        sections: [
          {
            title: "Rainbow Series - RS133",
            specs: [
              {
                name: "모델명",
                value: "RS133"
              },
              {
                name: "제품크기",
                value: "304 × 233 × 10.3 mm"
              },
              {
                name: "스크린 사이즈",
                value: "13.3인치"
              },
              {
                name: "표현 색상",
                value: "블랙/화이트/레드/옐로우/블루/그린"
              },
              {
                name: "제품 무게",
                value: "760g"
              },
              {
                name: "배터리 지속시간",
                value: "1년 (하루 3회 업데이트 기준)"
              },
              {
                name: "스크린 타입",
                value: "도트 매트릭스 전자잉크 스크린"
              },
              {
                name: "제품 설명",
                value: "6색 Baro Paper 사이니지"
              }
            ]
          },
          {
            title: "Rainbow Series - RS075",
            specs: [
              {
                name: "모델명",
                value: "RS075"
              },
              {
                name: "제품크기",
                value: "182.5 × 128.9 × 16.3 mm"
              },
              {
                name: "스크린 사이즈",
                value: "7.3인치"
              },
              {
                name: "표현 색상",
                value: "블랙/화이트/레드/옐로우/블루/그린"
              },
              {
                name: "제품 무게",
                value: "316g"
              },
              {
                name: "배터리 지속시간",
                value: "5년 (하루 5회 업데이트 기준)"
              },
              {
                name: "스크린 타입",
                value: "도트 매트릭스 전자잉크 스크린"
              },
              {
                name: "제품 설명",
                value: "6색 싱글 스크린 라벨"
              }
            ]
          },
          {
            title: "DS Slim Series - DS116",
            specs: [
              {
                name: "모델명",
                value: "DS116"
              },
              {
                name: "제품크기",
                value: "263.8 × 193.8 × 8.2 mm"
              },
              {
                name: "스크린 사이즈",
                value: "11.6인치"
              },
              {
                name: "표현 색상",
                value: "블랙/화이트/레드"
              },
              {
                name: "제품 무게",
                value: "495g"
              },
              {
                name: "배터리 지속시간",
                value: "5년 (하루 5회 업데이트 기준)"
              },
              {
                name: "스크린 타입",
                value: "도트 매트릭스 전자잉크 스크린"
              },
              {
                name: "제품 설명",
                value: "울트라 씬 E-페이퍼 사이니지"
              }
            ]
          },
          {
            title: "Conference Table Series - RS075V",
            specs: [
              {
                name: "모델명",
                value: "RS075V"
              },
              {
                name: "제품크기",
                value: "179.5 × 123.3 × 88.3 mm"
              },
              {
                name: "스크린 사이즈",
                value: "7.3인치 × 2 (양면)"
              },
              {
                name: "표현 색상",
                value: "블랙/화이트/레드/옐로우/블루/그린"
              },
              {
                name: "제품 무게",
                value: "380g"
              },
              {
                name: "배터리 지속시간",
                value: "8개월 (한 번 충전, 하루 5회 업데이트 기준)"
              },
              {
                name: "스크린 타입",
                value: "도트 매트릭스 전자잉크 스크린"
              },
              {
                name: "적용 환경",
                value: "회의실, 은행 카운터, 리셉션 데스크, 상담 데스크"
              },
              {
                name: "제품 설명",
                value: "V형 양면 전자 테이블 사인"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>