<template>
  <v-container>
    <v-row>
     
      <v-col cols="4">
        <h1>About Me</h1>
       <ul>
         <li>born</li>
         <li>1989 - 2 - 19</li>
       </ul>
       <br><br>
        <h2>Contact me</h2>
        <br>
        <ul>
          <li>phone number</li>
          <li>09362532122</li>
          <br>
          <hr />
          <br>
          <li>Email Address</li>
          <li>mrtz.mrtzi.1989@gmail.com</li>
        </ul>
      </v-col>
       <v-col cols="12">
         <TimeLine />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
};
</script>