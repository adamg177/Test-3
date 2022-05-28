<template>
  <button
    :type="type"
    class="btn"
    @click="$emit('click')"
  >
    {{buttonText}}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: 'Click',
    },
    type: {
      type: String,
      required: false,
      default: 'button',
    }
  }
}
</script>