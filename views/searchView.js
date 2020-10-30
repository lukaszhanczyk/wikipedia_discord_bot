module.exports.getArticles = data => {
    var ob={};
    Object.keys(data).map(key => {
        ob[data[key].title] = data[key].extract.split('\n')[0];
    });
    return ob;
}
module.exports.getTitles = data => {
    var ob = "Did you think about: \n";
    Object.keys(data).map(key => {
        ob += `${key}, \n`;
    });
    return ob;
}
module.exports.getMain = data => {
    var ob = [];
    Object.keys(data).map(key => {
        ob += `${data[key]}, `;
    });
    return ob;
}