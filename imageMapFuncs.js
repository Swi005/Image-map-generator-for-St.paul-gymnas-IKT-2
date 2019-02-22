function addNewArea(areaArr, Ximg, Yimg, Xcanvas, Ycanvas, x1, y1, x2, y2){
    
    var ratioX = Ximg / Xcanvas;
    var ratioY = Yimg / Ycanvas;

    x1 *= ratioX;
    x2 *= ratioX;
    y1 *= ratioY;
    y2 *= ratioY;
    areaArr.push(`<area shape="rect" coords="{x1} , {y1}, {x2}, {y2}" href="#">`);

}
