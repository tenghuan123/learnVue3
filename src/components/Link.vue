<template>
  <a :class="className" :href="href" :target="target">
      <slot></slot>
  </a>
</template>

<script>
export default {
    name: 'Link',
    props: {
        className: {
            type: String,
            default: 'a-style'
        },
        href: {
            type: String,
        },
        target: {
            type: String,
        },
    }
}
</script>

<style>

</style>