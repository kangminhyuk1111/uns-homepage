<template>
  <div class="product-card" :class="`card-${color}`">
    <!-- 상단 UI 디자인 영역 -->
    <div class="card-visual" :class="`visual-${color}`">
      <!-- Baro Paper UI -->
      <div v-if="icon === 'document'" class="ui-container">
        <PaperBannerComponent/>
      </div>

      <!-- Baro Pop UI -->
      <div v-else-if="icon === 'monitor'" class="ui-container">
        <PopBannerComponent/>
      </div>

      <!-- Baro Kiosk UI -->
      <div v-else-if="icon === 'mobile'" class="ui-container">
        <KioskBannerComponent/>
      </div>

      <!-- Baro Navi UI -->
      <div v-else-if="icon === 'map'" class="ui-container">
        <NaviBannerComponent/>
      </div>

      <!-- Baro Safe UI -->
      <div v-else-if="icon === 'shield'" class="ui-container">
        <div class="safe-header">
          <div class="safe-title">안전 확인 시스템</div>
          <div class="safe-subtitle">환자 식별 및 투약 확인</div>
        </div>
        <div class="safe-content">
          <div class="info-card">
            <div class="info-header">
              <span class="info-title">환자 정보</span>
              <span class="status-badge status-confirmed">확인됨</span>
            </div>
            <div class="info-details">
              <div class="detail-row">
                <span>환자 ID:</span>
                <span class="detail-value">P-12345</span>
              </div>
              <div class="detail-row">
                <span>성명:</span>
                <span class="detail-value">김환자</span>
              </div>
            </div>
          </div>
          <div class="info-card">
            <div class="info-header">
              <span class="info-title">투약 정보</span>
              <span class="status-badge status-pending">스캔 필요</span>
            </div>
            <div class="button-grid">
              <div class="action-button">약품 스캔</div>
              <div class="action-button">투약 기록</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Baro Chart UI -->
      <div v-else-if="icon === 'chart'" class="ui-container">
        <div class="chart-header">
          <div class="chart-title">병원정보시스템</div>
          <div class="chart-subtitle">환자 차트 및 검사결과</div>
        </div>
        <div class="chart-content">
          <div class="chart-patient-info">
            <div class="patient-title">환자 차트</div>
            <div class="patient-name">김환자 (45세/남)</div>
          </div>
          <div class="chart-graph">
            <div class="chart-bars">
              <div class="chart-bar" style="height: 30%"></div>
              <div class="chart-bar" style="height: 45%"></div>
              <div class="chart-bar" style="height: 80%"></div>
              <div class="chart-bar" style="height: 60%"></div>
              <div class="chart-bar" style="height: 75%"></div>
              <div class="chart-bar" style="height: 40%"></div>
              <div class="chart-bar" style="height: 55%"></div>
              <div class="chart-bar" style="height: 70%"></div>
              <div class="chart-bar" style="height: 50%"></div>
              <div class="chart-bar" style="height: 65%"></div>
              <div class="chart-bar" style="height: 35%"></div>
              <div class="chart-bar" style="height: 85%"></div>
            </div>
          </div>
          <div class="chart-details">
            <div class="detail-card">
              <div class="detail-title">Vital Signs</div>
              <div class="detail-info">
                <div class="vital-row">
                  <span>혈압:</span>
                  <span>120/80 mmHg</span>
                </div>
                <div class="vital-row">
                  <span>체온:</span>
                  <span>36.5 °C</span>
                </div>
              </div>
            </div>
            <div class="detail-card">
              <div class="detail-title">최근 검사</div>
              <div class="detail-info">
                <div class="vital-row">
                  <span>혈액검사:</span>
                  <span>완료</span>
                </div>
                <div class="vital-row">
                  <span>X-ray:</span>
                  <span>예정</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Baro Talk UI -->
      <div v-else-if="icon === 'chat'" class="ui-container">
        <div class="talk-header">
          <div class="talk-title">Baro Talk</div>
          <div class="talk-subtitle">의료진 전용 메신저</div>
        </div>
        <div class="talk-content">
          <div class="message-container message-left">
            <div class="message-bubble message-received">
              <div class="message-sender">김의사</div>
              <div class="message-text">302호 환자 상태 확인 부탁드립니다</div>
              <div class="message-time">09:15</div>
            </div>
          </div>
          <div class="message-container message-right">
            <div class="message-bubble message-sent">
              <div class="message-text">확인했습니다. 산소포화도 95%로 안정적입니다.</div>
              <div class="message-time">09:18</div>
            </div>
          </div>
          <div class="message-container message-left">
            <div class="message-bubble message-received">
              <div class="message-sender">김의사</div>
              <div class="message-text">감사합니다. 회진 시 함께 방문하겠습니다.</div>
              <div class="message-time">09:20</div>
            </div>
          </div>
        </div>
        <div class="talk-input">
          <div class="input-field"></div>
          <div class="send-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Baro Call UI -->
      <div v-else-if="icon === 'phone'" class="ui-container">
        <div class="call-header">
          <div class="call-title">Baro Call</div>
          <div class="call-subtitle">디지털 너스콜 시스템</div>
        </div>
        <div class="call-content">
          <div class="emergency-call">
            <div class="emergency-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
              </svg>
            </div>
            <div class="emergency-info">
              <div class="emergency-title">긴급 호출</div>
              <div class="emergency-details">병실: 305호 | 환자: 이환자</div>
            </div>
            <div class="emergency-button">응답</div>
          </div>
          <div class="call-stats">
            <div class="stat-card">
              <div class="stat-label">대기 중인 호출</div>
              <div class="stat-number">3</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">응답 완료</div>
              <div class="stat-number">12</div>
            </div>
          </div>
          <div class="call-list">
            <div class="call-item">
              <span class="room-number">301호</span>
              <span class="call-status status-completed">처리 완료</span>
            </div>
            <div class="call-item">
              <span class="room-number">302호</span>
              <span class="call-status status-responding">응답 중</span>
            </div>
            <div class="call-item">
              <span class="room-number">303호</span>
              <span class="call-status status-waiting">대기 중</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 기본 아이콘 -->
      <div v-else class="default-icon" :class="`icon-${color}`">
        <div class="icon-svg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path v-if="icon === 'document'" stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            <path v-else-if="icon === 'monitor'" stroke-linecap="round" stroke-linejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- 콘텐츠 영역 -->
    <div class="card-content">
      <!-- 배지 -->
      <div class="badge-container">
        <div class="product-badge" :class="`badge-${color}`">
          <span>Baro Solution</span>
        </div>
      </div>

      <!-- 제목 -->
      <h3 class="card-title" :class="`title-${color}`">{{ title }}</h3>

      <!-- 설명 -->
      <p class="card-description">{{ description }}</p>

      <!-- 특징 목록 -->
      <div class="features-container">
        <h4 class="features-title" :class="`features-title-${color}`">
          <svg xmlns="http://www.w3.org/2000/svg" class="features-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
          주요 특징
        </h4>
        <ul class="features-list">
          <li v-for="(feature, index) in features" :key="index" class="feature-item">
            <span class="feature-checkmark" :class="`checkmark-${color}`">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </span>
            <span class="feature-text">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- 링크 버튼 -->
      <router-link :to="link" class="card-link" :class="`link-${color}`">
        <span class="link-content">
          자세히 보기
          <svg xmlns="http://www.w3.org/2000/svg" class="link-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"/>
          </svg>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import PopBannerComponent from "@/components/banner/PopBannerComponent.vue";
