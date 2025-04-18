<!-- src/views/ProductsOverview.vue -->
<template>
  <div class="w-full min-h-screen">
    <!-- 헤더 -->
    <MainHeader />

    <!-- 컨텐츠 영역 - 헤더 높이만큼 여백 추가 -->
    <div class="pt-20">
      <!-- 제품 목록 페이지 헤더 -->
      <section class="py-16 bg-gray-50">
        <div class="container-layout mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl text-gray-800 font-bold mb-4">의료 솔루션 제품군</h1>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">혁신적인 디지털 의료 솔루션으로 의료 환경과 환자 경험을 개선하세요</p>
          </div>
        </div>
      </section>

      <!-- 제품 목록 -->
      <section class="py-16 bg-white">
        <div class="container-layout mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
            <!-- Baro Paper -->
            <ProductCard
                title="Baro Paper"
                description="클라우드 기반의 E-Paper로 병원 업무를 효율적으로 관리하세요. 환자 정보, 의료진 정보, 회진 시간 등을 전자적으로 표시하여 페이퍼리스 환경을 구축합니다."
                link="/products/baro-paper"
                color="blue"
                :features="['용지/폐기/프린터/인건비 등 절감', '게이트웨이를 통한 신속한 정보 업데이트']"
                icon="document">
            </ProductCard>

            <!-- Baro Pop -->
            <ProductCard
                title="Baro Pop"
                description="AI를 이용하여 대기시간을 보다 정확하게 실시간으로 표출하는 클라우드 기반의 전광판 솔루션입니다."
                link="/products/baro-pop"
                color="sky"
                :features="['고객번호/이름 표출 및 음성호출', '스마트폰에서 전광판 조회 가능']"
                icon="monitor">
            </ProductCard>

            <!-- Baro Kiosk -->
            <ProductCard
                title="Baro Kiosk"
                description="안드로이드 기반 기기로 QR 출력 및 스캔이 가능하여 출입관리 및 물품관리에 사용이 용이한 키오스크입니다."
                link="/products/baro-kiosk"
                color="cyan"
                :features="['방문객 출입 관리', '소모품 불출 관리']"
                icon="mobile">
            </ProductCard>

            <!-- Baro Navi -->
            <ProductCard
                title="Baro Navi"
                description="병원을 방문하는 환자, 보호자가 원내 채혈실, 검사실 등으로 가는 길을 휴대폰 카메라를 이용해 안내 받을 수 있는 원내 길안내 앱입니다."
                link="/products/baro-navi"
                color="teal"
                :features="['카메라 기반 실시간 길안내', '오늘의 목적지 자동 조회']"
                icon="map">
            </ProductCard>

            <!-- Baro Safe -->
            <ProductCard
                title="Baro Safe"
                description="바코드/RFID를 이용한 환자 안전 확보와 간호 업무 효율 향상 시스템입니다."
                link="/products/baro-safe"
                color="lightBlue"
                :features="['투약 및 처치/수액 관리', '환자 매칭을 통한 의료 사고 예방']"
                icon="shield">
            </ProductCard>

            <!-- Baro Chart -->
            <ProductCard
                title="Baro Chart"
                description="클라우드 기반의 모바일 병원정보시스템(HIS)으로 언제 어디서나 환자 정보에 접근할 수 있습니다."
                link="/products/baro-chart"
                color="indigo"
                :features="['FHIR 표준 기반 쉬운 연동', '강력한 보안 시스템']"
                icon="chart">
            </ProductCard>

            <!-- Baro Talk -->
            <ProductCard
                title="Baro Talk"
                description="의료진 전용 모바일 메신저로 높은 보안성과 함께 원활한 커뮤니케이션을 제공합니다."
                link="/products/baro-talk"
                color="blue"
                :features="['워터마크 및 캡처 차단 보안 기능', '너스콜 연동 및 HIS 데이터 송수신']"
                icon="chat">
            </ProductCard>

            <!-- Baro Call -->
            <ProductCard
                title="Baro Call"
                description="기존 아날로그 방식의 너스콜 시스템을 무선 스마트기기를 이용하는 디지털 너스콜 시스템으로 환자 케어를 혁신합니다."
                link="/products/baro-call"
                color="indigo"
                :features="['양방향 음성/영상 통화', '클라우드 관리자 페이지 제공']"
                icon="phone">
            </ProductCard>
          </div>
        </div>
      </section>

      <!-- 푸터 -->
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import MainHeader from '../../components/main/MainHeader.vue';
import ProductCard from '../../components/ProductCard.vue';
import SiteFooter from '../../components/SiteFooter.vue';

export default {
  name: 'ProductsOverview',
  components: {
    MainHeader,
    ProductCard,
    SiteFooter
  }
};
</script>