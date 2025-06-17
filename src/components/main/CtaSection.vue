<template>
  <section class="cta-section">
    <!-- 배경 장식 요소 -->
    <div class="background-effects">
      <!-- 기하학적 패턴 -->
      <div class="geometric-patterns">
        <div class="pattern-circle pattern-top-right"></div>
        <div class="pattern-circle pattern-bottom-left"></div>
      </div>

      <!-- 그라데이션 오버레이 -->
      <div class="gradient-overlay"></div>

      <!-- 빛 효과 -->
      <div class="light-effect light-1"></div>
      <div class="light-effect light-2"></div>
    </div>

    <div class="cta-container">
      <div class="cta-content">
        <!-- 상단 아이콘 -->
        <div class="icon-container">
          <div class="main-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>

        <!-- 제목 & 설명 -->
        <h2 class="cta-title">디지털 의료 솔루션의 미래를 경험하세요</h2>
        <p class="cta-description">
          Baro 솔루션으로 의료 서비스의 품질을 높이고
          <span class="highlighted-text">환자 만족도를 향상</span>시켜 보세요.
        </p>

        <!-- 버튼 그룹 -->
        <div class="button-group">
          <button class="btn btn-primary" @click="handleDemoRequest">
            데모 신청하기
          </button>
          <button class="btn btn-secondary" @click="handleInquiry">
            문의하기
          </button>
        </div>

        <!-- 신뢰 지표 -->
        <div class="trust-indicators">
          <div class="trust-card">
            <div class="trust-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="trust-title">데이터 보안</h3>
            <p class="trust-description">환자 정보 암호화 및 안전한 데이터 관리</p>
          </div>

          <div class="trust-card">
            <div class="trust-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="trust-title">빠른 도입</h3>
            <p class="trust-description">1주 이내 시스템 구축 및 직원 교육 완료</p>
          </div>

          <div class="trust-card">
            <div class="trust-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="trust-title">전담 지원팀</h3>
            <p class="trust-description">24시간 기술 지원 및 정기 업데이트</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection',
  methods: {
    handleDemoRequest() {
      console.log('데모 신청 클릭');
      // 데모 신청 로직
    },
    handleInquiry() {
      console.log('문의하기 클릭');
      // 문의하기 로직
    }
  }
}
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 CTA 섹션 ==== */
.cta-section {
  padding: 5rem 0; /* py-20 */
  background: linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%); /* from-blue-700 via-blue-600 to-blue-500 */
  color: white;
  position: relative;
  overflow: hidden;
}

/* ==== 배경 장식 요소 ==== */
.background-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.geometric-patterns {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.pattern-circle {
  position: absolute;
  border: 4px solid white;
  border-radius: 50%;
}

.pattern-top-right {
  top: 0;
  right: 0;
  width: 33.333333%; /* w-1/3 */
  height: 33.333333%; /* h-1/3 */
  transform: translate(25%, -25%); /* translate-x-1/4 -translate-y-1/4 */
}

.pattern-bottom-left {
  bottom: 0;
  left: 0;
  width: 25%; /* w-1/4 */
  height: 50%; /* h-1/2 */
  transform: translate(-33.333333%, 25%); /* -translate-x-1/3 translate-y-1/4 */
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1e40af 0%, transparent 100%); /* from-blue-800 to-transparent */
  opacity: 0.3;
}

.light-effect {
  position: absolute;
  border-radius: 50%;
}

.light-1 {
  top: 33.333333%; /* top-1/3 */
  right: 25%; /* right-1/4 */
  width: 16rem; /* w-64 */
  height: 16rem; /* h-64 */
  background-color: #93c5fd; /* bg-blue-300 */
  opacity: 0.2;
  filter: blur(4rem); /* blur-3xl */
}

.light-2 {
  bottom: 25%; /* bottom-1/4 */
  left: 33.333333%; /* left-1/3 */
  width: 12rem; /* w-48 */
  height: 12rem; /* h-48 */
  background-color: #dbeafe; /* bg-blue-200 */
  opacity: 0.1;
  filter: blur(2rem); /* blur-2xl */
}

/* ==== 컨테이너 ==== */
.cta-container {
  width: 100%;
  max-width: none;
  padding: 0 1rem; /* px-4 */
  position: relative;
  z-index: 10;
}

.cta-content {
  max-width: 56rem; /* max-w-4xl */
  margin: 0 auto;
  background: rgba(37, 99, 235, 0.3); /* bg-blue-600 bg-opacity-30 */
  backdrop-filter: blur(8px); /* backdrop-filter backdrop-blur-sm */
  -webkit-backdrop-filter: blur(8px);
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 2.5rem; /* p-10 */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
  border: 1px solid rgba(96, 165, 250, 0.2); /* border-blue-400 border-opacity-20 */
}

/* ==== 아이콘 컨테이너 ==== */
.icon-container {
  margin-bottom: 1.5rem; /* mb-6 */
  display: flex;
  justify-content: center;
}

