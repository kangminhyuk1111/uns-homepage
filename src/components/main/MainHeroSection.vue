<!-- MainHeroSection.vue -->
<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white">
    <!-- 고급 배경 효과 -->
    <div class="absolute inset-0 z-0">
      <!-- 그리드 패턴 -->
      <div class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMlYyMmg1LjU5OGMxLjIzMiAwIDIuMi45NjggMi4yIDIuMnY1LjZjMCAxLjIzMi0uOTY4IDIuMi0yLjIgMi4yaC01LjU5OHYxLjc5OEMzOC4xOTggMzUuMDMyIDM3LjIzIDM2IDM2IDM2aC01LjYwMkMyOS4xNjggMzYgMjguMiAzNS4wMzIgMjguMiAzMy43OThWMzJoLTUuNmMtMS4yMyAwLTIuMi0uOTY4LTIuMi0yLjJ2LTUuNmMwLTEuMjMyLjk3LTIuMiAyLjItMi4yaDUuNnYtMS44YzAtMS4yMzIuOTY4LTIuMiAyLjE5OC0yLjJIMzZ6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1vcGFjaXR5PSIuMTUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></div>

      <!-- 빛나는 원형 효과들 -->
      <div class="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-10 blur-2xl"></div>

      <!-- 추가 디자인 요소 -->
      <div class="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-white to-transparent opacity-[0.03]"></div>
      <div class="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full h-32 bg-white opacity-10 rounded-[100%]"></div>
    </div>

    <div class="container-layout mx-auto px-4 py-28 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="lg:w-1/2 mb-16 lg:mb-0 lg:pr-6 relative">
          <!-- 상단 장식 요소 -->
          <div class="absolute -top-12 -left-8 w-24 h-24 bg-blue-500 bg-opacity-30 rounded-full blur-xl"></div>

          <!-- 혁신 배지 -->
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span class="flex h-2 w-2 relative mr-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            디지털 의료 혁신 플랫폼
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
            새로운 패러다임의<br />
            <span class="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">의료 정보화</span> 솔루션
          </h1>

          <p class="text-xl text-gray-200 mb-10 leading-relaxed">
            클라우드 기반의 혁신적인 의료 솔루션으로<br />
            환자 만족도를 높이고 병원 운영을 최적화하세요.
          </p>

          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-lg font-medium hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg shadow-blue-600/30">
              솔루션 소개 받기
              <span class="ml-2">→</span>
            </button>
            <button class="group px-8 py-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 rounded-lg text-lg font-medium hover:bg-opacity-20 transition duration-300 ease-in-out">
              데모 신청하기
              <span class="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
          </div>

          <!-- 트러스트 배지 -->
          <div class="mt-12 flex flex-wrap items-center gap-6">
            <div class="text-xs font-medium text-gray-300">신뢰하는 파트너사</div>
            <div class="flex flex-wrap items-center gap-6 opacity-70">
              <div class="h-8 bg-white rounded-md px-3 flex items-center">
                <div class="w-16 h-5 bg-gray-300 rounded"></div>
              </div>
              <div class="h-8 bg-white rounded-md px-3 flex items-center">
                <div class="w-20 h-5 bg-gray-300 rounded"></div>
              </div>
              <div class="h-8 bg-white rounded-md px-3 flex items-center">
                <div class="w-14 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 relative">
          <!-- 부유 장식 요소들 -->
          <div class="absolute -top-8 -left-8 z-20 animate-float-slow">
            <div class="bg-gradient-to-br from-blue-400 to-cyan-300 p-1 rounded-xl shadow-xl">
              <div class="bg-blue-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg px-5 py-3">
                <div class="flex items-center space-x-3">
                  <div class="flex space-x-1">
                    <div class="w-2 h-6 bg-cyan-400 rounded-full animate-equalizer"></div>
                    <div class="w-2 h-4 bg-blue-400 rounded-full animate-equalizer-alt"></div>
                    <div class="w-2 h-8 bg-indigo-400 rounded-full animate-equalizer"></div>
                    <div class="w-2 h-5 bg-cyan-400 rounded-full animate-equalizer-alt"></div>
                  </div>
                  <span class="text-white font-medium">실시간 환자 모니터링</span>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-6 -right-6 z-20 animate-float">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-500 p-1 rounded-xl shadow-xl">
              <div class="bg-indigo-900 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-lg px-5 py-3">
                <div class="flex items-center space-x-3">
                  <div class="relative w-6 h-6">
                    <div class="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-30"></div>
                    <div class="absolute inset-0 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span class="text-white font-medium">클라우드 기반 시스템</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 메인 이미지 래퍼 -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl blur-xl opacity-50 transform rotate-3"></div>

            <!-- 메인 이미지 -->
            <div class="relative bg-gradient-to-br from-gray-900 to-blue-900 p-4 rounded-2xl shadow-2xl transform rotate-2 transition duration-500 hover:rotate-0">
              <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
              <div class="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
              <div class="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>

              <!-- 화면 장식 요소 -->
              <div class="bg-gray-800 rounded-xl p-3 overflow-hidden">
                <!-- 브라우저 상단 바 -->
                <div class="flex items-center bg-gray-900 rounded-t-lg py-2 px-3 mb-2">
                  <div class="flex space-x-1.5 mr-4">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div class="w-full bg-gray-700 rounded-full h-5"></div>
                </div>

                <img src="https://via.placeholder.com/800x500.webp?text=Medical+Dashboard" alt="의료 대시보드" class="rounded-lg w-full shadow-inner" />

                <!-- 스크린 오버레이 효과 -->
                <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-20 rounded-xl pointer-events-none"></div>

                <!-- 스캔 라인 효과 -->
                <div class="absolute inset-x-0 h-12 bg-gradient-to-b from-blue-500 to-transparent opacity-10 rounded-full blur-md animate-scan"></div>
              </div>
            </div>

            <!-- 기술 스택 아이콘 -->
            <div class="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div class="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div class="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div class="w-6 h-6 bg-green-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainHeroSection'
}
</script>

<style scoped>
/* 고급 애니메이션 효과 */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.05); }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes equalizer {
  0%, 100% { height: 0.5rem; }
  50% { height: 1.5rem; }
}

@keyframes equalizer-alt {
  0%, 100% { height: 1rem; }
  50% { height: 0.5rem; }
}

@keyframes scan {
  0% { top: 0; opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { top: 100%; opacity: 0.1; }
}

.animate-pulse-slow {
  animation: pulse-slow 6s infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 8s infinite;
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 7s ease-in-out infinite;
}

.animate-equalizer {
  animation: equalizer 1.5s ease-in-out infinite;
}

.animate-equalizer-alt {
  animation: equalizer-alt 1.7s ease-in-out infinite;
}

.animate-scan {
  animation: scan 3s linear infinite;
}

/* 고급 블러 효과 */
.blur-3xl {
  filter: blur(5rem);
}

.blur-2xl {
  filter: blur(2.5rem);
}

.blur-xl {
  filter: blur(1.5rem);
}

/* 그라데이션 효과 보강 */
.from-blue-700.via-indigo-800.to-purple-900 {
  background: linear-gradient(135deg, #1e40af, #3730a3, #581c87);
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>