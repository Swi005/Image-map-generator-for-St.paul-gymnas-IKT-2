function addNewArea(areaArr, Ximg, Yimg, Xcanvas, Ycanvas, x1, y1, x2, y2){
    //function for adding a new area to image map, 
    
    //calculate ratioes
    var ratioX = Ximg / Xcanvas;
    var ratioY = Yimg / Ycanvas;
    
    //adjust coords
    x1, x2 *= ratioX;
    y1, y2 *= ratioY;
    areaArr.push(`<area shape="rect" coords="{x1} , {y1}, {x2}, {y2}" href="#">`);
}
