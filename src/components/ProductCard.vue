<!-- ProductCard.vue -->
<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col h-full border border-gray-100">
    <!-- 상단 배경과 아이콘 영역 -->
    <div :class="`h-56 bg-${color}-100 p-6 flex items-center justify-center relative overflow-hidden`">
      <!-- 배경 패턴 추가 -->
      <div class="absolute inset-0 opacity-10" :style="patternStyle"></div>

      <!-- 장식 요소 추가 -->
      <div class="absolute top-4 right-4">
        <div :class="`w-16 h-1 rounded-full bg-${color}-${colorIntensity} opacity-40`"></div>
      </div>
      <div class="absolute bottom-4 left-4">
        <div :class="`w-12 h-12 rounded-full bg-${color}-${colorIntensity} opacity-20`"></div>
      </div>

      <!-- 메인 아이콘 -->
      <div :class="`w-32 h-32 bg-${color}-${colorIntensity} rounded-xl flex items-center justify-center shadow-lg relative z-10`">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="icon === 'document'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path v-else-if="icon === 'monitor'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path v-else-if="icon === 'mobile'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path v-else-if="icon === 'map'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          <path v-else-if="icon === 'shield'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          <path v-else-if="icon === 'chart'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path v-else-if="icon === 'chat'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          <path v-else-if="icon === 'phone'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
    </div>

    <!-- 콘텐츠 영역 -->
    <div class="p-6 flex flex-col flex-grow">
      <!-- 상단 배지 추가 -->
      <div :class="`inline-block px-2 py-1 rounded-md text-xs font-medium text-${color}-700 bg-${color}-100 mb-2 self-start`">
        Baro Solution
      </div>

      <!-- 제목 -->
      <h3 :class="`text-xl text-gray-800 font-bold mb-3 border-b border-gray-100 pb-3`">{{ title }}</h3>

      <!-- 설명 -->
      <p class="text-gray-600 mb-5 flex-grow leading-relaxed">{{ description }}</p>

      <!-- 특징 목록 -->
      <div class="mb-5 p-3 bg-gray-50 rounded-lg border border-gray-100">
        <h4 class="text-sm text-gray-500 mb-2 font-medium">주요 특징</h4>
        <ul class="text-sm text-gray-600 space-y-2">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start">
            <svg :class="`h-5 w-5 text-${color}-500 mr-2 flex-shrink-0`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{{ feature }}</span>
          </li>
        </ul>
      </div>

      <!-- 링크 버튼 -->
      <router-link :to="link" :class="`font-medium text-white bg-${color}-${colorIntensity} hover:bg-${color}-700 transition inline-flex items-center justify-center py-2.5 px-4 rounded-lg shadow-sm`">
        자세히 보기
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
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
  },
  computed: {
    colorIntensity() {
      // 색상에 따라 강도를 다르게 설정
      const intensityMap = {
        'blue': '600',
        'orange': '500',
        'cyan': '600',
        'green': '600',
        'yellow': '500',
        'indigo': '600',
        'pink': '600',
        'purple': '600'
      };
      return intensityMap[this.color] || '600';
    },
    patternStyle() {
      // 배경 패턴 스타일 - 색상별로 다른 패턴
      const patterns = {
        'blue': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'orange': "url(\"data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'cyan': "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'green': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M13 8c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10S3 5.523 3 0H1c0 6.627 5.373 12 12 12zm0 8c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10S3 9.523 3 4H1c0 6.627 5.373 12 12 12zm0 8c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10S3 13.523 3 8H1c0 6.627 5.373 12 12 12zm36-16c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10S41 5.523 41 0h-2c0 6.627 5.373 12 12 12zm0 8c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10s-10-4.477-10-10h-2c0 6.627 5.373 12 12 12zm0 8c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10s-10-4.477-10-10h-2c0 6.627 5.373 12 12 12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'yellow': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
        'indigo': "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'pink': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
        'purple': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-24.596 0l-5.485 5.486 1.414 1.414 7.9-7.9h-2.83zm16.97 0l-7.071 7.07-1.414-1.414L33.284 0h2.83zM30 0L23.928 6.071l-1.414-1.414L29.585 0H30zm-9.9 0l-7.071 7.07-1.414-1.414L18.686 0H20.1zM0 9.9v2.828l2.828-2.829H0zm0 20.2v2.829l2.828-2.829H0zm0-10.1v2.828L2.828 20H0zm60 10.1v2.829l-2.828-2.829H60zm0-10.1v2.828L57.172 20H60zm0-10.1v2.828l-2.828-2.829H60zM34.243 51.172l3.656 3.657-1.414 1.414-3.657-3.656 1.415-1.415zM39.9 56.828l3.656 3.657-1.414 1.414-3.657-3.656 1.415-1.415zM44.444 49.04l3.656 3.656-1.414 1.414-3.656-3.656 1.414-1.414zm5.657 5.658l3.656 3.656-1.414 1.414-3.657-3.656 1.415-1.415zM20.343 56.828l-3.657 3.657 1.414 1.414 3.657-3.657-1.414-1.414zM15.201 51.172l-3.657 3.657 1.414 1.414 3.657-3.657-1.414-1.414zM10.1 56.828l-3.657 3.657 1.414 1.414 3.657-3.657-1.414-1.414zm5.657-5.657l-3.657 3.657 1.414 1.414 3.657-3.657-1.414-1.414zM7.07 41.414L0 48.485v2.83l8.485-8.486L7.07 41.414zm10.1 10.1L9.9 58.687v2.83l8.485-8.486-1.414-1.414zM20.757 7.071L27.83 0h-2.83l-5.656 5.657 1.414 1.414zm-10.1 10.1L3.5 0H.672l7.071 7.071 1.414-1.414zM30 7.071L37.07 0h-2.828L27.67 6.571l1.414 1.414zm10.1 10.1L51.672 0h-2.83l-7.07 7.07 1.414 1.415zM50.93 7.07L58 0h-2.828L48.514 6.57l1.415 1.415zM56.1 13.9L60 9.986V7.07l-5.657 5.657 1.757 1.172zm-5.657 5.657L60 9.9v-2.83l-10.1 10.1 1.414 1.415zM2.828 17.1L0 20v2.828l4.242-4.242-1.414-1.414zm10.1 10.1L0 40v2.828l14.343-14.343-1.414-1.414zM0 52.9v2.828L5.757 50.1l-1.414-1.414L0 52.9zm10.1-10.1v2.828L15.243 40.1l-1.414-1.414L10.1 42.8zM60 40.1v-2.83l-5.757 5.758 1.414 1.414L60 40.1zm-10.1 10.1v-2.83l-4.343 4.343 1.414 1.414L49.9 50.2zM0 0h60v60H0V0z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
      };
      return {
        backgroundImage: patterns[this.color] || patterns['blue']
      };
    }
  }
};
</script>

<style scoped>
/* 추가 스타일 */
.card-hover-effect {
  transition: all 0.3s ease;
}
</style>