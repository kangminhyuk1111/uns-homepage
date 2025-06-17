<!-- App.vue -->
<template>
  <div class="app-container">
    <!-- 헤더 -->
    <MainHeader />
    <router-view />
  </div>
</template>

<script>
import MainHeader from './components/main/MainHeader.vue';

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
/* CSS 리셋 - 기본 마진과 패딩 제거 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 전역 스타일 */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1f2937;
  background-color: #f9fafb;
}

/* 메인 앱 컨테이너 */
.app-container {
  width: 100%;
  min-height: 100vh;
}

/* 커스텀 컨테이너 클래스 - 넓은 화면에 맞게 조정 */
.container-layout {
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 640px) {
  .container-layout {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 768px) {
  .container-layout {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (min-width: 1024px) {
  .container-layout {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media (min-width: 1280px) {
  .container-layout {
    padding-left: 80px;
    padding-right: 80px;
  }
}

@media (min-width: 1536px) {
  .container-layout {
    padding-left: 96px;
    padding-right: 96px;
  }
}

/* 애니메이션 */
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* 섹션 간격 일관성 */
section {
  padding-top: 64px;
  padding-bottom: 64px;
}

@media (min-width: 768px) {
  section {
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

/* 블러 효과 */
.blur-3xl {
  filter: blur(64px);
}

.blur-2xl {
  filter: blur(40px);
}
</style>