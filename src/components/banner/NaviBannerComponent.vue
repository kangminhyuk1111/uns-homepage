<template>
  <div class="app-container">
    <!-- 앱 상태바 -->
    <div class="status-bar">
      <div class="status-indicator"></div>
      <div class="status-dots">
        <div class="status-dot"></div>
        <div class="status-dot"></div>
        <div class="status-dot"></div>
      </div>
    </div>
    <!-- 앱 내용 -->
    <div class="map-container">
      <!-- 지도 형태 -->
      <div class="map-content">
        <!-- 출발지 포인터 -->
        <div class="start-point"></div>

        <!-- 이동 경로 -->
        <div class="route-path"></div>

        <!-- 도착지 포인터 -->
        <div class="destination-point"></div>

        <!-- 이동하는 포인터 -->
        <div class="moving-dot"></div>
        <div class="moving-pulse"></div>
      </div>
      <div class="info-panel">
        <div class="location-text">현재 위치: 1층 로비</div>
        <div class="destination-text">목적지: MRI 검사실 (3층)</div>
        <div class="progress-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    </div>
    <!-- 앱 하단 버튼 -->
    <div class="bottom-buttons">
      <div class="button-inactive"></div>
      <div class="button-active"></div>
      <div class="button-inactive"></div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  padding-top: 8px;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 4px;
}

.status-indicator {
  width: 48px;
  height: 8px;
  background-color: #d1d5db;
  border-radius: 9999px;
}

.status-dots {
  display: flex;
  gap: 4px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #d1d5db;
  border-radius: 9999px;
}

.map-container {
  position: relative;
  height: 112px;
  background-color: #dbeafe;
}

.map-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.start-point {
  position: absolute;
  top: 33.33%;
  left: 25%;
  width: 16px;
  height: 16px;
  background-color: rgba(59, 130, 246, 0.5);
  border-radius: 9999px;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.route-path {
  position: absolute;
  left: 25%;
  top: calc(33.33% - 1px);
  height: 0;
  width: 40%;
  border-top: 2px dashed #3b82f6;
}

.destination-point {
  position: absolute;
  left: 65%;
  top: 25%;
  margin-top: 2px;
  width: 12px;
  height: 12px;
  background-color: #ef4444;
  border-radius: 9999px;
}

.moving-dot {
  position: absolute;
  top: 33.33%;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background-color: #2563eb;
  transform: translateY(-50%);
  z-index: 10;
  left: 25%;
  animation: movePoint 5s forwards;
  animation-delay: 1s;
}

.moving-pulse {
  position: absolute;
  top: 33.33%;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: rgba(59, 130, 246, 0.5);
  opacity: 0.5;
  transform: translateY(-50%);
  z-index: 9;
  left: 25%;
  animation: movePulse 5s forwards, ping 1.5s infinite;
  animation-delay: 1s, 0s;
}

.info-panel {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 8px;
}

.location-text {
  font-size: 9px;
  color: #1f2937;
  font-weight: 500;
  position: relative;
}

.location-text::after {
  content: "현재 위치: 1층 로비";
  position: absolute;
  left: 0;
  top: 0;
  animation: changeLocationText 5s forwards;
  animation-delay: 1s;
}

.destination-text {
  font-size: 8px;
  color: #2563eb;
  position: relative;
}

.destination-text::after {
  content: "목적지: MRI 검사실 (3층)";
  position: absolute;
  left: 0;
  top: 0;
  animation: changeDestinationText 5s forwards;
  animation-delay: 1s;
}

.progress-container {
  margin-top: 4px;
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 9999px;
}

.progress-bar {
  height: 100%;
  background-color: #3b82f6;
  border-radius: 9999px;
  width: 33.333%;
  animation: fillProgress 5s forwards;
  animation-delay: 1s;
}

.bottom-buttons {
  display: flex;
  justify-content: space-around;
  padding: 4px 8px;
}

.button-inactive {
  width: 16px;
  height: 4px;
  background-color: #d1d5db;
  border-radius: 2px;
}

.button-active {
  width: 16px;
  height: 4px;
  background-color: #3b82f6;
  border-radius: 2px;
}

/* 애니메이션 키프레임 */
@keyframes movePoint {
  0% {
    left: 25%;
    background-color: #2563eb;
  }
  100% {
    left: 65%;
    background-color: #22c55e;
  }
}

@keyframes movePulse {
  0% {
    left: 25%;
    background-color: rgba(59, 130, 246, 0.5);
  }
  100% {
    left: 65%;
    background-color: rgba(34, 197, 94, 0.5);
  }
}

@keyframes fillProgress {
  0% {
    width: 33.333%;
  }
  100% {
    width: 100%;
    background-color: #22c55e;
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
    color: #2563eb;
  }
  100% {
    content: "안내를 완료했습니다";
    color: #16a34a;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>