<template>
  <div>
    <div class="trailersDiv">
      <div class="trailerDivWrapper bodyPadding flexCenter">
        <div class="trailerDiv">
          <img :src="trailerSrc" />

          <span>Season 1 Trailer: Never Have I Ever</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      trailerSrc:"http://http://159.203.188.129:1313/public/episodeImages/trailerImg.jpg"
    }
  }
}
</script>


<style scoped>
.trailerDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.trailerDiv img {
  margin-bottom: 10px;
}

.trailerDiv span {
  color: white;
}
</style>
