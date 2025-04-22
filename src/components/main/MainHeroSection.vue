<!-- ModernHeroWithDevices.vue -->
<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
    <!-- 배경 효과 -->
    <div class="absolute inset-0 z-0">
      <!-- 서브틀한 그리드 패턴 -->
      <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMlYyMmg1LjU5OGMxLjIzMiAwIDIuMi45NjggMi4yIDIuMnY1LjZjMCAxLjIzMi0uOTY4IDIuMi0yLjIgMi4yaC01LjU5OHYxLjc5OEMzOC4xOTggMzUuMDMyIDM3LjIzIDM2IDM2IDM2aC01LjYwMkMyOS4xNjggMzYgMjguMiAzNS4wMzIgMjguMiAzMy43OThWMzJoLTUuNmMtMS4yMyAwLTIuMi0uOTY4LTIuMi0yLjJ2LTUuNmMwLTEuMjMyLjk3LTIuMiAyLjItMi4yaDUuNnYtMS44YzAtMS4yMzIuOTY4LTIuMiAyLjE5OC0yLjJIMzZ6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS1vcGFjaXR5PSIuMTUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></div>

      <!-- 세련된 그라데이션 블러 효과 -->
      <div class="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-3xl"></div>

      <!-- 미니멀한 배경 점선 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>

    <div class="container-layout mx-auto px-6 py-20 md:py-24 lg:py-32 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- 텍스트 섹션 -->
        <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-6">
          <!-- 현대적인 배지 -->
          <div class="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            디지털 의료 혁신 플랫폼
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            새로운 패러다임의<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">의료 정보화</span> 솔루션
          </h1>

          <p class="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
            클라우드 기반의 혁신적인 의료 솔루션으로 환자 만족도를 높이고 병원 운영을 최적화하세요.
          </p>

          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition duration-300 ease-in-out">
              솔루션 소개 받기
              <span class="ml-2">→</span>
            </button>
            <button class="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg font-medium transition duration-300 ease-in-out">
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
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-blue-400 text-sm font-medium">Baro Paper</div>
                  <div class="text-white font-medium mb-2">전자 종이 시스템</div>

                  <!-- E-Paper 디스플레이 시뮬레이션 -->
                  <div class="bg-gray-200 rounded-lg p-3 text-gray-800 text-xs">
                    <div class="flex justify-between mb-2 border-b border-gray-300 pb-1">
                      <span class="font-bold">302호 김환자</span>
                      <span>63세/남</span>
                    </div>
                    <div class="space-y-1">
                      <div class="flex justify-between">
                        <span>담당의</span>
                        <span>김의사</span>
                      </div>
                      <div class="flex justify-between">
                        <span>입원일</span>
                        <span>2025.04.10</span>
                      </div>
                      <div class="flex justify-between">
                        <span>회진시간</span>
                        <span>09:30</span>
                      </div>
                      <div class="flex justify-between text-gray-900 bg-gray-300 px-1 rounded mt-1">
                        <span>주의사항</span>
                        <span>낙상주의</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 키오스크 (Baro Kiosk) -->
            <div class="col-span-1 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-teal-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-teal-400 text-sm font-medium">Baro Kiosk</div>
                  <div class="text-white font-medium mb-2">의료 키오스크</div>

                  <!-- 키오스크 UI 시뮬레이션 -->
                  <div class="bg-slate-900 rounded-lg p-2 border border-slate-700">
                    <div class="bg-white rounded-t-lg p-2 flex flex-col items-center">
                      <div class="w-full h-4 bg-blue-500 rounded mb-2"></div>
                      <div class="text-gray-800 text-xs font-bold mb-2">방문자 출입 등록</div>
                      <div class="grid grid-cols-2 gap-2 w-full">
                        <div class="bg-blue-100 text-blue-800 text-xs rounded py-1 text-center">환자 방문</div>
                        <div class="bg-gray-100 text-gray-800 text-xs rounded py-1 text-center">거래처</div>
                      </div>
                      <div class="mt-2 w-full h-12 bg-gray-100 rounded border border-gray-300 flex items-center justify-center">
                        <div class="text-[8px] text-gray-500">QR 코드를 스캔하세요</div>
                      </div>
                    </div>
                    <div class="mt-1 flex justify-between">
                      <div class="w-1/3 h-3 bg-gray-500/30 rounded"></div>
                      <div class="w-1/4 h-3 bg-blue-500/50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 셋톱박스 앱 서비스 (Baro Pop) - 간소화된 디자인 -->
            <div class="col-span-1 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-indigo-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-indigo-400 text-sm font-medium">Baro Pop</div>
                  <div class="text-white font-medium mb-2">대기 안내 시스템</div>

                  <!-- 간소화된 전광판 UI 시뮬레이션 -->
                  <div class="bg-white rounded-lg overflow-hidden">
                    <!-- 상단 헤더 -->
                    <div class="bg-blue-950 py-1.5 px-2 flex justify-between items-center border-b border-blue-800">
                      <div class="flex items-center space-x-2">
                        <div class="w-6 h-3 bg-white/20 rounded-sm"></div>
                        <div class="text-[9px] font-bold text-yellow-300">♣♣♣센터</div>
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
                          <span class="text-[9px] font-bold text-blue-950">이♣주</span>
                        </div>
                        <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center">
                          <span class="text-[9px] font-bold text-blue-950">나♣성</span>
                        </div>
                      </div>
                    </div>

                    <!-- 상담 중인 분 -->
                    <div class="flex text-[7px]">
                      <div class="w-1/4 bg-blue-950 py-2 flex flex-col items-center border-t border-r border-blue-800">
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

                    <!-- 공지사항 -->
                    <div class="bg-blue-950 py-1 flex items-center">
                      <span class="text-[7px] font-bold text-yellow-300 ml-2">공지사항</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 원내 길안내 (Baro Navi) -->
            <div class="col-span-1 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-emerald-400/20 rounded-xl blur-md transform transition-all duration-500 group-hover:scale-105"></div>
              <div class="relative bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20 h-full">
                <div class="p-4">
                  <div class="mb-2 text-emerald-400 text-sm font-medium">Baro Navi</div>
                  <div class="text-white font-medium mb-2">원내 길안내</div>

                  <!-- 길안내 앱 시뮬레이션 -->
                  <div class="relative bg-white rounded-lg overflow-hidden pt-2">
                    <!-- 앱 상태바 -->
                    <div class="flex justify-between items-center px-2 mb-1">
                      <div class="w-12 h-2 bg-gray-300 rounded-full"></div>
                      <div class="flex space-x-1">
                        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <!-- 앱 내용 -->
                    <div class="relative h-28 bg-blue-100">
                      <!-- 지도 형태 -->
                      <div class="absolute inset-0">
                        <div class="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div class="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500/50 rounded-full animate-ping"></div>
                        <div class="absolute left-1/4 top-1/3 w-32 border-2 border-dashed border-blue-500"></div>
                        <div class="absolute left-[65%] top-1/3 w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div class="absolute bottom-0 w-full bg-white rounded-t-xl p-2">
                        <div class="text-[9px] text-gray-800 font-medium">현재 위치: 1층 로비</div>
                        <div class="text-[8px] text-blue-600">목적지: MRI 검사실 (3층)</div>
                        <div class="mt-1 w-full h-1.5 bg-gray-200 rounded-full">
                          <div class="w-1/3 h-full bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <!-- 앱 하단 버튼 -->
                    <div class="flex justify-around px-2 py-1">
                      <div class="w-4 h-1 bg-gray-300 rounded"></div>
                      <div class="w-4 h-1 bg-gray-300 rounded"></div>
                      <div class="w-4 h-1 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 부유 요소 - 더 심플하고 모던하게 -->
          <div class="absolute -top-6 -right-6 z-10">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 shadow-lg">
              <div class="flex items-center space-x-2">
                <span class="flex h-2 w-2 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
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
export default {
  name: 'ModernHeroWithDevices'
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