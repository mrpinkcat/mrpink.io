<template>
  <div class="job-card">
    <img v-if='job.image' :src='job.image' alt="job.image">
    <div class="job-info">
      <h2 class="title">{{job.title}}</h2><span> chez </span>
        <h2 class="company"><a class="link" target="_blank" :href='job.companyWebsite'>{{job.company}}</a></h2>
      <p><b>{{job.workDate}}</b> en <b>{{job.contractType}}</b></p>
    </div>
    <h3>Activités :</h3>
    <ul class="job-activities">
      <li v-for='activity in job.activities' :key="activity">{{activity}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class JobCard extends Vue {
  @Prop() private job!: any;
}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';


.job-card {
  box-shadow: rgb(200, 200, 200) 2px 2px 5px;
  margin: auto;
  margin-bottom: 8px;
  background: white;
  padding: 1em 1em 0.5em 1em;
  width: 100%;
  box-sizing: border-box;
  @include sm {
    width: calc(100% - (8px * 2) - 1em);
  }
  img {
    width: 175px;
    float: right;
    @include sm {
      float: none;
      display: block;
      margin: auto;
    }
  }
  h3 {
    margin: 0.75em 0 0.30em 0;
  }
  .job-info {
    display: inline-block;
    h2 {
      margin-top: 0;
      margin-bottom: 0.35em;
      @include sm {
        margin-bottom: 0;
      }
    }
    .title {
      display: inline-block;
      @include sm {
        margin-top: 0.35em;
      }
    }
    span {
      font-size: 1.25em;
    }
    .company {
      display: inline-block;
    }
  }
  .job-activities {
    margin: 0;
  }
}
</style>
