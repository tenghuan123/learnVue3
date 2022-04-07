<script>
import { InputType } from './types'
export default {
    props: InputType
}
</script>
<template v-slot="">
<input :type="props.type" :value="props.value" />
</template>