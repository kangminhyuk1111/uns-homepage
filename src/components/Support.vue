<!-- src/components/Support.vue -->
<template>
  <div class="support-page">
    <!-- 배너 섹션 -->
    <section class="hero-banner">
      <!-- 배경 패턴 -->
      <div class="background-pattern"></div>

      <!-- 장식적 요소 -->
      <div class="decoration decoration-1"></div>
      <div class="decoration decoration-2"></div>

      <div class="hero-content">
        <h1 class="hero-title">고객 지원 센터</h1>
        <p class="hero-description">
          Baro 솔루션을 이용하시는 고객님들을 위한 지원 서비스를 제공합니다.
        </p>
      </div>
    </section>

    <!-- 지원 서비스 개요 섹션 -->
    <section class="services-overview">
      <div class="container">
        <div class="services-grid">
          <div class="service-card blue">
            <div class="service-icon blue">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="service-title">자주 묻는 질문</h3>
            <p class="service-description">제품별 자주 묻는 질문과 해결 방법을 확인하세요.</p>
            <a href="#faq-section" class="service-button blue">
              FAQ 바로가기
            </a>
          </div>

          <div class="service-card teal">
            <div class="service-icon teal">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="service-title">기술 지원 요청</h3>
            <p class="service-description">전문적인 기술 지원이 필요하신가요? 지원 티켓을 제출하세요.</p>
            <a href="#support-ticket" class="service-button teal">
              지원 요청하기
            </a>
          </div>

          <div class="service-card indigo">
            <div class="service-icon indigo">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="service-title">제품 매뉴얼</h3>
            <p class="service-description">제품별 상세 매뉴얼과 가이드를 확인하세요.</p>
            <a href="#manuals" class="service-button indigo">
              매뉴얼 보기
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 제품별 FAQ 섹션 -->
    <section id="faq-section" class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">자주 묻는 질문</h2>
          <p class="section-description">제품별로 자주 묻는 질문과 답변을 확인하세요.</p>
        </div>

        <div class="faq-content">
          <!-- 제품 탭 선택 -->
          <div class="product-tabs">
            <button
                v-for="(product, index) in products"
                :key="index"
                @click="setActiveProduct(product.id)"
                class="tab-button"
                :class="{ active: activeProduct === product.id }"
            >
              {{ product.name }}
            </button>
          </div>

          <!-- FAQ 아코디언 -->
          <div class="faq-accordion">
            <div v-for="(faq, index) in filteredFaqs" :key="index" class="faq-item">
              <button
                  @click="toggleFaq(index)"
                  class="faq-question-button"
              >
                <span class="faq-question">{{ faq.question }}</span>
                <svg
                    class="faq-icon"
                    :class="{ rotated: activeFaq === index }"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div
                  v-show="activeFaq === index"
                  class="faq-answer"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 기술 지원 요청 섹션 -->
    <section id="support-ticket" class="support-ticket-section">
      <div class="container">
        <div class="support-content">
          <div class="section-header">
            <h2 class="section-title">기술 지원 요청</h2>
            <p class="section-description">제품 사용 중 어려움이 있으신가요? 전문 지원팀이 도와드립니다.</p>
          </div>

          <div class="support-form-container">
            <form @submit.prevent="submitSupportRequest" class="support-form">
              <div class="form-group">
                <label for="name" class="form-label">이름 *</label>
                <input
                    type="text"
                    id="name"
                    v-model="supportForm.name"
                    class="form-input"
                    required
                >
              </div>

              <div class="form-group">
                <label for="email" class="form-label">이메일 *</label>
                <input
                    type="email"
                    id="email"
                    v-model="supportForm.email"
                    class="form-input"
                    required
                >
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">전화번호</label>
                <input
                    type="tel"
                    id="phone"
                    v-model="supportForm.phone"
                    class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="organization" class="form-label">소속 기관/병원 *</label>
                <input
                    type="text"
                    id="organization"
                    v-model="supportForm.organization"
                    class="form-input"
                    required
                >
              </div>

              <div class="form-group">
                <label for="product" class="form-label">제품 *</label>
                <select
                    id="product"
                    v-model="supportForm.product"
                    class="form-select"
                    required
                >
                  <option value="" disabled selected>제품을 선택하세요</option>
                  <option v-for="product in products" :key="product.id" :value="product.id">
                    {{ product.name }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="priority" class="form-label">우선 순위</label>
                <select
                    id="priority"
                    v-model="supportForm.priority"
                    class="form-select"
                >
                  <option value="low">낮음 - 일반 문의</option>
                  <option value="medium">중간 - 기능 장애</option>
                  <option value="high">높음 - 서비스 중단</option>
                  <option value="critical">긴급 - 중대한 문제</option>
                </select>
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">제목 *</label>
                <input
                    type="text"
                    id="subject"
                    v-model="supportForm.subject"
                    class="form-input"
                    required
                >
              </div>

              <div class="form-group">
                <label for="description" class="form-label">문제 설명 *</label>
                <textarea
                    id="description"
                    v-model="supportForm.description"
                    rows="5"
                    class="form-textarea"
                    required
                    placeholder="문제 상황과 발생 시점, 재현 방법 등을 자세히 설명해주세요."
                ></textarea>
              </div>

              <div class="form-submit">
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="submit-button"
                    :class="{ submitting: isSubmitting }"
                >
                  <span v-if="isSubmitting">제출 중...</span>
                  <span v-else>지원 요청 제출</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 교육 일정 섹션 -->
    <section class="training-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">교육 일정</h2>
          <p class="section-description">Baro 솔루션 제품 활용을 위한 교육 일정을 확인하세요.</p>
        </div>

        <div class="training-content">
          <div class="training-table-container">
            <div class="table-wrapper">
              <table class="training-table">
                <thead class="table-header">
                <tr>
                  <th class="table-cell header">날짜</th>
                  <th class="table-cell header">교육 내용</th>
                  <th class="table-cell header">제품</th>
                  <th class="table-cell header">유형</th>
                  <th class="table-cell header">신청</th>
                </tr>
                </thead>
                <tbody class="table-body">
                <tr v-for="(training, index) in trainings" :key="index" class="table-row">
                  <td class="table-cell">{{ training.date }}</td>
                  <td class="table-cell">{{ training.title }}</td>
                  <td class="table-cell">{{ training.product }}</td>
                  <td class="table-cell">
                      <span
                          class="training-type-badge"
                          :class="training.type === '온라인' ? 'online' : 'offline'"
                      >
                        {{ training.type }}
                      </span>
                  </td>
                  <td class="table-cell">
                    <a href="#" class="apply-link">신청하기</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 문의 및 연락처 섹션 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="section-header">
            <h2 class="section-title">고객 지원팀 연락처</h2>
            <p class="section-description">추가 문의사항이 있으시면 언제든지 연락주세요.</p>
          </div>

          <div class="contact-grid">
            <div class="contact-card">
              <div class="contact-icon blue">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="contact-title">전화 지원</h3>
              <p class="contact-info">02-556-3528</p>
              <p class="contact-hours">평일 9:00 - 18:00</p>
            </div>

            <div class="contact-card">
              <div class="contact-icon teal">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="contact-title">이메일 지원</h3>
              <p class="contact-info">mike@unsnetworks.com</p>
              <p class="contact-hours">평일 8:00 - 17:00</p>
            </div>

            <div class="contact-card">
              <div class="contact-icon indigo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 class="contact-title">실시간 채팅</h3>
              <p class="contact-info">웹사이트 내 채팅 지원</p>
              <p class="contact-hours">평일 8:00 - 17:00</p>
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
import { ref, computed } from 'vue';
import SiteFooter from '../components/SiteFooter.vue';

export default {
  name: 'Support',
  components: {
    SiteFooter
  },
  setup() {
    const activeProduct = ref('baro-paper');
    const activeFaq = ref(null);
    const isSubmitting = ref(false);

    const supportForm = ref({
      name: '',
      email: '',
      phone: '',
      organization: '',
      product: '',
      priority: 'medium',
      subject: '',
      description: ''
    });

    // 제품 목록
    const products = ref([
      {
        id: 'baro-paper',
        name: 'Baro Paper',
        description: '클라우드 기반의 E-Paper로 병원 업무를 효율적으로 관리하세요.'
      },
      {
        id: 'baro-pop',
        name: 'Baro Pop',
        description: 'AI를 이용하여 대기시간을 보다 정확하게 실시간으로 표출하는 전광판 솔루션입니다.'
      },
      {
        id: 'baro-kiosk',
        name: 'Baro Kiosk',
        description: '안드로이드 기반 기기로 QR 출력 및 스캔이 가능하여 출입관리 및 물품관리에 사용이 용이한 키오스크입니다.'
      },
      {
        id: 'baro-navi',
        name: 'Baro Navi',
        description: '병원을 방문하는 환자, 보호자가 길안내를 받을 수 있는 원내 길안내 앱입니다.'
      },
      {
        id: 'baro-safe',
        name: 'Baro Safe',
        description: '바코드/RFID를 이용한 환자 안전 확보와 간호 업무 효율 향상 시스템입니다.'
      },
      {
        id: 'baro-chart',
        name: 'Baro Chart',
        description: '클라우드 기반의 모바일 병원정보시스템(HIS)으로 언제 어디서나 환자 정보에 접근할 수 있습니다.'
      },
      {
        id: 'baro-talk',
        name: 'Baro Talk',
        description: '의료진 전용 모바일 메신저로 높은 보안성과 함께 원활한 커뮤니케이션을 제공합니다.'
      },
      {
        id: 'baro-call',
        name: 'Baro Call',
        description: '무선 스마트기기를 이용하는 디지털 너스콜 시스템으로 환자 케어를 혁신합니다.'
      }
    ]);

    // 자주 묻는 질문
    const faqs = ref([
      {
        productId: 'baro-paper',
        question: 'Baro Paper의 배터리 수명은 얼마나 되나요?',
        answer: 'Baro Paper의 배터리는 일반적으로 1년 이상 지속됩니다. 사용 빈도와 환경에 따라 차이가 있을 수 있습니다.'
      },
      {
        productId: 'baro-paper',
        question: 'Baro Paper의 데이터 업데이트 주기는 어떻게 되나요?',
        answer: '게이트웨이를 통해 실시간으로 데이터가 업데이트됩니다. 일반적으로 정보 변경 후 1분 이내에 업데이트가 완료됩니다.'
      },
      {
        productId: 'baro-paper',
        question: 'Baro Paper의 설치는 어떻게 진행되나요?',
        answer: '설치는 전문 기술팀이 방문하여 진행합니다. 게이트웨이 설치 및 각 병상별 ESL 설치, 시스템 연동 테스트까지 모두 포함됩니다.'
      },
      {
        productId: 'baro-pop',
        question: 'Baro Pop 화면에 표시할 수 있는 정보의 종류는 무엇인가요?',
        answer: '대기시간, 환자번호, 환자이름, 안내메시지를 표시할 수 있으며, 이미지와 영상도 재생 가능합니다. 템플릿 커스터마이징을 통해 원하는 형태로 구성할 수 있습니다.'
      },
      {
        productId: 'baro-pop',
        question: 'Baro Pop의 설치 환경 요구사항은 무엇인가요?',
        answer: '일반 TV나 모니터에 셋톱박스를 연결하여 사용하며, 인터넷 연결(유선 또는 WiFi)이 필요합니다. 안정적인 전원 공급이 가능한 환경이면 됩니다.'
      },
      {
        productId: 'baro-kiosk',
        question: 'Baro Kiosk는 어떤 종류의 바코드와 QR을 지원하나요?',
        answer: '대부분의 1D/2D 바코드 형식을 스캔 및 출력할 수 있습니다. QR 코드, CODE128, CODE39, EAN 등 다양한 형식을 지원합니다.'
      },
      {
        productId: 'baro-navi',
        question: 'Baro Navi는 어떤 운영체제를 지원하나요?',
        answer: '현재는 안드로이드 기반의 모바일 기기를 지원합니다. iOS 버전은 개발 중에 있습니다.'
      },
      {
        productId: 'baro-safe',
        question: 'Baro Safe는 기존 병원 시스템과 연동이 가능한가요?',
        answer: '네, Baro Safe는 대부분의 HIS(Hospital Information System)와 연동 가능합니다. 연동을 위한 API를 제공하며, 필요한 경우 맞춤형 연동 개발도 가능합니다.'
      },
      {
        productId: 'baro-chart',
        question: 'Baro Chart의 보안 체계는 어떻게 되나요?',
        answer: '단말복합인증, 데이터 암호화, 소스코드 난독화 등 강력한 보안 시스템을 적용하고 있습니다. 또한 민감한 환자 정보는 암호화되어 저장 및 전송됩니다.'
      },
      {
        productId: 'baro-talk',
        question: 'Baro Talk의 메시지는 얼마나 오랫동안 저장되나요?',
        answer: '메시지는 기본적으로 3개월간 저장되며, 병원 정책에 따라 보관 기간을 조정할 수 있습니다. 중요 메시지는 사용자가 따로 보관할 수 있습니다.'
      },
      {
        productId: 'baro-call',
        question: 'Baro Call 시스템 도입 시 기존 너스콜 시스템은 어떻게 되나요?',
        answer: 'Baro Call은 기존 아날로그 버튼과 함께 사용할 수 있도록 설계되었습니다. 따라서 기존 시스템을 유지하면서 디지털 기능을 추가하는 형태로 도입이 가능합니다.'
      }
    ]);

    // 교육 일정
    const trainings = ref([
      { date: '2025년 4월 25일', title: 'Baro Paper 기본 사용법', product: 'Baro Paper', type: '온라인' },
      { date: '2025년 4월 26일', title: 'Baro Pop 관리자 교육', product: 'Baro Pop', type: '온라인' },
      { date: '2025년 4월 29일', title: 'Baro Chart 통합 관리', product: 'Baro Chart', type: '현장' },
      { date: '2025년 5월 2일', title: 'Baro Safe 환자 안전 관리', product: 'Baro Safe', type: '현장' },
      { date: '2025년 5월 5일', title: 'Baro Talk/Call 연동 활용', product: 'Baro Talk/Call', type: '온라인' }
    ]);

    // 제품별 FAQ 필터링
    const filteredFaqs = computed(() => {
      return faqs.value.filter(faq => faq.productId === activeProduct.value);
    });

    // 제품 변경 함수
    const setActiveProduct = (productId) => {
      activeProduct.value = productId;
      activeFaq.value = null;
    };

    // FAQ 토글 함수
    const toggleFaq = (index) => {
      if (activeFaq.value === index) {
        activeFaq.value = null;
      } else {
        activeFaq.value = index;
      }
    };

    // 지원 요청 제출 함수
    const submitSupportRequest = () => {
      isSubmitting.value = true;

      // 폼 제출 시뮬레이션
      setTimeout(() => {
        alert('지원 요청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        // 폼 초기화
        supportForm.value = {
          name: '',
          email: '',
          phone: '',
          organization: '',
          product: '',
          priority: 'medium',
          subject: '',
          description: ''
        };
        isSubmitting.value = false;
      }, 1500);
    };

    return {
      activeProduct,
      activeFaq,
      supportForm,
      isSubmitting,
      products,
      faqs,
      trainings,
      filteredFaqs,
      setActiveProduct,
      toggleFaq,
      submitSupportRequest
    };
  }
};
</script>

<style scoped>
/* 기본 설정 */
.support-page {
  padding-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 12px;
}

.section-description {
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 768px;
  margin: 0 auto;
}

/* 히어로 배너 */
.hero-banner {
  background: linear-gradient(to right, #4f46e5, #1d4ed8);
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

/* 서비스 개요 섹션 */
.services-overview {
  padding: 64px 0;
  background-color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.service-card.blue {
  background-color: #eff6ff;
}

.service-card.teal {
  background-color: #f0fdfa;
}

.service-card.indigo {
  background-color: #eef2ff;
}

.service-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon.blue {
  background-color: #dbeafe;
}

.service-icon.teal {
  background-color: #ccfbf1;
}

.service-icon.indigo {
  background-color: #e0e7ff;
}

.service-icon .icon {
  width: 32px;
  height: 32px;
}

.service-icon.blue .icon {
  color: #2563eb;
}

.service-icon.teal .icon {
  color: #0d9488;
}

.service-icon.indigo .icon {
  color: #4f46e5;
}

.service-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 12px;
}

.service-description {
  color: #4b5563;
  margin-bottom: 16px;
}

.service-button {
  display: inline-block;
  padding: 8px 20px;
  color: white;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.service-button.blue {
  background-color: #2563eb;
}

.service-button.blue:hover {
  background-color: #1d4ed8;
}

.service-button.teal {
  background-color: #0d9488;
}

.service-button.teal:hover {
  background-color: #0f766e;
}

.service-button.indigo {
  background-color: #4f46e5;
}

.service-button.indigo:hover {
  background-color: #4338ca;
}

/* FAQ 섹션 */
.faq-section {
  padding: 64px 0;
  background-color: #f9fafb;
}

.faq-content {
  max-width: 1024px;
  margin: 0 auto;
}

.product-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32px;
  gap: 8px;
}

.tab-button {
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  background-color: #f3f4f6;
  color: #374151;
}

.tab-button:hover {
  background-color: #e5e7eb;
}

.tab-button.active {
  background-color: #2563eb;
  color: white;
}

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
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

/* 지원 요청 섹션 */
.support-ticket-section {
  padding: 64px 0;
  background-color: white;
}

.support-content {
  max-width: 768px;
  margin: 0 auto;
}

.support-form-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

.support-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
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
.form-select,
.form-textarea {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit {
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

/* 교육 일정 섹션 */
.training-section {
  padding: 64px 0;
  background-color: #f9fafb;
}

.training-content {
  max-width: 1024px;
  margin: 0 auto;
}

.training-table-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
}

.training-table {
  width: 100%;
  min-width: 640px;
}

.table-header {
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.table-body {
  background-color: white;
}

.table-row {
  transition: background-color 0.3s ease;
}

.table-row:hover {
  background-color: #f9fafb;
}

.table-row:not(:last-child) {
  border-bottom: 1px solid #e5e7eb;
}

.table-cell {
  padding: 12px 24px;
  text-align: left;
}

.table-cell.header {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table-cell:not(.header) {
  font-size: 0.875rem;
  color: #1f2937;
}

.training-type-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.training-type-badge.online {
  background-color: #dbeafe;
  color: #1e40af;
}

.training-type-badge.offline {
  background-color: #dcfce7;
  color: #166534;
}

.apply-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.apply-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* 연락처 섹션 */
.contact-section {
  padding: 64px 0;
  background-color: white;
}

.contact-content {
  max-width: 1280px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact-card {
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
}

.contact-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon.blue {
  background-color: #dbeafe;
}

.contact-icon.teal {
  background-color: #ccfbf1;
}

.contact-icon.indigo {
  background-color: #e0e7ff;
}

.contact-icon .icon {
  width: 24px;
  height: 24px;
}

.contact-icon.blue .icon {
  color: #2563eb;
}

.contact-icon.teal .icon {
  color: #0d9488;
}

.contact-icon.indigo .icon {
  color: #4f46e5;
}

.contact-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 8px;
}

.contact-info {
  color: #4b5563;
  margin-bottom: 4px;
}

.contact-hours {
  color: #6b7280;
  font-size: 0.875rem;
}
</style>