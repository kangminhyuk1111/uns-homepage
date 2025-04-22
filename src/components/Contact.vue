<!-- src/components/Contact.vue -->
<template>
  <div class="pt-20">
    <!-- 배너 섹션 -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 px-4 relative overflow-hidden">
      <!-- 배경 패턴 -->
      <div
          class="absolute inset-0 opacity-20 z-0"
          :style="{
          backgroundImage: 'url(\'/grid-pattern.svg\')',
          backgroundSize: '30px 30px'
        }">
      </div>

      <!-- 장식적 요소 -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 rounded-full opacity-20 blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div class="container-layout mx-auto text-center relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">문의하기</h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Baro 솔루션에 대한 문의사항이 있으신가요? 언제든지 연락주세요.
        </p>
      </div>
    </section>

    <!-- 연락처 정보 및 문의 양식 -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-layout mx-auto px-4 sm:px-6 md:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <!-- 왼쪽: 연락처 정보 -->
          <div class="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">연락처 정보</h2>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">전화번호</h3>
                  <p class="text-gray-600 mt-1">02-1234-5678</p>
                  <p class="text-gray-500 text-sm mt-1">월-금, 9:00 - 18:00</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">이메일</h3>
                  <p class="text-gray-600 mt-1">info@barosolution.com</p>
                  <p class="text-gray-500 text-sm mt-1">언제든지 문의해주세요</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">주소</h3>
                  <p class="text-gray-600 mt-1">서울특별시 강남구 테헤란로 123, 바로빌딩 8층</p>
                </div>
              </div>
            </div>

            <!-- 소셜 미디어 링크 -->
            <div class="mt-10">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">소셜 미디어</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white hover:bg-rose-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 오른쪽: 문의 양식 -->
          <div class="lg:col-span-3">
            <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 class="text-2xl font-bold text-gray-800 mb-6">문의하기</h2>

              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                    <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                    <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                  </div>
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                </div>

                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-1">회사/기관명</label>
                  <input
                      type="text"
                      id="company"
                      v-model="form.company"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">문의 제목 *</label>
                  <input
                      type="text"
                      id="subject"
                      v-model="form.subject"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                  >
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
                  <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                  ></textarea>
                </div>

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                        id="privacy"
                        type="checkbox"
                        v-model="form.privacy"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="privacy" class="font-medium text-gray-700">개인정보 수집 및 이용에 동의합니다 *</label>
                    <p class="text-gray-500 mt-1">문의 접수 및 처리를 위해 개인정보를 수집합니다. 자세한 내용은 <a href="#" class="text-blue-600 hover:underline">개인정보처리방침</a>을 참조하세요.</p>
                  </div>
                </div>

                <div>
                  <button
                      type="submit"
                      :disabled="isSubmitting"
                      :class="['w-full py-3 px-4 text-white font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                      isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    ]"
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
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container-layout mx-auto px-4 sm:px-6 md:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">찾아오시는 길</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">바로 솔루션은 서울 강남구 테헤란로에 위치하고 있습니다.</p>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- 지도 이미지 대체 - 실제 구현 시 Kakao Maps 등 지도 API 사용 -->
          <div class="w-full h-96 bg-gray-200 flex items-center justify-center">
            <div class="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-gray-600 mb-2">여기에 지도가 표시됩니다</p>
              <p class="text-gray-500 text-sm">(실제 구현 시 Kakao Maps 또는 Google Maps API 사용)</p>
            </div>
          </div>

          <div class="p-6 md:p-8 bg-white">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">주소</h3>
                <p class="text-gray-600 mb-1">서울특별시 강남구 테헤란로 123</p>
                <p class="text-gray-600">바로빌딩 8층</p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-3">교통편</h3>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <div class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-2 shrink-0">
                      <span class="text-xs font-bold">2</span>
                    </div>
                    <p class="text-gray-600">2호선 강남역 3번 출구에서 도보 5분</p>
                  </div>
                  <div class="flex items-center">
                    <div class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 shrink-0">
                      <span class="text-xs font-bold">9</span>
                    </div>
                    <p class="text-gray-600">9호선 신논현역 1번 출구에서 도보 7분</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ 섹션 -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container-layout mx-auto px-4 sm:px-6 md:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">고객님들이 자주 문의하시는 질문들을 모았습니다.</p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div v-for="(item, index) in faqs" :key="index" class="border border-gray-200 rounded-lg">
              <button
                  @click="toggleFaq(index)"
                  class="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              >
                <span class="text-lg font-medium text-gray-800">{{ item.question }}</span>
                <svg
                    :class="[openFaq === index ? 'transform rotate-180' : '', 'w-5 h-5 text-gray-500']"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div
                  v-show="openFaq === index"
                  class="px-6 pb-4 text-gray-600"
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
      // 실제 구현 시에는 API 호출 등의 로직을 추가합니다
      isSubmitting.value = true;

      // 폼 제출 시뮬레이션 (실제 구현 시에는 실제 API 호출로 대체)
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
/* 추가적인 스타일이 필요하면 여기에 작성합니다 */
</style>