.main-icon {
  width: 4rem; /* w-16 */
  height: 4rem; /* h-16 */
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
}

.main-icon svg {
  width: 2rem; /* h-8 w-8 */
  height: 2rem;
  color: #2563eb; /* text-blue-600 */
}

/* ==== 제목 & 설명 ==== */
.cta-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  margin-bottom: 1.5rem; /* mb-6 */
  text-align: center;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.25rem; /* text-xl */
  color: white;
  margin-bottom: 2.5rem; /* mb-10 */
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 1.6; /* leading-relaxed */
}

.highlighted-text {
  font-weight: 600; /* font-semibold */
}

/* ==== 버튼 그룹 ==== */
.button-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem; /* space-y-5 */
  margin-bottom: 2.5rem; /* mb-10 */
}

.btn {
  padding: 1rem 2.5rem; /* px-10 py-4 */
  border-radius: 9999px; /* rounded-full */
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  transition: all 0.3s ease; /* transition duration-300 */
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-xl */
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4); /* hover:shadow-2xl */
  transform: translateY(-0.25rem) scale(1.05); /* hover:-translate-y-1 hover:scale-105 */
}

.btn-primary {
  background-color: white;
  color: #2563eb; /* text-blue-600 */
}

.btn-secondary {
  background-color: #3b82f6; /* bg-blue-500 */
  border: 2px solid white; /* border-2 border-white */
  color: white;
}

/* ==== 신뢰 지표 ==== */
.trust-indicators {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1rem; /* gap-4 */
  max-width: 48rem; /* max-w-3xl */
  margin: 0 auto;
}

.trust-card {
  background: rgba(255, 255, 255, 0.1); /* bg-white bg-opacity-10 */
  border-radius: 0.75rem; /* rounded-xl */
  padding: 1rem; /* p-4 */
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2); /* border-white border-opacity-20 */
  transition: all 0.3s ease;
}

.trust-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.trust-icon {
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  background-color: #dbeafe; /* bg-blue-100 */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem; /* mx-auto mb-3 */
}

.trust-icon svg {
  width: 1.5rem; /* h-6 w-6 */
  height: 1.5rem;
  color: #2563eb; /* text-blue-600 */
}

.trust-title {
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  margin-bottom: 0.25rem; /* mb-1 */
}

.trust-description {
  font-size: 0.875rem; /* text-sm */
  opacity: 0.9;
}

/* ==== 반응형 디자인 ==== */

/* sm: (640px 이상) */
@media (min-width: 640px) {
  .button-group {
    flex-direction: row; /* sm:flex-row */
    gap: 1.25rem; /* sm:space-x-5 */
  }
}

/* md: (768px 이상) */
@media (min-width: 768px) {
  .cta-title {
    font-size: 2.25rem; /* md:text-4xl */
  }

  .trust-indicators {
    grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
  }
}

/* lg: (1024px 이상) */
@media (min-width: 1024px) {
  .cta-title {
    font-size: 3rem; /* lg:text-5xl */
  }
}

/* ==== 모바일 최적화 ==== */
@media (max-width: 768px) {
  .cta-section {
    padding: 3rem 0;
  }

  .cta-content {
    padding: 2rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-description {
    font-size: 1rem;
  }

  .btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .pattern-top-right,
  .pattern-bottom-left {
    display: none; /* 모바일에서는 패턴 숨김 */
  }

  .light-1,
  .light-2 {
    width: 8rem;
    height: 8rem;
  }
}

@media (max-width: 480px) {
  .cta-container {
    padding: 0 0.75rem;
  }

  .cta-content {
    padding: 1.5rem;
  }

  .cta-title {
    font-size: 1.25rem;
  }

  .button-group {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
  }
}

/* ==== 접근성 개선 ==== */
.btn:focus {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

.trust-card:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

/* ==== 애니메이션 개선 ==== */
@media (prefers-reduced-motion: reduce) {
  .btn,
  .trust-card {
    transition: none !important;
  }

  .btn:hover {
    transform: none !important;
  }

  .trust-card:hover {
    transform: none !important;
  }
}

/* ==== 다크모드 대응 (선택사항) ==== */
@media (prefers-color-scheme: dark) {
  .cta-section {
    background: linear-gradient(90deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%);
  }

  .cta-content {
    background: rgba(30, 58, 138, 0.4);
    border-color: rgba(147, 197, 253, 0.3);
  }
}

/* ==== 고급 효과 ==== */
.cta-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.cta-content:hover::before {
  opacity: 1;
}

/* 버튼 리플 효과 */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

/* 아이콘 회전 애니메이션 */
.main-icon {
  transition: transform 0.3s ease;
}

.main-icon:hover {
  transform: rotate(10deg) scale(1.1);
}

/* 신뢰 카드 스태거 애니메이션 */
.trust-card:nth-child(1) {
  animation: fadeInUp 0.6s ease-out 0.1s both;
}

.trust-card:nth-child(2) {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.trust-card:nth-child(3) {
  animation: fadeInUp 0.6s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>