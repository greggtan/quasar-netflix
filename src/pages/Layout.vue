<template>
  <div class="home">
    <!-- load each view in here above footer. -->
    <div class="body-content">
        <router-view />
    </div>

    <div class="footerNavWrapper">
      <div class="footerNav flexBetween">

        <router-link to="/home">
          <div class="navIcon flexColumn" v-bind:class="{activeTab:isHomeActive}" @click="setActive('home')">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </div>
        </router-link>

        <router-link to="/search">
          <div class="navIcon flexColumn" v-bind:class="{activeTab:isSearchActive}" @click="setActive('search')">
            <i class="fas fa-search"></i>
            <span>Search</span>
          </div>
        </router-link>

        <router-link to="/comingSoon">
          <div class="navIcon flexColumn" v-bind:class="{activeTab:isComingSoonActive}" @click="setActive('coming')">
            <i class="fas fa-photo-video"></i>
            <span>Coming Soon</span>
          </div>
        </router-link>

        <router-link to="/downloads">
          <div class="navIcon flexColumn" v-bind:class="{activeTab:isDownloadsActive}" @click="setActive('downloads')">
            <i class="fas fa-download"></i>
            <span>Downloads</span>
          </div>
        </router-link>
        <router-link to="/more">
          <div class="navIcon flexColumn" v-bind:class="{activeTab:isMoreActive}" @click="setActive('more')">
            <i class="fas fa-bars"></i>
            <span>More</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Layout',
  data () {
    return {
      isHomeActive: true,
      isSearchActive: false,
      isComingSoonActive: false,
      isDownloadsActive: false,
      isMoreActive: false
    }
  },
  methods: {
    setActive (tab) {
      if (tab === 'home') {
        this.isHomeActive = true
        this.isSearchActive = false
        this.isComingSoonActive = false
        this.isDownloadsActive = false
        this.isMoreActive = false
      } else if (tab === 'search') {
        this.isHomeActive = false
        this.isSearchActive = true
        this.isComingSoonActive = false
        this.isDownloadsActive = false
        this.isMoreActive = false
      } else if (tab === 'coming') {
        this.isHomeActive = false
        this.isSearchActive = false
        this.isComingSoonActive = true
        this.isDownloadsActive = false
        this.isMoreActive = false
      } else if (tab === 'downloads') {
        this.isHomeActive = false
        this.isSearchActive = false
        this.isComingSoonActive = false
        this.isDownloadsActive = true
        this.isMoreActive = false
      } else {
        this.isHomeActive = false
        this.isSearchActive = false
        this.isComingSoonActive = false
        this.isDownloadsActive = false
        this.isMoreActive = true
      }
    }
  },
  mounted () {
    this.$router.push({ path: 'home' })
  }
}
</script>

<style>
a{
  text-decoration: none;
}
body {
  font-family: "Roboto", sans-serif;
  margin: 0px;
  padding: 0px;
  background-color: black;
}

.flexColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flexStart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flexBetween {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
}

.flexAround {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chromecastWrapper {
  position: fixed;
  z-index: 99;
  bottom: 65px;
  right: 10px;
}

.chromecast {
  background-color: #353535;
  border-radius: 100%;
  width: 55px;
  height: 55px;
}

.chromecast i {
  color: white;
  font-size: 25px;
}

.footerNavWrapper {
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
}

.footerNav {
  padding: 10px 25px;
  background-color: #1a1a1a;
  display: flex;
}

.navIcon {
  color: #5f5f5f;
}

.navIcon i {
  font-size: 20px;
}
.navIcon span {
  font-size: 10px;
}

.activeTab {
  color: white;
}

.body-content {
  margin-bottom: 60px;
}
</style>
