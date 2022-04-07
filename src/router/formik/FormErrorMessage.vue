<script>
import { useFormControlContext } from './FormControl.vue'
import { useFormikContext } from './FormikProvider.vue'
import { watchEffect, watch, computed } from 'vue'
export default {
    setup(props) {
        const field = useFormControlContext()

        const { name } = field

        const formik = useFormikContext()

        const value = computed(() => formik.errors[name])

        const touched = computed(() => formik.toucheds[name])

         return {
             value,
             touched,
             field,
             formik,
         }
    }
}
</script>
<template>
<slot :message="value" :touched="touched" :field="field" :formik="formik"></slot>
</template>