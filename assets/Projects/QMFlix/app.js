//TODOS:
/*
qmflix adjustments

-main Header
 height: 56.25vw;
 position: absolute;

- navbar bg-transparent to black by scroll

- remove navbar placeholder

- add placeholder for mainHeader background to align the cards afterwards or add something like:
padding: 50px 100px;
position: relative;
top: 52vw

*/

/*
new Vue({
  el: "#vue-app",
  data: {
    name: "Chris",
    website: "www.google.de",
    dynamicAtag: '<a href="www.google.de">dynmaic Link</a>',
    available: false,
    nearby: false,
  },
  methods: {
    greet: function (time) {
      return "Good " + time + " " + this.name;
    },
  },
  computed:{
      compClasses: function(){
          return {
              red: this.available,
              nearby: this.nearby
          }
      }
  }
});
*/

class Movie{
  constructor(title="",imageSmall="",imageBig="",imagePosition="",imageSize="",tags="",description="",movieLink=""){
    this.title = title;
    this.imageSmall = imageSmall;
    this.imageSize = imageSize;
    this.imageBig = imageBig;
    this.imagePosition = imagePosition;
    this.imageSize = imageSize;
    this.tags = tags;
    this.description = description;
    this.movieLink = movieLink;
  }
}

var qmflix = new Vue({
    el: "#vm-flix",
    data: {
      showVideo: false,
      showSearch: false,
      search: '',
      searchContent:{
        styleObject: {
          // backgroundImage: `url('https://www.123mobilewallpapers.com/wp-content/uploads/2014/07/jordan_carver_gym_workout.jpg')`,
          // backgroundPosition: 'center',
        },
      },
      showModal: false,
      movie: new Movie("","https://images3.alphacoders.com/948/thumb-1920-948864.jpg"),
      modalContent:{
        title: "",
        imageSrc: "",
        tags: "",
        info: "",
        description: "",
        movieLink: "",
        styleObject: {
          backgroundImage: `url('https://www.123mobilewallpapers.com/wp-content/uploads/2014/07/jordan_carver_gym_workout.jpg')`,
          backgroundPosition: 'top',
        },
      },
      showContent: true,
      name: "$User",
      website: "www.google.de",
      dynamicAtag: '<a href="www.google.de">dynmaic Link</a>',
      available: false,
      nearby: false,
      featuredMovie: {
        title: 'The text next door',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea...',
        styleObject: {
          //backgroundImage: `url('https://www.123mobilewallpapers.com/wp-content/uploads/2014/07/jordan_carver_gym_workout.jpg')`,
          //backgroundImage: `url('https://ilarge.lisimg.com/image/15656670/1118full-sophie-mudd.jpg')`,
          //backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url("https://image.tmdb.org/t/p/original//sZb21d6EWKAEKZ9GrLQeMwX4cWN.jpg")`,
          // backgroundImage: `url('https://www.123mobilewallpapers.com/wp-content/uploads/2014/07/jordan_carver_gym_workout.jpg')`,
          backgroundImage: `url('https://image.tmdb.org/t/p/original//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg')`,
          // backgroundImage: `url('https://zoomgirls.net/download/sammy-brady-2-1920x1080.jpg')`,
          backgroundPosition: 'top',
        },
        /* sample URLs
        imageUrl: 'https://i.redd.it/ltdlas5w3ad51.jpg',
        imageUrl: 'https://www.tomswallpapers.com/large/201705/100318.jpg',
        imageUrl: 'https://img2.goodfon.com/wallpaper/nbig/c/f4/busty-model-smoke-pose-boobs.jpg',
        imageUrl: 'https://images3.alphacoders.com/948/thumb-1920-948864.jpg',
        */
        videoSrc: '',
      },
      secondFeaturedMovie: {
        title: 'Venom',
        description: 'While exploring space for new habitable worlds, a probe belonging to the bio-engineering corporation Life Foundation discovers a comet covered in symbiotic lifeforms...',
        styleObject: {
          backgroundImage: `url('https://images3.alphacoders.com/948/thumb-1920-948864.jpg')`,
          backgroundPosition: 'top',
        },
        videoSrc: '',
      },
      navbar: [
        { text: 'Originals', url :'#' },
        { text: 'Clips', url :'#' },
        { text: 'Recently Added', url :'#' },
      ],
      // title imageSmall imageBig backgroundPosition(top,center,bottom,etc) backgroundSize(cover,80%,etc) tags description movie-link
      moviebar:[
        {
          title: "Recently added",
          list: [
            new Movie("Avengers","https://wallpaperaccess.com/full/329583.jpg"),
            new Movie("Venom","https://images3.alphacoders.com/948/thumb-1920-948864.jpg"),
            new Movie("Stranger Things","https://wallpaperaccess.com/full/1087400.jpg"),
            new Movie("Guardians of the Galaxy","https://wallpaperaccess.com/full/267457.jpg"),
            new Movie("Pacific Rim","https://wallpapercave.com/wp/wp3212737.jpg"),
            new Movie("13 Reasons Why","https://i.pinimg.com/originals/9e/33/00/9e3300e8f5ec8d712029b165d36fe40c.jpg","https://image.tmdb.org/t/p/original//sZb21d6EWKAEKZ9GrLQeMwX4cWN.jpg","center","cover","Reasons,Drama","After a teenage girl's perplexing suicide, a classmate receives a series of tapes that unravel the mystery of her tragic choice.","https://www.youtube.com/watch?v=0XuOkYlUWIs"),
          ]
        },
        {
          title: "Originals",
          list: [
            new Movie("Avengers","https://wallpaperaccess.com/full/329583.jpg"),
            new Movie("Venom","https://images3.alphacoders.com/948/thumb-1920-948864.jpg"),
            new Movie("Stranger Things","https://wallpaperaccess.com/full/1087400.jpg"),
            new Movie("Guardians of the Galaxy","https://wallpaperaccess.com/full/267457.jpg"),
            new Movie("Pacific Rim","https://wallpapercave.com/wp/wp3212737.jpg"),
            new Movie("13 Reasons Why","https://i.pinimg.com/originals/9e/33/00/9e3300e8f5ec8d712029b165d36fe40c.jpg","https://image.tmdb.org/t/p/original//sZb21d6EWKAEKZ9GrLQeMwX4cWN.jpg","center","cover","Reasons,Drama","After a teenage girl's perplexing suicide, a classmate receives a series of tapes that unravel the mystery of her tragic choice.","https://www.youtube.com/watch?v=0XuOkYlUWIs"),
          ]
        },
        /*
        {
          title: "BIG on Netflix",
          list: [
            new Movie("Sophie Mudd", "https://i.pinimg.com/originals/bd/7c/2c/bd7c2cc01ed731b032d6e50576528cb0.gif", "https://ilarge.lisimg.com/image/15656670/1118full-sophie-mudd.jpg","top right","85%","Girl","Mudd utilizes social media to showcase her body and love for modeling. As of December 2019, she has over 1.5 million followers on her sophiemudd Instagram account. Currently, she’s the brand ambassador of Nike, Body Glove Girl, Frankies, Revolve, DIFF Eyewear, Bananhot, Beverly Hills Bikini Shop, Romeo Power Technology, Prix Workshop, Shadow Hill, Le Jolie, Cloudten, and more.","https://www.youtube.com/watch?v=3vba9b58DZM"),
            new Movie("Wendy Fiore","https://theviraler.com/wp-content/uploads/2019/11/busty-girls-01.gif","https://www.foxhq.com/wendy-fiore-dreamy-babe/5.jpg","right","80%","Action Girl","Wendy was born in Chicago, Illinois USA, on 21 December 1983 under the zodiac sign of Sagittarius. She is of Italian and Polish descent, but became a Roman Catholic as the religion of her own choice.", "https://www.youtube.com/watch?v=bCvNTobgEGk"),
            new Movie("Lucy Pinder","https://i.imgur.com/XBOJCoi.gif?noredirect","https://cdn.hipwallpaper.com/i/54/2/kwz9xE.jpg","inherit","cover","Playmate Girl","On 15 January 2008, Pinder made her presenter debut for Nuts TV. She presented the Nuts TV live show on six further occasions in February and March 2008 and also presented Overexposed, which was a series on Nuts TV giving hints and tips to the aspiring, amateur glamour photographer.","https://www.youtube.com/watch?v=CAxx7xUoYbc"),
            new Movie("Denise Milani","https://i.pinimg.com/originals/f5/47/58/f54758a04eb639703dfc217072958d57.gif","https://i.pinimg.com/originals/45/5d/f4/455df442ea8a77b55b823176cbb22801.jpg","center","cover","Glamour Girl","Famous for her curvaceous and busty figure, Denise Milani is a hugely successful pinup model who is counted amongst the most searched women on the web. At the peak of her career, she regularly outshone other internationally popular models, such as Veronica Varekova, Marisa Miller, Bar Refaeli, and Elle Macpherson in terms of Google hits.","https://www.youtube.com/watch?v=C0ufOlV6ThM"),
            new Movie("Sophie Mudd","https://i.pinimg.com/originals/43/1e/24/431e24c8197012e700b0aed8ef3c298b.gif","https://fhm.nl/wp-content/uploads/2019/04/37148226_374968083043596_4979023296965115904_edit3.jpg","right top","85%","Girl","Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?","https://www.youtube.com/watch?v=xkquGm-SfHw"),
            new Movie("Jessica Davies","https://iv1.lisimg.com/image/20177603/250full-jessica-davies.jpg","https://i.redd.it/pk14p04ewr111.jpg","center","cover","Nuts Girl","Jessica Davies no info currently","https://www.youtube.com/watch?v=trW4thhqgLs"),
            new Movie("","https://i.pinimg.com/originals/2d/43/6e/2d436e2157d24c1325fc35b6cf235be6.gif"),
            new Movie("Nicole Kopchak ","https://mma-user-upload.mixedmartialarts.com/2019-03/BadYawningBallpython-size_restricted.gif","https://i.ytimg.com/vi/AIWpJ9pPYTc/maxresdefault.jpg","inherit", "120%","Girl Shooting","Some Random Model","https://www.youtube.com/watch?v=Fgd0lvI4E_w"),
            new Movie("","https://64.media.tumblr.com/ececd9ed7623b7e20bb6cda657b78df5/tumblr_nmjm7sl9IK1sffjsdo1_400.gif"),
            new Movie("Rachel Williams","https://i.pinimg.com/originals/40/01/db/4001db0c170f35e21b4de2d05c479ac5.gif","https://i.pinimg.com/originals/b7/49/3e/b7493e5ad5797f0ee312483a06b990c2.png","right","85%","","In November 1985, Williams was discovered by a Click Model Management employee while visiting her father's studio. On the advice of the employee, Williams met with Click's owner Frances Grill. Grill deemed Williams too heavy to model but signed her to a conditional, one-year contract after Williams promised to lose weight.[3] Williams returned to school and, over the course of a year, lost twenty pounds. She returned to Click in October 1986, and renewed her contract.","https://www.youtube.com/watch?v=K8ZiinFuax4"),
            new Movie("","https://media.tenor.com/images/36048bcc8bb9c4acdae8f23aa6e591e1/tenor.gif"),
            new Movie("Nicole Kopchak ","https://thumbs.gfycat.com/AlertFrailHarlequinbug-size_restricted.gif","https://i.redd.it/rhnu08nrowt41.jpg","center", "cover","Girl Shooting","Some Random Model","https://www.youtube.com/watch?v=sK5gyy5vX9M"),
          ]
        },
        {
          title: "Card on Netflix",
          list: [
            new Movie("Road", "https://images.wallpaperscraft.com/image/road_night_light_turn_120225_2000x3000.jpg"),
            new Movie("Space", "https://images.wallpaperscraft.com/image/space_planets_shine_140681_2000x3000.jpg"),
            new Movie("Boat Night Sky", "https://images.wallpaperscraft.com/image/boat_starry_sky_night_126116_2000x3000.jpg"),
            new Movie("Flower Water", "https://images.wallpaperscraft.com/image/flower_water_moisture_132229_2000x3000.jpg"),
            new Movie("Dark Fog", "https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?cs=srgb&dl=pexels-tetyana-kovyrina-937980.jpg&fm=jpg"),
            new Movie("Ocean Power", "https://wallpoper.com/images/00/27/08/55/water-nature_00270855.jpg"),
          ]
        },
        {
          title: "Trending Now",
          list: [
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true"),
          ]
        },
        {
          title: "TV Shows",
          list: [
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true"),
            new Movie("","https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true"),
          ],
        },
        */
      ],
      movies: [
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
      ],
      originals: [
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
        {title:"",imageSmall:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true", imageBig: "",imagePosition: "",imageSize: "",tags: "",description: "",movieLink: ""},
      ],
    },
    methods: {
      greet: function (time) {
        return "Good " + time + " " + this.name;
      },
      toogleSearch: function (event) {
        document.getElementById("searchbar").classList.toggle('toggle');
        if(document.getElementById("searchbar").classList.value === "input toggle"){
          document.getElementById("searchbar").focus();
          // return searchbarOpen = true;
        }
      },
      onSearchEnter: function (event) {
        this.showSearch = true;
        this.showContent = false;
      },
      onSearchLeave: function (event) {
        /*
        if(document.getElementById("searchbar").value.length == 0){
          document.getElementById("searchbar").classList.remove('toggle');
        }
        */
       document.getElementById("searchbar").classList.remove('toggle');
       if(document.getElementById("searchbar").value.length == 0){
         setTimeout(() => { this.showSearch = false; this.showContent = true; }, 500);
       }
      },
      playMovie: function (url) {
        // `this` inside methods points to the Vue instance
        // window.open(`${url}`, '_blank');
        console.log(url);
      },
      modalAction: function (data) {
        // `this` inside methods points to the Vue instance
        let overlay = 'linear-gradient(270deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))';
        // return 'background-image:'+ overlay +' , url(' + url + ');';
        console.log(data);
        this.modalContent.imageSrc = data.movie.imageSmall;
        this.modalContent.title = data.movie.title;
        this.modalContent.tags = data.movie.tags;
        this.modalContent.info = data.movie.info;
        this.modalContent.description = data.movie.description;
        this.modalContent.movieLink = data.movie.movieLink;
        var imageBig = data.movie.imageBig;
        var imagePosition = data.movie.imagePosition;
        var imageSize = data.movie.imageSize;
        if(imageBig == ""){
          imageBig = 'https://img2.goodfon.com/wallpaper/nbig/c/f4/busty-model-smoke-pose-boobs.jpg';
          imagePosition = 'center';
          imageSize = 'cover';
        }
        // imageBig = 'https://image.tmdb.org/t/p/original//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg';
        // imageBig = 'https://www.celebsfirst.com/wp-content/uploads/2018/01/sophie-mudd-hits-the-beach-in-a-red-bikini-in-malibu-140118_7.jpg';
        // imageBig = 'https://www.foxhq.com/wendy-fiore-dreamy-babe/5.jpg';
        // imageBig = 'https://www.2busty.net/wp-content/uploads/2014/04/dream-girl-37.jpg';
        // imageBig = 'https://cdn.hipwallpaper.com/i/41/40/TvuqFr.jpg';
        // imageBig = 'https://wallsdesk.com/wp-content/uploads/2016/11/Wendy-Fiore-Background.jpg';
        // imageBig = 'https://img2.goodfon.com/wallpaper/nbig/c/f4/busty-model-smoke-pose-boobs.jpg';


        this.modalContent.styleObject = {
          color: 'white',
          backgroundColor: 'black',
          backgroundPosition: `${imagePosition}`,
          backgroundImage: `url('${imageBig}')`,
          /*backgroundImage:'linear-gradient(to right,  rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 40%, rgba(255,0,0,1) 60%)',*/
          backgroundImage:''+ overlay +' , url(' + imageBig + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imageSize}`,
          boxShadow: '0 1.5rem 4rem rgba(23,24,24,0.15);',
        },
        
        this.showModal = true;
      },
      videoAction: function (data) {
        console.log(data);
        this.showVideo = true;
        this.showContent = false;
      },
    },
    computed:{
        compClasses: function(){
            return {
                red: this.available,
                nearby: this.nearby
            }
        },
        filteredList() {
          let movieList = [];
          for( let i = 0; i < this.moviebar.length; i++){
            movieList.push(...this.moviebar[i].list)
          }
          // console.log({movieList});
          return movieList.filter(movie => {
            
            //return post.title.toLowerCase().includes(this.search.toLowerCase())
            return movie.title.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    }
});