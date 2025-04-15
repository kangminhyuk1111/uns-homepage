<!-- App.vue -->
<template>
  <div class="w-full min-h-screen">
    <!-- 헤더 -->
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'App',
  components: {
    MainHeader
  },
  setup() {
    return {};
  }
};
</script>

<style>
/* 전역 스타일 추가 */
body {
  @apply antialiased;
  @apply text-gray-800;
  @apply bg-gray-50;
}

/* 커스텀 컨테이너 클래스 - 넓은 화면에 맞게 조정 */
.container-layout {
  width: 100%;
  max-width: 1600px; /* 1920px 화면에 맞게 설정 */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-layout {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 768px) {
  .container-layout {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .container-layout {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (min-width: 1280px) {
  .container-layout {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media (min-width: 1536px) {
  .container-layout {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

/* 애니메이션 추가 */
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* 섹션 간격 일관성 */
section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  section {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

/* 블러 효과 보정 */
.blur-3xl {
  filter: blur(64px);
}

.blur-2xl {
  filter: blur(40px);
}
</style>