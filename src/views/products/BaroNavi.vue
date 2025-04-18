<!-- src/views/products/BaroNavi.vue -->
<template>
  <ProductPageTemplate
      title="Baro Navi"
      description="병원을 방문하는 환자, 보호자가 원내 채혈실, 검사실 등으로 가는 길을 휴대폰 카메라를 이용해 안내 받을 수 있는 원내 길안내 앱입니다."
      category="환자 경험 향상 솔루션"
      color="green"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../templates/ProductPageTemplate.vue';

export default {
  name: 'BaroNavi',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '오늘의 목적지 조회',
        description: '환자번호 입력 또는 QR 출입증 스캔을 통해 당일 예약된 검사와 진료가 있는 목적지를 자동으로 조회할 수 있습니다.'
      },
      {
        title: '목적지 검색',
        description: '원하는 진료과, 검사실, 편의시설 등을 검색하여 손쉽게 경로를 확인할 수 있습니다.'
      },
      {
        title: '층별 안내',
        description: '건물별, 층별 지도를 제공하여 원하는 목적지를 쉽게 찾을 수 있습니다.'
      },
      {
        title: '모의 보행 기능',
        description: '병원 방문 전에 미리 경로를 확인하고 모의 보행을 통해 익숙해질 수 있습니다.'
      },
      {
        title: '카메라 기반 실시간 길안내',
        description: '스마트폰 카메라를 통해 현재 위치를 파악하고 화면에 실시간으로 이동 경로를 표시합니다.'
      },
      {
        title: '빠르고 정확한 안내',
        description: '복잡한 병원 구조에서도 최적의 동선을 파악하여 빠르고 정확하게 안내합니다.'
      }
    ];

    const caseStudies = [
      {
        title: '서울 J 대학병원',
        description: 'Baro Navi를 도입하여 환자 길 찾기 문의가 45% 감소했습니다. 특히 노년층 환자들의 병원 내 이동 시 스트레스가 크게 줄어들어 환자 만족도가 향상되었습니다.',
        location: '서울특별시',
        date: '2023년'
      },
      {
        title: '경기 K 병원',
        description: '신축 병원 개원과 함께 Baro Navi를 도입하여 초기부터 환자들의 원내 길 찾기를 지원했습니다. 복잡한 병원 구조에도 불구하고 환자들의 목적지 도달 시간이 평균 35% 단축되었습니다.',
        location: '경기도',
        date: '2022년'
      },
      {
        title: '부산 L 의료센터',
        description: '여러 건물로 이루어진 의료센터에 Baro Navi를 구축하여 건물 간 이동이 필요한 환자들을 위한 통합 길안내 시스템을 제공했습니다. 이를 통해 건물 간 이동 혼란이 크게 줄었습니다.',
        location: '부산광역시',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: 'Baro Navi 앱은 어디에서 다운로드할 수 있나요?',
        answer: '안드로이드 기기는 Google Play Store에서, iOS 기기는 App Store에서 다운로드할 수 있습니다. 또한 병원 로비에 설치된 QR 코드를 스캔하여 직접 다운로드 페이지로 이동할 수도 있습니다.'
      },
      {
        question: '카메라 기반 길안내는 어떤 기술을 사용하나요?',
        answer: 'AR(증강현실) 기술을 활용하여 스마트폰 카메라로 현재 위치를 인식하고, 실시간으로 화면에 방향 화살표와 경로를 표시합니다. 병원 내부에 설치된 특수 마커를 인식하여 정확한 위치를 파악하고 안내합니다.'
      },
      {
        question: '인터넷 연결 없이도 사용할 수 있나요?',
        answer: '기본적인 지도 데이터는 앱 설치 시 다운로드되어 오프라인에서도 사용 가능합니다. 하지만 실시간 정보 업데이트와 카메라 기반 AR 길안내 기능은 인터넷 연결이 필요할 수 있습니다. 대부분의 병원에는 무료 Wi-Fi가 제공됩니다.'
      },
      {
        question: '여러 병원에서 같은 앱을 사용할 수 있나요?',
        answer: '네, Baro Navi는 하나의 앱으로 여러 병원을 지원합니다. 앱 실행 시 현재 위치한 병원을 자동으로 인식하거나 목록에서 선택할 수 있어, 다양한 병원 방문 시에도 편리하게 이용할 수 있습니다.'
      },
      {
        question: '어떤 스마트폰에서 사용할 수 있나요?',
        answer: '카메라 기능이 있는 대부분의 안드로이드 스마트폰에서 사용 가능합니다. 보다 원활한 AR 길안내 기능 사용을 위해서는 최신 기종 사용을 권장합니다. iOS 버전도 개발 중이며 곧 출시될 예정입니다.'
      }
    ];

    return {
      features,
      caseStudies,
      faqs
    };
  }
};
</script>