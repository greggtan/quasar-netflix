<template>
  <div>
    <router-link to="/home">
        <div class="backButtonWrapper">
        <div class="backButton">
            <i class="fas fa-times"></i>
        </div>
        </div>
    </router-link>

    <div class="headerDetailsWrapper">
      <div class="showDetails flexColumn">
        <img :src="dbMovieDetails[0].movieThumbnail" />

        <div class="ratings flexBetween">
          <span class="matchSpan">{{dbMovieDetails[0].movieMatchRating}} match</span>
          <span class="greySpan">{{dbMovieDetails[0].movieYear}}</span>
          <div class="ageRating">
            <span>{{dbMovieDetails[0].movieAgeRating}}</span>
          </div>
          <span class="greySpan">{{dbMovieDetails[0].movieSeasons}}</span>
          <div class="HD">
            <span>HD</span>
          </div>
        </div>

        <span class="watchSpan">Watch Season 1 now</span>

        <div class="playButtonDetail flexCenter">
          <i class="fas fa-play"></i>
          <span>Play</span>
        </div>

        <span class="synopsis">{{dbMovieDetails[0].movieSynopsis}}</span>
      </div>

      <div class="cast">
        <span class="greySpan">Cast: {{dbMovieDetails[0].movieCast}}</span>
        <br />
        <span class="greySpan">Creators: {{dbMovieDetails[0].movieCreators}}</span>
      </div>

      <div class="iconsDiv flexStart">
        <div class="movieOptionDetails flexColumn">
          <i class="fas fa-plus"></i>
          <span>My List</span>
        </div>
        <div class="movieOptionDetails flexColumn">
          <i class="far fa-thumbs-up"></i>
          <span>Rate</span>
        </div>
        <div class="movieOptionDetails flexColumn">
          <i class="fab fa-telegram-plane"></i>
          <span>Share</span>
        </div>
      </div>

      <div class="showNavBar flexBetween">
        <!-- pass movieEpisodes array of objects to episodes route -->
        <!-- <router-link :to="{name:'Episodes', params: {episodesArray:dbMovieDetails[0].movieEpisodes}}"> -->
          <router-link to="/episodes">
          <div v-bind:class="{activeShowTab:episodeTabActive}" @click="setActive('episode')">
            <span>EPISODES</span>
          </div>
        </router-link>

        <router-link to="/trailers">
        <div v-bind:class="{activeShowTab:trailerTabActive}" @click="setActive('trailer')">
          <span>TRAILERS & MORE</span>
        </div>
        </router-link>

      <router-link to="/moreLikeThis">
        <div v-bind:class="{activeShowTab:moreTabActive}" @click="setActive('more')">
          <span>MORE LIKE THIS</span>
        </div>
      </router-link>

      </div>

    </div>

    <!-- load children data -->
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      movieID: -1,
      dbMovieDetails: [],
      episodeTabActive: true,
      trailerTabActive: false,
      moreTabActive: false
    }
  },
  //  get movieID from /home route through params! Store in data() for interpolation.
  created () {
    this.movieID = parseInt(this.$route.params.movieID)
  },
  methods: {
    //  onclick selection set class = active class
    setActive (tab) {
      if (tab === 'episode') {
        this.episodeTabActive = true
        this.trailerTabActive = false
        this.moreTabActive = false
      } else if (tab === 'trailer') {
        this.episodeTabActive = false
        this.trailerTabActive = true
        this.moreTabActive = false
      } else {
        this.episodeTabActive = false
        this.trailerTabActive = false
        this.moreTabActive = true
      }
    },
    //  findOne record using movieID (FOR NOW USE MANUAL API WRITTEN, CHANGE TO FEATHERS LATER)
    async loadMovieDetails () {
      const dbResponse = await fetch(`http://localhost:1314/movies/${this.movieID}`)
      const dbMovieDetails = await dbResponse.json()

      console.log(dbMovieDetails)

      //  store in local data() storage for interpolation
      this.dbMovieDetails = dbMovieDetails
      //  commit to mutator method, my object to store.
      this.$store.commit('netflixStore/addEpisodesArray', dbMovieDetails[0].movieEpisodes)
      console.log(this.$store.getters['netflixStore/getEpisodesArray'], 'added to vuex')
    }
  },
  mounted () {
    console.log(this.movieID, 'movieID passed in from home')

    this.loadMovieDetails()
    this.$router.push({ path: '/episodes' })
  }

}
</script>

<style>
.headerDetailsWrapper {
  padding-top: 45px;
}

.backButtonWrapper {
  position: fixed;
  right: 15px;
  top: 20px;
  z-index: 99;
}

.backButton {
  border-radius: 100%;
  background-color: #2f2f2f;
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.backButton i {
  color: white;
}

.showDetails {
  color: white;
  padding: 0px 15px 10px 15px;
  /* background-image: url('https://occ-0-64-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5KksxMnJrkw_dcJypT_UhPFzelf3xlXykdh8sV_IzEeE7SOJjB4TXhb_-nhmW4vql4p2jDa--NZk__UGCtl4aol1Aa-7jp2XC8SaRqS7mkmZPNsrm0O7G0av8b.jpg?r=4d2');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    -webkit-backdrop-filter: blur(1.5rem); */
}

.showDetails img {
  width: 50vw;
}

.ratings {
  margin-top: 8px;
  font-size: 13px;
  width: 70vw;
  margin-bottom: 15px;
}

.matchSpan {
  color: #8fff46;
  font-weight: 500;
  margin-right: 15px;
}

.greySpan {
  color: #a7a7a7;
  margin-right: 10px;
}

.ageRating {
  margin-right: 10px;
  background-color: #5b5b5b;
  padding: 2px 4px;
  border-radius: 2px;
}

.ageRating {
  font-size: 10px;
}

.HD {
  border: 2px solid #5b5b5b;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 10px;
}

.watchSpan {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
}

.playButtonDetail {
  background-color: red;
  width: 100%;
  padding: 7px 5px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}

.playButtonDetail i {
  margin-right: 10px;
}

.synopsis {
  font-size: 14px;
  font-weight: 500;
}

.cast {
  font-size: 12px;
  padding: 0px 15px;
}

.iconsDiv {
  padding: 20px 30px;
}

.movieOptionDetails {
  margin-right: 70px;
}

.movieOptionDetails i {
  color: white;
  margin-bottom: 10px;
  font-size: 22px;
}

.movieOptionDetails span {
  color: #a7a7a7;
  font-size: 12px;
}

.showNavBar {
  padding: 0px 15px 30px 15px;
}

.episodeDivWrapper {
  padding-bottom: 15px;
}

.bodyPadding {
  padding-left: 15px;
  padding-right: 15px;
}

.showNavBar span {
  color: #a7a7a7;
  font-size: 15px;
  font-weight: 500;
}

.activeShowTab span {
  color: white;
}
</style>
