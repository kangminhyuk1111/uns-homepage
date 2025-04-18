<!-- src/views/products/BaroTalk.vue -->
<template>
  <ProductPageTemplate
      title="Baro Talk"
      description="의료진 전용 모바일 메신저로 높은 보안성과 함께 원활한 커뮤니케이션을 제공합니다."
      category="의료 커뮤니케이션 솔루션"
      color="cobalt"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../templates/ProductPageTemplate.vue';

export default {
  name: 'BaroTalk',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '워터마크 배경화면',
        description: '메시지 화면에 워터마크 배경을 적용하여 스크린샷 시에도 출처를 명확히 하고 정보 유출을 방지합니다.'
      },
      {
        title: '캡처 기능 차단',
        description: '스크린 캡처 기능을 차단하여 중요한 환자 정보와 의료진 간 커뮤니케이션 내용이 외부로 유출되는 것을 방지합니다.'
      },
      {
        title: '암호화된 정보 저장',
        description: '모든 데이터와 이미지를 암호화하여 저장하고, 단말에 저장되는 데이터를 최소화하여 높은 보안성을 유지합니다.'
      },
      {
        title: '파트/병동별 공지사항',
        description: '파트나 병동별로 그룹을 설정하여 공지사항을 게시하고 단체 채팅을 할 수 있습니다.'
      },
      {
        title: '소속 버디 목록 자동 갱신',
        description: '부서나 팀 변경 시 소속 버디 목록이 자동으로 갱신되어 항상 최신 조직도를 유지합니다.'
      },
      {
        title: 'HIS 데이터 송수신',
        description: '병원 정보 시스템(HIS)과 연동하여 환자 정보를 안전하게 송수신할 수 있습니다.'
      },
      {
        title: '너스콜 연동',
        description: 'Baro Call과 연동하여 환자의 콜 알림을 받고, 음성/영상 통화를 할 수 있습니다.'
      },
      {
        title: '통계 데이터 제공',
        description: '메시지 응답 시간, 주요 논의 주제 등의 통계 데이터를 제공하여 커뮤니케이션 효율성을 분석할 수 있습니다.'
      }
    ];

    const caseStudies = [
      {
        title: '충남 S 종합병원',
        description: 'Baro Talk 도입으로 의료진 간 커뮤니케이션 시간이 45% 단축되었으며, 특히 응급 상황에서의 대응 속도가 크게 향상되었습니다. 또한 보안 관련 우려 없이 환자 정보를 안전하게 공유할 수 있게 되었습니다.',
        location: '충청남도',
        date: '2023년'
      },
      {
        title: '대전 T 대학병원',
        description: '500명 이상의 의료진이 Baro Talk을 사용하여 부서 간 협업이 원활해졌습니다. 병동별 공지사항 기능을 통해 정보 전달 오류가 80% 감소했으며, HIS 연동으로 환자 정보 조회가 간소화되었습니다.',
        location: '대전광역시',
        date: '2022년'
      },
      {
        title: '경기 U 메디컬센터',
        description: 'Baro Talk과 Baro Call을 통합 도입하여 너스콜 응대 효율이 70% 향상되었습니다. 의료진이 이동 중에도 환자 요청에 신속하게 대응할 수 있게 되어 환자 만족도가 크게 높아졌습니다.',
        location: '경기도',
        date: '2023년'
      }
    ];

    const faqs = [
      {
        question: '보안 기능은 어떻게 작동하나요?',
        answer: '워터마크 배경, 캡처 차단, 데이터 암호화 등 다중 보안 레이어를 적용합니다. 워터마크에는 사용자 ID와 타임스탬프가 포함되어 정보 유출 시 출처 추적이 가능하며, 앱 내 모든 데이터는 강력한 암호화 알고리즘으로 보호됩니다.'
      },
      {
        question: '어떤 기기에서 사용할 수 있나요?',
        answer: 'Android와 iOS 기반의 스마트폰과 태블릿에서 모두 사용 가능합니다. 각 플랫폼의 특성에 맞게 최적화되어 있으며, 동일한 계정으로 여러 기기에서 로그인하여 사용할 수도 있습니다.'
      },
      {
        question: 'HIS 연동은 어떤 정보까지 가능한가요?',
        answer: '기본적인 환자 정보, 검사 결과, 처방 내역 등 HIS에서 제공하는 대부분의 정보를 Baro Talk에서 조회할 수 있습니다. 병원의 보안 정책에 따라 조회 가능한 정보의 범위를 설정할 수 있으며, 모든 정보 접근은 로그로 기록됩니다.'
      },
      {
        question: '파트/병동별 공지사항은 어떻게 관리되나요?',
        answer: '관리자 권한이 있는 사용자가 특정 파트나 병동을 대상으로 공지사항을 등록하고 관리할 수 있습니다. 중요도에 따라 상단 고정이 가능하며, 읽음 확인 기능을 통해 공지사항 전달 현황을 확인할 수 있습니다.'
      },
      {
        question: '너스콜 연동 시 어떤 기능을 사용할 수 있나요?',
        answer: 'Baro Call과 연동 시 환자의 콜 알림을 즉시 받을 수 있으며, 앱 내에서 바로 음성 또는 영상 통화로 응대할 수 있습니다. 또한 콜 히스토리를 확인하고, 필요한 경우 다른 의료진에게 콜을 전달할 수도 있습니다.'
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