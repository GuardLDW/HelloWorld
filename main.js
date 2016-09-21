//重新建立了HelloWorld项目
function drawPyramid(line) {
    for (var i = 0; i < line; i++) {
        for (var j = 0; j < line - i; j++) {
            result = result + space;
        }
        for (var j = 0; j < 2 * i + 1; j++) {
            result = result + star;
        }
        console.log(result);
        result = "";
    }
}
var star = "*"; //类型识别，编译器完成
var space = " ";
var result = "";
drawPyramid(6);
