<template>
   <div>
    <section class="destination">
    <h1>{{experience.name}}</h1>
    <button @click="Back">Go Back</button>
    <button @click="Destination">main destination</button>
    <div class="destination-details">
        <img :src="`/images/${experience.image}`" :alt="experience.name">
        <p>{{experience.description}}</p>
    </div>
 </section>
 <section class="experiences">
    <h2>Other Experiences in {{destination.name}}</h2>
    <div class="cards">
        <router-link v-for="Otherexperience in destination.experiences" :to="{name:'ExperiensDetails',params:{id:destination.id,slug:destination.slug,Exslug:Otherexperience.slug}}" :key="Otherexperience.slug" >
            <ExperienceCard :experience="Otherexperience" v-if="Otherexperience.name!=experience.name"/>
        </router-link>
    </div>
 </section>
   </div>
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
export default {
    components:{
        ExperienceCard
    },
    props:['id','slug','Exslug'],
data(){
    return{
        destinations:sourceData.destinations
    }
},
computed:{
   destination(){
    return this.destinations.find(destination => destination.id == parseInt(this.id))
    },
   experience(){
    return this.destination.experiences.find(experience => experience.slug == this.Exslug)
    }
},
methods:{
    Back(){
        this.$router.go(-1)
    },
    Destination(){
        this.$router.push({name:'destinations.show',params:{id:this.destination.id,slug:this.destination.slug}})
    }
}
}
</script>

<style>

</style>