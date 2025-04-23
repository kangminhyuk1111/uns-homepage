<template>
  <PatientInfoCard
      room="405호"
      patientName="이환자"
      age="45"
      gender="여"
      doctorName="박의사"
      caution="당뇨환자"
      size="lg"
  />
</template>
<script>
import PatientInfoCard from "@/components/card/PatientInfoCard.vue";

export default {
  name: 'PaperBannerComponent',
  components: {PatientInfoCard}
}
</script>