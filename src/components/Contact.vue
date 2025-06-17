<!-- src/components/Contact.vue -->
<template>
  <div class="contact-page">
    <!-- 배너 섹션 -->
    <section class="hero-banner">
      <!-- 배경 패턴 -->
      <div class="background-pattern"></div>

      <!-- 장식적 요소 -->
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>

      <div class="hero-content">
        <h1 class="hero-title">문의하기</h1>
        <p class="hero-description">
          Baro 솔루션에 대한 문의사항이 있으신가요? 언제든지 연락주세요.
        </p>
      </div>
    </section>

    <!-- 연락처 정보 및 문의 양식 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- 왼쪽: 연락처 정보 -->
          <div class="contact-info">
            <h2 class="info-title">연락처 정보</h2>

            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon-wrapper">
                  <div class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div class="contact-details">
                  <h3 class="contact-label">전화번호</h3>
                  <p class="contact-value">02-556-3528</p>
                  <p class="contact-note">월-금, 8:00 - 17:00</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon-wrapper">
                  <div class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="contact-details">
                  <h3 class="contact-label">이메일</h3>
                  <p class="contact-value">mike@unsnetworks.com</p>
                  <p class="contact-note">언제든지 문의해주세요</p>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon-wrapper">
                  <div class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div class="contact-details">
                  <h3 class="contact-label">주소</h3>
                  <p class="contact-value">서울시 강남구 논현로 509 송암빌딩 9층</p>
                </div>
              </div>
            </div>

            <!-- 소셜 미디어 링크 -->
            <div class="social-section">
              <h3 class="social-title">소셜 미디어</h3>
              <div class="social-links">
                <a href="#" class="social-link facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" class="social-link twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" class="social-link linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" class="social-link instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 오른쪽: 문의 양식 -->
          <div class="form-section">
            <div class="form-container">
              <h2 class="form-title">문의하기</h2>

              <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name" class="form-label">이름 *</label>
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="form-input"
                        required
                    >
                  </div>

                  <div class="form-group">
                    <label for="email" class="form-label">이메일 *</label>
                    <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="form-input"
                        required
                    >
                  </div>
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">전화번호</label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="form-input"
                  >
                </div>

                <div class="form-group">
                  <label for="company" class="form-label">회사/기관명</label>
                  <input
                      type="text"
                      id="company"
                      v-model="form.company"
                      class="form-input"
                  >
                </div>

                <div class="form-group">
                  <label for="subject" class="form-label">문의 제목 *</label>
                  <input
                      type="text"
                      id="subject"
                      v-model="form.subject"
                      class="form-input"
                      required
                  >
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">문의 내용 *</label>
                  <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      class="form-textarea"
                      required
                  ></textarea>
                </div>

                <div class="privacy-section">
                  <div class="checkbox-wrapper">
                    <input
                        id="privacy"
                        type="checkbox"
                        v-model="form.privacy"
                        class="form-checkbox"
                        required
                    >
                  </div>
                  <div class="privacy-text">
                    <label for="privacy" class="privacy-label">개인정보 수집 및 이용에 동의합니다 *</label>
                    <p class="privacy-description">문의 접수 및 처리를 위해 개인정보를 수집합니다. 자세한 내용은 <a href="#" class="privacy-link">개인정보처리방침</a>을 참조하세요.</p>
                  </div>
                </div>

                <div class="submit-section">
                  <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="submit-button"
                      :class="{ submitting: isSubmitting }"
                  >
                    <span v-if="isSubmitting">전송 중...</span>
                    <span v-else>문의하기</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 지도 섹션 -->
    <section class="map-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">찾아오시는 길</h2>
          <p class="section-description">바로 솔루션은 서울 강남구 테헤란로에 위치하고 있습니다.</p>
        </div>

        <div class="map-container">
          <!-- 지도 이미지 대체 - 실제 구현 시 Kakao Maps 등 지도 API 사용 -->
          <div class="map-placeholder">
            <div class="map-placeholder-content">
              <svg xmlns="http://www.w3.org/2000/svg" class="map-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="map-placeholder-text">여기에 지도가 표시됩니다</p>
              <p class="map-placeholder-note">(실제 구현 시 Kakao Maps 또는 Google Maps API 사용)</p>
            </div>
          </div>

          <div class="location-info">
            <div class="location-grid">
              <div class="location-item">
                <h3 class="location-title">주소</h3>
                <p class="location-address">서울시 강남구 논현로 509</p>
                <p class="location-address">송암빌딩 9층</p>
              </div>

              <div class="location-item">
                <h3 class="location-title">교통편</h3>
                <div class="transport-list">
                  <div class="transport-item">
                    <div class="subway-line line-2">
                      <span class="line-number">2</span>
                    </div>
                    <p class="transport-text">2호선 강남역 3번 출구에서 도보 5분</p>
                  </div>
                  <div class="transport-item">
                    <div class="subway-line line-9">
                      <span class="line-number">9</span>
                    </div>
                    <p class="transport-text">9호선 신논현역 1번 출구에서 도보 7분</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ 섹션 -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">자주 묻는 질문</h2>
          <p class="section-description">고객님들이 자주 문의하시는 질문들을 모았습니다.</p>
        </div>

        <div class="faq-content">
          <div class="faq-list">
            <div v-for="(item, index) in faqs" :key="index" class="faq-item">
              <button
                  @click="toggleFaq(index)"
                  class="faq-question-button"
              >
                <span class="faq-question">{{ item.question }}</span>
                <svg
                    class="faq-icon"
                    :class="{ rotated: openFaq === index }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div
                  v-show="openFaq === index"
                  class="faq-answer"
              >
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 푸터 -->
    <SiteFooter />
  </div>
