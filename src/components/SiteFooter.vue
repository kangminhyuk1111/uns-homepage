<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- 회사 소개 섹션 -->
        <div class="footer-section company-section">
          <h3 class="section-title">Baro Solutions</h3>
          <p class="company-description">디지털 의료 솔루션의 새로운 패러다임</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Dribbble">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- 제품 섹션 -->
        <div class="footer-section">
          <h3 class="section-title">제품</h3>
          <ul class="link-list">
            <li><router-link to="/products/baro-paper" class="footer-link">Baro Paper</router-link></li>
            <li><router-link to="/products/baro-pop" class="footer-link">Baro Pop</router-link></li>
            <li><router-link to="/products/baro-kiosk" class="footer-link">Baro Kiosk</router-link></li>
            <li><router-link to="/products/baro-navi" class="footer-link">Baro Navi</router-link></li>
            <li><router-link to="/products/baro-safe" class="footer-link">Baro Safe</router-link></li>
            <li><router-link to="/products/baro-chart" class="footer-link">Baro Chart</router-link></li>
            <li><router-link to="/products/baro-talk" class="footer-link">Baro Talk</router-link></li>
            <li><router-link to="/products/baro-call" class="footer-link">Baro Call</router-link></li>
          </ul>
        </div>

        <!-- 솔루션 & 고객지원 섹션 -->
        <div class="footer-section">
          <h3 class="section-title">솔루션</h3>
          <ul class="link-list">
            <li><router-link to="/solutions/hospitals" class="footer-link">종합병원</router-link></li>
            <li><router-link to="/solutions/clinics" class="footer-link">의원</router-link></li>
            <li><router-link to="/solutions/specialized" class="footer-link">전문병원</router-link></li>
          </ul>

          <h3 class="section-title support-title">고객지원</h3>
          <ul class="link-list">
            <li><router-link to="/support/faq" class="footer-link">자주 묻는 질문</router-link></li>
            <li><router-link to="/support/contact" class="footer-link">문의하기</router-link></li>
            <li><router-link to="/support/demo" class="footer-link">데모 신청</router-link></li>
          </ul>
        </div>

        <!-- 회사 정보 섹션 -->
        <div class="footer-section">
          <h3 class="section-title">회사 정보</h3>
          <address class="company-address">
            <p class="address-line">서울시 강남구 논현로 509</p>
            <p class="address-line">송암빌딩 9층</p>
            <p class="contact-info">
              <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02-556-3528" class="contact-link">02-556-3528</a>
            </p>
            <p class="contact-info">
              <svg xmlns="http://www.w3.org/2000/svg" class="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:mike@unsnetworks.com" class="contact-link">mike@unsnetworks.com</a>
            </p>
          </address>
        </div>
      </div>

      <!-- 하단 저작권 및 링크 -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} Baro Solutions. All rights reserved.</p>
        <div class="legal-links">
          <ul class="legal-list">
            <li><router-link to="/privacy" class="legal-link">개인정보처리방침</router-link></li>
            <li><router-link to="/terms" class="legal-link">이용약관</router-link></li>
            <li><router-link to="/sitemap" class="legal-link">사이트맵</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
/* ==== 기본 설정 ==== */
* {
  box-sizing: border-box;
}

/* ==== 메인 푸터 ==== */
.site-footer {
  background-color: #111827; /* bg-gray-900 */
  color: #9ca3af; /* text-gray-400 */
  padding: 3rem 0; /* py-12 */
}

.footer-container {
  width: 100%;
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
}

/* ==== 푸터 콘텐츠 그리드 ==== */
.footer-content {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 2rem; /* gap-8 */
}

.footer-section {
  display: flex;
  flex-direction: column;
}

/* ==== 섹션 제목 ==== */
.section-title {
  color: white; /* text-white */
  font-size: 1.125rem; /* text-lg */
  font-weight: 700; /* font-bold */
  margin-bottom: 1rem; /* mb-4 */
}

.company-section .section-title {
  font-size: 1.25rem; /* text-xl */
}

.support-title {
  margin-top: 1.5rem; /* mt-6 */
}

/* ==== 회사 섹션 ==== */
.company-description {
  margin-bottom: 1rem; /* mb-4 */
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem; /* space-x-4 */
}

.social-link {
  color: #9ca3af; /* text-gray-400 */
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  color: white; /* hover:text-white */
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.social-link svg {
  width: 1.5rem; /* w-6 */
  height: 1.5rem; /* h-6 */
}

/* ==== 링크 리스트 ==== */
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
}

