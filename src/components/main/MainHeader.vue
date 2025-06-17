<template>
  <header class="main-header">
    <div class="header-container">
      <router-link to="/" class="brand-logo">
        U&S Networks
      </router-link>

      <!-- 데스크톱 네비게이션 -->
      <nav class="desktop-nav">
        <div class="nav-item dropdown">
          <a
              href="#"
              :class="['nav-link', { 'active': showDropdown }]"
              @click.prevent="toggleDropdown"
          >
            제품
            <span :class="['dropdown-arrow', { 'rotate': showDropdown }]">▼</span>
          </a>

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
          <router-link to="/support" class="nav-link">고객지원</router-link>
        </div>

        <div class="nav-item">
          <router-link to="/contact" class="nav-link">문의하기</router-link>
        </div>
      </nav>

      <!-- 헤더 액션 -->
      <div class="header-actions">
        <button class="btn btn-primary" @click="handleDemoRequest">
          <span class="btn-text-full">데모 신청</span>
          <span class="btn-text-short">데모</span>
        </button>

        <!-- 모바일 메뉴 버튼 -->
        <button
            class="mobile-menu-btn"
            @click="toggleMobileMenu"
            :class="{ 'active': showMobileMenu }"
            type="button"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- 모바일 메뉴 - 조건부 렌더링 제거하고 CSS로만 제어 -->
    <div :class="['mobile-menu', { 'open': showMobileMenu }]">
      <nav class="mobile-nav">
        <div class="mobile-nav-item">
          <a
              class="mobile-nav-link"
              href="#"
              @click.prevent="toggleMobileDropdown"
          >
            제품
            <span :class="['mobile-dropdown-arrow', { 'rotate': showMobileDropdown }]">▼</span>
          </a>

          <div :class="['mobile-dropdown', { 'open': showMobileDropdown }]">
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
      </nav>
    </div>

    <!-- 모바일 오버레이 -->
    <div
        :class="['mobile-overlay', { 'show': showMobileMenu }]"
        @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showDropdown = ref(false)
const showMobileMenu = ref(false)
const showMobileDropdown = ref(false)

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

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const toggleMobileMenu = (event) => {
  event.preventDefault()
  event.stopPropagation()

  console.log('🍔 햄버거 버튼 클릭!')
  console.log('현재 showMobileMenu:', showMobileMenu.value)

  showMobileMenu.value = !showMobileMenu.value

  console.log('변경된 showMobileMenu:', showMobileMenu.value)

  if (!showMobileMenu.value) {
    showMobileDropdown.value = false
  }

  // body 스크롤 제어
  document.body.style.overflow = showMobileMenu.value ? 'hidden' : ''
}

const toggleMobileDropdown = () => {
  showMobileDropdown.value = !showMobileDropdown.value
}

const closeMobileMenu = () => {
  console.log('🔒 모바일 메뉴 닫기')
  showMobileMenu.value = false
  showMobileDropdown.value = false
  document.body.style.overflow = ''
}

const handleDemoRequest = () => {
  console.log('데모 신청 클릭')
}

const handleClickOutside = (event) => {
  const dropdown = event.target.closest('.dropdown')
  if (!dropdown) {
    closeDropdown()
  }
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeDropdown()
    closeMobileMenu()
  }
}

const handleResize = () => {
  if (window.innerWidth >= 1024 && showMobileMenu.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  console.log('🚀 컴포넌트 마운트됨')
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDown)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDown)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* 기본 리셋 */
* {
  box-sizing: border-box;
}

/* 메인 헤더 */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 브랜드 로고 */
.brand-logo {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  flex-shrink: 0;
}

/* 데스크톱 네비게이션 - 모바일에서 숨김 */
.desktop-nav {
  display: none;
}

/* 헤더 액션 */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

/* 버튼 */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
}

.btn-text-full {
  display: none;
}

.btn-text-short {
  display: inline;
}

/* 모바일 메뉴 버튼 */
.mobile-menu-btn {
  display: block;
  width: 44px;
  height: 44px;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  color: #374151;
  transition: all 0.3s ease;
  /* 확실한 클릭 영역 보장 */
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  /* 다른 요소 위에 표시 */
  position: relative;
  z-index: 1001;
}

.mobile-menu-btn:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.mobile-menu-btn:active {
  background: #e5e7eb;
  transform: scale(0.95);
}

.mobile-menu-btn.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

/* 모바일 메뉴 - 처음엔 숨김 */
.mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 999;
  /* 처음에는 완전히 숨김 */
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

/* 메뉴가 열렸을 때 */
.mobile-menu.open {
  max-height: 500px;
}

.mobile-nav {
  padding: 1rem;
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
  font-size: 1rem;
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: #2563eb;
}

.mobile-dropdown-arrow {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.mobile-dropdown-arrow.rotate {
  transform: rotate(180deg);
}

/* 모바일 드롭다운 */
.mobile-dropdown {
  background: rgba(59, 130, 246, 0.02);
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-dropdown.open {
  max-height: 400px;
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
  font-size: 0.9rem;
}

.mobile-item-desc {
  color: #6b7280;
  font-size: 0.8rem;
}

/* 모바일 오버레이 */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-overlay.show {
  opacity: 1;
  visibility: visible;
}

/* 태블릿 */
@media (min-width: 768px) {
  .header-container {
    padding: 0 2rem;
    height: 70px;
  }

  .brand-logo {
    font-size: 1.5rem;
  }

  .btn-text-full {
    display: inline;
  }

  .btn-text-short {
    display: none;
  }

  .mobile-menu {
    top: 70px;
  }
}

/* 데스크톱 */
@media (min-width: 1024px) {
  .header-container {
    height: 80px;
  }

  /* 데스크톱 네비게이션 표시 */
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
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .dropdown-arrow {
    font-size: 0.7rem;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
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

  /* 모바일 메뉴 숨기기 */
  .mobile-menu-btn {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  .mobile-overlay {
    display: none;
  }
}

/* 접근성 */
.mobile-menu-btn:focus,
.mobile-nav-link:focus,
.btn:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
</style>