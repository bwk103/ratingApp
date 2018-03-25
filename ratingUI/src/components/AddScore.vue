<template >
  <div class="new-score">
    <h1>Help us improve our website.</h1>
    <h3>To help us to continually improve our service, please tell us how you rated your experience of the FT website.</h3> 
    <div class="form">
      <div class="rating-btns">
        <input type="radio" name="rating" v-model="rating" value="1">1
        <input type="radio" name="rating" v-model="rating" value="2">2
        <input type="radio" name="rating" v-model="rating" value="3">3
        <input type="radio" name="rating" v-model="rating" value="4">4
        <input type="radio" name="rating" v-model="rating" value="5">5
        <input type="radio" name="rating" v-model="rating" value="6">6
        <input type="radio" name="rating" v-model="rating" value="7">7
        <input type="radio" name="rating" v-model="rating" value="8">8
        <input type="radio" name="rating" v-model="rating" value="9">9
        <input type="radio" name="rating" v-model="rating" value="10">10
      </div>
      <div>
        <textarea name="description" rows="15" cols="15" placeholder="Comments" v-model="comment"></textarea>
      </div>
      <div>
        <input type="button" value="Submit"  @click="addScore">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'NewScore',
  data () {
    return {
      rating: '',
      comment: ''
    }
  },
  methods: {
    async addScore () {
      await ScoreService.addScore({
        rating: this.rating,
        comment: this.comment
      })
      this.$router.push({ name: 'Thanks'})
    }
  }
}
</script>

<style type="text/css">

input[type=radio] {
  margin-left: 20px;
}
label {
  margin: 0;
  text-align: center;
  display: block;
}
.form textarea {
width: 500px;
padding: 10px;
border: 1px solid #e0dede;
outline: none;
font-size: 12px;
}
.form div {
margin: 20px;
}
input[type=button] {
background: #4d7ef7;
color: #fff;
padding: 10px 80px;
text-transform: uppercase;
font-size: 12px;
font-weight: bold;
width: 520px;
border: none;
cursor: pointer;
}
</style>
