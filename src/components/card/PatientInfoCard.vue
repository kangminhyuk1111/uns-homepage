<template>
  <div :class="[
    'bg-gray-200 rounded-lg text-gray-800 pb-8',
    `text-${textSize}`,
    `p-${paddingSize}`
  ]" :style="{ width: width }">
    <div class="flex justify-between mb-2 border-b border-gray-300 pb-1">
      <span class="font-bold">{{ room }} {{ patientName }}</span>
      <span>{{ age }}세/{{ gender }}</span>
    </div>
    <div class="space-y-1">
      <div class="flex justify-between">
        <span>담당의</span>
        <span>{{ doctorName }}</span>
      </div>
      <div class="flex justify-between">
        <span>입원일</span>
        <span>{{ admissionDate }}</span>
      </div>
      <div class="flex justify-between">
        <span>회진시간</span>
        <span>{{ roundTime }}</span>
      </div>
      <div class="flex justify-between text-gray-900 bg-gray-300 px-1 rounded mt-1">
        <span>주의사항</span>
        <span>{{ caution }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientInfoCard',
  props: {
    // 내용 속성
    room: {
      type: String,
      default: '302호'
    },
    patientName: {
      type: String,
      default: '김환자'
    },
    age: {
      type: [Number, String],
      default: 63
    },
    gender: {
      type: String,
      default: '남'
    },
    doctorName: {
      type: String,
      default: '김의사'
    },
    admissionDate: {
      type: String,
      default: '2025.04.10'
    },
    roundTime: {
      type: String,
      default: '09:30'
    },
    caution: {
      type: String,
      default: '낙상주의'
    },

    // 스타일 속성
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    textSize() {
      const sizes = {
        'xs': 'xs',
        'sm': 'xs',
        'md': 'xs',
        'lg': 'sm',
        'xl': 'base'
      };
      return sizes[this.size] || 'xs';
    },
    paddingSize() {
      const sizes = {
        'xs': '1',
        'sm': '2',
        'md': '3',
        'lg': '4',
        'xl': '5'
      };
      return sizes[this.size] || '3';
    }
  }
}
</script>