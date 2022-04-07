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

        return {
            formik,
            value,
            field,
            onChange
        }
    },
}
</script>
<template>
<slot :value="value" :onChange="onChange"></slot>
</template>