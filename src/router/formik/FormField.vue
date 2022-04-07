<script>
import { useFormControlContext } from './FormControl.vue'
import { useFormikContext } from './FormikProvider.vue'
import { watch } from 'vue'
export default {
    setup(props) {
        const field = useFormControlContext()

        const { name } = field

        const formik = useFormikContext()

        const value = formik.values[name]

        const onChange = (ev) => {
            field.setValue(ev.target.value)
        }

        const onBlur = () => {
            if(!formik.validateOnBlur) return

            field.setTouched(true)
        }

        return {
            formik,
            value,
            field,
            onChange,
            onBlur
        }
    },
}
</script>
<template>
<slot :value="value" :onChange="onChange" :onBlur="onBlur"></slot>
</template>