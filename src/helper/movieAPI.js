

const API_KEY= "api_key=0139806a87c06ca7e1455f8012a66a29";
const BASE_URL = "http://api.themoviedb.org";

//get movie 

export async function getMovie() {
    
    var urlReq = BASE_URL +"/3/discover/movie?" + API_KEY+"&primary_release_year=2018&certification_country=US&certification.lte=PG-13&sort_by=vote_count.desc&certification_country=US&certification.lte=PG-13&include_adult=false";
    let result = await fetch(urlReq).then(response => response.json());
    return result;
}

