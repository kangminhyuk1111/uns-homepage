<!-- MedicalKiosk.vue -->
<template>
  <div class="relative w-full max-w-sm mx-auto transform transition-all duration-500 hover:scale-105">
    <!-- 키오스크 프레임 -->
    <div class="bg-gray-800 rounded-2xl pt-8 pb-16 px-4 shadow-2xl">
      <!-- 상단 스피커 -->
      <div class="w-16 h-1 bg-gray-700 rounded-full mx-auto mb-4"></div>

      <!-- 스크린 -->
      <div :class="`bg-${color}-50 rounded-xl p-4 mb-6 shadow-inner overflow-hidden`">
        <!-- 병원 로고 및 타이틀 -->
        <div class="flex items-center justify-center mb-6">
          <div :class="`w-10 h-10 rounded-full bg-${color}-200 flex items-center justify-center mr-3`">
            <svg :class="`h-6 w-6 text-${color}-600`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div :class="`text-${color}-800 text-xl font-bold`">바로병원</div>
        </div>

        <!-- 키오스크 내용 - 환자 접수 화면 -->
        <div class="bg-white rounded-lg shadow-md p-4 mb-6">
          <div :class="`text-${color}-600 text-lg font-semibold mb-4 text-center`">환자 접수</div>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-700 font-medium">진료 예약</span>
              <div :class="`w-6 h-6 rounded-full border-2 border-${color}-300`"></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700 font-medium">당일 접수</span>
              <div :class="`w-6 h-6 rounded-full border-2 border-${color}-300 bg-${color}-300 flex items-center justify-center`">
                <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700 font-medium">처방전 발급</span>
              <div :class="`w-6 h-6 rounded-full border-2 border-${color}-300`"></div>
            </div>
          </div>
        </div>

        <!-- 메뉴 버튼들 -->
        <div class="grid grid-cols-3 gap-3">
          <div :class="`bg-${color}-100 p-3 rounded-lg shadow text-center cursor-pointer hover:bg-${color}-200 transition-colors duration-200`">
            <div :class="`w-8 h-8 bg-${color}-500 rounded-full text-white flex items-center justify-center mx-auto mb-2`">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="text-sm font-medium text-gray-700">초진 등록</div>
          </div>
          <div :class="`bg-${color}-100 p-3 rounded-lg shadow text-center cursor-pointer hover:bg-${color}-200 transition-colors duration-200`">
            <div :class="`w-8 h-8 bg-${color}-500 rounded-full text-white flex items-center justify-center mx-auto mb-2`">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-sm font-medium text-gray-700">예약 확인</div>
          </div>
          <div :class="`bg-${color}-100 p-3 rounded-lg shadow text-center cursor-pointer hover:bg-${color}-200 transition-colors duration-200`">
            <div :class="`w-8 h-8 bg-${color}-500 rounded-full text-white flex items-center justify-center mx-auto mb-2`">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-sm font-medium text-gray-700">결제</div>
          </div>
        </div>
      </div>

      <!-- 하단 버튼 -->
      <div class="flex justify-center">
        <div class="w-16 h-16 rounded-full bg-gray-700 border-4 border-gray-600 cursor-pointer hover:bg-gray-600 transition-colors duration-200"></div>
      </div>
    </div>

    <!-- 키오스크 스탠드 -->
    <div class="w-16 bg-gray-700 h-12 mx-auto -mt-2 rounded-b-lg"></div>
    <div class="w-32 bg-gray-800 h-6 mx-auto -mt-1 rounded-b-lg"></div>
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
  }
}
</script>