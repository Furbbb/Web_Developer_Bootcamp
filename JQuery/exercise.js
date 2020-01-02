// Select all divs and give them a purple background
$("div").css("background","purple");

// Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width","200px");

// Select the div with id "third" and give it a orange border
$("div#third").css("border","3px solid orange");

// Bonus: Select the first div only and change its font color to pin
$("div").first().css("color","pink");
    //$("div:first-of-type").css("color","pink");
    //$("div:first").css("color","pink"); A shortcut in jQuery, but technically slower as first-of-type is vanilla