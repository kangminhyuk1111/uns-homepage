<template>
  <div class="relative bg-white rounded-lg overflow-hidden pt-2">
    <!-- 앱 상태바 -->
    <div class="flex justify-between items-center px-2 mb-1">
      <div class="w-12 h-2 bg-gray-300 rounded-full"></div>
      <div class="flex space-x-1">
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </div>
    <!-- 앱 내용 -->
    <div class="relative h-28 bg-blue-100">
      <!-- 지도 형태 -->
      <div class="absolute inset-0">
        <!-- 출발지 포인터 -->
        <div class="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500/50 rounded-full animate-ping"></div>

        <!-- 이동 경로 -->
        <div class="absolute left-1/4 top-[calc(33.33%-1px)] h-0 w-[40%] border-2 border-dashed border-blue-500"></div>

        <!-- 도착지 포인터 -->
        <div class="absolute left-[65%] top-1/4 mt-0.5 w-3 h-3 bg-red-500 rounded-full"></div>

        <!-- 이동하는 포인터 -->
        <div class="absolute top-1/3 w-3 h-3 rounded-full moving-dot"></div>
        <div class="absolute top-1/3 w-5 h-5 rounded-full moving-pulse"></div>
      </div>
      <div class="absolute bottom-0 w-full bg-white rounded-t-xl p-2">
        <div class="text-[9px] text-gray-800 font-medium location-text">현재 위치: 1층 로비</div>
        <div class="text-[8px] text-blue-600 destination-text">목적지: MRI 검사실 (3층)</div>
        <div class="mt-1 w-full h-1.5 bg-gray-200 rounded-full">
          <div class="h-full bg-blue-500 rounded-full progress-bar"></div>
        </div>
      </div>
    </div>
    <!-- 앱 하단 버튼 -->
    <div class="flex justify-around px-2 py-1">
      <div class="w-4 h-1 bg-gray-300 rounded"></div>
      <div class="w-4 h-1 bg-blue-500 rounded"></div>
      <div class="w-4 h-1 bg-gray-300 rounded"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes movePoint {
  0% {
    left: 25%;
    background-color: #2563eb; /* blue-600 */
  }
  100% {
    left: 65%;
    background-color: #22c55e; /* green-500 */
  }
}

@keyframes movePulse {
  0% {
    left: 25%;
    background-color: rgba(59, 130, 246, 0.5); /* blue-500/50 */
  }
  100% {
    left: 65%;
    background-color: rgba(34, 197, 94, 0.5); /* green-500/50 */
  }
}

@keyframes fillProgress {
  0% {
    width: 33.333%;
  }
  100% {
    width: 100%;
    background-color: #22c55e; /* green-500 */
  }
}

@keyframes changeLocationText {
  0%, 90% {
    content: "현재 위치: 1층 로비";
  }
  100% {
    content: "도착: MRI 검사실 (3층)";
  }
}

@keyframes changeDestinationText {
  0%, 90% {
    content: "목적지: MRI 검사실 (3층)";
    color: #2563eb; /* blue-600 */
  }
  100% {
    content: "안내를 완료했습니다";
    color: #16a34a; /* green-600 */
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes arrived {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.3;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.moving-dot {
  animation: movePoint 5s forwards;
  animation-delay: 1s;
  background-color: #2563eb; /* 초기 색상 */
  transform: translateY(-50%);
  z-index: 10;
  left: 25%;
}

.moving-pulse {
  animation: movePulse 5s forwards, ping 1.5s infinite;
  animation-delay: 1s, 0s;
  background-color: rgba(59, 130, 246, 0.5); /* 초기 색상 */
  opacity: 0.5;
  transform: translateY(-50%);
  z-index: 9;
  left: 25%;
}

.progress-bar {
  width: 33.333%;
  animation: fillProgress 5s forwards;
  animation-delay: 1s;
}

.location-text::after {
  content: "현재 위치: 1층 로비";
  animation: changeLocationText 5s forwards;
  animation-delay: 1s;
}

.destination-text::after {
  content: "목적지: MRI 검사실 (3층)";
  animation: changeDestinationText 5s forwards;
  animation-delay: 1s;
}

.location-text, .destination-text {
  position: relative;
}

.location-text span, .destination-text span {
  visibility: hidden;
}
</style>