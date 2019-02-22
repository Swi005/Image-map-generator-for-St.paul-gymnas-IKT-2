function addNewArea(areaArr, Ximg, Yimg, Xcanvas, Ycanvas, x1, y1, x2, y2){
    //function for adding a new area to image map, 
    
    //calculate ratioes
    var ratioX = Ximg / Xcanvas;
    var ratioY = Yimg / Ycanvas;
    
    //adjust coords
    x1, x2 *= ratioX;
    y1, y2 *= ratioY;
    areaArr.push("&ltarea shape=\"rect\" coords=" + Math.round(x1) + ", " + Math.round(y1) + ", " + Math.round(x2) + ", " + Math.round(y2) + " href=\"#\"&gt <br>");
}
