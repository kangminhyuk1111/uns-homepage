<!-- src/views/products/BaroPop.vue -->
<template>
  <ProductPageTemplate
      title="Baro Pop"
      description="AI를 이용하여 대기시간을 보다 정확하게 실시간으로 표출하는 클라우드 기반의 전광판 솔루션입니다."
      category="환자 경험 향상 솔루션"
      color="cyan"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../ProductPageTemplate.vue';

export default {
  name: 'BaroPop',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '대기시간 실시간 표출',
        description: 'AI를 활용하여 현재 대기 상황에 따른 정확한 대기시간을 실시간으로 표시합니다.'
      },
      {
        title: '환자 정보 표출 및 호출',
        description: '고객(환자) 번호와 이름을 표시하고 음성으로 호출하여 효율적인 대기 관리가 가능합니다.'
      },
      {
        title: '안내 메시지 표출 및 호출',
        description: '중요 안내사항을 텍스트로 표시하고 음성으로 전달하여 환자 안내를 강화합니다.'
      },
      {
        title: '콘텐츠 관리',
        description: '페이지 전환, 이미지 전환, 다중 영상 연속 재생 등 다양한 콘텐츠 관리가 가능합니다.'
      },
      {
        title: '스마트폰 조회 기능',
        description: '환자가 스마트폰으로 전광판 내용을 직접 조회할 수 있어 편리한 대기 환경을 제공합니다.'
      },
      {
        title: '맞춤형 템플릿',
        description: '병원 환경에 맞는 다양한 템플릿을 제공하며, 필요에 따라 커스터마이징이 가능합니다.'
      },
      {
        title: '간편한 설치 및 연동',
        description: '셋톱박스를 TV/모니터에 연결하여 손쉽고 빠르게 연동할 수 있습니다.'
      },
      {
        title: '클라우드 기반 시스템',
        description: '별도의 서버 구축 없이 클라우드 기반으로 저렴한 비용에 서비스를 이용할 수 있습니다.'
      }
    ];

    const caseStudies = [
      {
        title: '서울 D 종합병원',
        description: 'Baro Pop 도입으로 환자 대기시간 인식이 30% 감소하고, 대기 관련 민원이 40% 줄었습니다. 병원 로비와 각 진료과에 설치하여 환자 만족도를 크게 향상시켰습니다.',
        location: '서울특별시',
        date: '2023년'
      },
      {
        title: '인천 E 의료센터',
        description: '15개 진료과에 Baro Pop을 도입하여 실시간 대기시간 표시와 음성 호출 시스템으로 환자 흐름을 개선했습니다. 대기공간의 혼잡도가 감소하고 환자 경험이 개선되었습니다.',
        location: '인천광역시',
        date: '2022년'
      },
      {
        title: '경기 F 병원',
        description: '외래 진료 대기실에 Baro Pop을 설치하고 스마트폰 연동 시스템을 활용하여 환자들이 대기 순서를 실시간으로 확인할 수 있게 했습니다. 이를 통해 환자 체류 시간을 15% 단축했습니다.',
        location: '경기도',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: 'Baro Pop은 어떤 하드웨어가 필요한가요?',
        answer: '기본적으로 Baro Pop 셋톱박스와 이를 연결할 TV나 모니터가 필요합니다. 셋톱박스는 Quad Core CPU, Android 13 OS, 4GB RAM을 탑재하고 2.4G/5G 듀얼밴드 WiFi 및 Bluetooth v5.0을 지원합니다. 크기는 107 x 107 x 21mm로 컴팩트합니다.'
      },
      {
        question: '전광판 내용을 스마트폰으로 확인하는 방법은 어떻게 되나요?',
        answer: '환자들이 QR코드를 스캔하거나 전용 앱을 통해 현재 대기 상황과 본인의 순서를 스마트폰으로 직접 확인할 수 있습니다. 이를 통해 대기 공간에서 벗어나도 자신의 순서를 놓치지 않을 수 있습니다.'
      },
      {
        question: '템플릿 커스터마이징은 어떻게 이루어지나요?',
        answer: '여러 기본 템플릿을 제공하며, 관리자 페이지를 통해 병원의 로고, 색상, 레이아웃 등을 손쉽게 변경할 수 있습니다. 더 복잡한 커스터마이징이 필요한 경우 전문 지원팀의 도움을 받을 수 있습니다.'
      },
      {
        question: 'AI를 통한 대기시간 예측은 얼마나 정확한가요?',
        answer: '실제 대기 데이터를 학습하여 시간대별, 요일별, 진료과별 특성을 반영해 대기시간을 예측합니다. 일반적인 경우 90% 이상의 정확도를 보이며, 시스템 사용 기간이 길어질수록 더 정확해집니다.'
      },
      {
        question: '영상 및 이미지 콘텐츠 관리는 어떻게 하나요?',
        answer: '클라우드 관리자 페이지를 통해 영상, 이미지, 안내 메시지 등의 콘텐츠를 업로드하고 재생 순서와 시간을 설정할 수 있습니다. 진료과별로 다른 콘텐츠를 설정할 수도 있어 맞춤형 정보 제공이 가능합니다.'
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