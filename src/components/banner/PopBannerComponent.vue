<template>
  <div class="popup-container">
    <div class="bg-white rounded-lg overflow-hidden shadow-xl animate-popup">
      <!-- 상단 헤더 -->
      <div class="bg-blue-950 py-1.5 px-2 flex justify-between items-center border-b border-blue-800">
        <div class="flex items-center space-x-2">
          <div class="w-6 h-3 bg-white/20 rounded-sm"></div>
          <div class="text-[9px] font-bold text-yellow-300 animate-pulse-text">♣♣♣센터</div>
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
          <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center border-r border-blue-300 animate-fadeIn">
            <span class="text-[9px] font-bold text-blue-950">이♣주</span>
          </div>
          <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center animate-fadeIn animation-delay-200">
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
          <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center border-r border-blue-300 animate-fadeIn animation-delay-400">
            <span class="text-[9px] font-bold text-blue-950">가삼♣</span>
          </div>
          <div class="w-1/2 bg-blue-100 py-2 flex items-center justify-center animate-fadeIn animation-delay-600">
            <span class="text-[9px] font-bold text-blue-950">나삼♣</span>
          </div>
        </div>
      </div>

      <!-- 공지사항 -->
      <div class="bg-blue-950 py-1 flex items-center">
        <span class="text-[7px] font-bold text-yellow-300 ml-2 animate-marquee">공지사항: 오늘 상담실 운영 시간은 오전 9시부터 오후 6시까지입니다. 감사합니다.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopBannerComponent'
}
</script>

<style scoped>
.popup-container {
  position: relative;
}

@keyframes popup {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(20px);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-popup {
  animation: popup 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes bounce-light {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-bounce-light {
  animation: bounce-light 1.5s infinite;
}

@keyframes pulse-text {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse-text {
  animation: pulse-text 2s infinite;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.4;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 15s linear infinite;
  min-width: 100%;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}
</style>