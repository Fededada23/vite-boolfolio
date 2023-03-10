<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name:'SingleProject',
    data(){
        return{
            store,
            project: null,
            loading: true
        }
    },
    mounted(){
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.titolo}`).then((response) =>{
            if(response.data.success){
                this.project = response.data.results;
                this.loading = false;
            }
            else{
                this.$route.push({name: 'not_found'})
            }
        });
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="loading">
            <div class="col-12 d-flex justify-content-center align-items-center align">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12 my-3">
                <router-link class="btn btn-sm btn-primary" :to="{ name: 'projects'}">Torna Indietro</router-link>
            </div>
            <div class="col-12 mb-5">
                <div class="card w-25">
                    <img :src="project.project_image != null ? `${store.baseUrl}/storage/${project.project_image}` : 'https://picsum.photos/300/200'" :alt="project.id">
                    <div class="card-body">
                        <h5 class="card-title mb-4">{{project.titolo}}</h5>
                        <p class="card-text"><strong>Tipo: </strong><em class="badge bg-warning">{{project.type != null ? project.type.name : 'Nessun tipo'}}</em></p>
                        <p class="card-text">
                            <strong>Tech: </strong>
                            <em class="badge bg-primary" v-for="project in project.technologies" :key="project.id">
                                {{project.name_tech != '' ? project.name_tech : 'Nessun tipo'}}
                            </em>
                        </p>
                        <p class="card-text"><strong>Descrizione: </strong>{{project.descrizione}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>