<template>
  <section class="hero-section">
    <!-- 배경 효과 -->
    <div class="bg-effects">
      <!-- 서브틀한 그리드 패턴 -->
      <div class="grid-pattern"></div>

      <!-- 세련된 그라데이션 블러 효과 -->
      <div class="blur-gradient-1"></div>
      <div class="blur-gradient-2"></div>

      <!-- 미니멀한 배경 점선 -->
      <div class="dot-pattern"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <!-- 텍스트 섹션 -->
        <div class="text-section">
          <!-- 현대적인 배지 -->
          <div class="modern-badge">
            <span class="status-dot"></span>
            디지털 의료 혁신 플랫폼
          </div>

          <h1 class="hero-title">
            새로운 패러다임의<br/>
            <span class="gradient-text">의료 정보화</span> 솔루션
          </h1>

          <p class="hero-description">
            클라우드 기반의 혁신적인 의료 솔루션으로 환자 만족도를 높이고 병원 운영을 최적화하세요.
          </p>

          <div class="button-group">
            <button class="btn btn-primary" @click="handleSolutionClick">
              솔루션 소개 받기
              <span class="arrow">→</span>
            </button>
            <button class="btn btn-secondary" @click="handleDemoClick">
              데모 신청하기
              <span class="arrow">→</span>
            </button>
          </div>

          <!-- 현대적인 트러스트 배지 -->
          <div class="trust-section">
            <div class="trust-label">신뢰하는 파트너사</div>
            <div class="trust-badges">
              <div v-for="partner in partners" :key="partner.id" class="trust-badge">
                {{ partner.name }}
              </div>
            </div>
          </div>
        </div>

        <!-- 디바이스 쇼케이스 섹션 -->
        <div class="devices-section">
          <div class="devices-grid">
            <!-- 전자 종이 시스템 (Baro Paper) -->
            <div class="device-card blue-card" @mouseenter="onDeviceHover(1)" @mouseleave="onDeviceLeave">
              <div class="card-content">
                <div class="card-badge blue-badge">Baro Paper</div>
                <div class="card-title">전자 종이 시스템</div>

                <!-- E-Paper 디스플레이 시뮬레이션 -->
                <div class="paper-display">
                  <div class="paper-title">병실 안내판</div>
                  <div class="paper-info">
                    <div>환자명: {{ paperData.patientName }}</div>
                    <div>담당의: {{ paperData.doctor }}</div>
                    <div>입원일: {{ paperData.admissionDate }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 키오스크 (Baro Kiosk) -->
            <div class="device-card teal-card" @mouseenter="onDeviceHover(2)" @mouseleave="onDeviceLeave">
              <div class="card-content">
                <div class="card-badge teal-badge">Baro Kiosk</div>
                <div class="card-title">의료 키오스크</div>

                <!-- 키오스크 UI 시뮬레이션 -->
                <div class="kiosk-display">
                  <div class="kiosk-title">접수/수납</div>
                  <div class="kiosk-menu">
                    <div v-for="menu in kioskMenus" :key="menu.id" class="menu-item">
                      ■ {{ menu.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 셋톱박스 앱 서비스 (Baro Pop) -->
            <div class="device-card indigo-card" @mouseenter="onDeviceHover(3)" @mouseleave="onDeviceLeave">
              <div class="card-content">
                <div class="card-badge indigo-badge">Baro Pop</div>
                <div class="card-title">대기 안내 시스템</div>

                <!-- 간소화된 전광판 UI 시뮬레이션 -->
                <div class="pop-display">
                  <div class="pop-title">대기현황</div>
                  <div class="pop-info">
                    <div :class="{ 'blinking': isBlinking }">진료중: {{ currentNumber }}번</div>
                    <div>대기: {{ waitingCount }}명</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 원내 길안내 (Baro Navi) -->
            <div class="device-card emerald-card" @mouseenter="onDeviceHover(4)" @mouseleave="onDeviceLeave">
              <div class="card-content">
                <div class="card-badge emerald-badge">Baro Navi</div>
                <div class="card-title">원내 길안내</div>

                <!-- 길안내 앱 시뮬레이션 -->
                <div class="navi-display">
                  <div class="navi-title">길찾기</div>
                  <div class="navi-steps">
                    <div v-for="step in naviSteps" :key="step.id" class="step-item">
                      → {{ step.instruction }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 부유 요소 -->
          <div class="floating-badge floating-badge-top">
            <div class="floating-content">
              <span class="ping-container">
                <span class="ping-dot"></span>
                <span class="ping-animation"></span>
              </span>
              <span class="floating-text">클라우드 기반 서비스</span>
            </div>
          </div>

          <div class="floating-badge floating-badge-bottom">
            <div class="floating-content">
              <span class="status-dot-emerald"></span>
              <span class="floating-text">실시간 데이터 연동</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModernHeroWithDevices',
  data() {
    return {
      partners: [
        { id: 1, name: '삼성서울병원' },
        { id: 2, name: '삼성창원병원' }
      ],
      paperData: {
        patientName: '김○○',
        doctor: '이○○ 교수',
        admissionDate: '2025.06.10'
      },
      kioskMenus: [
        { id: 1, name: '진료 접수' },
        { id: 2, name: '수납/계산' },
        { id: 3, name: '처방전 발급' }
      ],
      naviSteps: [
        { id: 1, instruction: '내과 2층' },
        { id: 2, instruction: '엘리베이터' },
        { id: 3, instruction: '도착 2분' }
      ],
      currentNumber: 25,
      waitingCount: 3,
      isBlinking: true
    }
  },
  mounted() {
    // 대기번호 자동 증가 시뮬레이션
    setInterval(() => {
      if (this.waitingCount > 0) {
        this.currentNumber += 1;
        this.waitingCount -= 1;
      } else {
        this.waitingCount = 3;
        this.currentNumber = 25;
      }
    }, 3000);
  },
  methods: {
    handleSolutionClick() {
      console.log('솔루션 소개 클릭');
      // 솔루션 소개 페이지로 이동 또는 모달 열기
    },
    handleDemoClick() {
      console.log('데모 신청 클릭');
      // 데모 신청 페이지로 이동 또는 폼 열기
    },
    onDeviceHover(deviceId) {
      console.log(`Device ${deviceId} hovered`);
      // 호버 시 추가 효과나 정보 표시
    },
    onDeviceLeave() {
      console.log('Device hover left');
      // 호버 종료 시 효과 정리
    }
  }
}
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 섹션 ==== */
.hero-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3730a3 100%);
  color: white;
  min-height: 100vh;
  padding: 5rem 0 8rem;
}

/* ==== 배경 효과 ==== */
.bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.grid-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMlYyMmg1LjU5OGMxLjIzMiAwIDIuMi45NjggMi4yIDIuMnY1LjZjMCAxLjIzMi0uOTY4IDIuMi0yLjIgMi4yaC01LjU5OHYxLjc5OEMzOC4xOTggMzUuMDMyIDM3LjIzIDM2IDM2IDM2aC01LjYwMkMyOS4xNjggMzYgMjguMiAzNS4wMzIgMjguMiAzMy43OThWMzJoLTUuNmMtMS4yMyAwLTIuMi0uOTY4LTIuMi0yLjJ2LTUuNmMwLTEuMjMyLjk3LTIuMiAyLjItMi4yaDUuNnYtMS44YzAtMS4yMzIuOTY4LTIuMiAyLjE5OC0yLjJIMzZ6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1vcGFjaXR5PSIuMTUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=');
}

