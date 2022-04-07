<script>
import useFormik from './useFormik'
import { inject, provide } from 'vue'

const formikKey = Symbol('formikKey')

export const useFormikContext = () => inject(formikKey)

export default {
    props: {
        onSubmit: {
            type:Function,
            default: () => {},
        },
        defaultValue: {
            type: Object,
            default: {}
        },
        defaultErrors: {
            type: Object,
            default: {}
        },
        validate: {
            type:Function,
            default: () => {},
        },
        validateOnBlur: {
           type: Boolean,
           default: true,
        },
        validateOnChange: {
           type: Boolean,
           default: true,
        },
        validateOnMount: {
           type: Boolean,
           default: true,
        },
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