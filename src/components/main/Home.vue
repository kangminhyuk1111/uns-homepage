<template>
  <div class="home-container">
    <!-- 히어로 섹션 -->
    <MainHeroSection />

    <!-- 제품 섹션 -->
    <section class="products-section">
      <div class="container-layout">
        <div class="section-header">
          <h2 class="section-title">혁신적인 의료 솔루션</h2>
          <p class="section-description">
            클라우드 기반의 디지털 의료 솔루션으로 병원 운영의 효율성을 높이고 환자 경험을 개선하세요.
          </p>
        </div>

        <div class="products-grid">
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

      <div class="section-cta">
        <router-link to="/products" class="btn btn-primary">
          모든 제품 보기
        </router-link>
      </div>
    </section>

    <!-- 특장점 섹션 -->
    <section class="features-section">
      <!-- 배경 패턴 -->
      <div class="bg-pattern"></div>

      <!-- 장식적 요소 -->
      <div class="bg-decoration bg-decoration-1"></div>
      <div class="bg-decoration bg-decoration-2"></div>

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
import ProductCard from '../card/ProductCard.vue';
import MedicalDashboard from '../MedicalDashboard.vue';
import CtaSection from './CtaSection.vue';
import SiteFooter from '../SiteFooter.vue';

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

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 컨테이너 ==== */
.home-container {
  padding-top: 5rem; /* pt-20 */
}

/* ==== 컨테이너 레이아웃 ==== */
.container-layout {
  max-width: 1280px; /* Tailwind의 container-layout 클래스와 동일 */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* ==== 공통 섹션 스타일 ==== */
.section-header {
  text-align: center;
  margin-bottom: 3rem; /* mb-12 */
  padding-left: 1rem;
  padding-right: 1rem;
}

.section-title {
  font-size: 1.875rem; /* text-3xl */
  color: #374151; /* text-gray-700 */
  font-weight: 700; /* font-bold */
  margin-bottom: 1rem; /* mb-4 */
  line-height: 1.2;
}

.section-description {
  font-size: 1.125rem; /* text-lg */
  color: #4b5563; /* text-gray-600 */
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.section-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem; /* px-3 py-1 */
  background-color: #dbeafe; /* bg-blue-100 */
  color: #2563eb; /* text-blue-600 */
  border-radius: 9999px; /* rounded-full */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  margin-bottom: 0.75rem; /* mb-3 */
}

/* ==== 제품 섹션 ==== */
.products-section {
  padding-top: 4rem; /* py-16 */
  padding-bottom: 4rem;
  background-color: #f9fafb; /* bg-gray-50 */
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
}

.section-cta {
  text-align: center;
  margin-top: 3rem; /* mt-12 */
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem; /* px-8 py-3 */
  font-size: 1.125rem; /* text-lg */
  font-weight: 500; /* font-medium */
  text-decoration: none;
  border-radius: 0.375rem; /* rounded-md */
  transition: all 0.3s ease; /* transition */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
}

.btn-primary {
  background-color: #2563eb; /* bg-blue-600 */
  color: white; /* text-white */
}

.btn-primary:hover {
  background-color: #1d4ed8; /* hover:bg-blue-700 */
}

/* ==== 특장점 섹션 ==== */
.features-section {
  padding-top: 4rem; /* py-16 */
  padding-bottom: 4rem;
  background-color: white; /* bg-white */
  position: relative;
  overflow: hidden;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDMwIDAgTCAwIDAgMCAzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=');
  background-size: 30px 30px;
}

.bg-decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(4rem); /* blur-3xl */
  z-index: 0;
}

.bg-decoration-1 {
  top: 0;
  right: 0;
  width: 24rem; /* w-96 */
  height: 24rem; /* h-96 */
  background-color: #60a5fa; /* bg-blue-400 */
  transform: translate(33.333333%, -33.333333%); /* -translate-x-1/3 -translate-y-1/3 */
}

.bg-decoration-2 {
  bottom: 0;
  left: 0;
  width: 20rem; /* w-80 */
  height: 20rem; /* h-80 */
  background-color: #818cf8; /* bg-indigo-400 */
  transform: translate(25%, 25%); /* translate-x-1/4 translate-y-1/4 */
}

