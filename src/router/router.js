import {createMemoryHistory, createRouter} from "vue-router";
import FIleUpLoad from "@/Page/FileUpLoad/FIleUpLoad.vue";

const routes = [
  {
    path: '/',
    component: FIleUpLoad,
  }
]
export const router = createRouter({
  history: createMemoryHistory(),
  routes
})