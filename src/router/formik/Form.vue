<script>
import { useFormikContext } from './FormikProvider.vue'
import { provide, ref } from 'vue'

export default {
    setup(props) {
        const action = props.action ?? '#/formik'

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