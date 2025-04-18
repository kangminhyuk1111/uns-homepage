<!-- ProductCard.vue -->
<template>
  <div class="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg flex flex-col h-full" :class="`hover:border-${color}-300`">
    <!-- 더 간소화된 상단 아이콘 영역 -->
    <div class="h-56 p-6 flex items-center justify-center relative overflow-hidden" :class="`bg-${color}-50`">
      <!-- 메인 아이콘 컨테이너 - 복잡한 효과 제거 -->
      <div :class="`relative w-32 h-32 rounded-xl flex items-center justify-center shadow-md overflow-hidden border border-${color}-200 bg-${color}-100`">
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