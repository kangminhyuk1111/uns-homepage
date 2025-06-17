<!-- src/components/ProductPageTemplate.vue -->
<template>
  <div class="page-container">
    <!-- 헤더 -->
    <MainHeader />

    <!-- 컨텐츠 영역 - 헤더 높이만큼 여백 추가 -->
    <div class="content-wrapper">
      <!-- 제품 히어로 섹션 -->
      <section class="hero-section" :class="getHeroClass()">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <div class="category-badge" :class="getCategoryBadgeClass()">
                {{ category }}
              </div>
              <h1 class="hero-title">{{ title }}</h1>
              <p class="hero-description">{{ description }}</p>
              <button
                  class="cta-button"
                  :class="getCtaButtonClass()"
                  @click="scrollToContact"
              >
                도입 문의하기
              </button>
            </div>
            <div class="hero-visual">
              <div class="product-showcase">
                <div class="product-display" :class="getProductDisplayClass()">
                  <!-- 제품 아이콘 표시 -->
                  <div class="product-icon" :class="getProductIconClass()">
                    <slot name="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="default-icon" :class="getDefaultIconClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 주요 기능 섹션 -->
      <section class="features-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">주요 기능</h2>
            <p class="section-description">{{ title }}의 주요 기능과 특장점을 소개합니다</p>
          </div>

          <div class="features-grid">
            <div
                v-for="(feature, index) in features"
                :key="index"
                class="feature-card"
                :class="getFeatureCardClass()"
            >
              <!-- 배경 액센트 효과 -->
              <div class="feature-accent" :class="getFeatureAccentClass()"></div>

              <!-- 아이콘 -->
              <div class="feature-icon-wrapper" :class="getFeatureIconWrapperClass()">
                <slot :name="`feature-icon-${index}`">
                  <svg xmlns="http://www.w3.org/2000/svg" class="feature-icon" :class="getFeatureIconClass()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </slot>
              </div>

              <!-- 콘텐츠 -->
              <div class="feature-content">
                <h3 class="feature-title" :class="getFeatureTitleClass()">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
              </div>

              <!-- 추가 세부 정보 (접을 수 있음) -->
              <div
                  v-if="feature.showDetails"
                  class="feature-details"
                  :class="getFeatureDetailsClass()"
              >
                <p class="additional-info">{{ feature.additionalInfo || '추가 정보가 준비되지 않았습니다.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 하드웨어 사양 섹션 -->
      <section v-if="hardwareSpecs" class="specs-section" :class="getSpecsSectionClass()">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">하드웨어 사양</h2>
            <p class="section-description">{{ hardwareSpecs.title }}</p>
          </div>

          <div class="specs-content">
            <!-- 하드웨어 사양 레이아웃 선택 옵션 -->
            <div class="layout-toggle">
              <div class="toggle-group">
                <button
                    type="button"
                    @click="specLayout = 'cards'"
                    class="toggle-button left"
                    :class="getToggleButtonClass('cards')"
                >
                  카드 보기
                </button>
                <button
                    type="button"
                    @click="specLayout = 'table'"
                    class="toggle-button right"
                    :class="getToggleButtonClass('table')"
                >
                  표 보기
                </button>
              </div>
            </div>

            <!-- 카드 레이아웃 -->
            <div v-if="specLayout === 'cards'" class="specs-grid">
              <div
                  v-for="(section, sectionIndex) in hardwareSpecs.sections"
                  :key="sectionIndex"
                  class="spec-card"
              >
                <div class="spec-header" :class="getSpecHeaderClass()">
                  <h3 class="spec-title">{{ section.title }}</h3>
                </div>
                <div class="spec-body">
                  <table class="spec-table">
                    <tbody>
                    <tr
                        v-for="(spec, specIndex) in section.specs"
                        :key="specIndex"
                        class="spec-row"
                        :class="getSpecRowClass(specIndex)"
                    >
                      <th class="spec-name">{{ spec.name }}</th>
                      <td class="spec-value">{{ spec.value }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- 전체 표 레이아웃 -->
            <div v-if="specLayout === 'table'" class="table-layout">
              <div v-for="(section, sectionIndex) in hardwareSpecs.sections" :key="sectionIndex" class="table-section">
                <div class="table-header" :class="getSpecHeaderClass()">
                  <h3 class="table-title">{{ section.title }}</h3>
                </div>
                <div class="table-body">
                  <table class="full-table">
                    <tbody>
                    <tr
                        v-for="(spec, specIndex) in section.specs"
                        :key="specIndex"
                        class="table-row"
                        :class="getSpecRowClass(specIndex)"
                    >
                      <th class="table-spec-name">{{ spec.name }}</th>
                      <td class="table-spec-value">{{ spec.value }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 적용 사례 섹션 -->
      <section class="cases-section" :class="getCasesSectionClass()">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">적용 사례</h2>
            <p class="section-description">다양한 의료 기관에서 {{ title }}를 활용한 사례를 확인하세요</p>
          </div>

          <div class="cases-grid">
            <div v-for="(case_study, index) in caseStudies" :key="index" class="case-card">
              <div class="case-image" :class="getCaseImageClass()"></div>
              <div class="case-content">
                <h3 class="case-title">{{ case_study.title }}</h3>
                <p class="case-description">{{ case_study.description }}</p>
                <div class="case-meta">
                  <span>{{ case_study.location }}</span>
                  <span class="separator">•</span>
                  <span>{{ case_study.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 도입 문의 섹션 -->
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="contact-content">
            <div class="contact-header">
              <h2 class="section-title">도입 문의</h2>
              <p class="section-description">{{ title }} 도입에 관심이 있으신가요? 아래 양식을 작성하시면 담당자가 연락드립니다.</p>
            </div>

            <form class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">이름</label>
                  <input type="text" id="name" class="form-input" placeholder="이름을 입력하세요">
                </div>
                <div class="form-group">
                  <label for="company" class="form-label">회사/기관명</label>
                  <input type="text" id="company" class="form-input" placeholder="회사나 기관명을 입력하세요">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email" class="form-label">이메일</label>
                  <input type="email" id="email" class="form-input" placeholder="이메일을 입력하세요">
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">연락처</label>
                  <input type="tel" id="phone" class="form-input" placeholder="연락처를 입력하세요">
                </div>
              </div>

              <div class="form-group full-width">
                <label for="message" class="form-label">문의 내용</label>
                <textarea id="message" rows="4" class="form-textarea" placeholder="문의 내용을 입력하세요"></textarea>
              </div>

              <div class="form-submit">
                <button
                    type="submit"
                    class="submit-button"
                    :class="getSubmitButtonClass()"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ 섹션 -->
      <section class="faq-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">자주 묻는 질문</h2>
            <p class="section-description">{{ title }}에 대해 자주 묻는 질문들을 모았습니다</p>
          </div>

          <div class="faq-content">
            <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
              <button
                  @click="toggleFaq(index)"
                  class="faq-button"
              >
                <span class="faq-question">{{ faq.question }}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="faq-icon"
                    :class="[getFaqIconClass(), openFaq === index ? 'rotated' : '']"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div
                  v-if="openFaq === index"
                  class="faq-answer"
              >
                <p class="answer-text">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 푸터 -->
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import MainHeader from '../../components/main/MainHeader.vue';
import SiteFooter from '../../components/SiteFooter.vue';

export default {
  name: 'ProductPageTemplate',
  components: {
    MainHeader,
    SiteFooter
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: '의료 솔루션'
    },
    color: {
      type: String,
      default: 'blue'
    },
    features: {
      type: Array,
      default: () => []
    },
    caseStudies: {
      type: Array,
      default: () => []
    },
    faqs: {
      type: Array,
      default: () => []
    },
    hardwareSpecs: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    const openFaq = ref(null);
    const specLayout = ref('cards');

    const toggleFaq = (index) => {
      if (openFaq.value === index) {
        openFaq.value = null;
      } else {
        openFaq.value = index;
      }
    };

    const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return {
      openFaq,
      toggleFaq,
      scrollToContact,
      specLayout,
      getHeroClass: () => `hero-${props.color}`,
      getCategoryBadgeClass: () => `category-${props.color}`,
      getCtaButtonClass: () => `cta-${props.color}`,
      getProductDisplayClass: () => `display-${props.color}`,
      getProductIconClass: () => `icon-${props.color}`,
      getDefaultIconClass: () => `default-${props.color}`,
      getFeatureCardClass: () => `card-${props.color}`,
      getFeatureAccentClass: () => `accent-${props.color}`,
      getFeatureIconWrapperClass: () => `icon-wrapper-${props.color}`,
      getFeatureIconClass: () => `feature-icon-${props.color}`,
      getFeatureTitleClass: () => `title-${props.color}`,
      getFeatureDetailsClass: () => `details-${props.color}`,
      getSpecsSectionClass: () => `specs-${props.color}`,
      getToggleButtonClass: (layout) => layout === specLayout.value ? `active-${props.color}` : 'inactive',
      getSpecHeaderClass: () => `header-${props.color}`,
      getSpecRowClass: (index) => index % 2 === 0 ? 'even' : `odd-${props.color}`,
      getCasesSectionClass: () => props.hardwareSpecs ? 'cases-white' : `cases-${props.color}`,
      getCaseImageClass: () => `image-${props.color}`,
      getSubmitButtonClass: () => `submit-${props.color}`,
      getFaqIconClass: () => `faq-${props.color}`
    };
  }
};
</script>

<style scoped>
/* 기본 설정 */
.page-container {
  width: 100%;
  min-height: 100vh;
}

.content-wrapper {
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
  color: #1f2937;
  font-weight: bold;
  margin-bottom: 16px;
}

.section-description {
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 768px;
  margin: 0 auto;
}

/* 히어로 섹션 */
.hero-section {
  padding: 64px 0;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 96px 0;
  }
}

.hero-blue { background-color: #dbeafe; }
.hero-green { background-color: #dcfce7; }
.hero-red { background-color: #fee2e2; }
.hero-purple { background-color: #f3e8ff; }
.hero-yellow { background-color: #fef9c3; }

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
  }
}

.hero-text {
  margin-bottom: 32px;
  padding-right: 0;
}

@media (min-width: 768px) {
  .hero-text {
    width: 50%;
    margin-bottom: 0;
    padding-right: 32px;
  }
}

.category-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 16px;
}

.category-blue { background-color: #dbeafe; color: #2563eb; }
.category-green { background-color: #dcfce7; color: #16a34a; }
.category-red { background-color: #fee2e2; color: #dc2626; }
.category-purple { background-color: #f3e8ff; color: #9333ea; }
.category-yellow { background-color: #fef9c3; color: #ca8a04; }

.hero-title {
  font-size: 2.5rem;
  color: #1f2937;
  font-weight: bold;
  margin-bottom: 16px;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}

.hero-description {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 24px;
}

.cta-button {
  padding: 12px 24px;
  color: white;
  border-radius: 6px;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
}

.cta-blue { background-color: #2563eb; }
.cta-blue:hover { background-color: #1d4ed8; }
.cta-green { background-color: #16a34a; }
.cta-green:hover { background-color: #15803d; }
.cta-red { background-color: #dc2626; }
.cta-red:hover { background-color: #b91c1c; }
.cta-purple { background-color: #9333ea; }
.cta-purple:hover { background-color: #7c3aed; }
.cta-yellow { background-color: #ca8a04; }
.cta-yellow:hover { background-color: #a16207; }

.hero-visual {
  width: 100%;
}

@media (min-width: 768px) {
  .hero-visual {
    width: 50%;
  }
}

.product-showcase {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: white;
  padding: 16px;
}

.product-display {
  height: 256px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.display-blue { background-color: #dbeafe; }
.display-green { background-color: #dcfce7; }
.display-red { background-color: #fee2e2; }
.display-purple { background-color: #f3e8ff; }
.display-yellow { background-color: #fef9c3; }

.product-icon {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-blue { background-color: #bfdbfe; }
.icon-green { background-color: #bbf7d0; }
.icon-red { background-color: #fecaca; }
.icon-purple { background-color: #e9d5ff; }
.icon-yellow { background-color: #fef3c7; }

.default-icon {
  width: 48px;
  height: 48px;
}

.default-blue { color: #2563eb; }
.default-green { color: #16a34a; }
.default-red { color: #dc2626; }
.default-purple { color: #9333ea; }
.default-yellow { color: #ca8a04; }

/* 기능 섹션 */
.features-section {
  padding: 64px 0;
  background-color: white;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  position: relative;
  padding: 32px;
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease;
  overflow: hidden;
}

.card-blue { border: 1px solid #bfdbfe; }
.card-blue:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
.card-green { border: 1px solid #bbf7d0; }
.card-green:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
.card-red { border: 1px solid #fecaca; }
.card-red:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
.card-purple { border: 1px solid #e9d5ff; }
.card-purple:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
.card-yellow { border: 1px solid #fef3c7; }
.card-yellow:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.feature-accent {
  position: absolute;
  right: -16px;
  bottom: -16px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.accent-blue { background-color: #dbeafe; }
.accent-green { background-color: #dcfce7; }
.accent-red { background-color: #fee2e2; }
.accent-purple { background-color: #f3e8ff; }
.accent-yellow { background-color: #fef9c3; }

.feature-card:hover .feature-accent {
  opacity: 0.8;
}

.feature-icon-wrapper {
  position: relative;
  z-index: 10;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.icon-wrapper-blue { background-color: #dbeafe; }
.icon-wrapper-green { background-color: #dcfce7; }
.icon-wrapper-red { background-color: #fee2e2; }
.icon-wrapper-purple { background-color: #f3e8ff; }
.icon-wrapper-yellow { background-color: #fef9c3; }

.feature-card:hover .icon-wrapper-blue { background-color: #bfdbfe; }
.feature-card:hover .icon-wrapper-green { background-color: #bbf7d0; }
.feature-card:hover .icon-wrapper-red { background-color: #fecaca; }
.feature-card:hover .icon-wrapper-purple { background-color: #e9d5ff; }
.feature-card:hover .icon-wrapper-yellow { background-color: #fef3c7; }

.feature-icon {
  width: 32px;
  height: 32px;
}

.feature-icon-blue { color: #2563eb; }
.feature-icon-green { color: #16a34a; }
.feature-icon-red { color: #dc2626; }
.feature-icon-purple { color: #9333ea; }
.feature-icon-yellow { color: #ca8a04; }

.feature-content {
  position: relative;
  z-index: 10;
}

.feature-title {
  font-size: 1.25rem;
  color: #1f2937;
  font-weight: bold;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.title-blue:hover { color: #1d4ed8; }
.title-green:hover { color: #15803d; }
.title-red:hover { color: #b91c1c; }
.title-purple:hover { color: #7c3aed; }
.title-yellow:hover { color: #a16207; }

.feature-description {
  color: #4b5563;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.feature-details {
  position: relative;
  z-index: 10;
  margin-top: 16px;
  padding-top: 16px;
}

.details-blue { border-top: 1px solid #dbeafe; }
.details-green { border-top: 1px solid #dcfce7; }
.details-red { border-top: 1px solid #fee2e2; }
.details-purple { border-top: 1px solid #f3e8ff; }
.details-yellow { border-top: 1px solid #fef9c3; }

.additional-info {
  color: #4b5563;
}

/* 사양 섹션 */
.specs-section {
  padding: 64px 0;
}

.specs-blue { background-color: #eff6ff; }
.specs-green { background-color: #f0fdf4; }
.specs-red { background-color: #fef2f2; }
.specs-purple { background-color: #faf5ff; }
.specs-yellow { background-color: #fefce8; }

.specs-content {
  max-width: 1400px;
  margin: 0 auto;
}

.layout-toggle {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.toggle-group {
  display: inline-flex;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.toggle-button {
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-button.left {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.toggle-button.right {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.active-blue { background-color: #2563eb; color: white; }
.active-green { background-color: #16a34a; color: white; }
.active-red { background-color: #dc2626; color: white; }
.active-purple { background-color: #9333ea; color: white; }
.active-yellow { background-color: #ca8a04; color: white; }

.inactive {
  background-color: white;
  color: #374151;
}

.inactive:hover {
  background-color: #f3f4f6;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 1024px) {
  .specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .specs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.spec-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.spec-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.spec-header {
  padding: 12px 24px;
}

.header-blue { background-color: #2563eb; }
.header-green { background-color: #16a34a; }
.header-red { background-color: #dc2626; }
.header-purple { background-color: #9333ea; }
.header-yellow { background-color: #ca8a04; }

.spec-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
}

.spec-body {
  padding: 24px;
}

.spec-table {
  width: 100%;
  border-collapse: collapse;
}

.spec-row {
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-row:hover {
  background-color: #f9fafb;
}

.even { background-color: white; }
.odd-blue { background-color: #eff6ff; }
.odd-green { background-color: #f0fdf4; }
.odd-red { background-color: #fef2f2; }
.odd-purple { background-color: #faf5ff; }
.odd-yellow { background-color: #fefce8; }

.spec-name {
  padding: 12px 16px;
  text-align: left;
  font-weight: 500;
  color: #374151;
  width: 33.333%;
}

.spec-value {
  padding: 12px 16px;
  color: #4b5563;
  width: 66.667%;
}

/* 테이블 레이아웃 */
.table-layout {
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.table-section {
  margin-bottom: 32px;
}

.table-section:last-child {
  margin-bottom: 0;
}

.table-header {
  padding: 12px 24px;
}

.table-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: white;
}

.table-body {
  padding: 0;
}

.full-table {
  width: 100%;
  border-collapse: collapse;
}

.table-row {
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.table-row:last-child {
  border-bottom: none;
}

.table-row:hover {
  background-color: #f9fafb;
}

.table-spec-name {
  padding: 12px 24px;
  text-align: left;
  font-weight: 500;
  color: #374151;
  width: 25%;
}

.table-spec-value {
  padding: 12px 24px;
  color: #4b5563;
  width: 75%;
}

/* 적용 사례 섹션 */
.cases-section {
  padding: 64px 0;
}

.cases-white { background-color: white; }
.cases-blue { background-color: #dbeafe; }
.cases-green { background-color: #dcfce7; }
.cases-red { background-color: #fee2e2; }
.cases-purple { background-color: #f3e8ff; }
.cases-yellow { background-color: #fef9c3; }

.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.case-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.case-image {
  height: 192px;
}

.image-blue { background-color: #dbeafe; }
.image-green { background-color: #dcfce7; }
.image-red { background-color: #fee2e2; }
.image-purple { background-color: #f3e8ff; }
.image-yellow { background-color: #fef9c3; }

.case-content {
  padding: 24px;
}

.case-title {
  font-size: 1.25rem;
  color: #1f2937;
  font-weight: bold;
  margin-bottom: 8px;
}

.case-description {
  color: #4b5563;
  margin-bottom: 16px;
}

.case-meta {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
}

.separator {
  margin: 0 8px;
}

/* 도입 문의 섹션 */
.contact-section {
  padding: 64px 0;
  background-color: white;
}

.contact-content {
  max-width: 768px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 32px;
}

.contact-form {
  background-color: #f9fafb;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 24px;
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

.form-group.full-width {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  color: #374151;
  font-weight: 500;
  margin-bottom: 8px;
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
  min-height: 96px;
}

.form-submit {
  margin-top: 16px;
}

.submit-button {
  width: 100%;
  padding: 12px 24px;
  color: white;
  border-radius: 6px;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
}

.submit-blue { background-color: #2563eb; }
.submit-blue:hover { background-color: #1d4ed8; }
.submit-green { background-color: #16a34a; }
.submit-green:hover { background-color: #15803d; }
.submit-red { background-color: #dc2626; }
.submit-red:hover { background-color: #b91c1c; }
.submit-purple { background-color: #9333ea; }
.submit-purple:hover { background-color: #7c3aed; }
.submit-yellow { background-color: #ca8a04; }
.submit-yellow:hover { background-color: #a16207; }

/* FAQ 섹션 */
.faq-section {
  padding: 64px 0;
  background-color: #f9fafb;
}

.faq-content {
  max-width: 768px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 16px;
}

.faq-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 24px;
  text-align: left;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.faq-button:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.faq-question {
  font-size: 1.125rem;
  font-weight: 500;
  color: #1f2937;
}

.faq-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.faq-blue { color: #2563eb; }
.faq-green { color: #16a34a; }
.faq-red { color: #dc2626; }
.faq-purple { color: #9333ea; }
.faq-yellow { color: #ca8a04; }

.faq-icon.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 16px;
  background-color: white;
  border-top: 1px solid #f3f4f6;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.answer-text {
  color: #4b5563;
}
</style>