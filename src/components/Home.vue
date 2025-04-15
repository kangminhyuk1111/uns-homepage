<!-- src/components/Home.vue -->
<template>
  <div class="pt-20">
    <!-- 히어로 섹션 -->
    <MainHeroSection />

    <!-- 제품 섹션 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-layout mx-auto">
        <div class="text-center mb-12 md:mb-16 px-4">
          <h2 class="text-3xl text-gray-700 md:text-4xl font-bold mb-4">혁신적인 의료 솔루션</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">클라우드 기반의 디지털 의료 솔루션으로 병원 운영의 효율성을 높이고 환자
            경험을 개선하세요.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
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
              color="cyan"
              :features="['고객번호/이름 표출 및 음성호출', '스마트폰에서 전광판 조회 가능']"
              icon="monitor">
          </ProductCard>

          <!-- Baro Kiosk -->
          <ProductCard
              title="Baro Kiosk"
              description="안드로이드 기반 기기로 QR 출력 및 스캔이 가능하여 출입관리 및 물품관리에 사용이 용이한 키오스크입니다."
              link="/products/baro-kiosk"
              color="teal"
              :features="['방문객 출입 관리', '소모품 불출 관리']"
              icon="mobile">
          </ProductCard>

          <!-- Baro Navi -->
          <ProductCard
              title="Baro Navi"
              description="병원을 방문하는 환자, 보호자가 원내 채혈실, 검사실 등으로 가는 길을 휴대폰 카메라를 이용해 안내 받을 수 있는 원내 길안내 앱입니다."
              link="/products/baro-navi"
              color="emerald"
              :features="['카메라 기반 실시간 길안내', '오늘의 목적지 자동 조회']"
              icon="map">
          </ProductCard>

          <!-- Baro Safe -->
          <ProductCard
              title="Baro Safe"
              description="바코드/RFID를 이용한 환자 안전 확보와 간호 업무 효율 향상 시스템입니다."
              link="/products/baro-safe"
              color="blue"
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
              color="cobalt"
              :features="['워터마크 및 캡처 차단 보안 기능', '너스콜 연동 및 HIS 데이터 송수신']"
              icon="chat">
          </ProductCard>

          <!-- Baro Call -->
          <ProductCard
              title="Baro Call"
              description="기존 아날로그 방식의 너스콜 시스템을 무선 스마트기기를 이용하는 디지털 너스콜 시스템으로 환자 케어를 혁신합니다."
              link="/products/baro-call"
              color="lavender"
              :features="['양방향 음성/영상 통화', '클라우드 관리자 페이지 제공']"
              icon="phone">
          </ProductCard>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/products"
                     class="inline-block px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition shadow-md">
          모든 제품 보기
        </router-link>
      </div>
    </section>

    <!-- 특장점 섹션 -->
    <section class="py-16 md:py-24 bg-white relative overflow-hidden">
      <!-- 배경 패턴 -->
      <div
          class="absolute inset-0 opacity-10 z-0"
          :style="{
          backgroundImage: 'url(\'/grid-pattern.svg\')',
          backgroundSize: '30px 30px'
        }">
      </div>

      <!-- 장식적 요소 -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 rounded-full opacity-10 blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div class="container-layout mx-auto relative z-10">
        <div class="text-center mb-16 px-4">
          <span class="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">의료 환경 혁신</span>
          <h2 class="text-3xl text-gray-800 md:text-4xl font-bold mb-4">Baro 솔루션의 특장점</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">혁신적인 기술과 사용자 중심 디자인으로 의료 환경을 변화시킵니다.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 md:px-8">
          <!-- 왼쪽 특장점 목록 -->
          <div class="order-2 md:order-1">
            <div class="space-y-8">
              <div class="flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-md">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl text-gray-800 font-bold mb-2">클라우드 기반 솔루션</h3>
                  <p class="text-gray-600">별도의 서버 구축 없이 클라우드 기반으로 저렴한 비용으로 서비스를 제공합니다. 언제 어디서나 접근 가능한 편리함을 경험하세요.</p>
                </div>
              </div>

              <div class="flex items-start p-4 rounded-xl hover:bg-teal-50 transition-all duration-300 hover:shadow-md">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl text-gray-800 font-bold mb-2">통합 의료 정보 시스템</h3>
                  <p class="text-gray-600">환자 정보부터 의료 기록까지 모든 정보를 통합적으로 관리하여 업무 효율성을 극대화합니다.</p>
                </div>
              </div>

              <div class="flex items-start p-4 rounded-xl hover:bg-cyan-50 transition-all duration-300 hover:shadow-md">
                <div class="flex-shrink-0">
                  <div class="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl text-gray-800 font-bold mb-2">강력한 보안 시스템</h3>
                  <p class="text-gray-600">단말복합인증, 데이터 암호화, 소스코드 난독화 등 강력한 보안 시스템으로 환자 정보를 안전하게 보호합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 오른쪽 의료 솔루션 시각화 -->
          <div class="order-1 md:order-2">
            <MedicalDashboard />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 섹션 -->
    <CtaSection />

    <!-- 푸터 -->
    <SiteFooter />
  </div>
</template>

<script>
import { ref } from 'vue';
import MainHeroSection from './MainHeroSection.vue';
import ProductCard from './ProductCard.vue';
import MedicalDashboard from './MedicalDashboard.vue';
import CtaSection from './CtaSection.vue';
import SiteFooter from './SiteFooter.vue';

export default {
  name: 'Home',
  components: {
    MainHeroSection,
    ProductCard,
    MedicalDashboard,
    CtaSection,
    SiteFooter
  },
  setup() {
    return {};
  }
};
</script>