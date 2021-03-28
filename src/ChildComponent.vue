<template>
    <div class="container">
        <p>{{ message }}</p>
        <br>
        <local-component></local-component>
        
    </div>
</template>

<script>
import { LocalComponent } from './LocalComponent.vue'

export default {
    components: {
        LocalComponent
    }

}


</script>