</template>

<script>
import { ref } from 'vue';
import SiteFooter from '../components/SiteFooter.vue'

export default {
  name: 'Contact',
  components: {
    SiteFooter
  },
  setup() {
    const form = ref({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      privacy: false
    });

    const isSubmitting = ref(false);
    const openFaq = ref(null);

    const faqs = ref([
      {
        question: '데모를 신청하려면 어떻게 해야 하나요?',
        answer: '상단의 문의 양식을 통해 데모 요청을 남겨주시면 담당자가 빠르게 연락드립니다. 또는 02-1234-5678로 전화하셔서 데모 신청을 문의하실 수 있습니다.'
      },
      {
        question: '서비스 도입 비용은 어떻게 되나요?',
        answer: '서비스 도입 비용은 병원 규모와 필요한 솔루션에 따라 달라집니다. 정확한 견적을 원하시면 문의 양식을 통해 연락주시거나 영업팀(02-1234-5678)으로 문의해주세요.'
      },
      {
        question: '도입 후 기술 지원은 어떻게 받을 수 있나요?',
        answer: '도입 후 기술 지원은 전담 고객 지원팀을 통해 제공됩니다. 전화, 이메일, 실시간 채팅 등 다양한 채널을 통해 신속하게 지원해 드립니다. 또한 정기적인 유지보수와 업데이트를 제공해 드립니다.'
      },
      {
        question: '솔루션 도입 후 직원 교육도 제공되나요?',
        answer: '네, 모든 솔루션 도입 시 병원 직원들을 위한 교육 프로그램을 제공합니다. 현장 교육, 화상 교육, 온라인 매뉴얼 등 다양한 형태로 제공되며, 필요시 추가 교육도 가능합니다.'
      },
      {
        question: '클라우드 기반 솔루션의 보안은 어떻게 보장되나요?',
        answer: '바로 솔루션은 단말복합인증, 데이터 암호화, 소스코드 난독화 등 강력한 보안 시스템을 도입하여 환자 정보를 안전하게 보호합니다. 또한 국내외 보안 인증을 취득하여 보안 신뢰성을 검증받았습니다.'
      }
    ]);

    const submitForm = () => {
      isSubmitting.value = true;

      // 폼 제출 시뮬레이션
      setTimeout(() => {
        alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
        // 폼 초기화
        form.value = {
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          privacy: false
        };
        isSubmitting.value = false;
      }, 1500);
    };

    const toggleFaq = (index) => {
      if (openFaq.value === index) {
        openFaq.value = null;
      } else {
        openFaq.value = index;
      }
    };

    return {
      form,
      isSubmitting,
      faqs,
      openFaq,
      submitForm,
      toggleFaq
    };
  }
};
</script>

