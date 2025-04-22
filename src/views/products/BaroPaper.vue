<!-- src/views/products/BaroPaper.vue -->
<template>
  <ProductPageTemplate
      title="Baro Paper"
      description="클라우드 기반의 E-Paper로 병원 업무를 효율적으로 관리하세요. 환자 정보, 의료진 정보, 회진 시간 등을 전자적으로 표시하여 페이퍼리스 환경을 구축합니다."
      category="업무 효율화 솔루션"
      color="blue"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
      :hardwareSpecs="hardwareSpecs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../templates/ProductPageTemplate.vue';

export default {
  name: 'BaroPaper',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '환자 정보 표시',
        description: '이름, 성별, 나이 등의 환자 정보와 입원 및 퇴원 예정 일자를 전자적으로 표시합니다.'
      },
      {
        title: '의료 정보 표시',
        description: '진료과, 지정의, 주치의 등의 의료 정보를 명확하게 표시하여 환자와 의료진의 정보 접근성을 높입니다.'
      },
      {
        title: '회진 정보 표시',
        description: '회진 요일 및 시간 정보를 표시하여 환자와 보호자에게 사전 정보를 제공합니다.'
      },
      {
        title: '주의 정보 표시',
        description: '낙상, 욕창 등 환자 케어 시 주의해야 할 정보를 명확하게 표시하여 안전한 의료 환경을 조성합니다.'
      },
      {
        title: '비용 절감',
        description: '용지, 폐기, 프린터, 인건비 등을 크게 절감할 수 있어 병원 운영 비용을 효율화합니다.'
      },
      {
        title: '실시간 정보 갱신',
        description: '게이트웨이(중앙제어)를 통한 신속한 정보 업데이트로 항상 최신 정보를 환자와 의료진에게 제공합니다.'
      },
      {
        title: '템플릿 제공',
        description: '다양한 템플릿 제공 및 손쉬운 정보 수정, 미리보기 기능으로 관리의 편의성을 높였습니다.'
      },
      {
        title: '클라우드 기반 시스템',
        description: '별도의 서버 구축 없이 클라우드 기반으로 저렴한 비용에 서비스를 이용할 수 있습니다.'
      }
    ];

    const caseStudies = [
      {
        title: '서울 A 대학병원',
        description: 'Baro Paper 도입으로 병동 간호사들의 업무 효율이 30% 향상되었으며, 연간 종이 비용 2,000만원 절감 효과를 경험했습니다.',
        location: '서울특별시',
        date: '2023년'
      },
      {
        title: '부산 B 종합병원',
        description: '100개 병상에 Baro Paper를 설치하여 실시간 환자 정보 관리 및 회진 시간 안내로 환자 만족도가 크게 향상되었습니다.',
        location: '부산광역시',
        date: '2022년'
      },
      {
        title: '대전 C 의료원',
        description: '종이 차트와 공지사항을 Baro Paper로 대체하여 정보 전달 시간을 90% 단축하고 환경친화적 병원 이미지를 구축했습니다.',
        location: '대전광역시',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: 'Baro Paper 설치에 필요한 인프라는 무엇인가요?',
        answer: 'Baro Paper는 게이트웨이와 ESL(전자 가격표시기) 장비만 있으면 설치가 가능합니다. 클라우드 기반으로 운영되기 때문에 별도의 서버 구축이 필요 없어 초기 투자 비용이 적습니다.'
      },
      {
        question: '다양한 정보를 표시할 수 있나요?',
        answer: '네, 환자 정보(이름/성별/나이), 입원 및 퇴원 예정 일자, 진료과/지정의/주치의 정보, 회진 요일 및 시간, 낙상/욕창 등 주의 정보 등 다양한 정보를 표시할 수 있습니다.'
      },
      {
        question: '정보 업데이트는 어떻게 이루어지나요?',
        answer: '게이트웨이(중앙제어)를 통해 신속하게 정보가 업데이트됩니다. 관리자는 템플릿 기반으로 손쉽게 정보를 수정하고 미리보기할 수 있습니다.'
      },
      {
        question: 'ESL의 종류와 사양은 어떻게 되나요?',
        answer: '다양한 크기와 사양의 ESL을 제공하고 있으며, 병상 환경에 맞는 최적의 디스플레이를 선택할 수 있습니다. 자세한 사양은 문의 시 안내해 드립니다.'
      },
      {
        question: '비용 절감 효과는 어느 정도인가요?',
        answer: '일반적으로 종이 용지, 프린터 유지보수, 폐기 비용, 정보 갱신을 위한 인건비 등을 고려했을 때, 중장기적으로 상당한 비용 절감 효과가 있습니다. 병원 규모와 기존 시스템에 따라 차이가 있으므로 상담을 통해 자세한 분석이 가능합니다.'
      }
    ];

    // ESL 하드웨어 사양 정보
    const hardwareSpecs = {
      title: 'Baro Paper E-Paper 디스플레이 사양 (Minew ESL 기반)',
      sections: [
        {
          title: 'E-Paper 디스플레이',
          specs: [
            { name: '디스플레이 유형', value: 'E-ink (전자종이) 디스플레이' },
            { name: '디스플레이 크기', value: '1.54", 2.13", 2.9", 4.2" 등 다양한 크기 옵션' },
            { name: '해상도', value: '크기별 상이 (2.9" 기준 296x128 픽셀)' },
            { name: '색상', value: '흑백 (일부 모델 3색 지원: 흑백적 또는 흑백황)' },
            { name: '가시각도', value: '거의 180° 전방향' },
            { name: 'LED 표시등', value: '상태 표시를 위한 다색 LED 내장' }
          ]
        },
        {
          title: '전원 및 배터리',
          specs: [
            { name: '배터리 유형', value: 'CR2450/CR2477 버튼 셀 배터리 (교체 가능)' },
            { name: '배터리 용량', value: '620mAh (CR2477 기준)' },
            { name: '배터리 수명', value: '정보 갱신 빈도에 따라 3-5년 (일 8회 업데이트 기준)' },
            { name: '저전력 모드', value: '자동 저전력 관리 시스템 내장' },
            { name: '전력 소비', value: '업데이트 시 ~10mA, 대기 시 ~10μA' }
          ]
        },
        {
          title: '통신 사양',
          specs: [
            { name: '무선 통신', value: '2.4GHz (Bluetooth LE 5.0 기반)' },
            { name: '통신 거리', value: '실내 환경 기준 최대 30m' },
            { name: '통신 프로토콜', value: '독자 암호화 프로토콜로 데이터 보안 강화' },
            { name: '업데이트 속도', value: '이미지 크기에 따라 2-5초 내 정보 갱신' },
            { name: '연결 안정성', value: '메시 네트워크 지원으로 안정적인 연결 유지' }
          ]
        },
        {
          title: '게이트웨이 사양',
          specs: [
            { name: '프로세서', value: 'Cortex-M4 내장' },
            { name: '통신 방식', value: 'Wi-Fi, Ethernet, 4G LTE(옵션)' },
            { name: '관리 가능 ESL', value: '단일 게이트웨이당 최대 500대 ESL 관리 가능' },
            { name: '설치 방식', value: '벽면 또는 천장 설치 (마운팅 키트 포함)' },
            { name: '전원 공급', value: 'DC 5V 어댑터 또는 PoE(Power over Ethernet)' }
          ]
        },
        {
          title: '물리적 특성',
          specs: [
            { name: '크기', value: '모델별 상이 (2.9" 기준 89mm × 40.3mm × 11.8mm)' },
            { name: '무게', value: '모델별 상이 (2.9" 기준 38g, 배터리 포함)' },
            { name: '방수/방진', value: 'IP54 등급 (제한적 방수/방진)' },
            { name: '작동 온도', value: '0°C ~ 40°C' },
            { name: '보관 온도', value: '-10°C ~ 50°C' },
            { name: '설치 방식', value: '다양한 설치 옵션 (벽면 부착, 스탠드, 자석 부착 등)' }
          ]
        },
        {
          title: '추가 기능',
          specs: [
            { name: 'NFC 태그', value: '일부 모델 NFC 내장으로 근접 정보 교환 가능' },
            { name: '페이지 지원', value: '최대 4개 페이지 전환 표시 가능' },
            { name: '이미지 포맷', value: 'BMP, JPG, PNG 등 지원' },
            { name: '폰트 지원', value: '다국어 폰트 지원 (한글, 영문, 중문, 일문 등)' },
            { name: '클라우드 관리', value: '웹 기반 클라우드 관리 시스템 제공' },
            { name: 'API 연동', value: 'RESTful API 제공으로 기존 시스템과 연동 용이' }
          ]
        }
      ]
    };

    return {
      features,
      caseStudies,
      faqs,
      hardwareSpecs
    };
  }
};
</script>