<template >
  <div
    class="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      >Your Profile</a
    >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      >Settings</a
    >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      >Sign out</a
    >
  </div>
</template>

<script>
export default {
  name: 'ProfilePopUp',
}
</script>
