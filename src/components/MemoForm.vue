<template>
  <div class='center'>
    <div class='input'>
      <input
          type='text'
          v-model='title'
          placeholder='タイトル'>
    </div>
    <div class='textarea'>
      <textarea
          v-model='content'
          placeholder='内容'>
      </textarea>
    </div>
    <div>
      <button @click='back'>戻る</button>
      <button @click='save'>保存</button>
      <button @click='clear'>クリア</button>
      <button @click='remove' v-if='memo.id'>削除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: [
    'memo'
  ],
  data () {
    return {
      title: this.memo.title,
      content: this.memo.content
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    save () {
      let memo = {
        title: this.title,
        content: this.content
      }
      if (this.memo.id) {
        memo.id = this.memo.id
      }
      if (this.title === null || this.title === undefined || this.title.trim() ==='') {
        alert('タイトルが空白のメモは保存できません')
      } else {
        this.$store.commit('save', memo)
        this.$router.push('/')
      }
    },
    clear () {
      this.title = null
      this.content = null
    },
    remove () {
      this.$store.commit('delete', this.memo.id)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: 30px;
}

input {
  border: 2px #f39800 solid;
  border-radius: 5px;
  background-color: #fff1cf;
  width: 90%;
}

textarea {
  border-radius: 10px;
  border: 2px #f39800 solid;
  background-color: #fff1cf;
  width: 90%;
  height: 30em;
}

button {
  width: 5em;
  margin: 3px;
}

.center {
  text-align: center;
}
</style>