.features-content {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 3rem; /* gap-12 */
  align-items: center;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  position: relative;
  z-index: 10;
}

.features-list {
  order: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* space-y-8 */
}

.feature-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem; /* p-4 */
  border-radius: 0.75rem; /* rounded-xl */
  transition: all 0.3s ease; /* transition-all duration-300 */
}

.feature-item:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* hover:shadow-md */
  transform: translateY(-2px);
}

.feature-blue:hover {
  background-color: #eff6ff; /* hover:bg-blue-50 */
}

.feature-teal:hover {
  background-color: #f0fdfa; /* hover:bg-teal-50 */
}

.feature-cyan:hover {
  background-color: #ecfeff; /* hover:bg-cyan-50 */
}

.feature-icon {
  flex-shrink: 0;
  width: 3.5rem; /* w-14 */
  height: 3.5rem; /* h-14 */
  border-radius: 50%; /* rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); /* shadow-md */
}

.feature-blue .feature-icon {
  background-color: #dbeafe; /* bg-blue-100 */
  color: #2563eb; /* text-blue-600 */
}

.feature-teal .feature-icon {
  background-color: #ccfbf1; /* bg-teal-100 */
  color: #0d9488; /* text-teal-600 */
}

.feature-cyan .feature-icon {
  background-color: #cffafe; /* bg-cyan-100 */
  color: #0891b2; /* text-cyan-600 */
}

.feature-content {
  margin-left: 1.5rem; /* ml-6 */
}

.feature-title {
  font-size: 1.25rem; /* text-xl */
  color: #1f2937; /* text-gray-800 */
  font-weight: 700; /* font-bold */
  margin-bottom: 0.5rem; /* mb-2 */
}

.feature-description {
  color: #4b5563; /* text-gray-600 */
  margin: 0;
  line-height: 1.6;
}

.features-visual {
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ==== 반응형 디자인 ==== */

/* md: (768px 이상) */
@media (min-width: 768px) {
  .home-container {
    padding-top: 5rem; /* pt-20 (Tailwind에서는 80px이지만 여기서는 5rem 유지) */
  }

  .products-section,
  .features-section {
    padding-top: 6rem; /* md:py-24 */
    padding-bottom: 6rem;
  }

  .section-header {
    margin-bottom: 4rem; /* md:mb-16 */
    padding-left: 2rem; /* sm:px-6 */
    padding-right: 2rem;
  }

  .section-title {
    font-size: 2.25rem; /* md:text-4xl */
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
    gap: 2rem; /* md:gap-8 */
    padding-left: 2rem; /* md:px-8 */
    padding-right: 2rem;
  }

  .features-content {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
    padding-left: 2rem; /* md:px-8 */
    padding-right: 2rem;
  }

  .features-list {
    order: 1; /* md:order-1 */
  }

  .features-visual {
    order: 2; /* md:order-2 */
  }
}

/* lg: (1024px 이상) */
@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr); /* lg:grid-cols-3 */
  }
}

/* xl: (1280px 이상) */
@media (min-width: 1280px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr); /* xl:grid-cols-4 */
  }
}

/* sm: (640px 이상) */
@media (min-width: 640px) {
  .section-header {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem;
  }

  .products-grid {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem;
  }

  .features-content {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem;
  }
}

/* ==== 추가 개선사항 ==== */

/* 호버 시 아이콘 애니메이션 */
.feature-item:hover .feature-icon {
  transform: scale(1.05);
}

/* 부드러운 전환 효과 */
.feature-icon {
  transition: transform 0.3s ease;
}

/* 접근성 개선 */
.btn:focus,
.feature-item:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* 다크모드 대응 (선택사항) */
@media (prefers-color-scheme: dark) {
  .products-section {
    background-color: #111827;
  }

  .features-section {
    background-color: #1f2937;
  }

  .section-title {
    color: #f9fafb;
  }

  .section-description {
    color: #d1d5db;
  }

  .feature-title {
    color: #f9fafb;
  }

  .feature-description {
    color: #d1d5db;
  }
}

/* 성능 최적화 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>