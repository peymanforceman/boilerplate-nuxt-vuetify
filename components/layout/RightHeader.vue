<template>
  <div>
    <template v-if="authenticated">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            v-on="on"
          >
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click=""
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        icon
        large
        @click="logout"
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </template>
    <template v-if="!authenticated">
      <v-btn
        icon
        large
        :to="{name:'auth-signin'}"
      >
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </template>
  </div>
</template>
<script>
    export default {
        data: () => ({
            items: [
                {title: 'News 1'},
                {title: 'News 2'},
                {title: 'News 3'},
                {title: 'News 4'},
            ],
        }),
        methods: {
            logout() {
                this.$auth.logout()
            }
        }
    }
</script>
