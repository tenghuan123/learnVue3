import Formik from './formik/index.vue'
import Home from './home/index.vue'
import Setup from './setup/index.vue'
import Wavesurfer from './wavesurfer/index.vue'

export default [
    { path: '/formik', component: Formik },
    { path: '/', component: Home },
    { path: '/setup', component: Setup },
    // { path: '/wavesurfer', component: Wavesurfer },
]