import KioskBannerComponent from "@/components/banner/KioskBannerComponent.vue";
import NaviBannerComponent from "@/components/banner/NaviBannerComponent.vue";
import PaperBannerComponent from "@/components/banner/PaperBannerComponent.vue";

export default {
  name: 'ProductCard',
  components: {PaperBannerComponent, NaviBannerComponent, KioskBannerComponent, PopBannerComponent},
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    },
    features: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: 'document'
    }
  }
};
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 카드 컨테이너 ==== */
.product-card {
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  border-color: #d1d5db;
  transform: translateY(-0.25rem);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* ==== 색상별 호버 효과 ==== */
.card-blue:hover { border-color: #93c5fd; }
.card-cyan:hover { border-color: #67e8f9; }
.card-teal:hover { border-color: #5eead4; }
.card-emerald:hover { border-color: #6ee7b7; }
.card-indigo:hover { border-color: #a5b4fc; }
.card-cobalt:hover { border-color: #60a5fa; }
.card-lavender:hover { border-color: #c4b5fd; }

/* ==== 상단 UI 디자인 영역 ==== */
.card-visual {
  height: 14rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* 색상별 배경 */
.visual-blue { background-color: #eff6ff; }
.visual-cyan { background-color: #ecfeff; }
.visual-teal { background-color: #f0fdfa; }
.visual-emerald { background-color: #ecfdf5; }
.visual-indigo { background-color: #eef2ff; }
.visual-cobalt { background-color: #eff6ff; }
.visual-lavender { background-color: #f5f3ff; }

/* ==== UI 컨테이너 ==== */
.ui-container {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e5e7eb;
}

/* ==== Baro Safe UI 스타일 ==== */
.safe-header {
  background-color: #1d4ed8;
  padding: 0.5rem 0.75rem;
  color: white;
}

.safe-title {
  font-size: 0.875rem;
  font-weight: 700;
}

.safe-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
}

.safe-content {
  flex-grow: 1;
  padding: 0.75rem;
}

.info-card {
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
}

.info-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.info-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
}

.status-badge {
  font-size: 0.75rem;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
}

.status-confirmed {
  background-color: #10b981;
}

.status-pending {
  background-color: #f59e0b;
}

.info-details {
  font-size: 0.75rem;
  color: #1f2937;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.detail-value {
  font-weight: 500;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
  margin-top: 0.5rem;
}

.action-button {
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 0.625rem;
  border-radius: 0.25rem;
  padding: 0.25rem;
  text-align: center;
}

/* ==== Baro Chart UI 스타일 ==== */
.chart-header {
  background-color: #4338ca;
  padding: 0.5rem 0.75rem;
  color: white;
}

.chart-title {
  font-size: 0.875rem;
  font-weight: 700;
}

.chart-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
}

.chart-content {
  flex-grow: 1;
  padding: 0.75rem;
}

.chart-patient-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.patient-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1f2937;
}

.patient-name {
  font-size: 0.75rem;
  color: #2563eb;
}

.chart-graph {
  height: 5rem;
  margin-bottom: 0.75rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.chart-bars {
  display: flex;
  align-items: end;
  height: 100%;
  gap: 0.125rem;
}

.chart-bar {
  flex: 1;
  background-color: #3b82f6;
  border-radius: 0.125rem 0.125rem 0 0;
  min-height: 10%;
}

.chart-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.detail-card {
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.detail-title {
  font-size: 0.625rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
}

.detail-info {
  font-size: 0.625rem;
  color: #4b5563;
}

.vital-row {
  display: flex;
  justify-content: space-between;
}

/* ==== Baro Talk UI 스타일 ==== */
.talk-header {
  background: linear-gradient(45deg, #2563eb, #1e40af);
  padding: 0.5rem 0.75rem;
  color: white;
}

.talk-title {
  font-size: 0.875rem;
  font-weight: 700;
}

.talk-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
}

.talk-content {
  flex-grow: 1;
  padding: 0.5rem;
  background-color: #f3f4f6;
}

.message-container {
  display: flex;
  margin-bottom: 0.5rem;
}

.message-left {
  justify-content: flex-start;
}

.message-right {
  justify-content: flex-end;
}

.message-bubble {
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 80%;
}

.message-received {
  background-color: white;
}

.message-sent {
  background-color: #3b82f6;
  color: white;
}

.message-sender {
  font-size: 0.625rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.message-text {
  font-size: 0.625rem;
  color: #374151;
}

.message-sent .message-text {
  color: white;
}

.message-time {
  font-size: 0.5rem;
  color: #6b7280;
  text-align: right;
  margin-top: 0.25rem;
}

.message-sent .message-time {
  color: #dbeafe;
}

.talk-input {
  padding: 0.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
}

.input-field {
  flex-grow: 1;
  background-color: #f3f4f6;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

.send-button {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.send-button svg {
  width: 0.75rem;
  height: 0.75rem;
}

/* ==== Baro Call UI 스타일 ==== */
.call-header {
  background: linear-gradient(45deg, #7c3aed, #4338ca);
  padding: 0.5rem 0.75rem;
  color: white;
}

.call-title {
  font-size: 0.875rem;
  font-weight: 700;
}

.call-subtitle {
  font-size: 0.75rem;
  opacity: 0.8;
}

.call-content {
  flex-grow: 1;
  padding: 0.75rem;
}

.emergency-call {
  background-color: #fef2f2;
  border: 1px solid #fca5a5;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.emergency-icon {
  width: 2rem;
  height: 2rem;
  background-color: #ef4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  color: white;
}

.emergency-icon svg {
  width: 1rem;
  height: 1rem;
}

.emergency-info {
  flex-grow: 1;
}

.emergency-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #991b1b;
}

.emergency-details {
  font-size: 0.625rem;
  color: #7f1d1d;
}

.emergency-button {
  font-size: 0.75rem;
  color: white;
  background-color: #ef4444;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
}

.call-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.stat-card {
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
}

.stat-label {
  font-size: 0.625rem;
  color: #6b7280;
}

.stat-number {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
}

.call-list {
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  overflow: hidden;
}

.call-item {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
}

.call-item:last-child {
  border-bottom: none;
}

.room-number {
  font-size: 0.75rem;
  font-weight: 500;
  color: #1f2937;
}

.call-status {
  font-size: 0.625rem;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
}

.status-completed {
  background-color: #10b981;
}

.status-responding {
  background-color: #3b82f6;
}

.status-waiting {
  background-color: #f59e0b;
}

/* ==== 기본 아이콘 스타일 ==== */
.default-icon {
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid;
}

/* 색상별 기본 아이콘 */
.icon-blue {
  border-color: #93c5fd;
  background-color: #dbeafe;
}

.icon-cyan {
  border-color: #67e8f9;
  background-color: #cffafe;
}

.icon-teal {
  border-color: #5eead4;
  background-color: #ccfbf1;
}

.icon-emerald {
  border-color: #6ee7b7;
  background-color: #d1fae5;
}

.icon-indigo {
  border-color: #a5b4fc;
  background-color: #e0e7ff;
}

.icon-cobalt {
  border-color: #60a5fa;
  background-color: #dbeafe;
}

.icon-lavender {
  border-color: #c4b5fd;
  background-color: #f3e8ff;
}

.icon-svg {
  width: 4rem;
  height: 4rem;
}

.icon-blue .icon-svg { color: #1e40af; }
.icon-cyan .icon-svg { color: #0891b2; }
.icon-teal .icon-svg { color: #0d9488; }
.icon-emerald .icon-svg { color: #059669; }
.icon-indigo .icon-svg { color: #4338ca; }
.icon-cobalt .icon-svg { color: #1e40af; }
.icon-lavender .icon-svg { color: #7c3aed; }

/* ==== 콘텐츠 영역 ==== */
.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: white;
}

/* ==== 배지 스타일 ==== */
.badge-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.product-badge {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
}

/* 색상별 배지 */
.badge-blue {
  color: #1e40af;
  background-color: #dbeafe;
  border-color: #93c5fd;
}

.badge-cyan {
  color: #0891b2;
  background-color: #cffafe;
  border-color: #67e8f9;
}

.badge-teal {
  color: #0d9488;
  background-color: #ccfbf1;
  border-color: #5eead4;
}

.badge-emerald {
  color: #059669;
  background-color: #d1fae5;
  border-color: #6ee7b7;
}

.badge-indigo {
  color: #4338ca;
  background-color: #e0e7ff;
  border-color: #a5b4fc;
}

.badge-cobalt {
  color: #1e40af;
  background-color: #dbeafe;
  border-color: #60a5fa;
}

.badge-lavender {
  color: #7c3aed;
  background-color: #f3e8ff;
  border-color: #c4b5fd;
}

.product-card:hover .product-badge {
  transform: scale(1.05);
}

/* 색상별 배지 호버 */
.product-card:hover .badge-blue { background-color: #bfdbfe; }
.product-card:hover .badge-cyan { background-color: #a7f3d0; }
.product-card:hover .badge-teal { background-color: #99f6e4; }
.product-card:hover .badge-emerald { background-color: #a7f3d0; }
.product-card:hover .badge-indigo { background-color: #c7d2fe; }
.product-card:hover .badge-cobalt { background-color: #bfdbfe; }
.product-card:hover .badge-lavender { background-color: #ddd6fe; }

/* ==== 제목 스타일 ==== */
.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1f2937;
  transition: color 0.3s ease;
}

/* 색상별 제목 호버 */
.product-card:hover .title-blue { color: #2563eb; }
.product-card:hover .title-cyan { color: #0891b2; }
.product-card:hover .title-teal { color: #0d9488; }
.product-card:hover .title-emerald { color: #059669; }
.product-card:hover .title-indigo { color: #4338ca; }
.product-card:hover .title-cobalt { color: #1e40af; }
.product-card:hover .title-lavender { color: #7c3aed; }

/* ==== 설명 스타일 ==== */
.card-description {
  color: #4b5563;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  line-height: 1.6;
}

/* ==== 특징 리스트 스타일 ==== */
.features-container {
  margin-bottom: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #f3f4f6;
  background-color: #f9fafb;
  transition: border-color 0.3s ease;
}

.product-card:hover .features-container {
  border-color: #e5e7eb;
}

.features-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.features-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
}

/* 색상별 특징 제목 */
.features-title-blue .features-icon { color: #3b82f6; }
.features-title-cyan .features-icon { color: #06b6d4; }
.features-title-teal .features-icon { color: #14b8a6; }
.features-title-emerald .features-icon { color: #10b981; }
.features-title-indigo .features-icon { color: #6366f1; }
.features-title-cobalt .features-icon { color: #3b82f6; }
.features-title-lavender .features-icon { color: #8b5cf6; }

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
}

.feature-checkmark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin-right: 0.5rem;
  border-radius: 0.375rem;
  flex-shrink: 0;
}

.feature-checkmark svg {
  width: 0.875rem;
  height: 0.875rem;
}

/* 색상별 체크마크 */
.checkmark-blue {
  background-color: #dbeafe;
  color: #2563eb;
}

.checkmark-cyan {
  background-color: #cffafe;
  color: #0891b2;
}

.checkmark-teal {
  background-color: #ccfbf1;
  color: #0d9488;
}

.checkmark-emerald {
  background-color: #d1fae5;
  color: #059669;
}

.checkmark-indigo {
  background-color: #e0e7ff;
  color: #4338ca;
}

.checkmark-cobalt {
  background-color: #dbeafe;
  color: #1e40af;
}

.checkmark-lavender {
  background-color: #f3e8ff;
  color: #7c3aed;
}

.feature-text {
  font-size: 0.875rem;
  color: #374151;
}

/* ==== 링크 버튼 스타일 ==== */
.card-link {
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-content {
  display: flex;
  align-items: center;
}

.link-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.375rem;
}

/* 색상별 링크 버튼 */
.link-blue {
  background-color: #3b82f6;
}

.link-blue:hover {
  background-color: #2563eb;
}

.link-cyan {
  background-color: #06b6d4;
}

.link-cyan:hover {
  background-color: #0891b2;
}

.link-teal {
  background-color: #14b8a6;
}

.link-teal:hover {
  background-color: #0d9488;
}

.link-emerald {
  background-color: #10b981;
}

.link-emerald:hover {
  background-color: #059669;
}

.link-indigo {
  background-color: #6366f1;
}

.link-indigo:hover {
  background-color: #4338ca;
}

.link-cobalt {
  background-color: #3b82f6;
}

.link-cobalt:hover {
  background-color: #1e40af;
}

.link-lavender {
  background-color: #8b5cf6;
}

.link-lavender:hover {
  background-color: #7c3aed;
}

/* ==== 반응형 디자인 ==== */
@media (max-width: 768px) {
  .card-visual {
    height: 12rem;
    padding: 1rem;
  }

  .card-content {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .default-icon {
    width: 6rem;
    height: 6rem;
  }

  .icon-svg {
    width: 3rem;
    height: 3rem;
  }
}

@media (max-width: 480px) {
  .card-visual {
    height: 10rem;
    padding: 0.75rem;
  }

  .card-content {
    padding: 0.75rem;
  }

  .default-icon {
    width: 5rem;
    height: 5rem;
  }

  .icon-svg {
    width: 2.5rem;
    height: 2.5rem;
  }
}

/* ==== 접근성 개선 ==== */
.card-link:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* ==== 애니메이션 개선 ==== */
@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-badge,
  .card-title,
  .features-container,
  .card-link {
    transition: none !important;
  }
}

/* ==== 다크모드 대응 (선택사항) ==== */
@media (prefers-color-scheme: dark) {
  .product-card {
    background-color: #1f2937;
    border-color: #374151;
  }

  .card-content {
    background-color: #1f2937;
  }

  .card-title {
    color: #f9fafb;
  }

  .card-description {
    color: #d1d5db;
  }

  .features-container {
    background-color: #374151;
    border-color: #4b5563;
  }

  .feature-text {
    color: #e5e7eb;
  }

  .ui-container {
    background-color: #f9fafb;
  }
}
</style>