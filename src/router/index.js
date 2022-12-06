import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RoundOne from "@/views/RoundOne";
import RoundTwo from "@/views/RoundTwo";
import RoundThree from "@/views/RoundThree";
import RoundFour from "@/views/RoundFour";
import RoundFive from "@/views/RoundFive";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/round-one",
    name: "RoundOne",
    component: RoundOne,
  },
  {
    path: "/round-two",
    name: "RoundTwo",
    component: RoundTwo,
  },
  {
    path: "/round-three",
    name: "RoundThree",
    component: RoundThree,
  },
  {
    path: "/round-four",
    name: "RoundFour",
    component: RoundFour,
  },
  {
    path: "/round-five",
    name: "RoundFive",
    component: RoundFive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
