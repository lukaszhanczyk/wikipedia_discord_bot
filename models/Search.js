const fetch = require('node-fetch');

const Search = (gps) =>{
    
    var url = "https://en.wikipedia.org/w/api.php?origin=*";
    var params = {
        action: "query",
        generator: "prefixsearch",
        format: "json",
        gpssearch: gps,
        prop: 'extracts',
        exintro: 1,
        explaintext: 1,
        redirects: 1

    }
    Object.keys(params).forEach(key => {
        url += "&" + key + "=" + params[key];
    });
    return{
        find: async () => {
            try{
                const respond = await fetch(url);
                const data = await respond.json();
                return data;
            }catch(err){
                return false;
            }
           
        }
    }
}
module.exports = Search;