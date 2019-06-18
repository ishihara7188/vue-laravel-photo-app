<template>
    <nav class="navbar">
        <RouterLink class="navbar__brand" to="/">
            Vue Lara Photo App.
        </RouterLink>
        <div class="navbar__menu">
            <div class="navbar__item">
                <button class="button">
                    <i class="icon ion-md-add"></i>
                    Submit a Photo
                </button>
            </div>
            <div class="navbar__item">
                user name
            </div>
            <div class="navbar__item">
                <RouterLink class="button button--link" to="/login">
                    Login / Register
                </RouterLink>
            </div>
        </div>
    </nav>
</template>
