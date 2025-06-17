<!-- MedicalDashboard.vue -->
<template>
  <div class="dashboard-wrapper">
    <!-- 메인 컨테이너 -->
    <div class="main-container">
      <!-- 좌측 내비게이션 -->
      <div class="sidebar">
        <div class="nav-item active">
          <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div class="nav-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div class="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div class="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>

      <!-- 메인 콘텐츠 영역 -->
      <div class="main-content">
        <!-- 상단 헤더 -->
        <div class="header">
          <div class="header-info">
            <h3 class="header-title">환자 대시보드</h3>
            <p class="header-date">{{ currentDate }}</p>
          </div>
          <div class="header-actions">
            <div class="notification-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="notification-badge"></span>
            </div>
            <div class="user-avatar">
              DR
            </div>
          </div>
        </div>

        <!-- 환자 요약 정보 카드 -->
        <div class="patient-summary">
          <div class="patient-info">
            <div class="patient-label">현재 환자</div>
            <div class="patient-name">김민준 (48세, 남)</div>
            <div class="patient-details">ID: P-12458 • 입원일: 2025-04-05</div>
          </div>
          <div class="vital-signs">
            <div class="vital-label">활력 징후</div>
            <div class="vital-stats">
              <div class="vital-item">
                <span class="vital-type">혈압</span>
                <span class="vital-value">120/80</span>
              </div>
              <div class="vital-item">
                <span class="vital-type">맥박</span>
                <span class="vital-value">72</span>
              </div>
              <div class="vital-item">
                <span class="vital-type">체온</span>
                <span class="vital-value">36.5°C</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 환자 진료 타임라인 -->
        <div class="timeline-section">
          <div class="timeline-header">
            <h4 class="timeline-title">진료 일정</h4>
            <button class="add-schedule-btn">+ 새 일정</button>
          </div>

          <div class="timeline-list">
            <div class="timeline-item">
              <div class="timeline-icon completed">
                <svg xmlns="http://www.w3.org/2000/svg" class="timeline-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-header">
                  <div class="timeline-item-title">혈액 검사 결과</div>
                  <div class="timeline-item-time">오늘 08:30</div>
                </div>
                <div class="timeline-item-description">정상 수치 범위 내 결과 확인됨</div>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-icon scheduled">
                <svg xmlns="http://www.w3.org/2000/svg" class="timeline-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="timeline-content">
                <div class="timeline-item-header">
                  <div class="timeline-item-title">내과 진료 예약</div>
                  <div class="timeline-item-time">오늘 14:00</div>
                </div>
                <div class="timeline-item-description">이상준 교수 (내과) - 303호 진료실</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 하단 차트 영역 -->
        <div class="chart-section">
          <h4 class="chart-title">회복 모니터링</h4>
          <div class="chart-container">
            <div class="chart-days">
              <div v-for="(day, index) in weekDays" :key="index" class="chart-day">
                {{ day }}
              </div>
            </div>
            <div class="chart-bars">
              <div v-for="(value, index) in recoveryData" :key="index"
                   class="chart-bar"
                   :style="{ height: value + '%' }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 장식 요소 -->
    <div class="decoration decoration-1"></div>
    <div class="decoration decoration-2"></div>
  </div>
</template>

<script>
export default {
  name: 'MedicalDashboard',
  data() {
    return {
      weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      recoveryData: [33, 67, 75, 50, 60, 80, 100]
    }
  },
  computed: {
    currentDate() {
      const now = new Date();
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' };
      return now.toLocaleDateString('ko-KR', options);
    }
  }
}
</script>

<style scoped>
/* 기본 설정 */
.dashboard-wrapper {
  position: relative;
}

.main-container {
  width: 100%;
  height: 384px;
  background-color: white;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #f3f4f6;
}

@media (min-width: 768px) {
  .main-container {
    height: 400px;
  }
}

/* 좌측 내비게이션 */
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 64px;
  background: linear-gradient(to bottom, #2563eb, #4f46e5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  gap: 24px;
}

.nav-item {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-item.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-item.selected {
  background-color: white;
}

.nav-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.nav-item.selected .nav-icon {
  color: #2563eb;
}

/* 메인 콘텐츠 */
.main-content {
  margin-left: 64px;
  padding: 24px;
  height: 100%;
  overflow-y: auto;
}

/* 헤더 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.header-date {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification-icon {
  position: relative;
  cursor: pointer;
}

.notification-icon .icon {
  width: 24px;
  height: 24px;
  color: #9ca3af;
}

.notification-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background-color: #dbeafe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  font-weight: 500;
  font-size: 0.875rem;
}

/* 환자 요약 정보 */
.patient-summary {
  background-color: #eff6ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  border: 1px solid #dbeafe;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.patient-label {
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
  margin-bottom: 4px;
}

.patient-name {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 4px;
}

.patient-details {
  font-size: 0.875rem;
  color: #6b7280;
}

.vital-signs {
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.vital-label {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 4px;
}

.vital-stats {
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
}

.vital-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.vital-type {
  color: #6b7280;
}

.vital-value {
  font-weight: 500;
  color: #1f2937;
}

/* 타임라인 섹션 */
.timeline-section {
  margin-bottom: 24px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.timeline-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
}

.add-schedule-btn {
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.add-schedule-btn:hover {
  text-decoration: underline;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.timeline-item {
  display: flex;
  padding: 12px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.timeline-icon {
  flex-shrink: 0;
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-icon.completed {
  background-color: #dcfce7;
}

.timeline-icon.scheduled {
  background-color: #dbeafe;
}

.timeline-icon-svg {
  width: 20px;
  height: 20px;
}

.timeline-icon.completed .timeline-icon-svg {
  color: #16a34a;
}

.timeline-icon.scheduled .timeline-icon-svg {
  color: #2563eb;
}

.timeline-content {
  flex: 1;
}

.timeline-item-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.timeline-item-title {
  font-size: 0.875rem;
  font-weight: bold;
  color: #1f2937;
}

.timeline-item-time {
  font-size: 0.75rem;
  color: #6b7280;
}

.timeline-item-description {
  font-size: 0.875rem;
  color: #4b5563;
}

/* 차트 섹션 */
.chart-section {
  margin-bottom: 16px;
}

.chart-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #1f2937;
  margin: 0 0 12px 0;
}

.chart-container {
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.chart-days {
  display: flex;
  margin-bottom: 4px;
  gap: 8px;
}

.chart-day {
  font-size: 0.75rem;
  color: #6b7280;
  width: 32px;
  text-align: center;
}

.chart-bars {
  height: 96px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.chart-bar {
  width: 32px;
  background-color: #3b82f6;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  min-height: 8px;
  transition: all 0.3s ease;
}

.chart-bar:hover {
  background-color: #2563eb;
}

/* 장식 요소 */
.decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(48px);
  pointer-events: none;
}

.decoration-1 {
  bottom: -24px;
  left: -24px;
  width: 160px;
  height: 160px;
  background-color: #818cf8;
}

.decoration-2 {
  top: -40px;
  right: -40px;
  width: 256px;
  height: 256px;
  background-color: #60a5fa;
  opacity: 0.2;
}
</style>