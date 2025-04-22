<!-- src/views/products/BaroKiosk.vue -->
<template>
  <ProductPageTemplate
      title="Baro Kiosk"
      description="안드로이드 기반 기기로 QR 출력 및 스캔이 가능하여 출입관리 및 물품관리에 사용이 용이한 키오스크입니다."
      category="관리 효율화 솔루션"
      color="teal"
      :features="features"
      :caseStudies="caseStudies"
      :faqs="faqs"
      :hardwareSpecs="hardwareSpecs"
  >
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </template>
  </ProductPageTemplate>
</template>

<script>
import ProductPageTemplate from '../templates/ProductPageTemplate.vue';

export default {
  name: 'BaroKiosk',
  components: {
    ProductPageTemplate
  },
  setup() {
    const features = [
      {
        title: '바코드/QR 스캔',
        description: '다양한 형태의 바코드와 QR코드를 빠르고 정확하게 스캔하여 출입증 및 물품 관리에 활용할 수 있습니다.'
      },
      {
        title: '바코드/QR 출력',
        description: '필요한 바코드와 QR코드를 즉시 생성하고 출력하여 출입증이나 물품 태그로 활용할 수 있습니다.'
      },
      {
        title: '방문객 출입 관리',
        description: '방문자 정보를 등록하고 임시 출입증을 발급하여 병원 내 보안을 강화하고 출입을 효율적으로 관리합니다.'
      },
      {
        title: '소모품 불출 관리',
        description: '병원 내 소모품 수령 및 사용 현황을 바코드 스캔으로 손쉽게 관리하여 재고 관리 효율성을 높입니다.'
      },
      {
        title: '다양한 용지 출력',
        description: '스티커 용지와 영수증 용지 모두 출력이 가능하여 다양한 용도로 활용할 수 있습니다.'
      },
      {
        title: '안드로이드 앱 호환',
        description: '안드로이드 기반 장치로, 필요에 따라 다양한 앱을 설치하여 기능을 확장할 수 있습니다.'
      }
    ];

    const caseStudies = [
      {
        title: '대구 G 대학병원',
        description: 'Baro Kiosk를 병원 로비에 설치하여 방문객 출입 관리를 자동화했습니다. 일일 방문자 500명 이상의 출입 관리 효율이 크게 향상되고, 보안 수준이 강화되었습니다.',
        location: '대구광역시',
        date: '2023년'
      },
      {
        title: '광주 H 종합병원',
        description: '약국과 물품 창고에 Baro Kiosk를 도입하여 소모품 불출 관리를 자동화했습니다. 재고 손실률이 15% 감소하고, 불출 처리 시간이 70% 단축되었습니다.',
        location: '광주광역시',
        date: '2022년'
      },
      {
        title: '경남 I 의료원',
        description: '코로나19 대응을 위해 출입구에 Baro Kiosk를 설치하여 방문객 QR 체크인 및 발열 확인을 통합 관리했습니다. 이를 통해 효율적인 방역 체계를 구축했습니다.',
        location: '경상남도',
        date: '2021년'
      }
    ];

    const faqs = [
      {
        question: 'Baro Kiosk는 어떤 운영체제를 사용하나요?',
        answer: 'Baro Kiosk는 안드로이드 운영체제를 기반으로 하며, 이를 통해 다양한 안드로이드 앱을 설치하고 활용할 수 있습니다. 필요에 따라 맞춤형 앱을 개발하여 특화된 기능을 구현할 수도 있습니다.'
      },
      {
        question: '출력 가능한 용지 종류는 어떤 것이 있나요?',
        answer: '스티커 용지와 영수증 용지 모두 출력이 가능합니다. 출입증용 스티커, 물품 관리용 바코드 라벨, 영수증 형태의 확인서 등 다양한 형태로 출력할 수 있어 병원 내 여러 업무에 활용할 수 있습니다.'
      },
      {
        question: '방문객 출입 관리는 어떻게 이루어지나요?',
        answer: '방문객이 키오스크에서 이름, 연락처, 방문 목적 등을 입력하면 시스템에 기록되고 QR 코드가 포함된 임시 출입증이 발급됩니다. 이 출입증으로 건물 내 출입구를 통과할 수 있으며, 출입 기록이 자동으로 관리됩니다.'
      },
      {
        question: '소모품 불출 관리는 어떤 방식으로 이루어지나요?',
        answer: '소모품을 불출할 때 키오스크에서 사용자 인증 후 필요한 물품의 바코드를 스캔하거나 목록에서 선택합니다. 불출 정보는 자동으로 기록되며, 재고 관리 시스템과 연동하여 실시간으로 재고 현황을 업데이트합니다.'
      },
      {
        question: '키오스크 하드웨어 사양은 어떻게 되나요?',
        answer: '안드로이드 기반의 키오스크 장비로, 정확한 사양은 도입 시 상담을 통해 맞춤형으로 제공됩니다. 기본적으로 바코드/QR 스캐너와 프린터가 탑재되어 있으며, 필요에 따라 카메라, 카드 리더기 등 추가 장비를 연동할 수 있습니다.'
      }
    ];

    // 하드웨어 사양 정보
    const hardwareSpecs = {
      title: 'Baro Kiosk SP18 하드웨어 사양',
      sections: [
        {
          title: '디스플레이',
          specs: [
            { name: '화면 크기', value: '15.6인치 (18.5인치 옵션 가능)' },
            { name: '해상도', value: '1920x1080@60Hz' },
            { name: '화면비', value: '16:9 (와이드)' },
            { name: '패널 타입', value: 'TFT-LCD, LED' },
            { name: '터치 방식', value: '10포인트 정전식 터치' },
            { name: '터치 응답 시간', value: '10ms' },
            { name: '밝기', value: '250cd/m²' }
          ]
        },
        {
          title: '시스템 사양',
          specs: [
            { name: 'CPU', value: 'Dual-core Cortex-A72 (1.8GHz) + Quad-core Cortex-A53 (1.4GHz)' },
            { name: '운영체제', value: 'Android 11' },
            { name: 'RAM', value: '4GB' },
            { name: '저장 공간', value: '32GB' },
            { name: '인터페이스', value: 'USB 2개, LAN 1개, DC 전원 1개' }
          ]
        },
        {
          title: '프린터 사양',
          specs: [
            { name: '인쇄 방식', value: '감열식 라벨 프린터' },
            { name: '인쇄 폭', value: '72mm 유효 인쇄 폭' },
            { name: '인쇄 속도', value: '80mm/초' },
            { name: '용지 규격', value: '40mm~79mm 폭 지원' },
            { name: '용지 절단 방식', value: '자동 용지 절단 (전체/반 절단)' },
            { name: '프린트 헤드 수명', value: '50km' }
          ]
        },
        {
          title: '스캐너 사양',
          specs: [
            { name: '스캔 코드 지원', value: '1D/2D 바코드, QR 코드' },
            { name: '읽기 정확도', value: '5mil' },
            { name: '스캔 각도', value: '기울기 ±55°, 편향 ±55°, 회전 360°' }
          ]
        },
        {
          title: '전원 및 환경',
          specs: [
            { name: '전원', value: 'DC 12V 7A' },
            { name: '작동 온도', value: '0°C ~ 40°C' },
            { name: '보관 온도', value: '-20°C ~ 55°C' },
            { name: '상대 습도', value: '작동 시 80% 이하, 보관 시 90% 이하' },
            { name: '크기', value: '173mm(W) x 198mm(H)' }
          ]
        },
        {
          title: '기능 및 인증',
          specs: [
            { name: '작동 시간', value: '24/7 연속 운영 가능' },
            { name: '소비 전력', value: '대기 모드 15W, 작동 모드 48W' },
            { name: 'IC 카드 지원', value: '내장 IC 카드 리더' },
            { name: '인증', value: 'KC, CE, FCC' }
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