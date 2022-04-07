<script setup>
import FormControl from './FormControl.vue';
import Form from './Form.vue';
import FormikProvider from './FormikProvider.vue'
import FormField from './FormField.vue'
import FormErrorMessage from './FormErrorMessage.vue'
import { ref, watchEffect } from 'vue'

const defaultValue = {
    firstName:'123',
    lastName:''
}

const validate = (value) => {
    const errors = {}
    if(value.firstName.length > 5) {
        errors.firstName = 'firstName太长了'
    }
    if(value.firstName.length < 3) {
        errors.firstName = 'firstName太短了'
    }

    if(value.lastName.length < 2) {
        errors.lastName = 'lastName太短了'
    }

    return errors
}

const onSubmit = (value) => {
    console.log(value)
}

const value = ref('')

watchEffect(() => {
    console.log(value.value)
})
 
</script>

<template>
<FormikProvider 
    :defaultValue="defaultValue" 
    :onSubmit="onSubmit" 
    :validate="validate"
>
    <Form>
        <div class="vstack">
            <FormControl name="firstName" >
                <label>firstName:</label>
                <FormField v-slot="{value, onChange, onBlur}">
                    <input type="text" :value="value" @input="onChange" @blur="onBlur"  />
                </FormField>
                <FormErrorMessage v-slot="{message, touched, field}">
                    <p v-show="message!=null && touched != null">{{message}}</p>
                </FormErrorMessage>
            </FormControl>

            <FormControl name="lastName">
                <label>lastName:</label>
                <FormField v-slot="{value, onChange, onBlur}">
                    <input type="text" :value="value" @input="onChange" @blur="onBlur" />
                </FormField>
                <FormErrorMessage v-slot="{message, touched, field}">
                    <p v-show="message!=null  && touched != null">{{message}}</p>
                </FormErrorMessage>
            </FormControl>
        </div>
        
        <input id="submitButton" type="submit" value="submit" />
    </Form>
</FormikProvider>
    
</template>

<style>
.vstack {
    display: flex;
    flex-direction: column;
    max-width: 300px;
}

#submitButton {
    margin-top: 20px;
}
</style>