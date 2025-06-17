<!-- MedicalKiosk.vue -->
<template>
  <div class="kiosk-wrapper">
    <!-- 키오스크 프레임 -->
    <div class="kiosk-frame">
      <!-- 상단 스피커 -->
      <div class="speaker"></div>

      <!-- 스크린 -->
      <div class="screen" :class="getScreenClass()">
        <!-- 병원 로고 및 타이틀 -->
        <div class="header">
          <div class="logo" :class="getLogoClass()">
            <svg class="logo-icon" :class="getLogoIconClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div class="hospital-name" :class="getHospitalNameClass()">바로병원</div>
        </div>

        <!-- 키오스크 내용 - 환자 접수 화면 -->
        <div class="reception-card">
          <div class="reception-title" :class="getReceptionTitleClass()">환자 접수</div>
          <div class="reception-options">
            <div class="option">
              <span class="option-label">진료 예약</span>
              <div class="option-checkbox" :class="getCheckboxClass()"></div>
            </div>
            <div class="option">
              <span class="option-label">당일 접수</span>
              <div class="option-checkbox checked" :class="getCheckedCheckboxClass()">
                <svg class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div class="option">
              <span class="option-label">처방전 발급</span>
              <div class="option-checkbox" :class="getCheckboxClass()"></div>
            </div>
          </div>
        </div>

        <!-- 메뉴 버튼들 -->
        <div class="menu-grid">
          <div class="menu-button" :class="getMenuButtonClass()">
            <div class="menu-icon" :class="getMenuIconClass()">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="menu-label">초진 등록</div>
          </div>
          <div class="menu-button" :class="getMenuButtonClass()">
            <div class="menu-icon" :class="getMenuIconClass()">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="menu-label">예약 확인</div>
          </div>
          <div class="menu-button" :class="getMenuButtonClass()">
            <div class="menu-icon" :class="getMenuIconClass()">
              <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="menu-label">결제</div>
          </div>
        </div>
      </div>

      <!-- 하단 버튼 -->
      <div class="control-section">
        <div class="control-button"></div>
      </div>
    </div>

    <!-- 키오스크 스탠드 -->
    <div class="stand-neck"></div>
    <div class="stand-base"></div>
  </div>
</template>

<script>
export default {
  name: 'MedicalKiosk',
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },
  methods: {
    getScreenClass() {
      return `screen-${this.color}`;
    },
    getLogoClass() {
      return `logo-${this.color}`;
    },
    getLogoIconClass() {
      return `logo-icon-${this.color}`;
    },
    getHospitalNameClass() {
      return `hospital-name-${this.color}`;
    },
    getReceptionTitleClass() {
      return `reception-title-${this.color}`;
    },
    getCheckboxClass() {
      return `checkbox-${this.color}`;
    },
    getCheckedCheckboxClass() {
      return `checked-checkbox-${this.color}`;
    },
    getMenuButtonClass() {
      return `menu-button-${this.color}`;
    },
    getMenuIconClass() {
      return `menu-icon-${this.color}`;
    }
  }
}
</script>

<style scoped>
/* 기본 설정 */
.kiosk-wrapper {
  position: relative;
  width: 100%;
  max-width: 384px;
  margin: 0 auto;
  transform: scale(1);
  transition: all 0.5s ease;
}

.kiosk-wrapper:hover {
  transform: scale(1.05);
}

