<!-- src/components/ProductPageTemplate.vue -->
<template>
  <div class="w-full min-h-screen">
    <!-- 헤더 -->
    <MainHeader />

    <!-- 컨텐츠 영역 - 헤더 높이만큼 여백 추가 -->
    <div class="pt-20">
      <!-- 제품 히어로 섹션 -->
      <section :class="`py-16 md:py-24 bg-${color}-100`">
        <div class="container-layout mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div :class="`inline-block px-3 py-1 bg-${color}-100 text-${color}-600 rounded-full text-sm font-medium mb-4`">
                {{ category }}
              </div>
              <h1 class="text-4xl md:text-5xl text-gray-800 font-bold mb-4">{{ title }}</h1>
              <p class="text-lg text-gray-600 mb-6">{{ description }}</p>
              <button
                  :class="`px-6 py-3 bg-${color}-600 text-white rounded-md text-lg font-medium hover:bg-${color}-700 transition shadow-md`"
                  @click="scrollToContact"
              >
                도입 문의하기
              </button>
            </div>
            <div class="md:w-1/2">
              <div class="rounded-lg overflow-hidden shadow-xl bg-white p-4">
                <div :class="`h-64 bg-${color}-100 rounded-md flex items-center justify-center`">
                  <!-- 제품 아이콘 표시 -->
                  <div :class="`w-24 h-24 rounded-full bg-${color}-200 flex items-center justify-center`">
                    <slot name="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" :class="`h-12 w-12 text-${color}-600`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section class="py-16 bg-white">
        <div class="container-layout mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-800 font-bold mb-4">주요 기능</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ title }}의 주요 기능과 특장점을 소개합니다</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                v-for="(feature, index) in features"
                :key="index"
                :class="`relative p-8 rounded-xl border border-${color}-200 bg-white hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden group`"
            >
              <!-- 배경 액센트 효과 -->
              <div :class="`absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-${color}-100 opacity-50 group-hover:opacity-80 transition-all duration-300`"></div>

              <!-- 아이콘 -->
              <div :class="`relative z-10 w-16 h-16 rounded-full bg-${color}-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-${color}-200 transition-all duration-300`">
                <slot :name="`feature-icon-${index}`">
                  <svg xmlns="http://www.w3.org/2000/svg" :class="`h-8 w-8 text-${color}-600`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </slot>
              </div>

              <!-- 콘텐츠 -->
              <div class="relative z-10">
                <h3 class="text-xl text-gray-800 font-bold mb-3 group-hover:text-${color}-700 transition-colors duration-300">{{ feature.title }}</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">{{ feature.description }}</p>
              </div>

              <!-- 추가 세부 정보 (접을 수 있음) -->
              <div
                  v-if="feature.showDetails"
                  class="relative z-10 mt-4 pt-4 border-t border-${color}-100"
              >
                <p class="text-gray-600">{{ feature.additionalInfo || '추가 정보가 준비되지 않았습니다.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 하드웨어 사양 섹션 -->
      <section v-if="hardwareSpecs" :class="`py-16 bg-${color}-50`">
        <div class="container-layout mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-800 font-bold mb-4">하드웨어 사양</h2>
            <p class="text-lg text-gray-600 max-w-4xl mx-auto">{{ hardwareSpecs.title }}</p>
          </div>

          <div class="max-w-7xl mx-auto">
            <!-- 하드웨어 사양 레이아웃 선택 옵션 -->
            <div class="mb-6 flex justify-center">
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button
                    type="button"
                    @click="specLayout = 'cards'"
                    :class="`px-4 py-2 text-sm font-medium rounded-l-lg ${specLayout === 'cards' ? `bg-${color}-600 text-white` : 'bg-white text-gray-700 hover:bg-gray-100'}`"
                >
                  카드 보기
                </button>
                <button
                    type="button"
                    @click="specLayout = 'table'"
                    :class="`px-4 py-2 text-sm font-medium rounded-r-lg ${specLayout === 'table' ? `bg-${color}-600 text-white` : 'bg-white text-gray-700 hover:bg-gray-100'}`"
                >
                  표 보기
                </button>
              </div>
            </div>

            <!-- 카드 레이아웃 -->
            <div v-if="specLayout === 'cards'" class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
              <div
                  v-for="(section, sectionIndex) in hardwareSpecs.sections"
                  :key="sectionIndex"
                  class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div :class="`bg-${color}-600 px-6 py-3`">
                  <h3 class="text-lg font-bold text-white">{{ section.title }}</h3>
                </div>
                <div class="p-6">
                  <table class="w-full border-collapse">
                    <tbody>
                    <tr
                        v-for="(spec, specIndex) in section.specs"
                        :key="specIndex"
                        :class="specIndex % 2 === 0 ? 'bg-white' : `bg-${color}-50`"
                        class="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                    >
                      <th class="py-3 px-4 text-left font-medium text-gray-700 w-1/3">{{ spec.name }}</th>
                      <td class="py-3 px-4 text-gray-600 w-2/3">{{ spec.value }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- 전체 표 레이아웃 -->
            <div v-if="specLayout === 'table'" class="overflow-hidden bg-white rounded-lg shadow-md">
              <div v-for="(section, sectionIndex) in hardwareSpecs.sections" :key="sectionIndex" class="mb-8 last:mb-0">
                <div :class="`bg-${color}-600 px-6 py-3`">
                  <h3 class="text-lg font-bold text-white">{{ section.title }}</h3>
                </div>
                <div class="p-0">
                  <table class="w-full border-collapse">
                    <tbody>
                    <tr
                        v-for="(spec, specIndex) in section.specs"
                        :key="specIndex"
                        :class="specIndex % 2 === 0 ? 'bg-white' : `bg-${color}-50`"
                        class="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                    >
                      <th class="py-3 px-6 text-left font-medium text-gray-700 w-1/4">{{ spec.name }}</th>
                      <td class="py-3 px-6 text-gray-600 w-3/4">{{ spec.value }}</td>
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
      <section :class="`py-16 bg-${hardwareSpecs ? 'white' : `${color}-100`}`">
        <div class="container-layout mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-800 font-bold mb-4">적용 사례</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">다양한 의료 기관에서 {{ title }}를 활용한 사례를 확인하세요</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(case_study, index) in caseStudies" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
              <div :class="`h-48 bg-${color}-100`"></div>
              <div class="p-6">
                <h3 class="text-xl text-gray-800 font-bold mb-2">{{ case_study.title }}</h3>
                <p class="text-gray-600 mb-4">{{ case_study.description }}</p>
                <div class="flex items-center text-sm text-gray-500">
                  <span>{{ case_study.location }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ case_study.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 도입 문의 섹션 -->
      <section id="contact" class="py-16 bg-white">
        <div class="container-layout mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="text-center mb-8">
              <h2 class="text-3xl text-gray-800 font-bold mb-4">도입 문의</h2>
              <p class="text-lg text-gray-600">{{ title }} 도입에 관심이 있으신가요? 아래 양식을 작성하시면 담당자가 연락드립니다.</p>
            </div>

            <form class="bg-gray-50 rounded-lg p-8 shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-gray-700 font-medium mb-2">이름</label>
                  <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="이름을 입력하세요">
                </div>
                <div>
                  <label for="company" class="block text-gray-700 font-medium mb-2">회사/기관명</label>
                  <input type="text" id="company" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="회사나 기관명을 입력하세요">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="email" class="block text-gray-700 font-medium mb-2">이메일</label>
                  <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="이메일을 입력하세요">
                </div>
                <div>
                  <label for="phone" class="block text-gray-700 font-medium mb-2">연락처</label>
                  <input type="tel" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="연락처를 입력하세요">
                </div>
              </div>

              <div class="mb-6">
                <label for="message" class="block text-gray-700 font-medium mb-2">문의 내용</label>
                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="문의 내용을 입력하세요"></textarea>
              </div>

              <div>
                <button
                    type="submit"
                    :class="`w-full px-6 py-3 bg-${color}-600 text-white rounded-md text-lg font-medium hover:bg-${color}-700 transition shadow-md`"
                >
                  문의하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ 섹션 -->
      <section class="py-16 bg-gray-50">
        <div class="container-layout mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-3xl text-gray-800 font-bold mb-4">자주 묻는 질문</h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ title }}에 대해 자주 묻는 질문들을 모았습니다</p>
          </div>

          <div class="max-w-3xl mx-auto">
            <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
              <button
                  @click="toggleFaq(index)"
                  class="flex items-center justify-between w-full px-6 py-4 text-left bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span class="text-lg font-medium text-gray-800">{{ faq.question }}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :class="`h-5 w-5 text-${color}-600 transform ${openFaq === index ? 'rotate-180' : ''} transition-transform duration-300`"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div
                  v-if="openFaq === index"
                  class="px-6 py-4 bg-white border-t border-gray-100 rounded-b-md"
              >
                <p class="text-gray-600">{{ faq.answer }}</p>
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
  setup() {
    const openFaq = ref(null);
    const specLayout = ref('cards'); // 기본값은 카드 레이아웃

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
      specLayout
    };
  }
};
</script>