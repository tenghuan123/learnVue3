import { ref, watchEffect, watch, reactive } from 'vue'

const useFormik = ({ 
    defaultValue, 
    defaultErrors,
    validate = (values) => {}, 
    validateOnBlur = true,
    validateOnChange = true, 
    validateOnMount = false, 
    onSubmit = () => {}
}) => {
    // value相关
    const values = reactive(defaultValue)

    const setFieldValue = (fieldname, fieldvalue) => values[fieldname] = fieldvalue


    watch(values, (value) => {
        if(validateOnChange){
            validateFormik(value)
        }
    })

    // 提交相关

    // 校验

    const validateFormik = (values) => {
        const error = validate(values)

        const keys = Object.keys(error)

        const keysCount = Object.keys(keys).length

        const flag = keysCount > 0

        setErrors(error)

        return flag

        // 触发错误提示，前提，满足表单错误前提
        // 全局表单的校验只会在用户触发提交时进行校验
    }

    // 错误前提
    const errorhandlerBefore = () => {

    }

    // 单个字段是否聚焦过
    const toucheds = ref({})

    const setToucheds = fields => toucheds.value = fields

    const setFieldTouched = (filedname, fieldvalue) => toucheds.value[filedname] = fieldvalue

    const touchedAll = () => {
        const keys = Object.keys(values)
        
        const obj = keys.reduce((prev, current)=> ({ [current]: true, ...prev }), {})

        setToucheds(obj)
    }

    watch(toucheds, (value) => console.log(value))

    // 错误
    const errors = ref({...defaultErrors})

    const setErrors = fileds => errors.value = fileds

    const setFieldError = (fieldname, fieldvalue) => errors.value[fieldname] = fieldvalue

    watch(errors, (value) => console.log(value))

    
    // 提交相关
    const submitHandler = () => {
        const flag = validateFormik(values)

        touchedAll()

        if(flag) {
            return 
        }
        onSubmit(values)
    }

    const formik = reactive({
        values,
        validateOnBlur,
        setFieldValue,
        toucheds,
        setFieldTouched,
        errors,
        setFieldError,
        submitHandler,
    })

    return formik
}

export default useFormik