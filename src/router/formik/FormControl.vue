<script>
import { useFormikContext } from './FormikProvider.vue'
import { ref, provide, inject, watchEffect, watch, reactive } from 'vue'

const formcontrolKey = Symbol('formControl')

export const useFormControlContext = () => inject(formcontrolKey)


export default {
    props: {
        name: String
    },
    setup(props) {
        const formik = useFormikContext()
        
        const setValue = (value) => formik.setFieldValue(props.name, value)

        const setError = (value) => formik.setFieldError(props.name, value)

        const setTouched = (value) => formik.setFieldTouched(props.name, value)


        const formControlValue = reactive({
            name:props.name,
            setValue,
            setError,
            setTouched,
        })

        provide(formcontrolKey,formControlValue)
    }
}
</script>

<template>
<slot></slot>
</template>