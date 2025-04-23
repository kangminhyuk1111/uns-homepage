<!-- src/components/Support.vue -->
<template>
  <div class="pt-20">
    <!-- 배너 섹션 -->
    <section class="bg-gradient-to-r from-indigo-600 to-blue-700 py-20 px-4 relative overflow-hidden">
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
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">고객 지원 센터</h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Baro 솔루션을 이용하시는 고객님들을 위한 지원 서비스를 제공합니다.
        </p>
      </div>
    </section>

    <!-- 지원 서비스 개요 섹션 -->
    <section class="py-16 bg-white">
      <div class="container-layout mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">자주 묻는 질문</h3>
            <p class="text-gray-600 mb-4">제품별 자주 묻는 질문과 해결 방법을 확인하세요.</p>
            <a href="#faq-section" class="inline-block px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
              FAQ 바로가기
            </a>
          </div>

          <div class="bg-teal-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">기술 지원 요청</h3>
            <p class="text-gray-600 mb-4">전문적인 기술 지원이 필요하신가요? 지원 티켓을 제출하세요.</p>
            <a href="#support-ticket" class="inline-block px-5 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition">
              지원 요청하기
            </a>
          </div>

          <div class="bg-indigo-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div class="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">제품 매뉴얼</h3>
            <p class="text-gray-600 mb-4">제품별 상세 매뉴얼과 가이드를 확인하세요.</p>
            <a href="#manuals" class="inline-block px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition">
              매뉴얼 보기
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 지원 상태 대시보드 -->
<!--    <section class="py-12 bg-gray-50">-->
<!--      <div class="container-layout mx-auto px-4">-->
<!--        <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">-->
<!--          <div class="p-6 border-b border-gray-200">-->
<!--            <h2 class="text-2xl font-bold text-gray-800">시스템 상태</h2>-->
<!--            <p class="text-gray-600 mt-1">Baro 서비스의 현재 운영 상태입니다.</p>-->
<!--          </div>-->

<!--          <div class="p-6">-->
<!--            <div class="space-y-4">-->
<!--              <div v-for="(service, index) in services" :key="index" class="flex items-center justify-between py-3 border-b border-gray-100">-->
<!--                <div class="flex items-center">-->
<!--                  <span class="text-gray-800 font-medium">{{ service.name }}</span>-->
<!--                </div>-->
<!--                <div class="flex items-center">-->
<!--                  <span-->
<!--                      :class="[-->
<!--                      'inline-block w-3 h-3 rounded-full mr-2',-->
<!--                      service.status === 'operational' ? 'bg-green-500' :-->
<!--                      service.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'-->
<!--                    ]"-->
<!--                  ></span>-->
<!--                  <span-->
<!--                      :class="[-->
<!--                      'text-sm font-medium',-->
<!--                      service.status === 'operational' ? 'text-green-600' :-->
<!--                      service.status === 'maintenance' ? 'text-yellow-600' : 'text-red-600'-->
<!--                    ]"-->
<!--                  >-->
<!--                    {{ service.statusText }}-->
<!--                  </span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="bg-gray-50 p-4 text-center">-->
<!--            <p class="text-gray-600 text-sm">마지막 업데이트: {{ lastUpdated }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <!-- 제품별 FAQ 섹션 -->
    <section id="faq-section" class="py-16 bg-gray-50">
      <div class="container-layout mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">자주 묻는 질문</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">제품별로 자주 묻는 질문과 답변을 확인하세요.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- 제품 탭 선택 -->
          <div class="flex flex-wrap justify-center mb-8 gap-2">
            <button
                v-for="(product, index) in products"
                :key="index"
                @click="setActiveProduct(product.id)"
                :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition',
                activeProduct === product.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ product.name }}
            </button>
          </div>

          <!-- FAQ 아코디언 -->
          <div class="space-y-4">
            <div v-for="(faq, index) in filteredFaqs" :key="index" class="border border-gray-200 rounded-lg overflow-hidden">
              <button
                  @click="toggleFaq(index)"
                  class="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              >
                <span class="text-lg font-medium text-gray-800">{{ faq.question }}</span>
                <svg
                    :class="[activeFaq === index ? 'transform rotate-180' : '', 'w-5 h-5 text-gray-500']"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div
                  v-show="activeFaq === index"
                  class="px-6 pb-4 text-gray-600"
              >
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 기술 지원 요청 섹션 -->
    <section id="support-ticket" class="py-16 bg-white">
      <div class="container-layout mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-3">기술 지원 요청</h2>
            <p class="text-lg text-gray-600">제품 사용 중 어려움이 있으신가요? 전문 지원팀이 도와드립니다.</p>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <form @submit.prevent="submitSupportRequest" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">이름 *</label>
                <input
                    type="text"
                    id="name"
                    v-model="supportForm.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                <input
                    type="email"
                    id="email"
                    v-model="supportForm.email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                <input
                    type="tel"
                    id="phone"
                    v-model="supportForm.phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
              </div>

              <div>
                <label for="organization" class="block text-sm font-medium text-gray-700 mb-1">소속 기관/병원 *</label>
                <input
                    type="text"
                    id="organization"
                    v-model="supportForm.organization"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
              </div>

              <div>
                <label for="product" class="block text-sm font-medium text-gray-700 mb-1">제품 *</label>
                <select
                    id="product"
                    v-model="supportForm.product"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                  <option value="" disabled selected>제품을 선택하세요</option>
                  <option v-for="product in products" :key="product.id" :value="product.id">
                    {{ product.name }}
                  </option>
                </select>
              </div>

              <div>
                <label for="priority" class="block text-sm font-medium text-gray-700 mb-1">우선 순위</label>
                <select
                    id="priority"
                    v-model="supportForm.priority"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="low">낮음 - 일반 문의</option>
                  <option value="medium">중간 - 기능 장애</option>
                  <option value="high">높음 - 서비스 중단</option>
                  <option value="critical">긴급 - 중대한 문제</option>
                </select>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">제목 *</label>
                <input
                    type="text"
                    id="subject"
                    v-model="supportForm.subject"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                >
              </div>

              <div>
                <label for="description" class="block text-sm font-medium text-gray-700 mb-1">문제 설명 *</label>
                <textarea
                    id="description"
                    v-model="supportForm.description"
                    rows="5"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    placeholder="문제 상황과 발생 시점, 재현 방법 등을 자세히 설명해주세요."
                ></textarea>
              </div>

              <div>
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    :class="['w-full py-3 px-4 text-white font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                    isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                  ]"
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

