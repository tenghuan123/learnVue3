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

    // 提交相关

    // 校验

    const validateFormik = (values) => {
        const error = validate(values)

        const valueKeys = Object.keys(values)

        const keys = Object.keys(error)

        const keysCount = Object.keys(keys).length

        const flag = keysCount > 0

        if(flag) {
            keys.forEach(key => setFieldError(key, error[key]))
        } else {
            valueKeys.filter(item => !keys.includes(item))
            .forEach(key => deleteFieldError(key))
        }

        return flag

        // 触发错误提示，前提，满足表单错误前提
        // 全局表单的校验只会在用户触发提交时进行校验
    }

    // 错误前提
    const errorhandlerBefore = () => {

    }

    // 单个字段是否聚焦过
    const toucheds = reactive({})

    const setFieldTouched = (filedname, fieldvalue) => toucheds[filedname] = fieldvalue

    // 错误
    const errors = reactive({})

    const setFieldError = (fieldname, fieldvalue) => errors[fieldname] = fieldvalue

    const deleteFieldError = (fieldname) => delete errors[fieldname]



    // 提交相关
    const submitHandler = () => {
        const flag = validateFormik(values)

        console.log(flag)

        if(flag) {
            return 
        }
        onSubmit(values)
    }

    const formik = reactive({
        values,
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