<template>
    <div class="categories">
        <h1>Categories</h1>
        <div class="d-sm-block d-md-none">
            <div class="category-list">
                <div class="category-item item-color-1">
                   <router-link class="routerlink" to="/eventsuai"><h2>Events UAI</h2></router-link> 
                </div>
                <div class="category-item item-color-2">
                   <router-link class="routerlink" to="/eventsormawa"><h2>Events ORMAWA</h2></router-link> 
                </div>
                <div class="category-item item-color-3">
                   <router-link class="routerlink" to="/eventsukkm"><h2>Events UKKM</h2></router-link>
                </div>
            </div>
        </div>
        <div class="d-none d-md-block">
            <div class="category-list-dk">
                <div class="category-item-dk item-color-1">
                    <router-link class="routerlink" to="/eventsuai"><div><img src="../assets/img/category.png" alt=""></div></router-link>
                    <h2>Events UAI</h2>
                </div>
                <div class="category-item-dk item-color-2">
                    <router-link class="routerlink" to="/eventsormawa"><div><img src="../assets/img/category.png" alt=""></div></router-link>
                    <h2>Events ORMAWA</h2>
                </div>
                <div class="category-item-dk item-color-3">
                      <router-link class="routerlink" to="/eventsukkm"><div><img src="../assets/img/category.png" alt=""></div></router-link>
                    <h2>Events UKKM</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'categories-view'
}
</script>

<style>

</style>