<style scoped>
/* 기본 설정 */
.contact-page {
  padding-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px) {
  .container {
    padding: 0 24px;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 16px;
}

.section-description {
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 768px;
  margin: 0 auto;
}

/* 히어로 배너 */
.hero-banner {
  background: linear-gradient(to right, #2563eb, #4f46e5);
  padding: 80px 16px;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: 0;
  background-image: url('/grid-pattern.svg');
  background-size: 30px 30px;
}

.decoration {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  filter: blur(48px);
}

.decoration-1 {
  top: 0;
  right: 0;
  width: 384px;
  height: 384px;
  background-color: #60a5fa;
  transform: translate(33.333%, -33.333%);
}

.decoration-2 {
  bottom: 0;
  left: 0;
  width: 320px;
  height: 320px;
  background-color: #818cf8;
  transform: translate(-25%, 25%);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}

.hero-description {
  font-size: 1.25rem;
  color: #dbeafe;
  max-width: 768px;
  margin: 0 auto;
}

/* 연락처 섹션 */
.contact-section {
  padding: 64px 0;
  background-color: white;
}

@media (min-width: 768px) {
  .contact-section {
    padding: 96px 0;
  }
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: 2fr 3fr;
  }
}

/* 연락처 정보 */
.contact-info {
  background-color: #f9fafb;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.info-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
}

.contact-icon-wrapper {
  flex-shrink: 0;
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon .icon {
  width: 24px;
  height: 24px;
  color: #2563eb;
}

.contact-details {
  margin-left: 16px;
}

.contact-label {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}

.contact-value {
  color: #4b5563;
  margin-top: 4px;
}

.contact-note {
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 4px;
}

/* 소셜 미디어 */
.social-section {
  margin-top: 40px;
}

.social-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link.facebook {
  background-color: #2563eb;
}

.social-link.facebook:hover {
  background-color: #1d4ed8;
}

.social-link.twitter {
  background-color: #0ea5e9;
}

.social-link.twitter:hover {
  background-color: #0284c7;
}

.social-link.linkedin {
  background-color: #4f46e5;
}

.social-link.linkedin:hover {
  background-color: #4338ca;
}

.social-link.instagram {
  background-color: #e11d48;
}

.social-link.instagram:hover {
  background-color: #be185d;
}

/* 문의 양식 */
.form-section {
  width: 100%;
}

.form-container {
  background-color: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
}

.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 24px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* 개인정보 동의 */
.privacy-section {
  display: flex;
  align-items: flex-start;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  height: 20px;
}

.form-checkbox {
  width: 16px;
  height: 16px;
  color: #2563eb;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
}

.form-checkbox:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.privacy-text {
  margin-left: 12px;
  font-size: 0.875rem;
}

.privacy-label {
  font-weight: 500;
  color: #374151;
}

.privacy-description {
  color: #6b7280;
  margin-top: 4px;
}

.privacy-link {
  color: #2563eb;
  text-decoration: none;
}

.privacy-link:hover {
  text-decoration: underline;
}

/* 제출 버튼 */
.submit-section {
  margin-top: 8px;
}

.submit-button {
  width: 100%;
  padding: 12px 16px;
  color: white;
  font-weight: 500;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #2563eb;
}

.submit-button:hover {
  background-color: #1d4ed8;
}

.submit-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-button.submitting {
  background-color: #93c5fd;
  cursor: not-allowed;
}

.submit-button.submitting:hover {
  background-color: #93c5fd;
}

/* 지도 섹션 */
.map-section {
  padding: 64px 0;
  background-color: #f9fafb;
}

@media (min-width: 768px) {
  .map-section {
    padding: 96px 0;
  }
}

.map-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 384px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder-content {
  text-align: center;
  padding: 24px;
}

.map-icon {
  width: 64px;
  height: 64px;
  color: #9ca3af;
  margin: 0 auto 16px;
}

.map-placeholder-text {
  color: #4b5563;
  margin-bottom: 8px;
}

.map-placeholder-note {
  color: #6b7280;
  font-size: 0.875rem;
}

.location-info {
  padding: 24px 32px;
  background-color: white;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .location-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.location-item {
  display: flex;
  flex-direction: column;
}

.location-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.location-address {
  color: #4b5563;
  margin-bottom: 4px;
}

.transport-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.transport-item {
  display: flex;
  align-items: center;
}

.subway-line {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 8px;
  flex-shrink: 0;
}

.subway-line.line-2 {
  background-color: #10b981;
}

.subway-line.line-9 {
  background-color: #3b82f6;
}

.line-number {
  font-size: 0.75rem;
  font-weight: bold;
}

.transport-text {
  color: #4b5563;
}

/* FAQ 섹션 */
.faq-section {
  padding: 64px 0;
  background-color: white;
}

@media (min-width: 768px) {
  .faq-section {
    padding: 96px 0;
  }
}

.faq-content {
  max-width: 768px;
  margin: 0 auto;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.faq-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.faq-question-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question-button:hover {
  background-color: #f9fafb;
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 500;
  color: #1f2937;
}

.faq-icon {
  width: 20px;
  height: 20px;
  color: #6b7280;
  transition: transform 0.3s ease;
}

.faq-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 16px;
  color: #4b5563;
}
</style>