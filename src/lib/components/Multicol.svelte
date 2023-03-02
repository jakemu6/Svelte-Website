<script>
</script>

<div class="flexContainer">
    <div class="item x" style="width: 65%;">
            <slot name="contOne"/>
    </div>
    <div class="item y" style="width: 32%;">
        <div class="fixed">
            <slot name="contTwo"/>
        </div>
    </div>
</div>

<style>
    @media (max-width: 768px) {
        .item {
            min-width: 100%;
            min-height: auto;
            margin-bottom: 2rem;
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
        top: 2rem;
        max-height: 100vh;
        z-index: 50;
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .fixed::-webkit-scrollbar {
        display: none;
    } 
    .flexContainer {
        margin: auto;
        max-width: 1536px;
        padding: 2rem;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3%;
    }


</style>