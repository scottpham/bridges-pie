//jquery shorthand
var $graphic = $('#graphic');
//base colors
var colors = {
    'red1': '#6C2315', 'red2': '#A23520', 'red3': '#D8472B', 'red4': '#E27560', 'red5': '#ECA395', 'red6': '#F5D1CA',
    'orange1': '#714616', 'orange2': '#AA6A21', 'orange3': '#E38D2C', 'orange4': '#EAAA61', 'orange5': '#F1C696', 'orange6': '#F8E2CA',
    'yellow1': '#77631B', 'yellow2': '#B39429', 'yellow3': '#EFC637', 'yellow4': '#F3D469', 'yellow5': '#F7E39B', 'yellow6': '#FBF1CD',
    'teal1': '#0B403F', 'teal2': '#11605E', 'teal3': '#17807E', 'teal4': '#51A09E', 'teal5': '#8BC0BF', 'teal6': '#C5DFDF',
    'blue1': '#28556F', 'blue2': '#3D7FA6', 'blue3': '#51AADE', 'blue4': '#7DBFE6', 'blue5': '#A8D5EF', 'blue6': '#D3EAF7'
};

/*
 * Render the graphic
 */
//check for canvas
$(window).load(function() {
    draw_graphic();
});

function draw_graphic(){
    if (Modernizr.canvas){
        $graphic.empty();
        var width = $graphic.parent().width();
        render();
        window.onresize = draw_graphic; //very important! the key to responsiveness
    }
}

function render() {

    //grab context from canvas
    var ctx = $graphic.get(0).getContext("2d");

    var data = [
        {
            value: 55,
            color: colors.blue2,
            label: "Structural Adequacy and Safety",
            length: 3,
            more: ["Here is a value", "Here is another Value", "And yet a third"]
        },
        {
            value: 30,
            color: colors.red2,
            label: "Serviceability and Functional Obsolescence",
            more: ["Here is a value", "Here is another Value", "And yet a third"]
        },
        {
            value: 15,
            color: colors.teal3,
            label: "Essentiality for Public Use"
        }
        ];

    //declare chart and modify options
     var myPie = new Chart(ctx).Pie(data, {
        animationEasing: "easeOutQuart",
        maintainAspectRatio: true,
        responsive: true,
        // tooltipTemplate: '<ul>'
        //           +'<% for (var i=0; i < <%=data.length%>; i++) { %>'
        //             +'<li>'
        //             +'<%=i %>'
        //             +'<%=value%>'
        //           +'</li>'
        //         +'<% } %>'
        //       +'</ul>'
        tooltipTemplate: "<%=value %> %"
    });

    //clear out old legend on reload
    $("#legend").empty();

    //add the legend and grab the data
    legend(document.getElementById("legend"), data);

}//end function render    





