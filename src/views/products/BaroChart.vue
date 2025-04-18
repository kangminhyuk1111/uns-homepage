<!-- src/views/products/BaroChart.vue -->
<template>
  <ProductPageTemplate
      title="Baro Chart"
      description="클라우드 기반의 모바일 병원정보시스템(HIS)으로 언제 어디서나 환자 정보에 접근할 수 있습니다."
      category="의료정보 솔루션"
      color="indigo"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../templates/ProductPageTemplate.vue';

export default {
  name: 'BaroChart',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '환자 정보 조회',
        description: '언제 어디서나 모바일 기기를 통해 환자 정보를 쉽고 빠르게 조회할 수 있습니다.'
      },
      {
        title: '환자 상태 모니터링',
        description: 'Vital Sign, 체중, 배액량 등 환자의 상태를 실시간으로 모니터링하고 기록할 수 있습니다.'
      },
      {
        title: '의료 정보 조회',
        description: '처방, 검사 결과, 간호 기록, 수진 이력 등 필요한 의료 정보를 한 곳에서 조회할 수 있습니다.'
      },
      {
        title: '의료 영상 조회',
        description: 'PACS/CDIS 등 이미지 솔루션과 연동하여 환자의 의료 영상을 모바일 기기에서 확인할 수 있습니다.'
      },
      {
        title: '클라우드 기반 서비스',
        description: '별도의 단말이나 서버 구축 없이 클라우드 기반으로 서비스를 제공하여 초기 비용을 절감합니다.'
      },
      {
        title: '커스터마이징 UI',
        description: '다양한 템플릿을 제공하여 병원의 요구에 맞게 자유롭게 UI를 커스터마이징할 수 있습니다.'
      },
      {
        title: 'FHIR 기반 연동',
        description: '국제 표준 FHIR를 기반으로 기존 시스템과의 연동이 쉽고 안정적입니다.'
      },
      {
        title: '강력한 보안 시스템',
        description: '단말복합인증, 데이터암호화, 소스코드난독화 등 강력한 보안 시스템으로 중요한 의료 정보를 안전하게 보호합니다.'
      }
    ];

    const caseStudies = [
      {
        title: '충북 P 대학병원',
        description: 'Baro Chart 도입으로 의료진이 회진 시 태블릿으로 환자 정보를 즉시 확인하고 처방을 입력할 수 있게 되어 업무 효율이 35% 향상되었습니다. 특히 응급 상황에서 신속한 의사결정이 가능해졌습니다.',
        location: '충청북도',
        date: '2023년'
      },
      {
        title: '제주 Q 병원',
        description: '여러 지점을 운영하는 의료 네트워크에 Baro Chart를 도입하여 어느 지점에서나 환자 정보를 일관되게 조회하고 관리할 수 있게 되었습니다. 이를 통해 환자 만족도와 진료 연속성이 크게 향상되었습니다.',
        location: '제주특별자치도',
        date: '2022년'
      },
      {
        title: '강원 R 의료원',
        description: '지역적 특성상 원격 의료 지원이 필요한 강원 지역에 Baro Chart를 도입하여 본원과 분원 간의 환자 정보 공유가 원활해졌습니다. 의료진의 이동 시간이 줄고 진료 효율이 50% 향상되었습니다.',
        location: '강원도',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: '어떤 모바일 기기에서 사용할 수 있나요?',
        answer: '안드로이드와 iOS 기반의 스마트폰과 태블릿 모두에서 사용할 수 있습니다. 또한 웹 브라우저를 통해 PC에서도 접근이 가능하여 어떤 환경에서도 유연하게 사용할 수 있습니다.'
      },
      {
        question: '기존 병원 시스템과의 연동은 어떻게 이루어지나요?',
        answer: 'FHIR(Fast Healthcare Interoperability Resources) 표준을 지원하여 다양한 병원 정보 시스템과 쉽게 연동됩니다. 기존에 사용 중인 시스템에 맞는 커넥터를 제공하거나 필요한 경우 커스텀 연동 솔루션을 개발하여 제공합니다.'
      },
      {
        question: '사용자 인증 및 보안은 어떻게 관리되나요?',
        answer: '다중 인증 방식을 지원하며, 최초 본인 인증 후에는 생체 인증(지문, 얼굴인식)을 통해 편리하게 접근할 수 있습니다. 또한 데이터 암호화, 접속 기록 관리, 세션 타임아웃 등 다양한 보안 기능을 제공합니다.'
      },
      {
        question: '의료 영상(PACS)과의 연동은 어떻게 이루어지나요?',
        answer: 'DICOM 표준을 지원하여 대부분의 PACS 시스템과 연동이 가능합니다. 의료 영상을 조회할 때는 고해상도 이미지를 효율적으로 전송하는 특수 알고리즘을 사용하여 모바일 환경에서도 빠르게 로딩됩니다.'
      },
      {
        question: '오프라인 상태에서도 사용 가능한가요?',
        answer: '네, 중요한 환자 정보는 로컬에 암호화되어 캐싱되므로 일시적으로 네트워크 연결이 끊어진 상황에서도 기본적인 정보 조회가 가능합니다. 연결이 복구되면 자동으로 최신 정보와 동기화됩니다.'
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