<!--    &lt;!&ndash; 제품 매뉴얼 섹션 &ndash;&gt;-->
<!--    <section id="manuals" class="py-16 bg-white">-->
<!--      <div class="container-layout mx-auto px-4">-->
<!--        <div class="text-center mb-12">-->
<!--          <h2 class="text-3xl font-bold text-gray-800 mb-3">제품 매뉴얼</h2>-->
<!--          <p class="text-lg text-gray-600 max-w-3xl mx-auto">각 제품의 상세 매뉴얼과 가이드를 다운로드하세요.</p>-->
<!--        </div>-->

<!--        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">-->
<!--          <div v-for="(product, index) in products" :key="index" class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">-->
<!--            <div class="flex items-center mb-4">-->
<!--              <div class="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-4">-->
<!--                <component :is="getProductIcon(product.id)" class="h-6 w-6 text-blue-600" />-->
<!--              </div>-->
<!--              <h3 class="text-xl font-bold text-gray-800">{{ product.name }}</h3>-->
<!--            </div>-->

<!--            <p class="text-gray-600 mb-6">{{ product.description }}</p>-->

<!--            <div class="space-y-3">-->
<!--              <a href="#" class="flex items-center text-blue-600 hover:text-blue-800">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />-->
<!--                </svg>-->
<!--                <span>사용자 매뉴얼</span>-->
<!--              </a>-->

<!--              <a href="#" class="flex items-center text-blue-600 hover:text-blue-800">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />-->
<!--                </svg>-->
<!--                <span>설치 가이드 영상</span>-->
<!--              </a>-->

<!--              <a href="#" class="flex items-center text-blue-600 hover:text-blue-800">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />-->
<!--                </svg>-->
<!--                <span>업데이트 기록</span>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <!-- 교육 일정 섹션 -->
    <section class="py-16 bg-gray-50">
      <div class="container-layout mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-3">교육 일정</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">Baro 솔루션 제품 활용을 위한 교육 일정을 확인하세요.</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">교육 내용</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">유형</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">신청</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                <tr v-for="(training, index) in trainings" :key="index" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ training.date }}</td>
                  <td class="px-6 py-4 text-sm text-gray-900">{{ training.title }}</td>
                  <td class="px-6 py-4 text-sm text-gray-900">{{ training.product }}</td>
                  <td class="px-6 py-4 text-sm text-gray-900">
                      <span
                          :class="[
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                          training.type === '온라인' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        ]"
                      >
                        {{ training.type }}
                      </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" class="text-blue-600 hover:text-blue-900">신청하기</a>
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
    <section class="py-16 bg-white">
      <div class="container-layout mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-3">고객 지원팀 연락처</h2>
            <p class="text-lg text-gray-600">추가 문의사항이 있으시면 언제든지 연락주세요.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">전화 지원</h3>
              <p class="text-gray-600 mb-1">02-556-3528</p>
              <p class="text-gray-500 text-sm">평일 9:00 - 18:00</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-14 h-14 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">이메일 지원</h3>
              <p class="text-gray-600 mb-1">mike@unsnetworks.com</p>
              <p class="text-gray-500 text-sm">평일 8:00 - 17:00</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl text-center">
              <div class="w-14 h-14 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">실시간 채팅</h3>
              <p class="text-gray-600 mb-1">웹사이트 내 채팅 지원</p>
              <p class="text-gray-500 text-sm">평일 8:00 - 17:00</p>
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

    // 서비스 상태
    const services = ref([
      { name: 'Baro Paper 클라우드 서비스', status: 'operational', statusText: '정상 운영 중' },
      { name: 'Baro Pop 스트리밍 서비스', status: 'operational', statusText: '정상 운영 중' },
      { name: 'Baro Chart 데이터 서비스', status: 'operational', statusText: '정상 운영 중' },
      { name: 'Baro Talk 메시징 서비스', status: 'operational', statusText: '정상 운영 중' },
      { name: 'Baro Call 클라우드 서비스', status: 'maintenance', statusText: '점검 중 (10:00-12:00)' }
    ]);

    // 마지막 업데이트 시간
    const lastUpdated = ref('2025년 4월 22일 09:30');

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
      // 실제 구현 시 API 호출 등 로직 추가
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

    // 제품 아이콘 가져오기
    const getProductIcon = (productId) => {
      // 실제 구현 시에는 각 제품에 맞는 아이콘 컴포넌트 반환
      // 아이콘은 별도의 컴포넌트로 구현 필요
      return 'div'; // 임시로 div 반환
    };

    return {
      activeProduct,
      activeFaq,
      supportForm,
      isSubmitting,
      products,
      faqs,
      services,
      lastUpdated,
      trainings,
      filteredFaqs,
      setActiveProduct,
      toggleFaq,
      submitSupportRequest,
      getProductIcon
    };
  }
};
</script>

<style scoped>
/* 추가적인 스타일이 필요하면 여기에 작성합니다 */
</style>