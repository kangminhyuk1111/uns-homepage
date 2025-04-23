<template>
  <div class="bg-slate-900 rounded-lg p-2 border border-slate-700">
    <div class="bg-white rounded-t-lg p-2 flex flex-col items-center">
      <div class="w-full h-4 bg-blue-500 rounded mb-2"></div>
      <div class="text-gray-800 text-xs font-bold mb-2">방문자 출입 등록</div>
      <div class="grid grid-cols-2 gap-2 w-full mb-2">
        <div class="bg-blue-100 text-blue-800 text-xs rounded py-1 text-center">환자 방문</div>
        <div class="bg-gray-100 text-gray-800 text-xs rounded py-1 text-center">거래처</div>
      </div>

      <!-- 고정 높이 컨테이너 추가 -->
      <div class="w-full content-container">
        <!-- 1단계: 전화번호 입력 -->
        <div v-if="step === 0" class="step-content">
          <div class="text-[8px] text-gray-700 mb-1">휴대폰 번호를 입력해주세요</div>
          <div class="phone-input bg-gray-100 rounded border border-gray-300 h-4 w-full relative overflow-hidden">
            <div class="absolute left-2 top-1/2 -translate-y-1/2 text-[8px] text-blue-500 typing-effect">
              010-1234-5678
            </div>
          </div>
        </div>

        <!-- 2단계: 정보 확인 -->
        <div v-if="step === 1" class="step-content">
          <div class="text-[8px] text-gray-700 mb-1">입력하신 정보를 확인해주세요</div>
          <div class="bg-gray-100 rounded border border-gray-300 p-1 mb-1">
            <div class="text-[7px] text-gray-700">
              <div>이름: 홍길동</div>
              <div>휴대폰: 010-1234-5678</div>
              <div>방문목적: 외래진료</div>
            </div>
          </div>
          <div class="processing-dots text-center text-[8px] text-blue-500">처리중...</div>
        </div>

        <!-- 3단계: QR 코드 생성중 -->
        <div v-if="step === 2" class="step-content flex flex-col items-center">
          <div class="text-[8px] text-blue-500 mb-1">QR 코드 생성중</div>
          <div class="h-10 w-10 relative">
            <div class="qr-generating absolute inset-0"></div>
          </div>
        </div>

        <!-- 4단계: QR 코드 발급 완료 -->
        <div v-if="step === 3" class="step-content flex flex-col items-center">
          <div class="text-[8px] text-green-600 mb-1">QR 코드가 발급되었습니다</div>
          <div class="qr-code"></div>
          <div class="text-[7px] text-gray-500 mt-1">
            출입구에서 스캐너에 QR 코드를 인식해주세요
          </div>
        </div>
      </div>
    </div>
    <div class="mt-1 flex justify-between">
      <div class="w-1/3 h-3 bg-gray-500/30 rounded"></div>
      <div class="w-1/4 h-3 bg-blue-500/50 rounded"></div>
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
/* 콘텐츠 컨테이너 고정 높이 */
.content-container {
  height: 60px; /* 모든 단계를 수용할 수 있는 높이로 설정 */
  position: relative;
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

/* 전화번호 입력 타이핑 효과 */
.typing-effect {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2s steps(13, end) forwards;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 70px;
  }
}

/* 처리중 점 애니메이션 */
.processing-dots::after {
  content: '';
  animation: dots 1.5s infinite;
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

/* QR 코드 생성 애니메이션 */
.qr-generating {
  background-color: rgba(59, 130, 246, 0.1);
  animation: generating 1.5s infinite;
  position: relative;
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

/* QR 코드 */
.qr-code {
  width: 32px;
  height: 32px;
  background-color: white;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: qrAppear 0.5s ease-out;
}

.qr-code::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
      radial-gradient(circle, transparent 40%, black 40%, black 60%, transparent 60%),
      linear-gradient(to right, black, black),
      linear-gradient(to bottom, black, black),
      radial-gradient(circle, black 40%, transparent 40%),
      radial-gradient(circle, black 40%, transparent 40%),
      radial-gradient(circle, black 40%, transparent 40%);
  background-size:
      32px 32px,
      25% 3px,
      3px 25%,
      10px 10px,
      10px 10px,
      10px 10px;
  background-position:
      center center,
      center center,
      center center,
      5px 5px,
      5px calc(100% - 5px),
      calc(100% - 5px) 5px;
  background-repeat: no-repeat;
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