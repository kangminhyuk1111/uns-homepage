<!-- MainHeader.vue -->
<template>
  <!-- 배경 오버레이 - 클릭 시 드롭다운 닫기 -->
  <div
      v-if="activeDropdown"
      class="fixed inset-0 bg-black bg-opacity-20 z-40"
      @click="activeDropdown = null"
  ></div>

  <header class="fixed w-full bg-white bg-opacity-95 shadow-md z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">U&S Networks</router-link>

      <nav class="hidden md:block">
        <ul class="flex space-x-8">
          <li
              class="relative group"
              @mouseenter="handleMouseEnter('products')"
              @mouseleave="handleMouseLeave"
          >
            <router-link
                to="/products"
                :class="`font-medium hover:text-blue-600 py-2 inline-block text-base ${
                activeDropdown === 'products' ? 'text-blue-600' : 'text-gray-700'
              }`"
            >
              제품
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="`h-4 w-4 inline-block ml-1 transition-transform duration-200 ${
                  activeDropdown === 'products' ? 'rotate-180' : ''
                }`"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
              </svg>
            </router-link>

            <!-- 제품 드롭다운 메뉴 - 클래스 기반 애니메이션 -->
            <div class="absolute left-0 right-0 h-4" v-if="activeDropdown === 'products'"></div>
            <div
                v-if="activeDropdown === 'products'"
                class="dropdown-menu absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div class="py-2">
                <router-link
                    v-for="item in productItems"
                    :key="item.name"
                    :to="item.href"
                    class="block px-5 py-3 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div class="flex flex-col">
                    <span class="font-medium font-bold text-gray-800">{{ item.name }}</span>
                    <span class="text-xs text-gray-500 mt-0.5">{{ item.desc }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </li>

          <li
              class="relative group"
              @mouseenter="handleMouseEnter('solutions')"
              @mouseleave="handleMouseLeave"
          >
            <router-link
                to="/solutions"
                :class="`font-medium hover:text-blue-600 py-2 inline-block text-base ${
                activeDropdown === 'solutions' ? 'text-blue-600' : 'text-gray-700'
              }`"
            >
              솔루션
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="`h-4 w-4 inline-block ml-1 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180' : ''
                }`"
                  viewBox="0 0 20 20"
                  fill="currentColor"
              >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
              </svg>
            </router-link>

            <!-- 솔루션 드롭다운 메뉴 - 클래스 기반 애니메이션 -->
            <div class="absolute left-0 right-0 h-4" v-if="activeDropdown === 'solutions'"></div>
            <div
                v-if="activeDropdown === 'solutions'"
                class="dropdown-menu absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div class="py-2">
                <router-link
                    v-for="item in solutionItems"
                    :key="item.name"
                    :to="item.href"
                    class="block px-5 py-3 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div class="flex flex-col">
                    <span class="font-medium font-bold text-gray-800">{{ item.name }}</span>
                    <span class="text-xs text-gray-500 mt-0.5">{{ item.desc }}</span>
                  </div>
                </router-link>
              </div>
            </div>
          </li>

          <li>
            <router-link
                to="/support"
                class="font-medium text-gray-700 hover:text-blue-600 py-2 inline-block text-base"
            >
              고객지원
            </router-link>
          </li>

          <li>
            <router-link
                to="/about"
                class="font-medium text-gray-700 hover:text-blue-600 py-2 inline-block text-base"
            >
              회사소개
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="flex space-x-4">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          데모 신청
        </button>
        <button class="md:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      activeDropdown: null,
      timeoutId: null,
      // 제품 드롭다운 메뉴 아이템
      productItems: [
        { name: 'Baro Paper', href: '/products/baro-paper', desc: '클라우드 기반 E-Paper' },
        { name: 'Baro Pop', href: '/products/baro-pop', desc: 'AI 기반 전광판 솔루션' },
        { name: 'Baro Kiosk', href: '/products/baro-kiosk', desc: '출입 및 물품관리 키오스크' },
        { name: 'Baro Navi', href: '/products/baro-navi', desc: '원내 길안내 앱' },
        { name: 'Baro Safe', href: '/products/baro-safe', desc: '환자 안전 시스템' },
        { name: 'Baro Chart', href: '/products/baro-chart', desc: '모바일 HIS 시스템' },
        { name: 'Baro Talk', href: '/products/baro-talk', desc: '의료진 메신저' },
        { name: 'Baro Call', href: '/products/baro-call', desc: '디지털 너스콜 시스템' }
      ],
      // 솔루션 드롭다운 메뉴 아이템
      solutionItems: [
        { name: '병원 솔루션', href: '/solutions/hospital', desc: '종합병원을 위한 통합 시스템' },
        { name: '클리닉 솔루션', href: '/solutions/clinic', desc: '클리닉을 위한 최적화 솔루션' },
        { name: '약국 솔루션', href: '/solutions/pharmacy', desc: '약국 운영 효율화 시스템' }
      ]
    };
  },
  methods: {
    handleMouseEnter(menu) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.activeDropdown = menu;
    },
    handleMouseLeave() {
      // 약간의 지연 시간 (150ms)
      this.timeoutId = setTimeout(() => {
        this.activeDropdown = null;
      }, 150);
    }
  },
  beforeUnmount() {
    // 컴포넌트 언마운트 시 타이머 정리
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
};
</script>

<style>
/* 드롭다운 메뉴에 애니메이션 적용 */
.dropdown-menu {
  animation: fadeInDropdown 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  /* 하드웨어 가속 적용 */
  transform: translate3d(-50%, 0, 0);
  /* 성능 최적화 */
  backface-visibility: hidden;
  will-change: transform, opacity;
}

@keyframes fadeInDropdown {
  from {
    opacity: 0;
    transform: translate3d(-50%, -10px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
}

/* 모바일 최적화 */
@media (max-width: 768px) {
  .dropdown-menu {
    width: 100%;
    left: 0;
    transform: translateX(0);
  }

  @keyframes fadeInDropdown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>