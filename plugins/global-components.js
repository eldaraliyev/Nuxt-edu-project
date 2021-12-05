import Vue from 'vue'

import PostList from "@/components/Posts/PostList";
import PostPage from "@/components/Posts/PostPage";
import AppButton from "@/components/UI/AppButton";
import AdminPostForm from "@/components/Admin/AdminPostForm";
import AppControlInput from "@/components/UI/AppControlInput"

Vue.component('PostList', PostList)
Vue.component('AppButton', AppButton)
Vue.component('AdminPostForm', AdminPostForm)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostPage', PostPage)
