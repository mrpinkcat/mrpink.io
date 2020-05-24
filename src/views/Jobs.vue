<template lang="html">
  <div id="jobs">
    <h2>Mon emploi actuel</h2>
    <div class="actual-job">
      <img src="https://www.kwalys.com/dist/images/kwalys-logo.svg" alt="Logo Kwalys">
      <div class="title">
        <h3>Développeur Full-Stack</h3><span> chez </span><h3><a href="https://kwalys.com/" target="_blank">Kwalys</a></h3>
      </div>
      <p>Kwalys est une entreprise <b>située à Chatou</b> (au dessus de paris) mais j'y ai principalement <b>travaillé en remote</b> durant mon contrat. Kwalys possèdait un <b>chiffre d’affaire de ? €</b> en 2019.</p>
      <p>Elle exerce dans le <b>domaine des chatbots</b>. Les chatbos sont des robots conversationnel en ligne qui on pour but de <b>remplacer les call centers</b>. Kwalys créée des chatbots <b>pour des entreprises comme chronopost</b>.</p>
      <p>Kwalys compte <b>3 employés en CDI</b> et <b>3 employés en contrat d'apprentisage</b>. Tout les employés en <b>contrat d'apprentisage sont des développeurs</b>. Il n'y a qu'un employé en CDI qui sait développer.</p>
      <div class="activities">
        <h3>Activités :</h3>
        <ul>
          <li><b>Intégration d'un design d'une application GPS</b></li>
          <li><b>Création et déploiement test d'un connecteur WhatsApp</b> avec un service tier. Un connecteur permet de lier nos chatbots sur la plateforme WhatsApp créé par Facebook.</li>
          <li><b>Création et déploiement du module de chatbox</b> (disponible dans la bulle bleu en bas à droite de ce site).</li>
          <li><b>Création et déploiement du site web <a href="https://kwalys.com/">kwalys.com</a>.</b></li>
          <li><b>Création et déploiement d'un connecteur Facebook Messenger</b> sans aucune dépendances. Un connecteur permet de lier nos chatbots sur la plateforme Messenger créé par Facebook.</li>
        </ul>
      </div>
    </div>
    <h2>Mes précedents empois</h2>
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
      title: 'Préparateur de Commande', contractType: 'contrat d\'interim',
      company: 'Sogeres',
      workDate: '2018, 1 mois',
      companyWebsite: 'http://www.sogeres.fr/',
      activities: [
        'Prépatrion de plateau repas dans des chambres froide.',
        'Expéditions de produits frais de stock en quantités strictes.',
        'Mise en sac des pique-niques.',
        'Don des restes au Resto Du Coeur.',
        'Nétoyage des chambres froides.',
      ],
    },
    {
      image: require('./../assets/clustaar-logo.png'),
      title: 'Développeur front-end',
      contractType: 'contrat de stage',
      company: 'clustaar.',
      workDate: '2018, 2 mois',
      companyWebsite: 'http://clustaar.com/',
      activities: [
        'Développement d\'une plateforme de création de chatbot en ligne sur une stack angular en Typescript.',
        'Organisation en Scrum : daily stand-up meeting, sprint...',
        'Utilisation quotidienne de Github, Heroku et mongodb.',
      ],
    },
    {
      image: require('./../assets/saint-gobain-logo.png'),
      title: 'Technicien réseau', contractType: 'contrat de stage',
      company: 'Saint-Gobain',
      workDate: '2017, 2 mois',
      companyWebsite: 'https://www.saint-gobain.com/',
      activities: [
        'Assistance utilisateurs.',
        'Maintenance du réseau : changement de matériel, câblage des salles...',
        'Câblage de nouvelles connexions téléphoniques et inscription des téléphones portables à l\'aide de Mobileiron.',
      ],
    },
    {
      image: require('./../assets/general-cable-logo.png'),
      title: 'Technicien réseau',
      contractType: 'contrat de stage',
      company: 'General Cable',
      workDate: '2013, 1 week',
      companyWebsite: 'https://www.generalcable.com/',
      activities: [
        'Sauvegarde quotidienne des données de l\'entreprise.',
        'Assistance technique à distance avec Teamviewer.',
        'Maintenance des postes de travail.',
      ],
    },
  ];
}
</script>

<style lang="scss">
@import './../sass/mrpink.dev';

#jobs {
  width: 80%;
  margin: 0 10%;
  padding-top: 50px + (8px * 2);
  @include sm {
    padding-top: 80px + (8px * 2);
  }

  .actual-job {
    display: flex;
    flex-direction: column;

    img {
      width: fit-content;
      margin-bottom: 20px;
    }

    .title {
      margin-bottom: 15px;

      h3 {
        margin: 0;
      }

      span {
        margin: 0 5px;
      }

      display: flex;
      align-items: flex-end;
    }

    p {
      margin: 10px 0;
    }
  }
}
</style>
