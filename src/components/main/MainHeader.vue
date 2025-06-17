<template>
  <header class="main-header">
    <div class="header-container">
      <router-link to="/" class="brand-logo">
        U&S Networks
      </router-link>

      <nav class="desktop-nav">
        <!-- 제품 드롭다운 -->
        <div class="nav-item dropdown">
          <a
              href="#"
              :class="['nav-link', { 'active': showDropdown }]"
              @click.prevent="toggleDropdown"
          >
            제품
            <span :class="['dropdown-arrow', { 'rotate': showDropdown }]">▼</span>
          </a>

          <!-- 제품 드롭다운 메뉴 -->
          <div
              v-if="showDropdown"
              class="dropdown-menu"
          >
            <router-link
                v-for="item in productItems"
                :key="item.name"
                :to="item.href"
                class="dropdown-item"
                @click="closeDropdown"
            >
              <div class="item-content">
                <span class="item-name">{{ item.name }}</span>
                <small class="item-desc">{{ item.desc }}</small>
              </div>
            </router-link>
          </div>
        </div>

        <div class="nav-item">
          <router-link
              to="/support"
              class="nav-link"
          >
            고객지원
          </router-link>
        </div>

        <div class="nav-item">
          <router-link
              to="/contact"
              class="nav-link"
          >
            문의하기
          </router-link>
        </div>
      </nav>

      <div class="header-actions">
        <button class="btn btn-primary" @click="handleDemoRequest">
          데모 신청
        </button>
        <button
            class="mobile-menu-btn"
            @click="toggleMobileMenu"
        >
          <svg class="hamburger-icon" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- 모바일 메뉴 -->
      <div :class="['mobile-menu', { 'show': showMobileMenu }]">
        <div class="mobile-nav">
          <div class="mobile-nav-item">
            <a
                class="mobile-nav-link"
                href="#"
                @click.prevent="toggleMobileDropdown"
            >
              제품
              <span :class="['dropdown-arrow', { 'rotate': showMobileDropdown }]">▼</span>
            </a>
            <div v-if="showMobileDropdown" class="mobile-dropdown">
              <router-link
                  v-for="item in productItems"
                  :key="item.name"
                  :to="item.href"
                  class="mobile-dropdown-item"
                  @click="closeMobileMenu"
              >
                <div class="mobile-item-content">
                  <span class="mobile-item-name">{{ item.name }}</span>
                  <small class="mobile-item-desc">{{ item.desc }}</small>
                </div>
              </router-link>
            </div>
          </div>
          <div class="mobile-nav-item">
            <router-link
                to="/support"
                class="mobile-nav-link"
                @click="closeMobileMenu"
            >
              고객지원
            </router-link>
          </div>
          <div class="mobile-nav-item">
            <router-link
                to="/contact"
                class="mobile-nav-link"
                @click="closeMobileMenu"
            >
              문의하기
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 모바일 메뉴 오버레이 -->
    <div
        v-if="showMobileMenu"
        class="mobile-overlay"
        @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 반응형 데이터
const showDropdown = ref(false)
const showMobileMenu = ref(false)
const showMobileDropdown = ref(false)

// 제품 드롭다운 메뉴 아이템
const productItems = ref([
  { name: 'Baro Paper', href: '/products/baro-paper', desc: '클라우드 기반 E-Paper' },
  { name: 'Baro Pop', href: '/products/baro-pop', desc: 'AI 기반 전광판 솔루션' },
  { name: 'Baro Kiosk', href: '/products/baro-kiosk', desc: '출입 및 물품관리 키오스크' },
  { name: 'Baro Navi', href: '/products/baro-navi', desc: '원내 길안내 앱' },
  { name: 'Baro Safe', href: '/products/baro-safe', desc: '환자 안전 시스템' },
  { name: 'Baro Chart', href: '/products/baro-chart', desc: '모바일 HIS 시스템' },
  { name: 'Baro Talk', href: '/products/baro-talk', desc: '의료진 메신저' },
  { name: 'Baro Call', href: '/products/baro-call', desc: '디지털 너스콜 시스템' }
])

// 메서드
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  if (!showMobileMenu.value) {
    showMobileDropdown.value = false
  }

  // 바디 스크롤 제어
  document.body.style.overflow = showMobileMenu.value ? 'hidden' : ''
}

