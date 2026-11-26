<script setup>
    import TabelaPassageiros from './views/TabelaPassageiros.vue'
</script>

<template>
    <header>
        <nav class="nav-bar">
            <div class="logo">
                <a>GoCheck 📍</a>
            </div>
            <div class="nav-links">
                <ul>
                    <li><a href="relacaoviagens.html">Início</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <div class="card-tab">
            <TabelaPassageiros/>
        </div>
    </main>
</template>

<style scoped>

</style>