.blur-gradient-1 {
  position: absolute;
  top: 16.67%;
  left: 16.67%;
  width: 24rem;
  height: 24rem;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.2));
  border-radius: 50%;
  filter: blur(4rem);
}

.blur-gradient-2 {
  position: absolute;
  bottom: 25%;
  right: 20%;
  width: 20rem;
  height: 20rem;
  background: linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
  border-radius: 50%;
  filter: blur(4rem);
}

.dot-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at center, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* ==== 컨테이너 레이아웃 ==== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  min-height: 80vh;
}

/* ==== 텍스트 섹션 ==== */
.text-section {
  flex: 1;
  max-width: 50%;
  padding-right: 1.5rem;
}

.modern-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.modern-badge:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #22d3ee;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

.gradient-text {
  background: linear-gradient(45deg, #60a5fa, #67e8f9);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 32rem;
}

/* ==== 버튼 스타일 ==== */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
}

.arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn:hover .arrow {
  transform: translateX(2px);
}

/* ==== 신뢰 배지 ==== */
.trust-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
}

.trust-label {
  font-size: 0.875rem;
  color: #9ca3af;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.trust-badge {
  height: 2rem;
  width: 6rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.trust-badge:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
}

/* ==== 디바이스 섹션 ==== */
.devices-section {
  flex: 1;
  max-width: 50%;
  position: relative;
}

