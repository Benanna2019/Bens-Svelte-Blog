<script context="module">
    export async function preload() {
        const res = await this.fetch(`blog/recentPosts.json`);
        const posts = await res.json();
        return { posts };
    }
</script>

<script>
    import { fly } from "svelte/transition";
    import { goto } from "@sapper/app";
    export let segment;
    export let posts;

    function doThing() {
        console.log("doing the thing");
        goto("/blog");
    }
</script>

<style>
    .two-col {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-column-gap: 1em;
        margin-top: 2rem;
        height: 100vh;
    }

    .blog-post {
        display: flex;
        justify-content: center;
        width: 90%;
        margin-left: 1em;
        overflow: scroll;
    }

    aside {
        padding: 1rem;
        font-size: 1rem;
    }

    ul {
        list-style: disc;
        padding-inline-start: 0;
    }

    li {
        margin-bottom: 0.3em;
    }

    button {
        height: 2rem;
        width: inherit;
        border-radius: 7px;
        outline: none;
        border: none;
        color: white;
        text-shadow: 1px 0 2px black;
        background: linear-gradient(#e76e6e, #a020f5);
    }

    button:hover {
        cursor: pointer;
    }
</style>

<div class="two-col">
    <div class="blog-post">
        <slot />
    </div>
    {#if segment}
        <aside transition:fly={{ x: 100 }}>
            <h4>Post Archive</h4>
            <ul>
                {#each posts as post}
                    <li>
                        <a
                            rel="prefetch"
                            href="blog/{post.slug}">{post.title}</a>
                    </li>
                {/each}
            </ul>
            <button on:click={doThing}>All Blog Posts</button>
        </aside>
    {/if}
</div>
