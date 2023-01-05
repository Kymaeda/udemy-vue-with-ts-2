<script setup lang="ts"></script>

<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input">
        <p>name: </p>
        <input />
      </div>
      <div class="input">
        <p>age: </p>
        <input />
      </div>
    </div>
    <button class="submit-btn">post</button>
  </div>
</template>

<style scoped>
.form-container {
  display: flexbox;
  flex-direction: column;
  width: 1280px;
  padding: 20px;
  border-radius: 5px;
  background-color: gray;
}
.input-container {
  margin-bottom: 10px;
}
.input {
  padding: 10px;
  display: flex;
  justify-content: center;
  line-height: 35px;
}

.input span {
  font-weight: bold;
  font-size: 20px;
}

.input p {
  font-weight: bold;
  font-size: 20px;
  margin: 0 10px;
  line-height: 35px;
  width: 80px;
  text-align: right;
}

/* hegiht と line-heightの違いは？？？？インラインかブロックかの違い？ */
.input input {
  height: 35px;
  width: 200px;
  border-radius: 5px;
}

.submit-btn {
  width: 80px;
}
</style>
