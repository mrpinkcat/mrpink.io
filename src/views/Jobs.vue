<template lang="html">
  <div id="jobs">
    <JobCard :job='job' v-for='job in jobsList'/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import JobCard from '@/components/JobCard.vue';

@Component({
  components: {
    JobCard,
  },
})
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
  }
}
</style>
