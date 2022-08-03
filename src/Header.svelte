<script lang="ts">
    const srcGitHub: string = '/images/GitHub-Mark-120px-plus.png';
    const href: string = 'https://github.com/Otohito-Fuse/randomuse';
</script>

<header>
    <div class="wrapper">
        <div class="header-left">
            <h1>Randomuse</h1>
        </div>
        <div class="header-right">
            <a {href} target="_blank" rel="noopener noreferrer">
                <img
                    draggable="false"
                    class="img-github"
                    src={srcGitHub}
                    alt="GitHub link"
                />
            </a>
        </div>
    </div>
</header>

<style>
    header {
        width: 100%;
        height: 80px;
        margin: 0;
        background-color: #fbfbfb;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .wrapper {
        max-width: 1000px;
        height: 80px;
        margin: 0 auto;
        display: -webkit-box; /* old Android */
        display: -webkit-flex; /* Safari etc. */
        display: -ms-flexbox; /* IE10        */
        display: flex;
        -webkit-align-items: center; /* Safari etc. */
        -ms-align-items: center; /* IE10        */
        align-items: center;
        justify-content: space-between;
    }

    .header-left {
        padding-left: 30px;
        display: -webkit-box; /* old Android */
        display: -webkit-flex; /* Safari etc. */
        display: -ms-flexbox; /* IE10        */
        display: flex;
        -webkit-align-items: center; /* Safari etc. */
        -ms-align-items: center; /* IE10        */
        align-items: center;
    }

    .header-right {
        padding-right: 30px;
        display: -webkit-box; /* old Android */
        display: -webkit-flex; /* Safari etc. */
        display: -ms-flexbox; /* IE10        */
        display: flex;
        -webkit-align-items: center; /* Safari etc. */
        -ms-align-items: center; /* IE10        */
        align-items: center;
    }

    .img-github {
        width: 30px;
        image-rendering: pixelated;
    }

    h1 {
        color: #13aff1;
    }
</style>
