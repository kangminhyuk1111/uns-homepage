<!-- ModernHeroWithDevices.vue -->
<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
    <!-- 배경 효과 -->
    <div class="absolute inset-0 z-0">
      <!-- 서브틀한 그리드 패턴 -->
      <div
          class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMlYyMmg1LjU5OGMxLjIzMiAwIDIuMi45NjggMi4yIDIuMnY1LjZjMCAxLjIzMi0uOTY4IDIuMi0yLjIgMi4yaC01LjU5OHYxLjc5OEMzOC4xOTggMzUuMDMyIDM3LjIzIDM2IDM2IDM2aC01LjYwMkMyOS4xNjggMzYgMjguMiAzNS4wMzIgMjguMiAzMy43OThWMzJoLTUuNmMtMS4yMyAwLTIuMi0uOTY4LTIuMi0yLjJ2LTUuNmMwLTEuMjMyLjk3LTIuMiAyLjItMi4yaDUuNnYtMS44YzAtMS4yMzIuOTY4LTIuMiAyLjE5OC0yLjJIMzZ6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1vcGFjaXR5PSIuMTUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></div>

      <!-- 세련된 그라데이션 블러 효과 -->
      <div
          class="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div
          class="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-3xl"></div>

      <!-- 미니멀한 배경 점선 -->
      <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>

    <div class="container-layout mx-auto px-6 py-20 md:py-24 lg:py-32 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- 텍스트 섹션 -->
        <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-6">
          <!-- 현대적인 배지 -->
          <div
              class="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            디지털 의료 혁신 플랫폼
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            새로운 패러다임의<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">의료 정보화</span> 솔루션
          </h1>

          <p class="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            클라우드 기반의 혁신적인 의료 솔루션으로 환자 만족도를 높이고 병원 운영을 최적화하세요.
          </p>

          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button
                class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition duration-300 ease-in-out">
              솔루션 소개 받기
              <span class="ml-2">→</span>
            </button>
            <button
                class="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg font-medium transition duration-300 ease-in-out">
              데모 신청하기
              <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          <!-- 현대적인 트러스트 배지 -->
          <div class="flex flex-wrap items-center gap-5">
            <div class="text-sm text-gray-400">신뢰하는 파트너사</div>
            <div class="flex flex-wrap items-center gap-6">
              <!-- 실제 로고 이미지 경로로 수정 -->
              <div class="h-8 w-24 bg-white/30 rounded-md flex items-center justify-center">
                <span class="text-xs text-white/70">삼성서울병원</span>
              </div>
              <div class="h-8 w-24 bg-white/30 rounded-md flex items-center justify-center">
                <span class="text-xs text-white/70">삼성창원병원</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 디바이스 쇼케이스 섹션 -->
        <div class="lg:w-1/2 relative">
          <div class="grid grid-cols-2 gap-4">
            <!-- 전자 종이 시스템 (Baro Paper) -->
            <div class="col-span-1 relative group">
              <div
                  class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div
                  class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-blue-400 text-sm font-medium">Baro Paper</div>
                  <div class="text-white font-medium mb-2">전자 종이 시스템</div>

                  <!-- E-Paper 디스플레이 시뮬레이션 -->
                  <PaperBannerComponent/>
                </div>
              </div>
            </div>

            <!-- 키오스크 (Baro Kiosk) -->
            <div class="col-span-1 relative group">
              <div
                  class="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-teal-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div
                  class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-teal-400 text-sm font-medium">Baro Kiosk</div>
                  <div class="text-white font-medium mb-2">의료 키오스크</div>

                  <!-- 키오스크 UI 시뮬레이션 -->
                  <KioskBannerComponent/>
                </div>
              </div>
            </div>

            <!-- 셋톱박스 앱 서비스 (Baro Pop) - 간소화된 디자인 -->
            <div class="col-span-1 relative group">
              <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-indigo-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div
                  class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-indigo-400 text-sm font-medium">Baro Pop</div>
                  <div class="text-white font-medium mb-2">대기 안내 시스템</div>

                  <!-- 간소화된 전광판 UI 시뮬레이션 -->
                  <PopBannerComponent/>
                </div>
              </div>
            </div>

            <!-- 원내 길안내 (Baro Navi) -->
            <div class="col-span-1 relative group">
              <div
                  class="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div
                  class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-emerald-400 text-sm font-medium">Baro Navi</div>
                  <div class="text-white font-medium mb-2">원내 길안내</div>

                  <!-- 길안내 앱 시뮬레이션 -->
                  <NaviBannerComponent/>
                </div>
              </div>
            </div>
          </div>

          <!-- 부유 요소 - 더 심플하고 모던하게 -->
          <div class="absolute -top-6 -right-6 z-10">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 shadow-lg">
              <div class="flex items-center space-x-2">
                <span class="flex h-2 w-2 relative">
                  <span
                      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span class="text-sm font-medium">클라우드 기반 서비스</span>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-4 -left-4 z-10">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 shadow-lg">
              <div class="flex items-center space-x-2">
                <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span class="text-sm font-medium">실시간 데이터 연동</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KioskBannerComponent from "@/components/banner/KioskBannerComponent.vue";
import PopBannerComponent from "@/components/banner/PopBannerComponent.vue";
import NaviBannerComponent from "@/components/banner/NaviBannerComponent.vue";
import PaperBannerComponent from "@/components/banner/PaperBannerComponent.vue";

export default {
  name: 'ModernHeroWithDevices',
  components: {PaperBannerComponent, NaviBannerComponent, PopBannerComponent, KioskBannerComponent}
}
</script>

<style scoped>
.blur-3xl {
  filter: blur(4rem);
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* 애니메이션 */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>