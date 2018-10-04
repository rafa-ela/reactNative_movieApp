

const API_KEY= "0139806a87c06ca7e1455f8012a66a29";
const BASE_URL = "http://api.themoviedb.org";

const movieAPI = {

    getTopHighestGrossingURL: function(){
       return BASE_URL+'/3/discover/movie?api_key='+API_KEY+'&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990';
    },
    getTopLowestGrossingURL: function(){
        return BASE_URL+'/3/discover/movie?api_key='+API_KEY+'&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1&primary_release_year=2001';
     },
    getActorListURL: function(id){
        return 'https://api.themoviedb.org/3/movie/'+id +'/credits?api_key='+API_KEY;
    },
    getTopWorstMovieURL: function(){
        return ' https://api.themoviedb.org/3/discover/movie?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&primary_release_year=1992';
    },
    getTopBestMovieURL: function(){
        return 'https://api.themoviedb.org/3/movie/top_rated?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US&page=1';
    },
    getTopTVShowsURL: function(){
        return 'https://api.themoviedb.org/3/tv/top_rated?api_key=0139806a87c06ca7e1455f8012a66a29&language=en-US&page=1';
    },
    getPopuMovies:function(){
        return BASE_URL +"/3/discover/movie?api_key="+ API_KEY+"&primary_release_year=2018&certification_country=US&certification.lte=PG-13&sort_by=vote_count.desc&certification_country=US&certification.lte=PG-13&include_adult=false";
    },
    getActorInfoURL:function(actorID){
       return BASE_URL+'/3/person/'+actorID+'?api_key='+API_KEY+'&language=en-US';
    },
    getActorTVShowListURL:function(actorID){
        return BASE_URL+'/3/person/'+actorID+'/tv_credits?api_key='+API_KEY+'&language=en-US';
    },
    getActorMovieListURL:function(actorID){
        return BASE_URL+'/3/person/'+actorID+'/movie_credits?api_key='+API_KEY+'&language=en-US';
    },
    search:function(queryString){
        return BASE_URL+"/3/search/multi?api_key="+API_KEY+"&language=en-US&query="+queryString+"&page=1&include_adult=false";
    },
    getDetails:function(mediaType,id){
        return BASE_URL+'/3/'+mediaType+'/' + id + '/credits?api_key='+API_KEY;
     },
}
export default movieAPI;