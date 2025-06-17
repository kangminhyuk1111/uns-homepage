<template>
  <div class="kiosk-container">
    <div class="kiosk-screen">
      <div class="header-bar"></div>
      <div class="title">방문자 출입 등록</div>
      <div class="tab-buttons">
        <div class="tab-active">환자 방문</div>
        <div class="tab-inactive">거래처</div>
      </div>

      <!-- 고정 높이 컨테이너 -->
      <div class="content-container">
        <!-- 1단계: 전화번호 입력 -->
        <div v-if="step === 0" class="step-content">
          <div class="input-label">휴대폰 번호를 입력해주세요</div>
          <div class="phone-input">
            <div class="typing-effect">
              010-1234-5678
            </div>
          </div>
        </div>

        <!-- 2단계: 정보 확인 -->
        <div v-if="step === 1" class="step-content">
          <div class="input-label">입력하신 정보를 확인해주세요</div>
          <div class="info-box">
            <div class="info-text">
              <div>이름: 홍길동</div>
              <div>휴대폰: 010-1234-5678</div>
              <div>방문목적: 외래진료</div>
            </div>
          </div>
          <div class="processing-dots">처리중...</div>
        </div>

        <!-- 3단계: QR 코드 생성중 -->
        <div v-if="step === 2" class="step-content step-center">
          <div class="generating-label">QR 코드 생성중</div>
          <div class="qr-container">
            <div class="qr-generating"></div>
          </div>
        </div>

        <!-- 4단계: QR 코드 발급 완료 -->
        <div v-if="step === 3" class="step-content step-center">
          <div class="success-label">QR 코드가 발급되었습니다</div>
          <div class="qr-code"></div>
          <div class="instruction-text">
            출입구에서 스캐너에 QR 코드를 인식해주세요
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-controls">
      <div class="control-button-inactive"></div>
      <div class="control-button-active"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KioskBannerComponent',
  data() {
    return {
      step: 0,
      timer: null
    }
  },
  mounted() {
    this.startAnimation();
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },
  methods: {
    startAnimation() {
      // 자동 타이핑 후 2초 후 확인 화면으로
      this.timer = setTimeout(() => {
        this.step = 1;

        // 2초 후 QR 코드 생성 화면으로
        this.timer = setTimeout(() => {
          this.step = 2;

          // 2초 후 QR 코드 완료 화면으로
          this.timer = setTimeout(() => {
            this.step = 3;

            // 3초 후 다시 처음으로
            this.timer = setTimeout(() => {
              this.step = 0;
              this.startAnimation(); // 애니메이션 반복
            }, 3000);
          }, 2000);
        }, 2000);
      }, 2500);
    }
  }
}
</script>

<style scoped>
.kiosk-container {
  background-color: #0f172a;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #475569;
}

.kiosk-screen {
  background-color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-bar {
  width: 100%;
  height: 16px;
  background-color: #3b82f6;
  border-radius: 4px;
  margin-bottom: 8px;
}

.title {
  color: #1f2937;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
}

.tab-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
  margin-bottom: 8px;
}

.tab-active {
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 0;
  text-align: center;
}

.tab-inactive {
  background-color: #f3f4f6;
  color: #1f2937;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 0;
  text-align: center;
}

/* 콘텐츠 컨테이너 고정 높이 */
.content-container {
  height: 72px;
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* 모든 단계 콘텐츠에 절대 위치 적용 */
.step-content {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.step-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-label {
  font-size: 8px;
  color: #374151;
  margin-bottom: 4px;
}

.phone-input {
  background-color: #f3f4f6;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  height: 16px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.typing-effect {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 8px;
  color: #3b82f6;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2s steps(13, end) forwards;
}

.info-box {
  background-color: #f3f4f6;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  padding: 4px;
  margin-bottom: 4px;
}

.info-text {
  font-size: 7px;
  color: #374151;
}

.processing-dots {
  text-align: center;
  font-size: 8px;
  color: #3b82f6;
}

.processing-dots::after {
  content: '';
  animation: dots 1.5s infinite;
}

.generating-label {
  font-size: 8px;
  color: #3b82f6;
  margin-bottom: 4px;
}

.qr-container {
  height: 28px;
  width: 28px;
  position: relative;
  margin: 2px 0;
}

.qr-generating {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(59, 130, 246, 0.1);
  animation: generating 1.5s infinite;
}

.qr-generating::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom right,
      transparent 0%,
      transparent 40%,
      rgba(59, 130, 246, 0.3) 50%,
      transparent 60%,
      transparent 100%
  );
  background-size: 200% 200%;
  animation: shimmer 1.5s infinite;
}

.qr-generating::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  background-color: rgba(59, 130, 246, 0.1);
  animation: pulse 1s infinite alternate;
}

.success-label {
  font-size: 8px;
  color: #16a34a;
  margin-bottom: 4px;
}

.qr-code {
  width: 24px;
  height: 24px;
  background-color: white;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  animation: qrAppear 0.5s ease-out;
  margin: 2px 0;
}

.qr-code::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
      radial-gradient(circle, transparent 40%, black 40%, black 60%, transparent 60%),
      linear-gradient(to right, black, black),
      linear-gradient(to bottom, black, black),
      radial-gradient(circle, black 40%, transparent 40%),
      radial-gradient(circle, black 40%, transparent 40%),
      radial-gradient(circle, black 40%, transparent 40%);
  background-size:
      24px 24px,
      25% 2px,
      2px 25%,
      8px 8px,
      8px 8px,
      8px 8px;
  background-position:
      center center,
      center center,
      center center,
      4px 4px,
      4px calc(100% - 4px),
      calc(100% - 4px) 4px;
  background-repeat: no-repeat;
}

.instruction-text {
  font-size: 6px;
  color: #6b7280;
  margin-top: 2px;
  text-align: center;
  line-height: 1.2;
  max-width: 100%;
  word-wrap: break-word;
}

.bottom-controls {
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
}

.control-button-inactive {
  width: 33.333%;
  height: 12px;
  background-color: rgba(107, 114, 128, 0.3);
  border-radius: 4px;
}

.control-button-active {
  width: 25%;
  height: 12px;
  background-color: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

/* 애니메이션 키프레임 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 70px;
  }
}

@keyframes dots {
  0%, 20% {
    content: '.';
  }
  40%, 60% {
    content: '..';
  }
  80%, 100% {
    content: '...';
  }
}

@keyframes generating {
  0%, 100% {
    background-color: rgba(59, 130, 246, 0.1);
  }
  50% {
    background-color: rgba(59, 130, 246, 0.2);
  }
}

@keyframes shimmer {
  0% {
    background-position: -100% -100%;
  }
  100% {
    background-position: 100% 100%;
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes qrAppear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 트랜지션 페이드 효과 */
.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>