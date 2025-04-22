<!-- ProductCard.vue -->
<template>
  <div class="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full" :class="`hover:border-${color}-300`">
    <!-- 상단 UI 디자인 영역 -->
    <div class="h-56 p-6 flex items-center justify-center relative overflow-hidden" :class="`bg-${color}-50`">
      <!-- Baro Paper UI -->
      <div v-if="icon === 'document'" class="bg-white shadow-lg rounded-lg w-full h-full p-4 flex flex-col justify-between border border-gray-200">
        <div class="flex justify-between mb-2 border-b border-gray-300 pb-1">
          <span class="font-bold text-gray-900 text-xs">302호 김환자</span>
          <span class="text-xs text-gray-800">63세/남</span>
        </div>
        <div class="space-y-1">
          <div class="flex justify-between">
            <span class="text-xs text-gray-600">담당의</span>
            <span class="text-xs text-gray-800">김의사</span>
          </div>
          <div class="flex justify-between">
            <span class="text-xs text-gray-600">입원일</span>
            <span class="text-xs text-gray-800">2025.04.10</span>
          </div>
          <div class="flex justify-between">
            <span class="text-xs text-gray-600">회진시간</span>
            <span class="text-xs text-gray-800">09:30</span>
          </div>
          <div class="flex justify-between text-gray-900 bg-gray-300 px-1 rounded mt-1">
            <span class="text-xs">주의사항</span>
            <span class="text-xs font-medium">낙상주의</span>
          </div>
        </div>
      </div>

      <!-- Baro Pop UI -->
      <div v-else-if="icon === 'monitor'" class="bg-white shadow-lg rounded-lg w-full h-full overflow-hidden border border-gray-200 flex flex-col">
        <!-- 상단 헤더 -->
        <div class="bg-blue-950 py-1.5 px-2 flex justify-between items-center border-b border-blue-800">
          <div class="flex items-center space-x-2">
            <div class="w-4 h-2 bg-white/20 rounded-sm"></div>
            <div class="text-[9px] font-bold text-yellow-300">폐식도센터</div>
          </div>
          <div class="text-[8px] text-yellow-300">09:45</div>
        </div>

        <!-- 주요 콘텐츠 -->
        <div class="flex">
          <!-- 왼쪽 섹션 -->
          <div class="w-1/4 bg-blue-950 flex flex-col items-center py-1.5 border-r border-blue-800">
            <div class="text-[9px] font-bold text-yellow-300">상담실</div>
            <div class="text-[7px] text-yellow-300">Consulting</div>
          </div>

          <!-- 오른쪽 섹션 -->
          <div class="w-3/4 bg-blue-950 flex">
            <div class="w-1/2 flex flex-col items-center py-1.5 border-r border-blue-800">
              <div class="text-[11px] font-bold text-yellow-300">5번</div>
              <div class="text-[7px] text-yellow-300">Room5</div>
            </div>
            <div class="w-1/2 flex flex-col items-center py-1.5">
              <div class="text-[11px] font-bold text-yellow-300">6번</div>
              <div class="text-[7px] text-yellow-300">Room6</div>
            </div>
          </div>
        </div>

        <!-- 상담 간호사 -->
        <div class="flex text-[7px]">
          <div class="w-1/4 bg-blue-950 py-2 flex flex-col items-center border-r border-t border-blue-800">
            <div class="text-[9px] font-bold text-yellow-300">상담 간호사</div>
            <div class="text-[7px] text-yellow-300">Nurse</div>
          </div>
          <div class="w-3/4 flex border-t border-blue-300">
            <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center border-r border-blue-300">
              <span class="text-[9px] font-bold text-blue-950">이미주</span>
            </div>
            <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center">
              <span class="text-[9px] font-bold text-blue-950">나혜성</span>
            </div>
          </div>
        </div>

        <!-- 상담 중인 분 -->
        <div class="flex text-[7px]">
          <div class="w-1/4 bg-blue-950 py-2 flex flex-col items-center border-r border-t border-blue-800">
            <div class="text-[9px] font-bold text-green-300">상담 중인 분</div>
            <div class="text-[7px] text-green-300">Consultation</div>
          </div>
          <div class="w-3/4 flex border-t border-blue-300">
            <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center border-r border-blue-300">
              <span class="text-[9px] font-bold text-blue-950">가삼♣</span>
            </div>
            <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center">
              <span class="text-[9px] font-bold text-blue-950">나삼♣</span>
            </div>
          </div>
        </div>

        <!-- 여기서 기다리실 분 (간소화된 버전) -->
        <div class="flex text-[7px] flex-grow">
          <div class="w-1/4 bg-blue-950 py-2 flex flex-col items-center border-r border-t border-blue-800">
            <div class="text-[9px] font-bold text-white">여기서</div>
            <div class="text-[9px] font-bold text-white">기다리실 분</div>
            <div class="text-[7px] text-white">Waiting</div>
          </div>
          <div class="w-3/4 bg-blue-100 grid grid-cols-4 border-t border-blue-300">
            <div class="flex items-center justify-center border-r border-blue-200 py-2">
              <span class="text-[9px] font-bold text-blue-950">다삼♣</span>
            </div>
            <div class="flex items-center justify-center border-r border-blue-200 py-2">
              <span class="text-[9px] font-bold text-blue-950">라삼♣</span>
            </div>
            <div class="flex items-center justify-center border-r border-blue-200 py-2">
              <span class="text-[9px] font-bold text-blue-950">마삼♣</span>
            </div>
            <div class="flex items-center justify-center py-2">
              <span class="text-[9px] font-bold text-blue-950">바삼♣</span>
            </div>
          </div>
        </div>

        <!-- 공지사항 -->
        <div class="bg-blue-950 py-1 flex items-center">
          <span class="text-[7px] font-bold text-yellow-300 ml-2">공지사항</span>
        </div>
      </div>

      <!-- Baro Kiosk UI -->
      <div v-else-if="icon === 'mobile'" class="bg-slate-900 shadow-lg rounded-lg w-full h-full p-3 border border-slate-700 flex flex-col">
        <div class="bg-white rounded-t-lg p-3 flex flex-col items-center flex-grow">
          <div class="w-full h-4 bg-blue-500 rounded mb-2"></div>
          <div class="text-gray-800 text-xs font-bold mb-2">방문자 출입 등록</div>
          <div class="grid grid-cols-2 gap-2 w-full">
            <div class="bg-blue-100 text-blue-800 text-xs rounded py-1 text-center">환자 방문</div>
            <div class="bg-gray-100 text-gray-800 text-xs rounded py-1 text-center">거래처</div>
          </div>
          <div class="mt-4 w-full h-24 bg-gray-100 rounded border border-gray-300 flex items-center justify-center my-auto">
            <div class="text-sm text-gray-500">QR 코드를 스캔하세요</div>
          </div>
        </div>
        <div class="mt-2 flex justify-between">
          <div class="w-1/3 h-3 bg-gray-500/30 rounded"></div>
          <div class="w-1/4 h-3 bg-blue-500/50 rounded"></div>
        </div>
      </div>

      <!-- Baro Navi UI -->
      <div v-else-if="icon === 'map'" class="relative bg-white shadow-lg rounded-lg w-full h-full overflow-hidden border border-gray-200">
        <!-- 앱 상태바 -->
        <div class="flex justify-between items-center px-3 py-2 border-b border-gray-200">
          <div class="w-12 h-2 bg-gray-300 rounded-full"></div>
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <!-- 앱 내용 -->
        <div class="relative flex-grow bg-blue-100" style="height: 140px">
          <!-- 지도 형태 -->
          <div class="absolute inset-0">
            <div class="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-600 rounded-full"></div>
            <div class="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/50 rounded-full animate-ping"></div>
            <div class="absolute left-1/4 top-1/3 w-40 border-2 border-dashed border-blue-500"></div>
            <div class="absolute left-[65%] top-1/3 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
          <div class="absolute bottom-0 w-full bg-white rounded-t-xl p-3">
            <div class="text-xs text-gray-800 font-medium">현재 위치: 1층 로비</div>
            <div class="text-xs text-blue-600">목적지: MRI 검사실 (3층)</div>
            <div class="mt-1 w-full h-2 bg-gray-200 rounded-full">
              <div class="w-1/3 h-full bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Baro Safe UI -->
      <div v-else-if="icon === 'shield'" class="bg-white shadow-lg rounded-lg w-full h-full overflow-hidden border border-gray-200 flex flex-col">
        <div class="bg-blue-700 py-2 px-3 text-white">
          <div class="text-sm font-bold">안전 확인 시스템</div>
          <div class="text-xs opacity-80">환자 식별 및 투약 확인</div>
        </div>
        <div class="flex-grow p-3">
          <div class="border border-gray-300 rounded-lg mb-3 p-2">
            <div class="flex justify-between mb-1">
              <span class="text-xs font-bold text-gray-700">환자 정보</span>
              <span class="bg-green-500 text-white text-xs px-2 rounded-full">확인됨</span>
            </div>
            <div class="text-xs text-gray-800">
              <div class="flex justify-between mb-1">
                <span>환자 ID:</span>
                <span class="font-medium">P-12345</span>
              </div>
              <div class="flex justify-between">
                <span>성명:</span>
                <span class="font-medium">김환자</span>
              </div>
            </div>
          </div>
          <div class="border border-gray-300 rounded-lg p-2">
            <div class="flex justify-between mb-1">
              <span class="text-xs font-bold text-gray-700">투약 정보</span>
              <span class="bg-yellow-500 text-white text-xs px-2 rounded-full">스캔 필요</span>
            </div>
            <div class="grid grid-cols-2 gap-1 mt-2">
              <div class="bg-blue-100 text-blue-800 text-[9px] rounded p-1 text-center">약품 스캔</div>
              <div class="bg-blue-100 text-blue-800 text-[9px] rounded p-1 text-center">투약 기록</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Baro Chart UI -->
      <div v-else-if="icon === 'chart'" class="bg-white shadow-lg rounded-lg w-full h-full overflow-hidden border border-gray-200 flex flex-col">
        <div class="bg-indigo-700 py-2 px-3 text-white">
          <div class="text-sm font-bold">병원정보시스템</div>
          <div class="text-xs opacity-80">환자 차트 및 검사결과</div>
        </div>
        <div class="flex-grow p-3">
          <div class="flex justify-between mb-2">
            <div class="text-xs font-bold text-gray-800">환자 차트</div>
            <div class="text-xs text-blue-600">김환자 (45세/남)</div>
          </div>
          <div class="h-20 mb-3 bg-gray-100 rounded-lg p-2">
            <div class="flex items-end h-full space-x-1">
              <div class="h-[30%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[45%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[80%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[60%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[75%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[40%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[55%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[70%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[50%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[65%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[35%] w-1/12 bg-blue-500 rounded-t"></div>
              <div class="h-[85%] w-1/12 bg-blue-500 rounded-t"></div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-gray-100 rounded-lg p-2">
              <div class="text-[9px] font-medium text-gray-700 mb-1">Vital Signs</div>
              <div class="text-[9px] text-gray-600">
                <div class="flex justify-between">
                  <span>혈압:</span>
                  <span>120/80 mmHg</span>
                </div>
                <div class="flex justify-between">
                  <span>체온:</span>
                  <span>36.5 °C</span>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 rounded-lg p-2">
              <div class="text-[9px] font-medium text-gray-700 mb-1">최근 검사</div>
              <div class="text-[9px] text-gray-600">
                <div class="flex justify-between">
                  <span>혈액검사:</span>
                  <span>완료</span>
                </div>
                <div class="flex justify-between">
                  <span>X-ray:</span>
                  <span>예정</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Baro Talk UI -->
      <div v-else-if="icon === 'chat'" class="bg-white shadow-lg rounded-lg w-full h-full overflow-hidden border border-gray-200 flex flex-col">
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 py-2 px-3 text-white">
          <div class="text-sm font-bold">Baro Talk</div>
          <div class="text-xs opacity-80">의료진 전용 메신저</div>
        </div>
        <div class="flex-grow p-2 bg-gray-100">
          <!-- 메시지 버블 -->
          <div class="flex justify-start mb-2">
            <div class="bg-white rounded-lg p-2 shadow-sm max-w-[80%]">
              <div class="text-[9px] font-bold text-gray-800 mb-1">김의사</div>
              <div class="text-[9px] text-gray-700">302호 환자 상태 확인 부탁드립니다</div>
              <div class="text-[8px] text-gray-500 text-right mt-1">09:15</div>
            </div>
          </div>
          <div class="flex justify-end mb-2">
            <div class="bg-blue-500 rounded-lg p-2 shadow-sm max-w-[80%]">
              <div class="text-[9px] text-white">확인했습니다. 산소포화도 95%로 안정적입니다.</div>
              <div class="text-[8px] text-blue-100 text-right mt-1">09:18</div>
            </div>
          </div>
          <div class="flex justify-start">
            <div class="bg-white rounded-lg p-2 shadow-sm max-w-[80%]">
              <div class="text-[9px] font-bold text-gray-800 mb-1">김의사</div>
              <div class="text-[9px] text-gray-700">감사합니다. 회진 시 함께 방문하겠습니다.</div>
              <div class="text-[8px] text-gray-500 text-right mt-1">09:20</div>
            </div>
          </div>
        </div>
        <!-- 입력 영역 -->
        <div class="px-2 py-2 border-t border-gray-200 flex">
          <div class="flex-grow bg-gray-100 rounded-full px-3 text-xs py-1 mr-2"></div>
          <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Baro Call UI -->
      <div v-else-if="icon === 'phone'" class="bg-white shadow-lg rounded-lg w-full h-full overflow-hidden border border-gray-200 flex flex-col">
        <div class="bg-gradient-to-r from-purple-600 to-indigo-700 py-2 px-3 text-white">
          <div class="text-sm font-bold">Baro Call</div>
          <div class="text-xs opacity-80">디지털 너스콜 시스템</div>
        </div>
        <div class="flex-grow p-3">
          <!-- 호출 알림 영역 -->
          <div class="bg-red-100 border border-red-300 rounded-lg mb-3 p-2 flex items-center">
            <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div class="flex-grow">
              <div class="text-xs font-bold text-red-800">긴급 호출</div>
              <div class="text-[9px] text-red-700">병실: 305호 | 환자: 이환자</div>
            </div>
            <div class="text-xs text-white bg-red-500 px-2 py-1 rounded-lg">
              응답
            </div>
          </div>
          <!-- 다른 호출 상태 -->
          <div class="grid grid-cols-2 gap-2 mb-3">
            <div class="bg-gray-100 rounded-lg p-2 text-center">
              <div class="text-[9px] text-gray-500">대기 중인 호출</div>
              <div class="text-lg font-bold text-gray-800">3</div>
            </div>
            <div class="bg-gray-100 rounded-lg p-2 text-center">
              <div class="text-[9px] text-gray-500">응답 완료</div>
              <div class="text-lg font-bold text-gray-800">12</div>
            </div>
          </div>
          <!-- 실시간 상태 표시 -->
          <div class="border border-gray-300 rounded-lg divide-y divide-gray-200">
            <div class="p-2 flex justify-between items-center">
              <span class="text-xs font-medium text-gray-800">301호</span>
              <span class="text-[9px] text-white bg-green-500 px-2 py-0.5 rounded-full">처리 완료</span>
            </div>
            <div class="p-2 flex justify-between items-center">
              <span class="text-xs font-medium text-gray-800">302호</span>
              <span class="text-[9px] text-white bg-blue-500 px-2 py-0.5 rounded-full">응답 중</span>
            </div>
            <div class="p-2 flex justify-between items-center">
              <span class="text-xs font-medium text-gray-800">303호</span>
              <span class="text-[9px] text-white bg-yellow-500 px-2 py-0.5 rounded-full">대기 중</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 기본 아이콘 (다른 아이콘의 경우) -->
      <div v-else :class="`relative w-32 h-32 rounded-xl flex items-center justify-center shadow-md overflow-hidden border border-${color}-200 bg-${color}-100`">
        <!-- 아이콘 -->
        <div :class="`text-${color}-700`">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path v-if="icon === 'document'" stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <path v-else-if="icon === 'monitor'" stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            <path v-else-if="icon === 'mobile'" stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path v-else-if="icon === 'map'" stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            <path v-else-if="icon === 'shield'" stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            <path v-else-if="icon === 'chart'" stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            <path v-else-if="icon === 'chat'" stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            <path v-else-if="icon === 'phone'" stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- 콘텐츠 영역 -->
    <div class="p-6 flex flex-col flex-grow bg-white">
      <!-- 스타일된 배지 -->
      <div class="flex items-center space-x-2 mb-3">
        <div :class="`px-3 py-1 text-xs font-semibold rounded-full tracking-wide uppercase text-${color}-700 bg-${color}-100 border border-${color}-200 group-hover:bg-${color}-200 transition-colors duration-300 flex items-center space-x-1`">
          <span>Baro Solution</span>
        </div>
      </div>

      <!-- 제목 -->
      <h3 :class="`text-xl font-bold mb-3 text-gray-800 group-hover:text-${color}-600 transition-colors duration-300`">
        {{ title }}
      </h3>

      <!-- 설명 -->
      <p class="text-gray-600 mb-5 flex-grow leading-relaxed">{{ description }}</p>

      <!-- 특징 목록 -->
      <div class="mb-5 p-3 rounded-lg border border-gray-100 group-hover:border-gray-200 bg-gray-50">
        <h4 class="text-sm font-medium text-gray-600 mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" :class="`h-4 w-4 mr-1 text-${color}-500`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          주요 특징
        </h4>
        <ul class="space-y-2">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start">
            <span :class="`inline-flex items-center justify-center p-1 mr-2 rounded-md bg-${color}-100 text-${color}-600`">
              <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="text-sm text-gray-700">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- 링크 버튼 -->
      <router-link :to="link" :class="`rounded-lg flex items-center justify-center py-2 px-4 font-medium text-white bg-${color}-500 hover:bg-${color}-600 transition-colors duration-300`">
        <span class="flex items-center">
          자세히 보기
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    },
    features: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: 'document'
    }
  }
};
</script>