.footer-link {
  color: #9ca3af; /* text-gray-400 */
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  border-radius: 0.25rem;
  position: relative;
}

.footer-link:hover {
  color: white; /* hover:text-white */
  padding-left: 0.5rem;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transform: translateY(-50%);
  transition: width 0.3s ease;
}

.footer-link:hover::before {
  width: 1rem;
}

/* ==== 연락처 정보 ==== */
.company-address {
  font-style: normal; /* not-italic */
}

.address-line {
  margin-bottom: 0.5rem; /* mb-2 */
}

.contact-info {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem; /* mb-2 */
}

.contact-info:last-child {
  margin-bottom: 0;
}

.contact-icon {
  width: 1.25rem; /* h-5 w-5 */
  height: 1.25rem;
  margin-right: 0.5rem; /* mr-2 */
  color: #6b7280;
}

.contact-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: white;
}

/* ==== 푸터 하단 ==== */
.footer-bottom {
  border-top: 1px solid #374151; /* border-gray-800 */
  margin-top: 2.5rem; /* mt-10 */
  padding-top: 1.5rem; /* pt-6 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.copyright {
  margin: 0;
  text-align: center;
}

.legal-links {
  margin-top: 1rem; /* mt-4 */
}

.legal-list {
  display: flex;
  gap: 1.5rem; /* space-x-6 */
  list-style: none;
  padding: 0;
  margin: 0;
}

.legal-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.875rem;
}

.legal-link:hover {
  color: white;
}

/* ==== 반응형 디자인 ==== */

/* sm: (640px 이상) */
@media (min-width: 640px) {
  .footer-container {
    padding: 0 1.5rem; /* sm:px-6 */
  }
}

/* md: (768px 이상) */
@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(4, 1fr); /* md:grid-cols-4 */
  }

  .footer-bottom {
    flex-direction: row; /* md:flex-row */
  }

  .legal-links {
    margin-top: 0; /* md:mt-0 */
  }
}

/* lg: (1024px 이상) */
@media (min-width: 1024px) {
  .footer-container {
    padding: 0 2rem; /* lg:px-8 */
  }
}

/* ==== 모바일 최적화 ==== */
@media (max-width: 768px) {
  .site-footer {
    padding: 2rem 0;
  }

  .footer-content {
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1rem;
  }

  .company-section .section-title {
    font-size: 1.125rem;
  }

  .social-links {
    justify-content: center;
    gap: 0.75rem;
  }

  .footer-bottom {
    text-align: center;
  }

  .legal-list {
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  .copyright {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 0.75rem;
  }

  .social-link {
    width: 2rem;
    height: 2rem;
  }

  .social-link svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  .contact-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .contact-icon {
    margin-right: 0;
  }
}

/* ==== 접근성 개선 ==== */
.footer-link:focus,
.social-link:focus,
.contact-link:focus,
.legal-link:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* ==== 애니메이션 개선 ==== */
@media (prefers-reduced-motion: reduce) {
  .footer-link,
  .social-link,
  .contact-link,
  .legal-link {
    transition: none !important;
  }

  .footer-link:hover,
  .social-link:hover {
    transform: none !important;
  }
}

/* ==== 다크모드 대응 (선택사항) ==== */
@media (prefers-color-scheme: dark) {
  .site-footer {
    background-color: #000;
  }

  .footer-bottom {
    border-top-color: #1f2937;
  }
}

/* ==== 고급 효과 ==== */
.footer-section {
  position: relative;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: width 0.3s ease;
}

.footer-section:hover::before {
  width: 100%;
}

/* 소셜 링크 추가 효과 */
.social-link {
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.social-link:hover::before {
  left: 100%;
}

/* Vue Router 활성 링크 스타일 */
.router-link-active {
  color: #3b82f6 !important;
  font-weight: 500;
}

.router-link-active::before {
  width: 1rem !important;
}

/* 스크롤 애니메이션 (선택사항) */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-section {
  animation: fadeInUp 0.6s ease-out;
}

.footer-section:nth-child(1) { animation-delay: 0.1s; }
.footer-section:nth-child(2) { animation-delay: 0.2s; }
.footer-section:nth-child(3) { animation-delay: 0.3s; }
.footer-section:nth-child(4) { animation-delay: 0.4s; }
</style>