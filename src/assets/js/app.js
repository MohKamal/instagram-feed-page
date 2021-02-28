Vue.component('nav-bar', {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light nav-bottom-border fixed-top bg-white">
        <div class="container custom-container">
            <a class="navbar-brand" href="#"><img src="assets/images/logo.png" class="img-fluid" /></a>
            <div class="navbar-row justify-content-end">
                <form class="d-flex m-auto hide-sm">
                    <input class="search-input me-2" type="search" placeholder="Search" aria-label="Search">
                </form>
                <ul class="navbar-nav navbar-sm mb-2 mg-sm-0">
                    <li class="nav-item mx-1 mx-sm-1">
                        <a class="nav-link active" aria-current="page" href="#">
                            <svg aria-label="Accueil" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                        </a>
                    </li>
                    <li class="nav-item mx-1 mx-sm-1">
                        <a class="nav-link" href="#">
                            <svg aria-label="Direct" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </a>
                    </li>
                    <li class="nav-item mx-1 mx-sm-1">
                        <a class="nav-link" href="#">
                            <svg aria-label="Trouver des personnes" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path clip-rule="evenodd" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z" fill-rule="evenodd"></path></svg>
                        </a>
                    </li>
                    <li class="nav-item mx-1 mx-sm-1">
                        <a class="nav-link" href="#">
                            <svg aria-label="Fil d’activité" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        </a>
                    </li>
                    <li class="nav-item mx-1 mx-sm-1">
                        <a class="nav-link" href="#">
                            <img class="img-fluid rounded-circle nav-profile-img" src="assets/images/profile.jpg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
});

Vue.component('sidebar-user', {
    props: ["img", "username", 'hint'],
    template: `
    <div class="row align-items-center my-1">
        <div class="col-2">
            <img :src="img" class="img-fluid rounded-circle" />
        </div>
        <div class="col-5">
            <h5 class="sidebar-username m-0">{{ username }}</h5>
            <span class="sidebar-name">{{ hint }}</span>
        </div>
        <div class="col-2">
            <a href="#" class="btn-subsribe-suggestion">Follow</a>
        </div>
    </div>`
});

Vue.component('sidebar-profile', {
    template: `
    <div class="row align-items-center my-1">
        <div class="col-2">
            <img src="assets/images/profile.jpg" class="img-fluid rounded-circle" />
        </div>
        <div class="col-5">
            <h5 class="sidebar-username m-0">karlex.ma</h5>
            <span class="sidebar-name">Karlex</span>
        </div>
        <div class="col-2">
            <a href="#" class="btn-change-profile">Switch</a>
        </div>
    </div>`
});

Vue.component('post', {
    data: function() {
        return {
            writing: false,
            moreClass: false,
        }
    },
    props: {
        post: Object
    },
    methods: {
        commenting: function(event) {
            if (event.target.value.length > 1) {
                this.writing = true;
            } else {
                this.writing = false;
            }
        },
        changeMore: function() {
            this.moreClass = !this.moreClass;
        }
    },
    template: `
    <div class="container bg-white p-0 post my-5">
        <div class="row p-3">
            <div class="col-1 pg-sm-0">
                <button class="post-logo-btn flat-btn p-0" @mouseover="$emit('hover-on', post.id)">
                    <img :src="post.logo" class="img-fluid rounded-circle">
                </button>
            </div>
            <div class="col-10">
                <h5 class="post-title m-0"><a href="#">{{ post.username }}</a></h5>
                <p class="tags m-0">
                    <a class="post-location" href="#"> {{ post.location }}</a>
                </p>
            </div>
            <div class="col-1 post-burger">
                <button class="post-burger-btn" @click.prevent data-bs-toggle="modal" data-bs-target="#postOptionsModal">
                    <svg aria-label="Plus d’options" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img :src="post.img" class="img-fluid p-0">
            </div>
        </div>
        <div class="row p-3">
            <div class="col-8">
                <a href="#">
                    <svg aria-label="likes" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                </a>
                <a href="#" class="mx-3">
                    <svg aria-label="Commenter" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                </a>
                <a href="#">
                    <svg aria-label="Partager la publication" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                </a>
            </div>
            <div class="col-4 post-save">
                <a href="#">
                    <svg aria-label="Enregistrer" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                </a>
            </div>
            <div class="col-12 my-2">
                <a href="#" class="post-likes my-2">{{ new Intl.NumberFormat().format(post.likes) }} likes</a>
            </div>
            <div class="col-12">
                <div class="description">
                    <span><a href="#" class="post-user">{{ post.username }}</a></span>
                    <div :class="{ 'more': !this.moreClass }" v-html="post.description"></div>
                    <a v-if="!moreClass" class="more-btn" href="javascript:void(0);" @click="changeMore">more</a>
                </div>
            </div>
            <div class="col-12 mt-4">
                <p class="m-0">
                    <a href="#" class="post-tag" v-for="tag in post.tags"> {{ tag }}</a>
                </p>
            </div>
            <div class="col-12">
                <a href="#" class="post-comments-action">View all {{ new Intl.NumberFormat().format(post.comments_count) }} comments</a>
            </div>
            <div class="col-12">
                <div class="comment" v-for="comment in post.comments">
                    <span><a href="#" class="post-comment-user">{{ comment.username }}</a></span>
                    <span v-html="comment.comment"></span>
                    <a href="#" class="post-comment-like">
                        <svg aria-label="likes" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    </a>
                </div>
            </div>
            <div class="col-12">
                <a href="#" class="post-time" :title="post.date">{{ post.time }} ago</a>
            </div>
            <div class="col-12">
                <form>
                    <div class="row post-comment-form pt-3 mt-2">
                        <div class="col-1 d-flex justify-content-center">
                            <button class="flat-btn emojis-btn" @click.prevent>
                                <svg aria-label="Emoji" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                            </button>
                        </div>
                        <div class="col-9 d-flex justify-content-center">
                            <input placeholder="Ajouter un commentaire..." class="post-comment-input" @keyup="commenting"/>
                        </div>
                        <div class="col-2 text-center">
                            <a href="#" class="post-comment-publish-btn" :class="{ 'post-comment-input-disabled' : !writing}" >Post</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>`
});

