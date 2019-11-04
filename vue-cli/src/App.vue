<template>
  <!-- 이 템플릿은 root.  하나의 엘리먼트만 존재 가능 -->
  <!-- 여러개의 div 태그를 병렬로 선언 X -->
  <div>
    {{ str }}
  </div>
</template>

<script>
export default {
  // function으로 만들고, 새로운 객체 반환하도록 해야함
  data: function(){
      return {
        str: 'hi'
      }
  }
}
</script>

<style>

</style>