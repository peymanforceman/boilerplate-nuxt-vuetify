<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <side-bar/>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>

      <right-header/>
      <!--      <v-btn-->
      <!--        icon-->
      <!--        @click.stop="rightDrawer = !rightDrawer"-->
      <!--      >-->
      <!--        <v-icon>mdi-menu</v-icon>-->
      <!--      </v-btn>-->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <!--    <v-navigation-drawer-->
    <!--      v-model="rightDrawer"-->
    <!--      :right="right"-->
    <!--      temporary-->
    <!--      fixed-->
    <!--    >-->
    <!--      <v-list>-->
    <!--        <v-list-item @click.native="right = !right">-->
    <!--          <v-list-item-action>-->
    <!--            <v-icon light>-->
    <!--              mdi-repeat-->
    <!--            </v-icon>-->
    <!--          </v-list-item-action>-->
    <!--          <v-list-item-title>Switch drawer (click me)</v-list-item-title>-->
    <!--        </v-list-item>-->
    <!--      </v-list>-->
    <!--    </v-navigation-drawer>-->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
    import SideBar from "../components/layout/SideBar";
    import RightHeader from "../components/layout/RightHeader";

    export default {
        components: {
            SideBar,
            RightHeader
        },
        data() {
            return {
                clipped: true,
                drawer: true,
                fixed: false,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Website Title'
            }
        }
    }
</script>
