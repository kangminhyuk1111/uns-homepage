<template>
  <div class="popup-container">
    <div class="pop-display">
      <!-- 상단 헤더 -->
      <div class="pop-header">
        <div class="header-left">
          <div class="status-indicator"></div>
          <div class="center-name">♣♣♣센터</div>
        </div>
        <div class="current-time">09:45</div>
      </div>

      <!-- 주요 콘텐츠 -->
      <div class="main-content">
        <!-- 왼쪽 섹션 -->
        <div class="left-section">
          <div class="section-title-kr">상담실</div>
          <div class="section-title-en">Consulting</div>
        </div>

        <!-- 오른쪽 섹션 -->
        <div class="right-section">
          <div class="room-info">
            <div class="room-number">5번</div>
            <div class="room-label">Room5</div>
          </div>
          <div class="room-info">
            <div class="room-number">6번</div>
            <div class="room-label">Room6</div>
          </div>
        </div>
      </div>

      <!-- 상담 간호사 -->
      <div class="nurse-section">
        <div class="section-header">
          <div class="nurse-title-kr">상담 간호사</div>
          <div class="nurse-title-en">Nurse</div>
        </div>
        <div class="nurse-content">
          <div class="nurse-info nurse-1">
            <span class="nurse-name">이♣주</span>
          </div>
          <div class="nurse-info nurse-2">
            <span class="nurse-name">나♣성</span>
          </div>
        </div>
      </div>

      <!-- 상담 중인 분 -->
      <div class="consultation-section">
        <div class="section-header">
          <div class="consultation-title-kr">상담 중인 분</div>
          <div class="consultation-title-en">Consultation</div>
        </div>
        <div class="consultation-content">
          <div class="patient-info patient-1">
            <span class="patient-name">가삼♣</span>
          </div>
          <div class="patient-info patient-2">
            <span class="patient-name">나삼♣</span>
          </div>
        </div>
      </div>

      <!-- 공지사항 -->
      <div class="notice-section">
        <span class="notice-text">공지사항: 오늘 상담실 운영 시간은 오전 9시부터 오후 6시까지입니다. 감사합니다.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopBannerComponent'
}
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 팝업 컨테이너 ==== */
.popup-container {
  position: relative;
}

