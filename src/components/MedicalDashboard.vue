<!-- MedicalDashboard.vue -->
<template>
  <div class="relative">
    <!-- 메인 컨테이너 -->
    <div class="w-full h-96 md:h-100 bg-white rounded-2xl relative overflow-hidden shadow-xl border border-gray-100">
      <!-- 좌측 내비게이션 -->
      <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-blue-600 to-indigo-700 flex flex-col items-center py-6 space-y-6">
        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>

      <!-- 메인 콘텐츠 영역 -->
      <div class="ml-16 p-6">
        <!-- 상단 헤더 -->
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-xl font-bold text-gray-800">환자 대시보드</h3>
            <p class="text-sm text-gray-500">{{ currentDate }}</p>
          </div>
          <div class="flex items-center space-x-3">
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div class="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
              DR
            </div>
          </div>
        </div>

        <!-- 환자 요약 정보 카드 -->
        <div class="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
          <div class="flex justify-between items-start">
            <div>
              <div class="text-sm text-blue-600 font-medium mb-1">현재 환자</div>
              <div class="text-lg font-bold text-gray-800 mb-1">김민준 (48세, 남)</div>
              <div class="text-sm text-gray-500">ID: P-12458 • 입원일: 2025-04-05</div>
            </div>
            <div class="bg-white p-2 rounded-lg shadow-sm">
              <div class="text-xs text-gray-500 mb-1">활력 징후</div>
              <div class="flex space-x-3 text-sm">
                <div>
                  <span class="text-gray-500">혈압</span>
                  <span class="font-medium text-gray-800 ml-1">120/80</span>
                </div>
                <div>
                  <span class="text-gray-500">맥박</span>
                  <span class="font-medium text-gray-800 ml-1">72</span>
                </div>
                <div>
                  <span class="text-gray-500">체온</span>
                  <span class="font-medium text-gray-800 ml-1">36.5°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 환자 진료 타임라인 -->
        <div class="mb-6">
          <div class="flex justify-between items-center mb-4">
            <h4 class="text-lg font-bold text-gray-800">진료 일정</h4>
            <button class="text-sm text-blue-600 font-medium">+ 새 일정</button>
          </div>

          <div class="space-y-3">
            <div class="flex p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div class="flex-shrink-0 mr-3">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <div class="text-sm font-bold text-gray-800">혈액 검사 결과</div>
                  <div class="text-xs text-gray-500">오늘 08:30</div>
                </div>
                <div class="text-sm text-gray-600">정상 수치 범위 내 결과 확인됨</div>
              </div>
            </div>

            <div class="flex p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <div class="flex-shrink-0 mr-3">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex justify-between">
                  <div class="text-sm font-bold text-gray-800">내과 진료 예약</div>
                  <div class="text-xs text-gray-500">오늘 14:00</div>
                </div>
                <div class="text-sm text-gray-600">이상준 교수 (내과) - 303호 진료실</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 하단 차트 영역 -->
        <div>
          <h4 class="text-lg font-bold text-gray-800 mb-3">회복 모니터링</h4>
          <div class="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div class="flex mb-1">
              <div v-for="(day, index) in weekDays" :key="index" class="text-xs text-gray-500 ml-8" :class="{ 'ml-9': index > 0 }">
                {{ day }}
              </div>
            </div>
            <div class="h-24 flex items-end space-x-2">
              <div v-for="(value, index) in recoveryData" :key="index"
                   :class="`w-8 bg-blue-500 rounded-t-sm`"
                   :style="{ height: value + '%' }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 장식 요소 -->
    <div class="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-400 rounded-full opacity-30 blur-xl"></div>
    <div class="absolute -top-10 -right-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
  </div>
</template>

<script>
export default {
  name: 'MedicalDashboard',
  data() {
    return {
      weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      recoveryData: [33, 67, 75, 50, 60, 80, 100]
    }
  },
  computed: {
    currentDate() {
      const now = new Date();
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' };
      return now.toLocaleDateString('ko-KR', options);
    }
  }
}
</script>