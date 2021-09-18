<template>
  <main>
    <h1>Packages</h1>
    <nav>
      <v-list>
        <v-list-item is="router-link" to="/common/accordion">
          Common
        </v-list-item>
        <v-list-item is="router-link" to="/forms/checkbox"> Forms </v-list-item>
        <v-list-item is="router-link" to="/aws-auth/sign-in">
          AWS Auth
        </v-list-item>
      </v-list>
    </nav>
  </main>
</template>
