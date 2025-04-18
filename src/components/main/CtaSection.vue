<!-- CtaSection.vue -->
<template>
  <section class="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white relative overflow-hidden">
    <!-- 배경 장식 요소 -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- 기하학적 패턴 -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 border-4 border-white rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div class="absolute bottom-0 left-0 w-1/4 h-1/2 border-4 border-white rounded-full transform -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <!-- 그라데이션 오버레이 -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-800 to-transparent opacity-30"></div>

      <!-- 빛 효과 -->
      <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
    </div>

    <div class="w-full max-w-none px-4 relative z-10">
      <div class="max-w-4xl mx-auto bg-blue-600 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-blue-400 border-opacity-20">
        <!-- 상단 아이콘 -->
        <div class="mb-6 flex justify-center">
          <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
        </div>

        <!-- 제목 & 설명 -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">디지털 의료 솔루션의 미래를 경험하세요</h2>
        <p class="text-xl text-white mb-10 max-w-3xl mx-auto text-center leading-relaxed">
          Baro 솔루션으로 의료 서비스의 품질을 높이고 <span class="font-semibold">환자 만족도를 향상</span>시켜 보세요.
        </p>

        <!-- 버튼 그룹 -->
        <div class="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-5 mb-10">
          <button
              class="px-10 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
            데모 신청하기
          </button>
          <button
              class="px-10 py-4 bg-blue-500 border-2 border-white text-white rounded-full text-lg font-semibold transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
            문의하기
          </button>
        </div>

        <!-- 신뢰 지표 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div class="bg-white bg-opacity-10 rounded-xl p-4 text-center border border-white border-opacity-20">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">데이터 보안</h3>
            <p class="text-sm">환자 정보 암호화 및 안전한 데이터 관리</p>
          </div>

          <div class="bg-white bg-opacity-10 rounded-xl p-4 text-center border border-white border-opacity-20">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">빠른 도입</h3>
            <p class="text-sm">1주 이내 시스템 구축 및 직원 교육 완료</p>
          </div>

          <div class="bg-white bg-opacity-10 rounded-xl p-4 text-center border border-white border-opacity-20">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-1">전담 지원팀</h3>
            <p class="text-sm">24시간 기술 지원 및 정기 업데이트</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection'
}
</script>