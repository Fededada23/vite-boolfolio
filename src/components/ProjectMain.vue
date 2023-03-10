<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default{
    name: "ProjectMain",
    data(){
        return{
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000',
            
            // per il PAGINATE
            lastPage: null,
            currentPage: 1,
        }
    },
    components:{
        ProjectCard,
    },
    methods: {
        getProjects(project_page){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`, { params: { page: project_page }}).then((response) => {
                if(response.data.success) {
                    this.projects = response.data.results.data
                    this.currentPage = response.data.results.current_page
                    this.lastPage = response.data.results.last_page
                    this.loading = false
                }
                else {
                    
                }
            });
        }
    },
    mounted() {
        this.getProjects(this.currentPage);
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">BoolPress</h2>
            </div>
        </div>
        <div v-if="loading" class="col-12 d-flex justify-content-center">
            <div class="loader">
            </div>
        </div>
        <div v-else class="col-12 d-flex justify-content-center flex-wrap">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                    <ProjectCard :project="project" :baseUrl="baseUrl"></ProjectCard>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <nav>
                    <ul class="pagination">
                        <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getProjects(currentPage - 1)">Prev</button>
                        </li>
                        <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="item in lastPage" :key="item.id">
                            <button class="page-link" @click="getProjects(item)">{{item}}</button>
                        </li>
                        <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                            <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>
