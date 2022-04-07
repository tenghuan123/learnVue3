<script>
import { useFormikContext } from './FormikProvider.vue'
import { provide, ref, } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup(props) {
        const route = useRoute()

        const action = props.action ?? `#${route.path}`

        const formik = useFormikContext()

        return {
            action,
            submitHandler:formik.submitHandler
        }
    }
}

</script>

<template>
<form :action="action" :onsubmit="submitHandler">
    <slot></slot>
</form>
</template>