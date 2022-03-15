<template>
<div :class="className">
    <slot></slot>
</div>
</template>

<script>
export default {
    name:'header',
    props: {
        className: {
            type: String,
            default: 'header',
        },
    }
}
</script>

<style>

</style>