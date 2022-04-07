<script>
import useFormik from './useFormik'
import { inject, provide } from 'vue'

const formikKey = Symbol('formikKey')

export const useFormikContext = () => inject(formikKey)

export default {
    props: {
        onSubmit: Function,
        defaultValue: Object,
        defaultErrors: Object,
        validate: Function,
        validateOnBlur: Boolean,
        validateOnChange: Boolean,
        validateOnMount: Boolean,
    },
    setup(props) {
        const formik = useFormik(props)

        provide(formikKey,formik)
        
    }
}
</script>

<template>
<slot />
</template>