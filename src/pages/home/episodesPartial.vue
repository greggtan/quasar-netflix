<template>
  <div>
    <div class="seasonSpan bodyPadding">
      <span class="greySpan">Season 1</span>
    </div>

    <div v-for="episode in episodesArray" :key="episode.episode"  class="episodeDivWrapper bodyPadding">
      <div class="episodeDiv flexBetween">
        <div class="leftSection flexStart">
          <div class="thumbnail">
            <img :src="episode.episodeThumbnail" />
          </div>

          <div class="episodeTitleDiv">
            <span class="episodeTitle">{{episode.episode}}. {{episode.title}}</span>
            <br />
            <span class="greySpan episodeTimingSpan">{{episode.duration}}</span>
          </div>
        </div>

        <div class="rightSection">
          <i class="fas fa-download"></i>
        </div>
      </div>

      <div class="episodeDescription">
        <span>{{episode.episodeSynopsis}}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      episodesArray: JSON.parse(this.$store.getters['netflixStore/getEpisodesArray'])
      // episodesArray: this.$store.getters.getEpisodesArray
    }
  }
}
</script>

<style scoped>
#showDetailsDiv {
  margin-bottom: 100px;
}

.thumbnail {
  position: relative;
  z-index: 1;
  width: 33vw;

  display: flex;
  align-items: center;
  margin-top: 15px;
}

.thumbnail img {
  /* background-image: url("https://occ-0-64-58.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQuGxQnVSvPJTZ55DNdDTrcwRaZT95k2DwuNje9YdAYyFepO_W1WpKy029nvX6cfi1dhm8jStJpy_XnKbFyDzgER_70YHNs0m0cabOok42atdsI4.webp?r=463"); */
  /* width:250px;
    height:140px; */
  width: 33vw;
  z-index: 2;
  /* position: absolute; */
}

/* .playRing{
    border:1px solid white;
    border-radius:100%;
    height:30px;
    width:30px;
    z-index:5;
    position: relative;
    top:0px;
    left:45px;
} */

.playRing i {
  font-size: 12px;
  color: white;
}

.episodeTitleDiv {
  /* background-color: aqua; */
  margin-left: 10px;
}

.episodeTitle {
  color: white;
  line-height: 20px;
}

.rightSection {
  color: white;
  margin-right: 10px;
  font-size: 20px;
}

.episodeTimingSpan {
  font-size: 14px;
}

.episodeDescription {
  margin-top: 10px;
}

.episodeDescription span {
  color: #979797;
  font-size: 15px;
}
</style>
