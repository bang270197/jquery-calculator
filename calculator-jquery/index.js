const show = (nhapso) => {
    $("#input").val(function (index, value) {
        return value + nhapso;
    });
};
function thuchienpheptinh() {
    let laygitricuatext = $("#input").val();
    let kq = eval(laygitricuatext);
    $("#input").val(kq);
}
function C() {
    $("#input").val("");
}
