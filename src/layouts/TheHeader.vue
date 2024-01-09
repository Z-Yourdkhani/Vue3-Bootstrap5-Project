<template>
  <nav class="navbar navbar-expand-lg bg-primary navbar-dark px-3 py-1">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img src="" class="rounded-3 shadow-sm" style="height: 40px;" />
      </a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link mx-2 text-white" to="/register">ثبت‌نام</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2 text-white" to="/login">ورود</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2 text-white" to="/page1">صفحه اول</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2 text-white" to="/page2">صفحه دوم</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link mx-2 text-white" to="/page3">صفحه سوم</router-link>
          </li>
        </ul>

        <form class="d-none d-lg-inline-block pe-2 pe-xl-3 mt-1" style="position: relative;">
          <input
            type="text"
            class="pe-2 rounded-pill"
            style="width:16rem;border: none; font-size: small;height:36px;"
            placeholder="جستجو"
            v-model="search_text"
          />
          <a
            :href="'/search?q=/' + search_text"
            target="_blank"
            style="position: absolute; top: 0; left:3px; top: 4%; transform: translate(-8%, 0);"
          >
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
export default {
  name: "App",
  components: { },
  setup() {
    const search_text = ref('')
    return {
     search_text
    };
  }
};
</script>