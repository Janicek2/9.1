var triangle1Area = getTriangleArea(3, 8);
var triangle2Area = getTriangleArea(5, 5);
var triangle3Area = getTriangleArea(8, 15);

function getTriangleArea (a,h) {

    if (( a > 0 ) && ( h > 0 )) {
        return a*h/2;
    }
    else {
        return "Nieprawidłowe dane"
    }
    console.log (getTriangleArea);
}