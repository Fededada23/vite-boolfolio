<script>
import { store } from '../store.js';

export default{
    name: "ProjectCard",
    props:{
        project: Object,
        
    },
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="card m-3">
        <div class="card-body">
            <div class="card-img-top">
                <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid" alt="">
            </div>
            <div class="card-title p-1">
                <h5>{{ project.title }}</h5>
                <p>
                    <em v-if="project.type">
                        <strong>Categoria</strong>: {{project.type.name}}
                    </em>
                    <em v-else>
                        Nessuna Categoria
                    </em>
                </p>
                <p>
                    <em>
                        <strong>Technologies</strong>:
                        <span class="badge bg-primary m-2" v-for="technology in projects.technologies" :key="technology.id">
                            {{technology.name}}
                        </span>
                    </em>
                </p>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-sm btn-success">Leggi l'articolo</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>
