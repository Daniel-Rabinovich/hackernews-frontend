
<div class="nav">
    <div><a href="/0">Hackernews</a></div>
</div>


<slot></slot>


<style>

.nav {
    display:grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    
}
.nav > div {
    background:#e9ddca;
    text-align:center;
}
a {
    color:#000000;
    display:block;
    padding:10px;
    decoration: none;
    font-weight:700;
}

</style>