.devices-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.device-card {
  position: relative;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid #475569;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

.device-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.75rem;
  opacity: 0;
  filter: blur(16px);
  transition: all 0.5s ease;
  z-index: -1;
}

.device-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.device-card:hover::before {
  opacity: 1;
  transform: scale(1.05);
}

.blue-card::before {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.3));
}

.blue-card:hover {
  box-shadow: 0 25px 50px rgba(59, 130, 246, 0.25);
}

.teal-card::before {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(45, 212, 191, 0.3));
}

.teal-card:hover {
  box-shadow: 0 25px 50px rgba(20, 184, 166, 0.25);
}

.indigo-card::before {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(129, 140, 248, 0.3));
}

.indigo-card:hover {
  box-shadow: 0 25px 50px rgba(99, 102, 241, 0.25);
}

.emerald-card::before {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(52, 211, 153, 0.3));
}

.emerald-card:hover {
  box-shadow: 0 25px 50px rgba(16, 185, 129, 0.25);
}

.card-content {
  padding: 1rem;
}

.card-badge {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.blue-badge { color: #60a5fa; }
.teal-badge { color: #2dd4bf; }
.indigo-badge { color: #818cf8; }
.emerald-badge { color: #34d399; }

.card-title {
  color: white;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

/* ==== 디바이스 디스플레이 스타일 ==== */
.paper-display {
  background: #f8fafc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  color: #334155;
  font-size: 0.75rem;
}

.paper-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.paper-info div {
  margin-bottom: 0.125rem;
}

.kiosk-display {
  background: linear-gradient(135deg, #1e293b, #334155);
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  color: white;
  font-size: 0.75rem;
}

.kiosk-title {
  color: #2dd4bf;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.menu-item {
  margin-bottom: 0.125rem;
}

.pop-display {
  background: #000;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  color: #22d3ee;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
}

.pop-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.pop-info div {
  margin-bottom: 0.125rem;
}

.navi-display {
  background: linear-gradient(135deg, #065f46, #047857);
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  color: white;
  font-size: 0.75rem;
}

.navi-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.step-item {
  margin-bottom: 0.125rem;
}

/* ==== 부유 요소 ==== */
.floating-badge {
  position: absolute;
  z-index: 20;
}

.floating-badge-top {
  top: -1.5rem;
  right: -1.5rem;
}

.floating-badge-bottom {
  bottom: -1rem;
  left: -1rem;
}

.floating-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.floating-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

.floating-text {
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
}

.ping-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ping-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #06b6d4;
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

.ping-animation {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #67e8f9;
  border-radius: 50%;
  opacity: 0.75;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.status-dot-emerald {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #10b981;
  border-radius: 50%;
}

/* ==== 애니메이션 ==== */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}

.blinking {
  animation: blink 1s infinite;
}

/* ==== 반응형 디자인 ==== */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 4rem;
  }

  .text-section,
  .devices-section {
    max-width: 100%;
    padding-right: 0;
  }

  .button-group {
    flex-direction: row;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0 5rem;
  }

  .container {
    padding: 0 1rem;
  }

  .button-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .trust-section {
    justify-content: center;
  }

  .blur-gradient-1,
  .blur-gradient-2 {
    width: 15rem;
    height: 15rem;
  }

  .floating-badge-top {
    top: -1rem;
    right: -1rem;
  }

  .floating-badge-bottom {
    bottom: -0.5rem;
    left: -0.5rem;
  }
}

@media (max-width: 640px) {
  .devices-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }
}
</style>