.pop-display {
  background-color: white;
  border-radius: 0.5rem; /* rounded-lg */
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-xl */
  animation: popup 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ==== 상단 헤더 ==== */
.pop-header {
  background-color: #172554; /* bg-blue-950 */
  padding: 0.375rem 0.5rem; /* py-1.5 px-2 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1e3a8a; /* border-blue-800 */
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* space-x-2 */
}

.status-indicator {
  width: 1.5rem; /* w-6 */
  height: 0.75rem; /* h-3 */
  background-color: rgba(255, 255, 255, 0.2); /* bg-white/20 */
  border-radius: 0.125rem; /* rounded-sm */
}

.center-name {
  font-size: 0.5rem; /* text-[9px] */
  font-weight: 700; /* font-bold */
  color: #fde047; /* text-yellow-300 */
  animation: pulse-text 2s infinite;
}

.current-time {
  font-size: 0.45rem; /* text-[8px] */
  color: #fde047; /* text-yellow-300 */
}

/* ==== 메인 콘텐츠 ==== */
.main-content {
  display: flex;
}

.left-section {
  width: 25%; /* w-1/4 */
  background-color: #172554; /* bg-blue-950 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.375rem 0; /* py-1.5 */
  border-right: 1px solid #1e3a8a; /* border-blue-800 */
}

.section-title-kr {
  font-size: 0.5rem; /* text-[9px] */
  font-weight: 700; /* font-bold */
  color: #fde047; /* text-yellow-300 */
}

.section-title-en {
  font-size: 0.4rem; /* text-[7px] */
  color: #fde047; /* text-yellow-300 */
}

.right-section {
  width: 75%; /* w-3/4 */
  background-color: #172554; /* bg-blue-950 */
  display: flex;
}

.room-info {
  width: 50%; /* w-1/2 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.375rem 0; /* py-1.5 */
}

.room-info:first-child {
  border-right: 1px solid #1e3a8a; /* border-blue-800 */
}

.room-number {
  font-size: 0.6rem; /* text-[11px] */
  font-weight: 700; /* font-bold */
  color: #fde047; /* text-yellow-300 */
}

.room-label {
  font-size: 0.4rem; /* text-[7px] */
  color: #fde047; /* text-yellow-300 */
}

/* ==== 간호사 섹션 ==== */
.nurse-section {
  display: flex;
  font-size: 0.4rem; /* text-[7px] */
}

.section-header {
  width: 25%; /* w-1/4 */
  background-color: #172554; /* bg-blue-950 */
  padding: 0.5rem 0; /* py-2 */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #1e3a8a; /* border-blue-800 */
  border-top: 1px solid #1e3a8a;
}

.nurse-title-kr {
  font-size: 0.5rem; /* text-[9px] */
  font-weight: 700; /* font-bold */
  color: #fde047; /* text-yellow-300 */
}

.nurse-title-en {
  font-size: 0.4rem; /* text-[7px] */
  color: #fde047; /* text-yellow-300 */
}

.nurse-content {
  width: 75%; /* w-3/4 */
  display: flex;
  border-top: 1px solid #93c5fd; /* border-blue-300 */
}

.nurse-info {
  width: 50%; /* w-1/2 */
  background-color: #dbeafe; /* bg-blue-100 */
  padding: 0.5rem 0; /* py-2 */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s ease-in forwards;
}

.nurse-info:first-child {
  border-right: 1px solid #93c5fd; /* border-blue-300 */
}

.nurse-1 {
  animation-delay: 0s;
}

.nurse-2 {
  animation-delay: 0.2s;
}

.nurse-name {
  font-size: 0.5rem; /* text-[9px] */
  font-weight: 700; /* font-bold */
  color: #172554; /* text-blue-950 */
}

/* ==== 상담 섹션 ==== */
.consultation-section {
  display: flex;
  font-size: 0.4rem; /* text-[7px] */
}

.consultation-title-kr {
  font-size: 0.5rem; /* text-[9px] */
  font-weight: 700; /* font-bold */
  color: #86efac; /* text-green-300 */
}

.consultation-title-en {
  font-size: 0.4rem; /* text-[7px] */
  color: #86efac; /* text-green-300 */
}

.consultation-content {
  width: 75%; /* w-3/4 */
  display: flex;
  border-top: 1px solid #93c5fd; /* border-blue-300 */
}

.patient-info {
  width: 50%; /* w-1/2 */
  background-color: #dbeafe; /* bg-blue-100 */
  padding: 0.5rem 0; /* py-2 */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.5s ease-in forwards;
}

.patient-info:first-child {
  border-right: 1px solid #93c5fd; /* border-blue-300 */
}

.patient-1 {
  animation-delay: 0.4s;
}

.patient-2 {
  animation-delay: 0.6s;
}

.patient-name {
  font-size: 0.5rem; /* text-[9px] */
  font-weight: 700; /* font-bold */
  color: #172554; /* text-blue-950 */
}

/* ==== 공지사항 섹션 ==== */
.notice-section {
  background-color: #172554; /* bg-blue-950 */
  padding: 0.25rem 0; /* py-1 */
  display: flex;
  align-items: center;
  overflow: hidden;
}

.notice-text {
  font-size: 0.4rem; /* text-[7px] */
  font-weight: 700; /* font-bold */
  color: #fde047; /* text-yellow-300 */
  margin-left: 0.5rem; /* ml-2 */
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
  min-width: 100%;
}

/* ==== 애니메이션 ==== */
@keyframes popup {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(20px);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse-text {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* ==== 반응형 디자인 ==== */
@media (max-width: 768px) {
  .pop-display {
    border-radius: 0.375rem;
  }

  .pop-header {
    padding: 0.25rem 0.375rem;
  }

  .left-section,
  .section-header {
    padding: 0.25rem 0;
  }

  .nurse-info,
  .patient-info {
    padding: 0.375rem 0;
  }

  .center-name,
  .section-title-kr,
  .nurse-title-kr,
  .consultation-title-kr {
    font-size: 0.45rem;
  }

  .current-time,
  .section-title-en,
  .nurse-title-en,
  .consultation-title-en,
  .notice-text {
    font-size: 0.375rem;
  }

  .room-number,
  .nurse-name,
  .patient-name {
    font-size: 0.45rem;
  }

  .room-label {
    font-size: 0.375rem;
  }
}

@media (max-width: 480px) {
  .main-content,
  .nurse-section,
  .consultation-section {
    flex-direction: column;
  }

  .left-section,
  .section-header {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #1e3a8a;
  }

  .right-section,
  .nurse-content,
  .consultation-content {
    width: 100%;
  }

  .room-info:first-child,
  .nurse-info:first-child,
  .patient-info:first-child {
    border-right: 1px solid #93c5fd;
  }
}

/* ==== 접근성 개선 ==== */
@media (prefers-reduced-motion: reduce) {
  .pop-display,
  .nurse-info,
  .patient-info,
  .center-name,
  .notice-text {
    animation: none !important;
  }
}

/* ==== 고급 효과 ==== */
.pop-display {
  position: relative;
  overflow: hidden;
}

.pop-display::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

/* 상태 표시기 깜빡임 */
.status-indicator {
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.4;
  }
}

/* 환자 대기 상태 강조 */
.patient-info {
  position: relative;
}

.patient-info::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(34, 197, 94, 0.1) 50%, transparent 70%);
  animation: waiting-pulse 3s ease-in-out infinite;
}

@keyframes waiting-pulse {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

/* 실시간 업데이트 효과 */
.room-number,
.nurse-name,
.patient-name {
  transition: all 0.3s ease;
}

.room-number:hover,
.nurse-name:hover,
.patient-name:hover {
  transform: scale(1.1);
  text-shadow: 0 0 8px rgba(253, 224, 71, 0.8);
}

/* 디지털 디스플레이 효과 */
.pop-display {
  border: 2px solid #1e3a8a;
  box-shadow:
      0 0 20px rgba(37, 99, 235, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 텍스트 스캔라인 효과 (선택사항) */
@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(200px);
  }
}

.pop-display::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(253, 224, 71, 0.8), transparent);
  animation: scanline 4s ease-in-out infinite;
  pointer-events: none;
}
</style>