<template lang="html">
  <div id="jobs">
    <div class="row" v-for='job in jobsList'>
      <img :src='job.image' alt="job.image">
      <div class="job-info">
        <h2 class="title">{{job.title}}</h2><span> at </span>
        <h2 class="company"><a target="_blank" :href='job.companyWebsite'>{{job.company}}</a></h2>
        <p><b>{{job.workDate}}</b> on <b>{{job.contractType}}</b></p>
      </div>
      <h3>Activities :</h3>
      <ul class="job-activities">
        <li v-for='activity in job.activities'>{{activity}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Jobs extends Vue {
  @Prop() public jobsList: any[] = [
    {
      image: require('./../assets/sogeres-logo.png'),
      title: 'Order Piker', contractType: 'interim contract',
      company: 'Sogeres',
      workDate: '2018, 1 month',
      companyWebsite: 'http://www.sogeres.fr/',
      activities: [
        'Preparation of meal trays in a cold room',
        'Shipments of fresh products from stock in strict quantities',
        'Bagging of picnics',
        'Cold room cleaning',
      ],
    },
    {
      image: require('./../assets/clustaar-logo.png'),
      title: 'Front-end Developer',
      contractType: 'internship contract',
      company: 'clustaar.',
      workDate: '2018, 2 months',
      companyWebsite: 'http://clustaar.com/',
      activities: [
        'Development of an online chatbot creation platform on an angular stack with typescipt',
        'Scrum  organization : daily stand-up meeting, sprint...',
        'Daily use of Github, Heroku and mongodb',
      ],
    },
    {
      image: require('./../assets/saint-gobain-logo.png'),
      title: 'Network Technician', contractType:
      'internship contract',
      company: 'Saint-Gobain',
      workDate: '2017, 2 months',
      companyWebsite: 'https//www.saint-gobain.com/',
      activities: [
        'Users support',
        'Network maintenance: hardware change, rooms wiring...',
        'Wiring of new phones connections and enrolling mobile phones using Mobileiron',
      ],
    },
    {
      image: require('./../assets/general-cable-logo.png'),
      title: 'Network Technician',
      contractType: 'internship contract',
      company: 'General Cable',
      workDate: '2013, 1 week',
      companyWebsite: 'https://www.generalcable.com/',
      activities: [
        'Daily backup of company data',
        'Remote technical assistance with Teamviewer',
        'Workstation maintenance',
      ],
    },
  ];
}
</script>

<style lang="scss">
@import './../sass/mrpink.io';

#jobs {
  margin: 0 8px;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
    .row {
      width: 100%;
    }
  }
  .row {
    margin: auto;
    margin-bottom: 8px;
    border-radius: 6px;
    background: $grey-light;
    padding: 1em 1em 0.5em 1em;
    width: 80%;
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
}
</style>
