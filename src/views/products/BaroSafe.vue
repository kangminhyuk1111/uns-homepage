<!-- src/views/products/BaroSafe.vue -->
<template>
  <ProductPageTemplate
      title="Baro Safe"
      description="바코드/RFID를 이용한 환자 안전 확보와 간호 업무 효율 향상 시스템입니다."
      category="환자 안전 솔루션"
      color="blue"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-lightBlue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../../views/ProductPageTemplate.vue';

export default {
  name: 'BaroSafe',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '바코드 체계',
        description: '환자, 약품, 의료진, 장비 등에 대한 체계적인 바코드 체계를 구축하여 환자 안전과 효율적인 의료 서비스를 제공합니다.'
      },
      {
        title: '투약 및 처치/수액 관리',
        description: '투약 및 처치, 수액 관리 시 바코드 스캔을 통해 정확한 환자와 약물을 매칭하여 투약 오류를 방지합니다.'
      },
      {
        title: '수술 전 환자 정보 관리',
        description: '수술 전 환자 확인, 수술 부위 표시, 알레르기 확인 등을 바코드 시스템을 통해 체계적으로 관리합니다.'
      },
      {
        title: '채혈/수혈/Vital Sign 입력',
        description: '채혈과 수혈 과정에서 환자 확인을 통해 오류를 방지하고, 바이탈 사인 측정값을 정확하게 기록합니다.'
      },
      {
        title: '마약/항정의약품 관리',
        description: '엄격한 관리가 필요한 마약과 항정신성 의약품의 사용, 재고, 폐기를 철저히 관리합니다.'
      },
      {
        title: '금식/영양',
        description: '환자의 금식 여부와 영양 상태를 체계적으로 관리하고 모니터링합니다.'
      },
      {
        title: '기타 검체 불출/수거 관리',
        description: '다양한 검체의 불출과 수거 과정을 체계적으로 관리하여 검체 오류를 방지합니다.'
      },
      {
        title: '상처 부위 사진 관리',
        description: '환자의 상처 부위 사진을 시간별로 기록하고 관리하여 치료 경과를 효과적으로 모니터링합니다.'
      }
    ];

    const caseStudies = [
      {
        title: '울산 M 종합병원',
        description: 'Baro Safe 도입으로 투약 오류가 95% 감소했으며, 간호사의 투약 관련 업무 시간이 30% 단축되었습니다. 환자 안전 지표가 크게 향상되어 의료 서비스 신뢰도가 높아졌습니다.',
        location: '울산광역시',
        date: '2023년'
      },
      {
        title: '경북 N 대학병원',
        description: '중환자실에 Baro Safe를 도입하여 고위험 약물 관리와 환자 안전을 강화했습니다. 위험 상황 발생률이 85% 감소하고, 의료진의 업무 효율이 40% 향상되었습니다.',
        location: '경상북도',
        date: '2022년'
      },
      {
        title: '전남 O 의료원',
        description: '환자 안전을 위한 통합 시스템으로 Baro Safe를 도입했습니다. 특히 수술 전 환자 확인과 수술 부위 표시 오류가 0건으로 감소하여 환자 안전이 크게 향상되었습니다.',
        location: '전라남도',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: 'Baro Safe 도입을 위한 초기 세팅은 어떻게 이루어지나요?',
        answer: '초기 도입 시 병원의 기존 바코드 체계 분석 및 최적화를 진행하고, 필요한 하드웨어(바코드 스캐너, 프린터 등)를 설치합니다. 또한 병원 정보 시스템(HIS)과의 연동 작업을 수행하며, 의료진 대상 사용 교육을 실시합니다.'
      },
      {
        question: '기존 병원 정보 시스템(HIS)과의 연동이 가능한가요?',
        answer: '네, Baro Safe는 다양한 병원 정보 시스템과 연동이 가능하도록 설계되었습니다. 표준 프로토콜을 지원하며 필요한 경우 커스텀 연동 모듈을 개발하여 원활한 데이터 교환이 가능합니다.'
      },
      {
        question: '투약 안전을 위한 구체적인 프로세스는 어떻게 되나요?',
        answer: '간호사는 먼저 자신의 ID 바코드를 스캔하여 인증한 후, 환자의 손목 밴드 바코드를 스캔하여 환자를 확인합니다. 이후 약품 바코드를 스캔하여 시스템이 처방 내용과 일치하는지 자동으로 확인합니다. 불일치 시 경고 알림이 발생하여 투약 오류를 미연에 방지합니다.'
      },
      {
        question: '모바일 기기를 통한 접근이 가능한가요?',
        answer: '네, 태블릿이나 스마트폰 등 모바일 기기를 통해 Baro Safe 시스템에 접근할 수 있습니다. 이를 통해 의료진이 병상 곁에서 바로 환자 정보를 확인하고 필요한 조치를 기록할 수 있어 효율성이 높아집니다.'
      },
      {
        question: '환자 안전 지표 모니터링이 가능한가요?',
        answer: '네, Baro Safe는 투약 오류, 환자 식별 오류, 수술 부위 표시 오류 등 다양한 환자 안전 지표를 자동으로 수집하고 분석합니다. 대시보드를 통해 실시간으로 지표를 모니터링할 수 있으며, 정기적인 리포트도 제공됩니다.'
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