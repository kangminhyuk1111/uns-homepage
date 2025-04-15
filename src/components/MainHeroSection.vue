<!-- MainHeroSection.vue -->
<template>
  <section class="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
    <!-- 배경 장식 요소 -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 transform skew-x-12"></div>
      <div class="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white opacity-5 transform -skew-x-12"></div>
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-400 rounded-full opacity-20 blur-2xl"></div>
    </div>

    <div class="container-layout mx-auto px-4 py-24 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-6">
          <span class="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-3">디지털 의료 솔루션</span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            새로운 패러다임의<br />
            <span class="text-blue-300">의료 정보화</span> 솔루션
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            클라우드 기반의 혁신적인 의료 솔루션으로<br />
            환자 만족도를 높이고 병원 운영을 최적화하세요.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="px-8 py-3 bg-white text-blue-700 rounded-md text-lg font-medium hover:bg-gray-100 transition shadow-md">
              솔루션 소개 받기
            </button>
            <button class="px-8 py-3 bg-transparent border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:bg-opacity-10 transition">
              데모 신청하기
            </button>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div class="relative">
            <!-- 메인 이미지 -->
            <div class="bg-white p-3 rounded-2xl shadow-2xl transform rotate-1">
              <img src="https://via.placeholder.com/800x500.webp?text=Medical+Dashboard" alt="의료 대시보드" class="rounded-xl w-full" />
            </div>

            <!-- 장식 요소 -->
            <div class="absolute -top-6 -left-6 bg-gradient-to-br from-blue-400 to-cyan-300 p-2 rounded-lg shadow-lg transform -rotate-6 z-20">
              <div class="bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-md px-4 py-2">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span class="text-white font-medium">실시간 환자 모니터링</span>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-gradient-to-br from-indigo-500 to-purple-500 p-2 rounded-lg shadow-lg transform rotate-6 z-20">
              <div class="bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-md px-4 py-2">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span class="text-white font-medium">클라우드 기반 시스템</span>
                </div>
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
/* 블러 효과가 제대로 적용되지 않는 경우를 위한 대체 스타일 */
.blur-3xl {
  filter: blur(64px);
}

.blur-2xl {
  filter: blur(40px);
}

/* 그라데이션이 제대로 표시되지 않는 경우를 위한 대체 스타일 */
.from-blue-600.to-indigo-800 {
  background: linear-gradient(to right, #2563eb, #3730a3);
}

.from-blue-400.to-cyan-300 {
  background: linear-gradient(to bottom right, #60a5fa, #67e8f9);
}

.from-indigo-500.to-purple-500 {
  background: linear-gradient(to bottom right, #6366f1, #a855f7);
}
</style>