/* 키오스크 프레임 */
.kiosk-frame {
  background-color: #1f2937;
  border-radius: 16px;
  padding-top: 32px;
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* 스피커 */
.speaker {
  width: 64px;
  height: 4px;
  background-color: #374151;
  border-radius: 9999px;
  margin: 0 auto 16px;
}

/* 스크린 */
.screen {
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* 색상별 스크린 배경 */
.screen-blue { background-color: #eff6ff; }
.screen-green { background-color: #f0fdf4; }
.screen-red { background-color: #fef2f2; }
.screen-purple { background-color: #faf5ff; }
.screen-yellow { background-color: #fefce8; }

/* 헤더 */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

/* 색상별 로고 배경 */
.logo-blue { background-color: #bfdbfe; }
.logo-green { background-color: #bbf7d0; }
.logo-red { background-color: #fecaca; }
.logo-purple { background-color: #e9d5ff; }
.logo-yellow { background-color: #fef3c7; }

.logo-icon {
  width: 24px;
  height: 24px;
}

/* 색상별 로고 아이콘 */
.logo-icon-blue { color: #2563eb; }
.logo-icon-green { color: #16a34a; }
.logo-icon-red { color: #dc2626; }
.logo-icon-purple { color: #9333ea; }
.logo-icon-yellow { color: #ca8a04; }

.hospital-name {
  font-size: 1.25rem;
  font-weight: bold;
}

/* 색상별 병원명 */
.hospital-name-blue { color: #1e40af; }
.hospital-name-green { color: #166534; }
.hospital-name-red { color: #991b1b; }
.hospital-name-purple { color: #7c3aed; }
.hospital-name-yellow { color: #a16207; }

/* 접수 카드 */
.reception-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 24px;
}

.reception-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
}

/* 색상별 접수 제목 */
.reception-title-blue { color: #2563eb; }
.reception-title-green { color: #16a34a; }
.reception-title-red { color: #dc2626; }
.reception-title-purple { color: #9333ea; }
.reception-title-yellow { color: #ca8a04; }

.reception-options {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.option {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-label {
  color: #374151;
  font-weight: 500;
}

.option-checkbox {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid;
}

/* 색상별 체크박스 */
.checkbox-blue { border-color: #93c5fd; }
.checkbox-green { border-color: #86efac; }
.checkbox-red { border-color: #fca5a5; }
.checkbox-purple { border-color: #c4b5fd; }
.checkbox-yellow { border-color: #fde68a; }

.option-checkbox.checked {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 색상별 체크된 체크박스 */
.checked-checkbox-blue {
  border-color: #93c5fd;
  background-color: #93c5fd;
}
.checked-checkbox-green {
  border-color: #86efac;
  background-color: #86efac;
}
.checked-checkbox-red {
  border-color: #fca5a5;
  background-color: #fca5a5;
}
.checked-checkbox-purple {
  border-color: #c4b5fd;
  background-color: #c4b5fd;
}
.checked-checkbox-yellow {
  border-color: #fde68a;
  background-color: #fde68a;
}

.check-icon {
  width: 16px;
  height: 16px;
  color: white;
}

/* 메뉴 그리드 */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.menu-button {
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 색상별 메뉴 버튼 */
.menu-button-blue { background-color: #dbeafe; }
.menu-button-green { background-color: #dcfce7; }
.menu-button-red { background-color: #fee2e2; }
.menu-button-purple { background-color: #f3e8ff; }
.menu-button-yellow { background-color: #fef9c3; }

.menu-button:hover.menu-button-blue { background-color: #bfdbfe; }
.menu-button:hover.menu-button-green { background-color: #bbf7d0; }
.menu-button:hover.menu-button-red { background-color: #fecaca; }
.menu-button:hover.menu-button-purple { background-color: #e9d5ff; }
.menu-button:hover.menu-button-yellow { background-color: #fef3c7; }

.menu-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
}

/* 색상별 메뉴 아이콘 */
.menu-icon-blue { background-color: #3b82f6; }
.menu-icon-green { background-color: #22c55e; }
.menu-icon-red { background-color: #ef4444; }
.menu-icon-purple { background-color: #a855f7; }
.menu-icon-yellow { background-color: #eab308; }

.icon {
  width: 20px;
  height: 20px;
}

.menu-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

/* 컨트롤 섹션 */
.control-section {
  display: flex;
  justify-content: center;
}

.control-button {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #374151;
  border: 4px solid #4b5563;
  cursor: pointer;
  transition: all 0.2s ease;
}

.control-button:hover {
  background-color: #4b5563;
}

/* 스탠드 */
.stand-neck {
  width: 64px;
  background-color: #374151;
  height: 48px;
  margin: -8px auto 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.stand-base {
  width: 128px;
  background-color: #1f2937;
  height: 24px;
  margin: -4px auto 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>