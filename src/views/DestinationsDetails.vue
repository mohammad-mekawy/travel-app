<template>
<div class="condition" v-if="destination">
 <section class="destination">
    <h1>{{destination.name}}</h1>
    <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{destination.description}}</p>
    </div>
 </section>
 <section class="experiences">
    <h2>Top Experiences in {{destination.name}}</h2>
    <div class="cards">
        <router-link v-for="experience in destination.experiences" :to="{name:'ExperiensDetails',params:{id:destination.id,slug:destination.slug,Exslug:experience.slug}}" :key="experience.slug" >
            <ExperienceCard :experience="experience"/>
        </router-link>
    </div>
 </section>
</div>
<!-- <router-view/> -->
</template>

<script>
import SourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
export default {
    components:{
        ExperienceCard
    },
    props:{
        id:{type:Number,required:true}
    },
data(){
    return{
        destinations: SourceData.destinations,
        // destinationId: parseInt(this.$route.params.id),
        // destination:null
    }
},
computed:{
    destination(){
        return this.destinations.find(destination => destination.id === this.id)
    }
},
// methods:{
//     async initData(){
//         const response= await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
//         this.destination = await response.json()
//     }
// },
// async created(){
//     this.initData()
//     // this.$watch(()=> this.$route.params,this.initData)
// }
}
</script>

<style>

</style>