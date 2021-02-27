<template>
  <div class="">
    <!-- Background color split screen for large screens -->
    <div
      class="fixed top-0 left-0 w-1/2 h-full bg-white"
      aria-hidden="true"
    ></div>
    <div
      class="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
      aria-hidden="true"
    ></div>
    <div class="relative min-h-screen flex flex-col">
      <!-- Navbar -->
      <nav class="flex-shrink-0 bg-indigo-600">
        <normalNavMenu searchText="Search Portafolio" />
        <!-- Mobile menu, show/hide based on menu state. -->
        <MobileNavMenu />
      </nav>

      <!-- 3 column wrapper -->
      <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 bg-white xl:flex">
          <div
            class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white"
          >
            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <!-- Start left column area -->

              <!-- End left column area -->
            </div>
          </div>

          <div class="bg-white lg:min-w-0 lg:flex-1">
            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
              <!-- Start main area-->
              <div class="relative h-full" style="min-height: 36rem">
                <Nuxt />
              </div>
              <!-- End main area -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NormalNavMenu from '~/components/layoutComponents/NormalNavMenu'
import MobileNavMenu from '~/components/layoutComponents/MobileNavMenu'
export default {
  components: {
    NormalNavMenu,
    MobileNavMenu,
  },
}
</script>

<style>
</style>
