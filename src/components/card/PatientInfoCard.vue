<template>
  <div class="patient-info-card"
       :class="[`card-${size}`, `text-${size}`, `padding-${size}`]"
       :style="{ width: width }">
    <div class="card-header">
      <span class="patient-title">{{ room }} {{ patientName }}</span>
      <span class="patient-info">{{ age }}세/{{ gender }}</span>
    </div>
    <div class="card-body">
      <div class="info-row">
        <span class="info-label">담당의</span>
        <span class="info-value">{{ doctorName }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">입원일</span>
        <span class="info-value">{{ admissionDate }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">회진시간</span>
        <span class="info-value">{{ roundTime }}</span>
      </div>
      <div class="caution-row">
        <span class="caution-label">주의사항</span>
        <span class="caution-value">{{ caution }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientInfoCard',
  props: {
    // 내용 속성
    room: {
      type: String,
      default: '302호'
    },
    patientName: {
      type: String,
      default: '김환자'
    },
    age: {
      type: [Number, String],
      default: 63
    },
    gender: {
      type: String,
      default: '남'
    },
    doctorName: {
      type: String,
      default: '김의사'
    },
    admissionDate: {
      type: String,
      default: '2025.04.10'
    },
    roundTime: {
      type: String,
      default: '09:30'
    },
    caution: {
      type: String,
      default: '낙상주의'
    },

    // 스타일 속성
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    width: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 카드 컨테이너 ==== */
.patient-info-card {
  background-color: #e5e7eb; /* bg-gray-200 */
  border-radius: 0.5rem; /* rounded-lg */
  color: #1f2937; /* text-gray-800 */
  padding-bottom: 0.125rem; /* pb-0.5 */
  transition: all 0.3s ease;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.patient-info-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  background-color: #f3f4f6;
}

/* ==== 카드 헤더 ==== */
.card-header {
  display: flex; /* flex */
  justify-content: space-between; /* justify-between */
  margin-bottom: 0.5rem; /* mb-2 */
  border-bottom: 1px solid #d1d5db; /* border-b border-gray-300 */
  padding-bottom: 0.25rem; /* pb-1 */
}

.patient-title {
  font-weight: 700; /* font-bold */
  color: #111827;
}

.patient-info {
  color: #374151;
  font-weight: 500;
}

/* ==== 카드 바디 ==== */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* space-y-1 */
}

.info-row {
  display: flex; /* flex */
  justify-content: space-between; /* justify-between */
  align-items: center;
}

.info-label {
  color: #4b5563;
  font-weight: 500;
}

.info-value {
  color: #1f2937;
  font-weight: 600;
}

/* ==== 주의사항 행 ==== */
.caution-row {
  display: flex; /* flex */
  justify-content: space-between; /* justify-between */
  color: #111827; /* text-gray-900 */
  background-color: #d1d5db; /* bg-gray-300 */
  padding: 0 0.25rem; /* px-1 */
  border-radius: 0.25rem; /* rounded */
  margin-top: 0.25rem; /* mt-1 */
  font-weight: 600;
  border: 1px solid #9ca3af;
}

.caution-label {
  color: #dc2626;
  font-weight: 700;
}

.caution-value {
  color: #dc2626;
  font-weight: 700;
}

/* ==== 크기별 텍스트 스타일 ==== */
.text-xs {
  font-size: 0.75rem; /* text-xs */
  line-height: 1rem;
}

.text-sm {
  font-size: 0.875rem; /* text-sm */
  line-height: 1.25rem;
}

.text-base {
  font-size: 1rem; /* text-base */
  line-height: 1.5rem;
}

/* ==== 크기별 패딩 스타일 ==== */
.padding-xs {
  padding: 0.25rem; /* p-1 */
}

.padding-sm {
  padding: 0.5rem; /* p-2 */
}

.padding-md {
  padding: 0.75rem; /* p-3 */
}

.padding-lg {
  padding: 1rem; /* p-4 */
}

.padding-xl {
  padding: 1.25rem; /* p-5 */
}

/* ==== 크기별 카드 스타일 조정 ==== */
.card-xs {
  min-height: 6rem;
}

.card-xs .card-header {
  margin-bottom: 0.25rem;
  padding-bottom: 0.125rem;
}

.card-xs .caution-row {
  margin-top: 0.125rem;
  padding: 0 0.125rem;
}

.card-sm {
  min-height: 7rem;
}

.card-sm .card-header {
  margin-bottom: 0.375rem;
  padding-bottom: 0.1875rem;
}

.card-md {
  min-height: 8rem;
}

.card-lg {
  min-height: 9rem;
}

.card-lg .card-header {
  margin-bottom: 0.625rem;
  padding-bottom: 0.375rem;
}

.card-lg .card-body {
  gap: 0.375rem;
}

.card-xl {
  min-height: 10rem;
}

.card-xl .card-header {
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
}

.card-xl .card-body {
  gap: 0.5rem;
}

.card-xl .caution-row {
  margin-top: 0.375rem;
  padding: 0.125rem 0.375rem;
}

/* ==== 반응형 디자인 ==== */
@media (max-width: 768px) {
  .patient-info-card {
    border-radius: 0.375rem;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .patient-info {
    font-size: 0.875rem;
  }

  .info-row,
  .caution-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
  }

  .info-label,
  .caution-label {
    font-size: 0.75rem;
    opacity: 0.8;
  }
}

@media (max-width: 480px) {
  .padding-md {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.75rem;
  }

  .padding-xl {
    padding: 1rem;
  }

  .text-base {
    font-size: 0.875rem;
  }
}

/* ==== 접근성 개선 ==== */
.patient-info-card:focus-within {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* ==== 애니메이션 개선 ==== */
@media (prefers-reduced-motion: reduce) {
  .patient-info-card {
    transition: none !important;
  }

  .patient-info-card:hover {
    transform: none !important;
  }
}

/* ==== 고급 효과 ==== */
.patient-info-card {
  position: relative;
  overflow: hidden;
}

.patient-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.patient-info-card:hover::before {
  left: 100%;
}

/* 상태별 색상 변화 */
.caution-row {
  position: relative;
  animation: caution-pulse 2s infinite;
}

@keyframes caution-pulse {
  0%, 100% {
    background-color: #d1d5db;
  }
  50% {
    background-color: #fef3c7;
  }
}

.patient-info-card:hover .caution-row {
  animation: none;
  background-color: #fef3c7;
  border-color: #f59e0b;
}

/* 정보 행 호버 효과 */
.info-row {
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;
}

.info-row:hover {
  background-color: rgba(59, 130, 246, 0.05);
}

/* 데이터 중요도별 스타일링 */
.patient-title {
  background: linear-gradient(135deg, #1f2937, #374151);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.info-value {
  position: relative;
}

.info-value::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  background: #3b82f6;
  transition: width 0.3s ease;
}

.info-row:hover .info-value::after {
  width: 100%;
}

/* E-Paper 스타일 시뮬레이션 */
.patient-info-card {
  background: linear-gradient(145deg, #f8fafc, #e2e8f0);
  border: 2px solid #cbd5e1;
  box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.6),
      0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.9));
  border-bottom: 2px solid #e2e8f0;
  border-radius: 0.375rem 0.375rem 0 0;
  margin: -0.125rem -0.125rem 0.5rem -0.125rem;
  padding: 0.5rem 0.75rem 0.375rem 0.75rem;
}

/* 텍스트 선명도 개선 (E-Paper 효과) */
.patient-info-card {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 다크모드 대응 (선택사항) */
@media (prefers-color-scheme: dark) {
  .patient-info-card {
    background-color: #374151;
    color: #f9fafb;
    border-color: #4b5563;
  }

  .card-header {
    border-bottom-color: #4b5563;
    background: linear-gradient(135deg, rgba(55, 65, 81, 0.8), rgba(75, 85, 99, 0.9));
  }

  .patient-title {
    color: #f9fafb;
  }

  .caution-row {
    background-color: #4b5563;
    color: #fbbf24;
    border-color: #6b7280;
  }

  .caution-label,
  .caution-value {
    color: #fbbf24;
  }
}
</style>