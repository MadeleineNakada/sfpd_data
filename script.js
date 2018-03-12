function get_data(){
    d3.tsv("/data/data.csv", function(data) {
        console.log(data[0]);
    });
}

function main(){
    get_data()
    var body = d3.select("body");
    console.log(body)
    var div = body.append("div");
    div.html("Hello, world!");
    console.log('here')
}