var vm = new Vue({
    el: "#root",
    data: {
        suggestions: [],
        posts: [],
        current_post_id: -1,
        current_post: null,
    },
    methods: {
        getCurrentPost: function(event) {
            this.current_post_id = event;
            this.current_post = vm.posts.find(obj => {
                return obj.id === event
            });
        }
    },
    created: function() {
        // Alias the component instance as `vm`, so that we
        // can access it inside the promise function
        var vm = this;
        // Fetch our array of posts from an API
        $.getJSON("assets/json/suggestions.json", function(data) {
            vm.suggestions = data;
        });
        // Fetch our array of posts from an API
        $.getJSON("assets/json/posts.json", function(data) {
            vm.posts = data;
        });
    }

});

// Jquery

$(document).ready(function() {
    $('.emojis-btn').popover({
        container: 'body',
        title: "Emoji's",
        animation: true,
        html: true,
        placement: "top",
        content: function() {
            var btns = '<div class="row">';
            var codes = ['&#128507;', '&#128508;', '&#128509;', '&#128510;', '&#128511;', '&#128512;', '&#128513;', '&#128514;', '&#128515;', '&#128516;', '&#128517;'];
            $.each(codes, function(key, value) {
                btns += `<div class="col-3"><a href="javascript:void(0)" class="flat-btn" data-value="${value}"><span>${value}</span></a></div>`;
            });
            btns += '</div>'
            return btns;
        }
    });

    $('.post-logo-btn').popover({
        container: 'body',
        title: function() {
            return getHeader();
        },
        animation: true,
        template: getTemplate(),
        html: true,
        placement: "bottom",
        content: function() {
            return getBody();
        }

    });
});

function getHeader() {
    return `
        <div class="row">
            <div class="col-md-3">
                <img src="${vm.current_post.logo}" class="img-fluid rounded-circle">
            </div>
            <div class="col-md-9">
                <h6 class="m-0">${vm.current_post.username}</h6>
                <span class="sub-username">${vm.current_post.username.toUpperCase()}</span>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.bugatti.com%2Flegal-notices-social-media%2F&e=ATMgmTyR4-WlxAyUsFgON5J0G4-Rm1-brlqLk_Fo7x_3QdKm5d29-Wu769IITAeJTe2zCViKPl8oU2a7_kUFZHQ&s=1"><p class="user-link mt-3 mb-1">https://l.instagram.com/?u=https%3A%2F%2Fwww.bugatti.com%2Flegal-notices-social-media%2F&e=ATMgmTyR4-WlxAyUsFgON5J0G4-Rm1-brlqLk_Fo7x_3QdKm5d29-Wu769IITAeJTe2zCViKPl8oU2a7_kUFZHQ&s=1</p></a>
            </div>
        </div>`;
}

function getBody() {
    return `
        <div class="row p-4">
            <div class="col-md-4 text-center">
                <p class="m-0 font-weight-bold">${new Intl.NumberFormat().format(1216)}</p>
                <span class="sub-username">posts</span>
            </div>
            <div class="col-md-4 text-center">
                <p class="m-0 font-weight-bold">13.8m</p>
                <span class="sub-username">followers</span>
            </div>
            <div class="col-md-4 text-center">
                <p class="m-0 font-weight-bold">266</p>
                <span class="sub-username">following</span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 p-0">
                <img src="assets/images/preview_01.jpg" class="img-fluid">
            </div>
            <div class="col-md-4 p-0">
                <img src="assets/images/preview_02.jpg" class="img-fluid">
            </div>
            <div class="col-md-4 p-0">
                <img src="assets/images/preview_03.jpg" class="img-fluid">
            </div>
        </div>
        <div class="row p-4">
            <div class="col-md-6">
                <a href="javascript:void(0);" class="py-2 text-center popover-btn">Message</a>
            </div>
            <div class="col-md-6">
                <a href="javascript:void(0);" class="py-2 text-center popover-btn">Following</a>
            </div>
        </div>
    `;
}

function getTemplate() {
    return `
    <div class="popover popover-edit" role="tooltip">
        <div class="popover-arrow"></div>
        <h3 class="popover-header header-edit"></h3>
        <div class="popover-body popover-body-edit"></div>
    </div>`;
}