const toggleMobileDropdown = () => {
  showMobileDropdown.value = !showMobileDropdown.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
  showMobileDropdown.value = false
  document.body.style.overflow = ''
}

const handleDemoRequest = () => {
  console.log('데모 신청 클릭')
  // 데모 신청 로직
}

// 외부 클릭 시 드롭다운 닫기
const handleClickOutside = (event) => {
  const dropdown = event.target.closest('.dropdown')
  if (!dropdown) {
    closeDropdown()
  }
}

// ESC 키로 메뉴 닫기
const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeDropdown()
    closeMobileMenu()
  }
}

// 컴포넌트 마운트 시 이벤트 리스너 추가
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDown)
})

// 컴포넌트 언마운트 시 정리
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = '' // 스크롤 복원
})
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 헤더 ==== */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  position: relative;
}

/* ==== 브랜드 로고 ==== */
.brand-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.brand-logo:hover {
  color: #1d4ed8;
  transform: translateY(-1px);
}

/* ==== 데스크톱 네비게이션 ==== */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  color: #2563eb;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Vue Router 활성 링크 */
.router-link-active {
  color: #2563eb !important;
}

.router-link-active::after {
  width: 100% !important;
}

/* ==== 드롭다운 ==== */
.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 0.5rem;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
}

.dropdown-arrow.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  min-width: 20rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  z-index: 50;
  animation: dropdownSlideIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes dropdownSlideIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(59, 130, 246, 0.08);
  color: #2563eb;
  transform: translateX(2px);
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-name {
  font-weight: 600;
  color: #111827;
}

.item-desc {
  color: #6b7280;
  font-size: 0.875rem;
}

.dropdown-item:hover .item-name {
  color: #2563eb;
}

/* ==== 헤더 액션 ==== */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  box-shadow: 0 1px 3px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #1d4ed8, #2563eb);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* ==== 모바일 메뉴 버튼 ==== */
.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.2);
}

.hamburger-icon {
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  stroke: currentColor;
}

/* ==== 모바일 메뉴 ==== */
.mobile-menu {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 40;
  overflow-y: auto;
}

.mobile-menu.show {
  transform: translateX(0);
}

.mobile-nav {
  padding: 2rem 1.5rem;
}

.mobile-nav-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.mobile-nav-item:last-child {
  border-bottom: none;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #2563eb;
}

.mobile-dropdown {
  background: rgba(59, 130, 246, 0.02);
  border-radius: 0.5rem;
  margin: 0.5rem 0 1rem;
  padding: 0.5rem;
}

.mobile-dropdown-item {
  display: block;
  padding: 0.75rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
}

.mobile-dropdown-item:hover {
  background: rgba(59, 130, 246, 0.08);
}

.mobile-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-item-name {
  font-weight: 600;
  color: #111827;
  font-size: 1rem;
}

.mobile-item-desc {
  color: #6b7280;
  font-size: 0.875rem;
}

/* ==== 모바일 오버레이 ==== */
.mobile-overlay {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 30;
  animation: overlayFadeIn 0.3s ease;
}

@keyframes overlayFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ==== 반응형 디자인 ==== */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .header-container {
    padding: 0 1rem;
  }
}

@media (max-width: 768px) {
  .brand-logo {
    font-size: 1.25rem;
  }

  .btn-primary {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .header-container {
    height: 3.5rem;
  }

  .mobile-menu {
    top: 3.5rem;
  }

  .mobile-overlay {
    top: 3.5rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 0.75rem;
  }

  .header-actions {
    gap: 0.5rem;
  }

  .btn-primary {
    padding: 0.5rem 0.75rem;
  }
}

/* ==== 접근성 개선 ==== */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 포커스 스타일 */
.nav-link:focus,
.mobile-nav-link:focus,
.btn:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* 다크모드 대응 (선택사항) */
@media (prefers-color-scheme: dark) {
  .main-header {
    background: rgba(17, 24, 39, 0.95);
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .nav-link,
  .mobile-nav-link {
    color: #f9fafb;
  }

  .nav-link:hover,
  .nav-link.active,
  .mobile-nav-link:hover {
    color: #60a5fa;
  }

  .dropdown-menu,
  .mobile-menu {
    background: #1f2937;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .item-name,
  .mobile-item-name {
    color: #f9fafb;
  }
}
</style>