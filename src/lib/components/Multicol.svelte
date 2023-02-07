<script>
</script>

<div class="flexContainer">
    <div class="item x" style="width: 58%;">
            <slot name="contOne"/>
    </div>
    <div class="item y" style="width: 40%;">
        <div class="fixed">
            <slot name="contTwo"/>
        </div>
    </div>
</div>

<style>
    .item {
        background-color: aqua;
    }

    @media (max-width: 480px) {
        .item {
            min-width: 100%;
            min-height: auto;
        }

        .x {
            order: 2;
        }
        .y{
            order: 1;
        }
    }

    .fixed {
        position: sticky;
        top: 0px;
        max-height: 100vh;
        z-index: 50;

        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        
        /* padding-right: 2rem;
        padding-top: 2rem; */

    }
    .fixed::-webkit-scrollbar {
        display: none;
    } 

    .flexContainer {
        margin: auto;
        max-width: 1536px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2%;

    }


</style>