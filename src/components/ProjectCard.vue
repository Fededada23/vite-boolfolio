<script>
export default{
    name: "ProjectCard",
    props:{
        project: Object,
        baseUrl: String,
    }
}
</script>

<template>
    <div class="card m-3">
        <div class="card-body">
            <div class="card-img-top">
                <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid" alt="">
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
                        <span class="badge bg-primary m-2" v-for="technology in project.technologies">
                            {{technology.name}}
                        </span>
                    </em>
                </p>
                <a href="#" class="btn btn-warning">
                    Leggi l'articolo
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>
