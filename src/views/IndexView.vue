<template>
  <div>
    <ul v-if='hasMemos' class='list'>
      <li v-for='memo in memos' :key='memo.id'>
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">{{ memo.title }}</router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
    <div class='plus'>
      <router-link to='/new' class='line'>➕</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  computed: {
    hasMemos () {
      return this.$store.getters.getCount
    },
    memos () {
      return this.$store.getters.getAll.slice().sort(function (a, b) {
        return b.id - a.id
      })
    }
  }
}
</script>
<style>
.plus {
  text-align: right;
  width: 90%;
}

.line {
  text-decoration: none;
}

.list {
  counter-reset: list;
  list-style-type: none;
  font: 14px/1.6 'arial narrow', sans-serif;
  padding: 0;
}

.list li {
  position: relative;
  line-height: 30px;
  margin: 7px 0 10px 40px;
  padding-left: 10px;
  font-weight: bold;
  font-size: 14px;
  border-bottom: solid 1px orange;
  width: 90%;
}

.list li::before {
  counter-increment: list;
  content: counter(list);
  position: absolute;
  left: -30px;
  width: 30px;
  height: 32px;
  background: #f39800;
  text-align: center;
  color: #fff;
  top: 50%;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

</style>

