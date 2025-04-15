<!-- src/views/products/BaroCall.vue -->
<template>
  <ProductPageTemplate
      title="Baro Call"
      description="기존 아날로그 방식의 너스콜 시스템을 무선 스마트기기를 이용하는 디지털 너스콜 시스템으로 환자 케어를 혁신합니다."
      category="디지털 너스콜 솔루션"
      color="orange"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../../views/ProductPageTemplate.vue';

export default {
  name: 'BaroCall',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '양방향 음성통화',
        description: '환자와 간호사 간 양방향 음성통화를 지원하여 환자의 요구를 정확히 파악하고 효율적으로 대응할 수 있습니다.'
      },
      {
        title: '양방향 영상통화',
        description: '영상통화 기능을 통해 환자 상태를 원격으로 확인하고, 시각적인 소통을 통해 환자 안전을 강화합니다.'
      },
      {
        title: '환자정보 Display',
        description: '스테이션의 화면을 통해 환자의 기본 정보 및 상태를 한눈에 빠르게 확인할 수 있습니다.'
      },
      {
        title: '환자를 위한 정보 제공',
        description: '병상 태블릿을 통해 회진/검사 및 수술 일정 등의 알림을 제공하고, 교육 영상 재생이나 식단 메뉴 선택 기능을 지원합니다.'
      },
      {
        title: '클라우드 관리자 페이지',
        description: '클라우드 기반 관리자 페이지를 통해 손쉬운 정보 업데이트와 시스템 커스터마이징이 가능합니다.'
      },
      {
        title: '환자용 NurseCall App',
        description: '환자 자신의 스마트폰으로도 너스콜을 이용할 수 있는 전용 앱을 제공합니다.'
      },
      {
        title: '데이터 암호화',
        description: '모든 통신과 데이터는 암호화되어 환자 정보를 안전하게 보호합니다.'
      },
      {
        title: '아날로그-디지털 통합',
        description: '기존의 아날로그 버튼과 디스플레이 내 디지털 버튼을 동시에 사용할 수 있어 쉬운 전환이 가능합니다.'
      }
    ];

    const caseStudies = [
      {
        title: '서울 V 대학병원',
        description: 'Baro Call 도입으로 간호사의 불필요한 이동 시간이 60% 감소하고, 환자 응대 시간이 40% 단축되었습니다. 특히 영상통화 기능을 통해 환자 상태를 원격으로 확인할 수 있어 위급 상황 대응 속도가 크게 향상되었습니다.',
        location: '서울특별시',
        date: '2023년'
      },
      {
        title: '부산 W 종합병원',
        description: '300개 병상에 Baro Call을 설치하여 환자 만족도가 85% 향상되었습니다. 태블릿을 통한 교육 영상 제공과 식단 선택 기능이 환자 경험을 크게 개선했으며, 간호사 업무 효율성도 크게 향상되었습니다.',
        location: '부산광역시',
        date: '2022년'
      },
      {
        title: '대구 X 의료원',
        description: 'Baro Call과 Baro Talk을 통합 운영하여 의료진 간 협업이 원활해지고 환자 케어 품질이 향상되었습니다. 특히 중환자실에서 환자 상태 모니터링과 빠른 대응이 가능해져 응급 상황 대처 능력이 크게 강화되었습니다.',
        location: '대구광역시',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: 'Baro Call 도입 시 기존 너스콜 시스템과의 호환성은 어떻게 되나요?',
        description: '기존 아날로그 버튼과 디스플레이 내 디지털 버튼을 동시에 사용할 수 있어 쉬운 전환이 가능합니다.'
      },
      {
        question: '기존 아날로그 시스템에서 전환이 어렵지 않나요?',
        answer: 'Baro Call은 기존 아날로그 너스콜 버튼과 호환되도록 설계되어 있어 단계적 전환이 가능합니다. 기존 버튼을 유지한 채로 디지털 시스템을 추가하거나, 완전한 디지털 시스템으로 전환하는 등 병원 상황에 맞게 유연하게 구축할 수 있습니다.'
      },
      {
        question: '필요한 하드웨어는 무엇인가요?',
        answer: '기본적으로 간호사 스테이션용 태블릿, 환자 병상용 태블릿 또는 수화기, 그리고 필요한 경우 기존 버튼 연동 장치가 필요합니다. 모든 장비는 무선 네트워크로 연결되어 설치가 간편하고 이동이 자유롭습니다.'
      },
      {
        question: '환자는 어떤 기능을 이용할 수 있나요?',
        answer: '환자는 병상 태블릿을 통해 간호사 호출, 음성/영상 통화, 회진 및 검사 일정 확인, 교육 영상 시청, 식단 메뉴 선택 등의 기능을 이용할 수 있습니다. 또한 자신의 스마트폰에 NurseCall 앱을 설치하여 동일한 기능을 이용할 수도 있습니다.'
      },
      {
        question: '데이터 보안은 어떻게 관리되나요?',
        answer: '모든 통신은 암호화되어 전송되며, 환자 정보는 보안 프로토콜에 따라 안전하게 관리됩니다. 클라우드 서버는 의료정보 보안 기준을 준수하며, 주기적인 보안 업데이트와 모니터링을 통해 데이터 안전을 보장합니다.'
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