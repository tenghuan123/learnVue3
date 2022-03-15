<template>
  <div :class="className">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Side',
    props: {
        className: {
            type: String,
            default: 'side'
        }
    }
}
</script>

<style>

</style>