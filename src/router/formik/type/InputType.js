export const InputType = {
    accept: File,
    alt: Image,
    autocomplete: String || Boolean,
    autofocus:String || Boolean,
    capture: File,
    value: {
        type: String || Number || Boolean, 
        default: 'text'
    },
    type: {
        type: String,
        default: 'text'
    }
}